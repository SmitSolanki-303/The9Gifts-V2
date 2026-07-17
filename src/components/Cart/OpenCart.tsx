import { Button } from '@/components/ui/button'
import React from 'react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="nav"
      size="clear"
      className="navLink relative items-end pb-1 hover:cursor-pointer"
      {...rest}
    >
      <span>Cart</span>

      {quantity ? (
        <>
          <span className="text-primary">•</span>
          <span className="text-primary">{quantity}</span>
        </>
      ) : null}
    </Button>
  )
}
