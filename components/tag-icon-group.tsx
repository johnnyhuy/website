import { TagIcon } from '@/components/ui/tag-icon'

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
      {/* Add flex-wrap */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => {
          return (
            <TagIcon
              key={tech}
              tag={tech}
              size={size}
              label={tech}
              variant="outline"
              title={tech}
            />
          )
        })}
      </div>
    </div>
  )
}
