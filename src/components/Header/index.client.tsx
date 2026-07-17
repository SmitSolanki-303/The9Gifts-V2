'use client'
import { CMSLink } from '@/components/Link'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { MobileMenu } from './MobileMenu'
import type { Header } from 'src/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-30 w-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <nav className="relative container flex items-center justify-between py-4 md:py-5">
        {/* Mobile menu */}
        <div className="flex flex-1 items-center md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        {/* Desktop left nav */}
        <div className="hidden flex-1 items-center gap-8 md:flex">
          {menu.length
            ? menu.slice(0, Math.ceil(menu.length / 2)).map((item) => (
                <CMSLink
                  key={item.id}
                  {...item.link}
                  size="clear"
                  className={cn('navLink relative pb-1 text-foreground/80', {
                    active:
                      item.link.url && item.link.url !== '/'
                        ? pathname.includes(item.link.url)
                        : pathname === '/',
                  })}
                  appearance="nav"
                />
              ))
            : null}
        </div>

        {/* Centered monogram */}
        <Link
          className="group flex flex-col items-center justify-center px-4"
          href="/"
          aria-label="The9Gifts home"
        >
          <LogoIcon className="h-10 w-10 transition-transform duration-300 group-hover:scale-105 glow-gold-sm rounded-full" />
          <span className="mt-1 hidden text-[10px] uppercase tracking-atelier text-primary/90 sm:block">
            The9Gifts
          </span>
        </Link>

        {/* Desktop right nav + cart */}
        <div className="flex flex-1 items-center justify-end gap-6 md:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {menu.length
              ? menu.slice(Math.ceil(menu.length / 2)).map((item) => (
                  <CMSLink
                    key={item.id}
                    {...item.link}
                    size="clear"
                    className={cn('navLink relative pb-1 text-foreground/80', {
                      active:
                        item.link.url && item.link.url !== '/'
                          ? pathname.includes(item.link.url)
                          : false,
                    })}
                    appearance="nav"
                  />
                ))
              : null}
          </div>
          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    </div>
  )
}
