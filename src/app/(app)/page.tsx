import type { Metadata } from 'next'

import {
  LandingCTA,
  LandingFAQ,
  LandingFeatured,
  LandingHero,
  LandingPillars,
  LandingStory,
} from '@/components/landing'
import { homeStaticData } from '@/endpoints/seed/home-static'
import type { Page, Product } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React from 'react'

export default async function HomePage() {
  const [page, products, landingConfig] = await Promise.all([
    queryHomePage(),
    queryFeaturedProducts(),
    queryLandingConfig(),
  ])

  const heroCopy = extractHeroCopy(page)

  return (
    <div className="pb-8">
      <LandingHero
        eyebrow={heroCopy.eyebrow}
        title={heroCopy.title}
        subtitle={heroCopy.subtitle}
        primaryCta={heroCopy.primaryCta}
        secondaryCta={heroCopy.secondaryCta}
        categories={landingConfig?.categories as any}
      />
      <LandingPillars occasions={landingConfig?.occasions as any} />
      <LandingFeatured products={products} />
      <LandingStory />
      <LandingFAQ />
      <LandingCTA />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryHomePage()
  const meta = await generateMeta({ doc: page })

  return {
    ...meta,
    title: meta.title || 'The9Gifts | Bespoke Printed Products & Hampers',
    description:
      meta.description ||
      'The9Gifts offers premium customizable printed products and bespoke gift hampers for special occasions, corporate gifting, and festive celebrations.',
  }
}

async function queryHomePage(): Promise<Page> {
  const { isEnabled: draft } = await draftMode()

  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        and: [
          { slug: { equals: 'home' } },
          ...(draft ? [] : [{ _status: { equals: 'published' as const } }]),
        ],
      },
    })

    return result.docs?.[0] || (homeStaticData() as Page)
  } catch {
    return homeStaticData() as Page
  }
}

async function queryFeaturedProducts(): Promise<Product[]> {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'products',
      depth: 1,
      limit: 6,
      overrideAccess: false,
      pagination: false,
      sort: '-createdAt',
    })

    return result.docs || []
  } catch {
    return []
  }
}

async function queryLandingConfig() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({
      slug: 'landing-config',
    })
  } catch {
    return null
  }
}

function extractTextFromLexical(node: unknown): string {
  if (!node || typeof node !== 'object') return ''

  const n = node as {
    type?: string
    text?: string
    children?: unknown[]
  }

  if (n.type === 'text' && typeof n.text === 'string') {
    return n.text
  }

  if (Array.isArray(n.children)) {
    return n.children.map(extractTextFromLexical).join(' ').replace(/\s+/g, ' ').trim()
  }

  return ''
}

function extractHeroCopy(page: Page | null) {
  const fallback = {
    eyebrow: 'Premium Customizable Gifts',
    title: 'Bespoke Brilliance by The9Gifts',
    subtitle:
      'Elevate every occasion. Discover our curated collection of customizable printed products—from bespoke apparel and bottles to premium gift hampers for business and festive celebrations.',
    primaryCta: { label: 'Explore the Collection', href: '/shop' },
    secondaryCta: { label: 'Our Story', href: '#atelier' },
  }

  if (!page?.hero) return fallback

  const richText = page.hero.richText as
    | { root?: { children?: Array<{ type?: string; tag?: string; children?: unknown[] }> } }
    | null
    | undefined

  const children = richText?.root?.children || []
  let title = fallback.title
  let subtitle = fallback.subtitle

  for (const child of children) {
    if (child.type === 'heading' && child.tag === 'h1') {
      const text = extractTextFromLexical(child)
      if (text) title = text
    }
    if (child.type === 'paragraph') {
      const text = extractTextFromLexical(child)
      if (text) subtitle = text
    }
  }

  const links = page.hero.links || []
  const primary = links[0]?.link
  const secondary = links[1]?.link

  return {
    eyebrow: 'Premium Customizable Gifts',
    title,
    subtitle,
    primaryCta: primary?.url
      ? { label: primary.label || fallback.primaryCta.label, href: primary.url }
      : fallback.primaryCta,
    secondaryCta: secondary?.url
      ? { label: secondary.label || fallback.secondaryCta.label, href: secondary.url }
      : fallback.secondaryCta,
  }
}
