'use client'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'

import type { Header } from 'src/payload-types'
import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import { CMSLink } from '@/components/Link'

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '@/components/ui/resizable-navbar'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar className="!top-4">
      <NavBody>
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link
            className="group relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
            href="/"
            aria-label="The9Gifts home"
          >
            <LogoIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 glow-gold-sm rounded-full" />
            <span className="hidden font-medium uppercase tracking-atelier text-primary/90 lg:block">
              The9Gifts
            </span>
          </Link>
        </div>
        
        {/* Center: Desktop Links using CMSLink */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar px-2">
          {menu.map((item, idx) => (
            <CMSLink
              key={idx}
              {...item.link}
              size="clear"
              className={cn('navLink relative pb-1 whitespace-nowrap text-[15px] font-medium text-foreground/70 hover:text-primary transition-colors', {
                active:
                  item.link.url && item.link.url !== '/'
                    ? pathname.includes(item.link.url)
                    : pathname === '/',
              })}
              appearance="nav"
            />
          ))}
        </div>
        
        {/* Right: Cart */}
        <div className="flex justify-end items-center gap-4 relative z-20">
          <Suspense fallback={<OpenCartButton />}>
            <Cart />
          </Suspense>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link
            className="group relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
            href="/"
            aria-label="The9Gifts home"
          >
            <LogoIcon className="h-8 w-8 glow-gold-sm rounded-full" />
            <span className="font-medium uppercase tracking-atelier text-primary/90">
              The9Gifts
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {/* Mobile Links using CMSLink */}
          <div className="flex flex-col gap-4">
            {menu.map((item, idx) => (
              <div key={idx} onClick={() => setIsOpen(false)}>
                <CMSLink
                  {...item.link}
                  size="clear"
                  className={cn('text-lg font-medium text-foreground hover:text-primary transition-colors', {
                    active:
                      item.link.url && item.link.url !== '/'
                        ? pathname.includes(item.link.url)
                        : pathname === '/',
                  })}
                  appearance="nav"
                />
              </div>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
