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
      className="relative flex flex-col bg-background text-foreground pb-24"
      data-theme="dark"
    >
      <div className="container relative z-10 flex flex-col items-center justify-center pt-32 pb-16">
        <div className="max-w-4xl text-center">
          {richText && (
            <RichText
              className="mb-12 prose-headings:font-display prose-headings:font-light prose-headings:text-5xl md:prose-headings:text-7xl lg:prose-headings:text-[96px] prose-headings:leading-none prose-headings:tracking-[2.4px] prose-headings:text-foreground prose-p:font-body prose-p:text-lg prose-p:text-muted-foreground"
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
      
      {media && typeof media === 'object' && (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden select-none">
          <Media fill imgClassName="object-cover" priority resource={media} />
        </div>
      )}
    </div>
  )
}
