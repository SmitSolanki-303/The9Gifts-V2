import React from 'react'

import type { Page } from '@/payload-types'

import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
      links?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText, links }) => {
  return (
    <div className="container mt-16 md:mt-24">
      <div className="mx-auto max-w-3xl text-center md:text-left">
        {children ||
          (richText && (
            <RichText
              className="prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground"
              data={richText}
              enableGutter={false}
            />
          ))}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink {...link} size="lg" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
