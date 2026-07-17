import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { LogoIcon } from '@/components/icons/logo'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded-[2px] bg-muted'

  const copyrightName = COMPANY_NAME || SITE_NAME || 'The9Gifts'

  return (
    <footer className="mt-auto border-t border-border bg-background text-sm text-muted-foreground">
      <div className="container">
        <div className="flex w-full flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-xs">
            <Link className="group flex items-center gap-3 text-foreground" href="/">
              <LogoIcon className="h-9 w-9 transition-transform group-hover:scale-105" />
              <div>
                <p className="font-serif text-lg text-primary">The9Gifts</p>
                <p className="text-[10px] uppercase tracking-atelier text-muted-foreground">
                  Bespoke Brilliance
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A private atelier of curated gifts — crafted for presence, ceremony, and lasting
              memory.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <ThemeSelector />
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 py-6">
        <div className="container mx-auto flex w-full flex-col items-center gap-2 text-xs uppercase tracking-atelier md:flex-row md:gap-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-px border-l border-border md:inline-block" />
          <p className="text-primary/80">The Gilded Atelier</p>
          <p className="md:ml-auto">
            <a className="text-foreground hover:text-primary" href="https://payloadcms.com">
              Powered by Payload
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
