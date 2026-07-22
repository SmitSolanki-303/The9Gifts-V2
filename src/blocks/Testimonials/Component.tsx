import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

import type { TestimonialsBlock as TestimonialsBlockProps } from '@/payload-types'

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({
  eyebrow,
  title,
  autoplay = false,
  testimonials,
}) => {
  if (!testimonials || testimonials.length === 0) return null

  // Format the testimonials array to map payload media items to the `src` string expected by the Aceternity component.
  const formattedTestimonials = testimonials.map((t) => {
    let src = ''
    if (typeof t.image === 'object' && t.image?.url) {
      src = t.image.url
    } else if (typeof t.image === 'string') {
      src = t.image
    }
    return {
      quote: t.quote,
      name: t.name,
      designation: t.designation,
      src: src,
    }
  })

  return (
    <section className="w-full">
      <div className="container mx-auto">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-2xl text-center md:mx-auto">
            {eyebrow && (
              <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-serif text-3xl text-foreground md:text-5xl">{title}</h2>
            )}
          </div>
        )}
        <AnimatedTestimonials autoplay={autoplay ?? false} testimonials={formattedTestimonials} />
      </div>
    </section>
  )
}
