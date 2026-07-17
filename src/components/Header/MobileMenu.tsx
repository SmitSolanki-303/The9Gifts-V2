'use client'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useAuth } from '@/providers/Auth'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  menu: Header['navItems']
}

export function MobileMenu({ menu }: Props) {
  const { user } = useAuth()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger className="relative flex h-11 w-11 items-center justify-center rounded-[2px] border border-border text-primary transition-colors hover:glow-gold-sm">
        <MenuIcon className="h-4" />
      </SheetTrigger>

      <SheetContent side="left" className="border-border bg-background px-4">
        <SheetHeader className="px-0 pt-4 pb-0">
          <SheetTitle className="font-serif text-primary">The9Gifts</SheetTitle>
          <SheetDescription className="uppercase tracking-atelier text-xs">
            The Gilded Atelier
          </SheetDescription>
        </SheetHeader>

        <div className="py-6">
          {menu?.length ? (
            <ul className="flex w-full flex-col gap-1">
              {menu.map((item) => (
                <li className="border-b border-border/60 py-3" key={item.id}>
                  <CMSLink
                    {...item.link}
                    appearance="link"
                    className="font-body text-sm uppercase tracking-atelier text-foreground hover:text-primary"
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {user ? (
          <div className="mt-4">
            <h2 className="mb-4 font-serif text-xl text-primary">My account</h2>
            <ul className="flex flex-col gap-3 text-sm uppercase tracking-atelier">
              <li>
                <Link className="hover:text-primary" href="/orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/account/addresses">
                  Addresses
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/account">
                  Manage account
                </Link>
              </li>
              <li className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/logout">Log out</Link>
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 font-serif text-xl text-primary">My account</h2>
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild className="w-full" variant="outline">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/create-account">Create an account</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
