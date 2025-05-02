import { TagIcon } from '@/components/ui/tag-icon'
import { getTagIcon } from './tag-icons'

interface TagIconGroupProps {
  technologies: string[]
  size?: 'sm' | 'md' | 'lg'
  limit?: number
  className?: string
}

export const TagIconGroup: React.FC<TagIconGroupProps> = ({
  technologies,
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`group relative flex items-center ${className}`}>
      <div className="flex gap-2">
        {technologies.map((tech) => {
          const IconComponent = getTagIcon(tech)
          if (!IconComponent) return null
          return (
            <span
              key={tech}
              className="flex h-8 items-center justify-center rounded-full border bg-gray-900 px-2"
              title={tech}
            >
              <TagIcon
                icon={<IconComponent className="h-4 w-4" />}
                size={size}
                label={tech}
                className="transition-all duration-200"
              />
            </span>
          )
        })}
      </div>
    </div>
  )
}
