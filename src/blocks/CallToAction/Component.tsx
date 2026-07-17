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
    <div className="container">
      <Card className="border-primary/30 bg-gradient-to-br from-card via-background to-card glow-gold-sm">
        <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-3xl">
            {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} />
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
