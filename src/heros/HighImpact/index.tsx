'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[6rem] flex min-h-[88vh] items-center justify-center text-foreground"
      data-theme="dark"
    >
      <div className="container relative z-10 mb-8 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          {richText && (
            <RichText
              className="mb-8 prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} size="lg" />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute inset-0 min-h-[88vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover opacity-40" priority resource={media} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_55%)]" />
      </div>
    </div>
  )
}
