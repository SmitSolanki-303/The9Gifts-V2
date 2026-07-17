import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import React from 'react'

interface Props {
  menu: Footer['navItems']
}

export function FooterMenu({ menu }: Props) {
  if (!menu?.length) return null

  return (
    <nav>
      <p className="mb-4 font-serif text-base text-primary">Explore</p>
      <ul className="flex flex-col gap-3">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <CMSLink
                appearance="link"
                className="text-sm uppercase tracking-atelier text-muted-foreground transition-colors hover:text-primary"
                {...item.link}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
