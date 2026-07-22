import { Button } from '@/components/ui/button'
import type { Media } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

type Props = {
  eyebrow?: string | null
  title: string
  content: string
  image: Media | string
  alignment?: 'imageLeft' | 'imageRight' | null
  link?: { label?: string | null; url?: string | null } | null
}

export const FeatureBlock: React.FC<Props> = ({
  eyebrow,
  title,
  content,
  image,
  alignment = 'imageLeft',
  link,
}) => {
  const imageUrl = typeof image === 'object' && image?.url ? image.url : image
  const isImageRight = alignment === 'imageRight'

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image Column */}
          <div className={`lg:col-span-5 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl bg-muted">
              {imageUrl && (
                <img
                  src={imageUrl as string}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Content Column */}
          <div className={`lg:col-span-7 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
            {link?.url && link?.label && (
              <Button asChild className="mt-10" size="lg">
                <Link href={link.url}>{link.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
