import { RenderBlocks } from '@/blocks/RenderBlocks'
import { homeStaticData } from '@/endpoints/seed/home-static'
import { RenderHero } from '@/heros/RenderHero'
import type { Page } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

export default async function HomePage() {
  const page = await queryHomePage()

  if (!page) {
    return null
  }

  return (
    <>
      <RenderHero {...page.hero} />
      <RenderBlocks blocks={page.layout} />
    </>
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
