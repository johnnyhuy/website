'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { getTagIcon } from '../tag-icons'

const tagIconVariants = cva('inline-flex items-center justify-center rounded', {
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

export interface TagIconGroupProps {
  technologies: string[]
  size?: 'sm' | 'md' | 'lg'
  limit?: number
  className?: string
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
      className={`flex items-center gap-1 rounded px-2 py-1 text-xs ${className ?? ''}`}
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

export const TagIconGroup: React.FC<TagIconGroupProps> = ({
  technologies,
  size = 'md',
  limit = 5,
  className = '',
}) => {
  const visibleTechs = technologies.slice(0, limit)
  return (
    <div
      className={`relative flex items-center group ${className}`}
    >
      <div
        className="flex transition-all duration-300"
      >
        {visibleTechs.map((tech, index) => {
          const IconComponent = getTagIcon(tech)
          if (!IconComponent) return null
          // Tailwind margin logic
          let marginClass = ''
          if (index !== 0) {
            marginClass =
              'group-hover:ml-2 -ml-2 transition-all duration-300'
          }
          // Tailwind z-index logic (z-10, z-20, ...)
          // Only a few z-index values are available in Tailwind by default
          const zIndexClass =
            index === 0
              ? 'z-10'
              : index === 1
              ? 'z-9'
              : index === 2
              ? 'z-8'
              : index === 3
              ? 'z-7'
              : index === 4
              ? 'z-6'
              : 'z-0'
          return (
            <span
              key={tech}
              className={`border-border bg-secondary flex items-center justify-center rounded-full border p-1 hover:border-accent ${size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'} ${marginClass} ${zIndexClass}`}
              title={tech}
            >
              <TagIcon
                icon={typeof IconComponent === 'function' ? <IconComponent /> : IconComponent}
                label={tech}
                variant="ghost"
                size={size}
                className="transition-all duration-200"
              />
            </span>
          )
        })}
      </div>
      {technologies.length > limit && (
        <span className="text-muted-foreground ml-2 text-xs">+{technologies.length - limit}</span>
      )}
    </div>
  )
}

export { tagIconVariants }
