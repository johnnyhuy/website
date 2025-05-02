import { TagIcon, tagIconVariants } from '@/components/ui/tag-icon'
import { getTagIcon } from './tag-icons'
import { VariantProps } from 'class-variance-authority'

interface TagIconGroupProps {
  technologies: string[]
  size?: 'sm' | 'md' | 'lg'
  limit?: number
  className?: string
  variant: VariantProps<typeof tagIconVariants>['variant']
}

export const TagIconGroup: React.FC<TagIconGroupProps> = ({
  technologies,
  size = 'md',
  limit = 5,
  className = '',
  variant = 'ghost',
}) => {
  const visibleTechs = technologies.slice(0, limit)
  return (
    <div className={`group relative flex items-center ${className}`}>
      <div className="flex space-x-[-0.5rem] transition-all duration-300 group-hover:space-x-2">
        {visibleTechs.map((tech) => {
          const IconComponent = getTagIcon(tech)
          if (!IconComponent) return null
          return (
            <span
              key={tech}
              className="border-border hover:border-accent flex h-8 w-8 items-center justify-center rounded-full border bg-gray-900"
              title={tech}
            >
              <TagIcon
                icon={<IconComponent className="h-4 w-4" />}
                variant={variant}
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
