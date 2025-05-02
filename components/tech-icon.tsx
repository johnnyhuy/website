'use client'
import { TagIcon } from './ui/tag-icon'
import { getTagIcon } from './tag-icons'

interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function TechIcon({ name, size = 'md', className = '' }: TechIconProps) {
  const IconComponent = getTagIcon(name)

  return (
    <div className="flex items-center">
      <TagIcon
        icon={IconComponent}
        label={name}
        variant="label"
        size={size}
        className={className}
        colorVariant="default"
      />
    </div>
  )
}
