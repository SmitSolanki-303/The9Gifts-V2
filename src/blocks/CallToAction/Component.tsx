import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Card, CardContent } from '@/components/ui/card'

export const CallToActionBlock: React.FC<
  CTABlockProps & {
    id?: string | number
    className?: string
  }
> = ({ links, richText }) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-[20px] bg-background text-foreground" data-theme="dark">
          <div className="flex flex-col gap-10 p-12 md:flex-row md:items-center md:justify-between md:p-20">
            <div className="max-w-2xl">
              {richText && (
                <RichText 
                  className="mb-0 prose-headings:font-display prose-headings:font-light prose-headings:text-5xl md:prose-headings:text-6xl prose-headings:leading-tight prose-headings:tracking-wide prose-headings:text-foreground prose-p:font-body prose-p:text-lg prose-p:text-muted-foreground" 
                  data={richText} 
                  enableGutter={false} 
                />
              )}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row shrink-0 mt-6 md:mt-0">
              {(links || []).map(({ link }, i) => {
                // If it's a primary CTA, we want it to stand out against the black background.
                // The default CMSLink uses button 'default' variant.
                return (
                  <CMSLink 
                    key={i} 
                    size="lg" 
                    className="rounded-pill bg-[#c79a42] text-black hover:bg-[#b0873a] border-none shadow-none text-base px-8 py-6" 
                    {...link} 
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
