import type { Media, Product } from '@/payload-types'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Media as MediaComponent } from '@/components/Media'
import { Price } from '@/components/Price'
import Link from 'next/link'
import React from 'react'

type Props = {
  products: Product[]
}

function productPrice(product: Product): number | null {
  let price = product.priceInUSD

  if (product.enableVariants && product.variants?.docs?.length) {
    const variant = product.variants.docs[0]
    if (variant && typeof variant === 'object' && variant.priceInUSD) {
      price = variant.priceInUSD
    }
  }

  return typeof price === 'number' ? price : null
}

export function LandingFeatured({ products }: Props) {
  if (!products?.length) {
    return (
      <section className="bg-background py-16 md:py-24" id="collection">
        <div className="container text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Trending Now</p>
          <h2 className="font-serif text-3xl text-foreground md:text-5xl">Bestselling Gifts</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Seed your Payload admin to populate the collection, or visit the shop to browse once
            products are published.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/shop">Explore the shop</Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-16 md:py-24" id="collection">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Trending Now
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">Bestselling Gifts</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our most loved custom merchandise, personalized apparel, and premium hampers.
            </p>
          </div>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/shop">View all gifts</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const image = product.meta?.image as Media | undefined | null
            const price = productPrice(product)
            const isBestseller = index < 2

            // Fallback images for different products to make the UI look realistic
            const fallbackImages = [
              'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1577998474537-88cb04a58b68?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop'
            ]
            const fallbackImg = fallbackImages[index % fallbackImages.length]

            return (
              <Card key={product.id} className="group overflow-hidden p-0 border border-border shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/products/${product.slug}`} className="block relative">
                  {isBestseller && (
                    <div className="absolute top-3 left-3 z-10 bg-error text-white text-xs font-bold uppercase px-2 py-1 rounded">
                      Bestseller
                    </div>
                  )}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    {image && typeof image === 'object' ? (
                      <MediaComponent
                        fill
                        className="absolute inset-0"
                        imgClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                        resource={image}
                      />
                    ) : (
                      <img
                        src={fallbackImg}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <CardHeader className="pt-4 pb-2 px-4">
                    <CardTitle className="text-base font-semibold transition-colors group-hover:text-primary line-clamp-1">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start px-4 pb-4">
                    {price != null ? (
                      <Price
                        amount={price}
                        className="text-lg font-bold text-foreground"
                      />
                    ) : (
                      <span className="text-sm font-bold text-foreground">
                        Price on Request
                      </span>
                    )}
                    <span className="mt-3 w-full rounded bg-primary/10 px-3 py-2 text-center text-sm font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      View details
                    </span>
                  </CardFooter>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
