import clsx from 'clsx'
import React from 'react'

/** The9Gifts monogram — liquid gold “9” */
export function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="The9Gifts monogram"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('text-primary', props.className)}
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="22"
        fontWeight="500"
      >
        9
      </text>
    </svg>
  )
}
