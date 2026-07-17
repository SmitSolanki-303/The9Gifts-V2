import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export function LandingStory() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-border bg-card">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(199,154,66,0.15),transparent_50%),linear-gradient(160deg,#ffffff_0%,#fcfbf8_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="font-serif text-7xl text-primary glow-gold-sm md:text-8xl">9</span>
              <p className="mt-6 text-[11px] uppercase tracking-atelier text-foreground/80">
                Custom Prints. Perfect Hampers.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">Our Philosophy</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
            Elevating everyday objects into meaningful experiences
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The9Gifts is built on the belief that personalization is the ultimate luxury. We reject mass production in favor of a deliberate edit of premium customizable products — from apparel and drinkware to carefully curated hampers for corporate and festive celebrations.
            </p>
            <p>
              Golden heritage accents mark the standard of bespoke. A clean, airy canvas stages the work. Charcoal black carries the story. Every printed detail is treated with precision: refined, intentional, and unmistakably yours.
            </p>
          </div>
          <Button asChild className="mt-10" size="lg" variant="outline">
            <Link href="/shop">Start customizing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
