import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export function LandingStory() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-border bg-card">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.18),transparent_50%),linear-gradient(160deg,#1a1816_0%,#0a0908_100%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="font-serif text-7xl text-primary glow-gold-sm md:text-8xl">9</span>
              <p className="mt-6 text-[11px] uppercase tracking-atelier text-foreground/80">
                Nine gifts. Infinite meaning.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">Our Philosophy</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
            From functional commerce to high-luxury editorial fashion
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The9Gifts is designed as a private showroom — dramatic, high-contrast, and focused on
              the tactile quality of each piece. We reject the noise of endless shelves for a
              deliberate edit of nine signature gifts.
            </p>
            <p>
              Liquid gold accents mark the standard of bespoke. Deep onyx stages the work. Bone
              white carries the story. Every interface element is treated as jewelry: precise,
              refined, intentional.
            </p>
          </div>
          <Button asChild className="mt-10" size="lg" variant="outline">
            <Link href="/shop">Enter the showroom</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
