import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Gift, Sparkles, Crown } from 'lucide-react'
import React from 'react'

const pillars = [
  {
    icon: Crown,
    title: 'Curated Exclusivity',
    description:
      'Each piece is selected for its material integrity and narrative weight — never mass, always meaningful.',
  },
  {
    icon: Sparkles,
    title: 'Artisan Finish',
    description:
      'From silk threads to gilded detail, every surface is finished with the patience of a private atelier.',
  },
  {
    icon: Gift,
    title: 'Ceremony Ready',
    description:
      'Presentation is part of the gift. Packaging, proportion, and presence are designed as one experience.',
  },
]

export function LandingPillars() {
  return (
    <section className="container py-20 md:py-28" id="atelier">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">The Standard</p>
        <h2 className="font-serif text-3xl text-foreground md:text-5xl">Crafted for presence</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The Gold Thread runs through everything we make — a visual metaphor for artisan
          craftsmanship and the quiet confidence of true quality.
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
