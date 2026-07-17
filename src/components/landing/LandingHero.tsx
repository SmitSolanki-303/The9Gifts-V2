import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function LandingHero({
  eyebrow = 'The Gilded Atelier',
  title = 'Bespoke Brilliance',
  subtitle = 'Nine curated gifts. One unforgettable impression. Discover an exclusive collection crafted for those who value presence, ceremony, and the quiet luxury of the well-chosen object.',
  primaryCta = { label: 'Explore the Collection', href: '/shop' },
  secondaryCta = { label: 'Our Story', href: '#atelier' },
}: Props) {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      {/* Atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_55%),radial-gradient(ellipse_at_top,rgba(255,250,255,0.04)_0%,transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-px w-[min(80%,40rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="container relative z-10 flex flex-col items-center px-4 py-24 text-center md:py-32">
        <p className="mb-6 text-[11px] uppercase tracking-atelier text-primary">{eyebrow}</p>

        <h1 className="font-serif max-w-4xl text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-primary">{title.split(' ')[0]}</span>{' '}
          <span>{title.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
