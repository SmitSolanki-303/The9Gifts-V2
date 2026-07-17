import { Button } from '@/components/ui/button'
import type { Media } from '@/payload-types'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

type Props = {
  eyebrow?: string | null
  title: string
  subtitle?: string | null
  primaryCta?: { label?: string | null; url?: string | null } | null
  secondaryCta?: { label?: string | null; url?: string | null } | null
  image?: Media | string | null
}

export const EcomHeroBlock: React.FC<Props> = async ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
}) => {
  // Fetch global landing config for categories
  let categories: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const landingConfig = await payload.findGlobal({ slug: 'landing-config' })
    if (landingConfig?.categories) {
      categories = landingConfig.categories
    }
  } catch (err) {
    // ignore
  }

  const imageUrl = typeof image === 'object' && image?.url ? image.url : image

  return (
    <section className="flex flex-col items-center overflow-hidden bg-background pt-8 pb-12">
      <div className="container relative mx-auto overflow-hidden rounded-xl bg-gradient-to-r from-accent to-background px-6 py-16 md:px-16 md:py-24 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between">
        <div className="relative z-10 flex w-full flex-col items-start justify-center text-left md:w-1/2">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}

          {title && (
            <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary block mb-2">{title.split(' ')[0]}</span>{' '}
              <span>{title.split(' ').slice(1).join(' ')}</span>
            </h1>
          )}

          {subtitle && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}

          {(primaryCta?.label || secondaryCta?.label) && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              {primaryCta?.label && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  <Link href={primaryCta.url || '#'}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta?.label && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 bg-background/50 backdrop-blur-sm"
                >
                  <Link href={secondaryCta.url || '#'}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>

        {imageUrl && (
          <div className="relative z-10 mt-12 w-full md:mt-0 md:w-5/12 flex justify-end">
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-xl bg-muted">
              <img
                src={imageUrl as string}
                alt={title || 'Hero image'}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute right-[-5%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-gold/20 blur-2xl"
        />
      </div>

      {categories.length > 0 && (
        <div className="container mt-12 overflow-x-auto pb-4">
          <div className="flex justify-start md:justify-center gap-6 min-w-max px-4">
            {categories.map((cat: any, idx: number) => {
              const catImg =
                typeof cat.image === 'object' && cat.image?.url ? cat.image.url : cat.image
              return (
                <Link
                  key={cat.name || idx}
                  href={cat.href || '#'}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full border-[3px] border-border bg-muted overflow-hidden shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-md group-hover:scale-105">
                    {catImg && (
                      <img
                        src={catImg}
                        alt={cat.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {cat.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
