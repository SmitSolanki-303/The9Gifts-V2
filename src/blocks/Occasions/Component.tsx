import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

type Props = {
  title?: string | null
  subtitle?: string | null
}

export const OccasionsBlock: React.FC<Props> = async ({
  title = 'Shop by Occasion',
  subtitle = 'Curated gifts for every celebration',
}) => {
  let occasions: any[] = []
  
  try {
    const payload = await getPayload({ config: configPromise })
    const landingConfig = await payload.findGlobal({ slug: 'landing-config' })
    if (landingConfig?.occasions) {
      occasions = landingConfig.occasions
    }
  } catch (err) {
    // ignore
  }

  // Fallback if empty
  if (occasions.length === 0) {
    occasions = [
      {
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
        title: 'Birthday Gifts',
        description: 'Make their day special with customized apparel, mugs, and curated birthday hampers.',
        href: '/shop?category=birthday'
      },
      {
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
        title: 'Anniversary & Romance',
        description: 'Express your love with personalized keepsakes, frames, and premium couple gifts.',
        href: '/shop?category=anniversary'
      },
      {
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop',
        title: 'Corporate Gifting',
        description: 'Elevate your brand with bespoke corporate hampers and branded merchandise.',
        href: '/shop?category=corporate'
      },
      {
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop',
        title: 'Festive Specials',
        description: 'Celebrate the season with exclusive hampers and traditional gifting collections.',
        href: '/shop?category=festive'
      }
    ]
  }

  return (
    <section className="container py-16 md:py-24 bg-accent/30 rounded-3xl mt-12 mb-12" id="occasions">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        {subtitle && <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">{subtitle}</p>}
        {title && <h2 className="font-serif text-3xl text-foreground md:text-5xl">{title}</h2>}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {occasions.map((occasion, i) => {
          const img = typeof occasion.image === 'object' && occasion.image?.url ? occasion.image.url : occasion.image
          return (
            <Link
              key={occasion.title || i}
              href={occasion.href || '#'}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                {img && (
                  <img
                    src={img}
                    alt={occasion.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {occasion.description}
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Shop Now <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
