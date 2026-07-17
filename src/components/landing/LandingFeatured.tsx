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
      <section className="border-y border-border bg-card/40 py-20 md:py-28" id="collection">
        <div className="container text-center">
          <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">The Collection</p>
          <h2 className="font-serif text-3xl text-foreground md:text-5xl">Featured gifts</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Seed your Payload admin to populate the collection, or visit the shop to browse once
            products are published.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/shop">Visit the shop</Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="border-y border-border bg-card/30 py-20 md:py-28" id="collection">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] uppercase tracking-atelier text-primary">
              The Collection
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-5xl">Featured gifts</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Editorial selections treated as art pieces — not commodities. Each object is staged
              for texture, shadow, and presence.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/shop">View all</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const image = product.meta?.image as Media | undefined | null
            const price = productPrice(product)

            return (
              <Card key={product.id} className="group overflow-hidden p-0">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    {image && typeof image === 'object' ? (
                      <MediaComponent
                        fill
                        className="absolute inset-0"
                        imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                        resource={image}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-background">
                        <span className="font-serif text-4xl text-primary/40">9</span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <CardHeader className="pt-5">
                    <CardTitle className="text-lg transition-colors group-hover:text-primary">
                      {product.title}
                    </CardTitle>
                    {product.meta?.description ? (
                      <CardDescription className="line-clamp-2">
                        {product.meta.description}
                      </CardDescription>
                    ) : null}
                  </CardHeader>
                  <CardFooter className="justify-between pb-6">
                    {price != null ? (
                      <Price
                        amount={price}
                        className="text-sm uppercase tracking-atelier text-primary"
                      />
                    ) : (
                      <span className="text-sm uppercase tracking-atelier text-primary">
                        Inquire
                      </span>
                    )}
                    <span className="text-[11px] uppercase tracking-atelier text-muted-foreground group-hover:text-foreground">
                      View piece →
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
