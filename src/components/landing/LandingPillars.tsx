import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Gift, Heart, Calendar, Cake, Briefcase, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export type Occasion = { title: string; description: string; image: string | any; href: string }

const defaultOccasions: Occasion[] = [
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
    title: 'Birthday Gifts',
    description: 'Make their day special with customized apparel, mugs, and curated birthday hampers.',
    href: '/shop?category=birthday'
  },
  {
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
    title: 'Anniversary & Romance',
    description: 'Express your love with personalized keepsakes, frames, and premium couple gifts.',
    href: '/shop?category=anniversary'
  },
  {
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop',
    title: 'Corporate Gifting',
    description: 'Elevate your brand with bespoke corporate hampers and branded merchandise.',
    href: '/shop?category=corporate'
  },
  {
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop',
    title: 'Festive Specials',
    description: 'Celebrate traditions with our exclusive festive hampers and printed decor.',
    href: '/shop?category=festive'
  },
  {
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
    title: 'Just Because',
    description: 'Surprise someone special with a thoughtful, personalized gift any day of the year.',
    href: '/shop?category=casual'
  },
  {
    image: 'https://images.unsplash.com/photo-1608447716174-8b6f3b067160?q=80&w=600&auto=format&fit=crop',
    title: 'Premium Collection',
    description: 'The Gilded Standard. Exclusive, artisan-grade products for those who appreciate luxury.',
    href: '/shop?category=premium'
  },
]

export function LandingPillars({ occasions = defaultOccasions }: { occasions?: Occasion[] }) {
  return (
    <section className="container py-16 md:py-24 bg-accent/30 rounded-3xl mt-12 mb-12" id="occasions">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Gifts by Occasion</p>
        <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">Find the Perfect Gift</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          From birthdays to corporate milestones, discover customized printing and bespoke hampers crafted for every memorable moment.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {occasions.map((occasion) => {
          return (
            <Link key={occasion.title} href={occasion.href} className="block group">
              <Card
                className="h-full border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 overflow-hidden p-0"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={typeof occasion.image === 'object' && occasion.image?.url ? occasion.image.url : occasion.image}
                    alt={occasion.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pt-5 pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{occasion.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {occasion.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
