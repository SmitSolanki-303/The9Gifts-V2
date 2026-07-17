import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Gift, Printer, Crown } from 'lucide-react'
import React from 'react'

const pillars = [
  {
    icon: Printer,
    title: 'Bespoke Printed Products',
    description:
      'From custom t-shirts and apparel to personalized bottles and books, bring your unique vision to life with artisan-grade printing.',
  },
  {
    icon: Gift,
    title: 'Curated Gift Hampers',
    description:
      'Elevate corporate gifting and festive seasons with our meticulously crafted hampers, designed to leave an unforgettable impression.',
  },
  {
    icon: Crown,
    title: 'The Gilded Standard',
    description:
      'Every product we create is treated with the patience of a private atelier, ensuring premium quality and true elegance in every detail.',
  },
]

export function LandingPillars() {
  return (
    <section className="container py-20 md:py-28" id="atelier">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">The Standard</p>
        <h2 className="font-serif text-3xl text-foreground md:text-5xl">Crafted for the occasion</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Whether you are designing custom apparel for your brand or selecting the perfect festive hamper, the Golden Thread runs through everything we make.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <Card
              key={pillar.title}
              className="group border-border/80 bg-card/80 transition-all duration-300 hover:border-primary/40 hover:glow-gold-sm"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-[2px] border border-primary/30 text-primary transition-shadow group-hover:glow-gold-sm">
                  <Icon className="h-5 w-5" strokeWidth={1.25} />
                </div>
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
