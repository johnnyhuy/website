'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { getTagIcon } from '../tag-icons'

export const tagIconVariants = cva('inline-flex items-center justify-center rounded', {
  variants: {
    variant: {
      solid: 'bg-gray-100 text-gray-900 dark:text-gray-100',
      outline:
        'rounded-md border border-gray-900 px-2 py-1 text-gray-900 dark:border-gray-100 dark:text-gray-100',
      ghost: 'bg-transparent text-gray-700',
      label: 'bg-transparent text-gray-900 gap-1 px-1 py-0.5 font-medium',
      carousel:
        'rounded-lg p-2 text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    colorVariant: {
      gray: 'text-gray-700',
      yellow: 'text-yellow-500',
      green: 'text-green-500',
      blue: 'text-blue-500',
      red: 'text-red-500',
      white: 'text-white',
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
  icon?: React.ReactNode
  tag?: string
  label?: string
}

export const TagIcon: React.FC<TagIconProps> = ({
  icon,
  tag,
  label,
  variant,
  size,
  colorVariant,
  className,
  ...props
}) => {
  const Icon = icon ?? (tag ? getTagIcon(tag) : undefined)

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-6 w-6',
  }

  const iconSizeClass = size ? sizeClasses[size] : sizeClasses.md

  return (
    <span
      className={tagIconVariants({ variant, size, colorVariant, className })}
      role="img"
      aria-label={label}
      title={label}
      {...props}
    >
      {Icon && typeof Icon === 'function' && <Icon className={iconSizeClass} />}
      {Icon &&
        typeof Icon !== 'function' &&
        React.isValidElement(Icon) &&
        React.cloneElement(Icon as React.ReactElement<any>, {
          className: `${(Icon.props as any).className || ''} ${iconSizeClass}`.trim(),
        })}
      {/* Add whitespace-nowrap to prevent label text wrapping */}
      {label && <span className="ml-1 align-middle whitespace-nowrap">{label}</span>}
    </span>
  )
}
