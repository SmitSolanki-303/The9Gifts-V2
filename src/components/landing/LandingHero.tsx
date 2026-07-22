import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Category = { name: string; image: string | any; href: string }

type Props = {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  categories?: Category[]
}

const defaultCategories: Category[] = [
  {
    name: 'Birthdays',
    image:
      'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=birthday',
  },
  {
    name: 'Anniversary',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28e5f8f90c4?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=anniversary',
  },
  {
    name: 'Corporate',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=corporate',
  },
  {
    name: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=apparel',
  },
  {
    name: 'Hampers',
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=hampers',
  },
  {
    name: 'Combos',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop',
    href: '/shop?category=combos',
  },
]

export function LandingHero({
  eyebrow = 'Premium Gifting',
  title = 'Celebrate Every Emotion',
  subtitle = 'Discover customized apparel, curated gift hampers, and bespoke printed products to make every occasion memorable.',
  primaryCta = { label: 'Shop Gifts', href: '/shop' },
  secondaryCta = { label: 'Explore Hampers', href: '#collection' },
  categories = defaultCategories,
}: Props) {
  return (
    <section className="relative flex flex-col bg-background text-foreground pb-24" data-theme="dark">
      <div className="container relative z-10 flex flex-col items-center justify-center pt-32 pb-16">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.72px] text-muted-foreground">
            {eyebrow}
          </p>

          <h1 className="mb-8 font-display font-light text-5xl md:text-7xl lg:text-[96px] leading-none tracking-[2.4px] text-foreground">
            {title}
          </h1>

          <p className="mb-12 font-body text-lg text-muted-foreground mx-auto max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-pill"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-pill hover:bg-transparent"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Full Bleed Imagery underneath the text */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden select-none px-4 md:px-12">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-inset-dark bg-card">
           <img
             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1600&auto=format&fit=crop"
             alt="Premium Gifts"
             className="absolute inset-0 h-full w-full object-cover"
           />
        </div>
      </div>
    </section>
  )
}
