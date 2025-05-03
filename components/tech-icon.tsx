import { TagIcon } from './ui/tag-icon'

interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function TechIcon({ name, size = 'md', className = '' }: TechIconProps) {
  return (
    <div className="flex items-center">
      <TagIcon
        icon={name}
        variant="outline"
        size={size}
        className={className}
        colorVariant="default"
      />
    </div>
  )
}
