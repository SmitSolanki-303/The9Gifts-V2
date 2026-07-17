import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const categories = [
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
}: Props) {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-background pt-8 pb-12">
      {/* FNP Style Main Banner */}
      <div className="container relative mx-auto overflow-hidden rounded-xl bg-gradient-to-r from-accent to-background px-6 py-16 md:px-16 md:py-24 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between">
        {/* Banner Content */}
        <div className="relative z-10 flex w-full flex-col items-start justify-center text-left md:w-1/2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary block mb-2">{title.split(' ')[0]}</span>{' '}
            <span>{title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 bg-background/50 backdrop-blur-sm"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        {/* Right side banner image */}
        <div className="relative z-10 mt-12 w-full md:mt-0 md:w-5/12 flex justify-end">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
              alt="Premium Gifts"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay gradient to blend nicely */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
        </div>

        {/* Decorative elements to mimic gift items in background */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-5%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-gold/20 blur-2xl"
        />
      </div>

      {/* FNP Style Circular Categories */}
      <div className="container mt-12 overflow-x-auto pb-4">
        <div className="flex justify-start md:justify-center gap-6 min-w-max px-4">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group flex flex-col items-center gap-3">
              <div className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full border-[3px] border-border bg-muted overflow-hidden shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-md group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
