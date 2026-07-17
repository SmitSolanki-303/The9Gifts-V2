import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/cn'

const buttonVariants = cva(
  "relative inline-flex items-center justify-center hover:cursor-pointer gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow,transform,background-color,border-color] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-[2px]",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:scale-[1.02] shimmer-gold glow-gold-sm uppercase tracking-atelier font-body text-xs',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-primary bg-transparent text-primary shadow-xs hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] uppercase tracking-atelier font-body text-xs',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 uppercase tracking-atelier font-body text-xs',
        ghost:
          'text-foreground/70 hover:text-primary [&.active]:text-primary py-2 px-4 uppercase font-body tracking-atelier text-xs',
        link: 'text-primary underline-offset-4 hover:underline',
        nav: 'text-foreground/80 hover:text-primary [&.active]:text-primary p-0 pt-2 pb-6 uppercase font-body tracking-atelier text-xs',
      },
      size: {
        clear: '',
        default: 'h-10 px-6 py-2 has-[>svg]:px-4',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 px-8 has-[>svg]:px-6 text-sm',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
