'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { getTagIcon } from '../tag-icons'

export const tagIconVariants = cva('inline-flex items-center justify-center rounded', {
  variants: {
    variant: {
      solid: 'text-[color:var(--color-gray-900)] dark:text-[color:var(--color-gray-100)]',
      outline: 'border border-[color:var(--color-border)] text-[color:var(--color-gray-900)]',
      ghost: 'bg-transparent text-[color:var(--color-gray-700)]',
      label: 'bg-transparent text-[color:var(--color-gray-900)] gap-1 px-1 py-0.5 font-medium',
      carousel:
        'rounded-lg p-2 text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200',
    },
    size: {
      sm: 'h-3 w-3 text-xs',
      md: 'h-4 w-4 text-sm',
      lg: 'h-6 w-6 text-base',
    },
    colorVariant: {
      gray: 'text-[color:var(--color-gray-700)]',
      yellow: 'text-[color:var(--color-yellow-500)]',
      green: 'text-[color:var(--color-green-500)]',
      blue: 'text-[color:var(--color-blue-500)]',
      red: 'text-[color:var(--color-red-500)]',
      white: 'text-[color:var(--color-white)]',
      default: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    colorVariant: 'default',
  },
})

export interface TagIconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof tagIconVariants> {
  icon: React.ReactNode
  label?: string
}

export const TagIcon: React.FC<TagIconProps> = ({
  icon,
  label,
  variant,
  size,
  colorVariant,
  className,
  ...props
}) => {
  return (
    <span
      className={`flex items-center gap-1 rounded text-xs ${className ?? ''}`}
      role="img"
      aria-label={label}
      title={label}
      {...props}
    >
      <Slot>{icon}</Slot>
      {label && <span className="align-middle">{label}</span>}
    </span>
  )
}
