import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type Props = {
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function LandingCTA({
  title = 'Create your perfect gift',
  description = 'Start customizing your premium apparel and drinkware today, or contact us for bespoke corporate hampers designed to impress.',
  primaryCta = { label: 'Shop the Collection', href: '/shop' },
  secondaryCta = { label: 'Create Account', href: '/create-account' },
}: Props) {
  return (
    <section className="container pb-24 md:pb-32">
      <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-card via-background to-card glow-gold-sm">
        <CardContent className="relative flex flex-col items-center px-6 py-16 text-center md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,154,66,0.15),transparent_60%)]"
          />
          <p className="relative mb-3 text-[11px] uppercase tracking-atelier text-primary">
            Invitation
          </p>
          <h2 className="relative font-serif max-w-2xl text-3xl text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="relative mt-5 max-w-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
