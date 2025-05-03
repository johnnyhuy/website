'use client'

import { getTagIcon } from '@/components/tag-icons'
import { TagIcon } from '@/components/ui/tag-icon'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface TechStackProps {
  technologies: string[]
  size?: 'sm' | 'md' | 'lg'
}

export default function TechStack({ technologies, size = 'md' }: TechStackProps) {
  return (
    <TooltipProvider>
      <div className="group relative flex items-center">
        <div className="flex">
          {technologies.map((tech, index) => {
            const IconComponent = getTagIcon(tech)
            if (!IconComponent) {
              return null
            }
            return (
              <Tooltip key={tech}>
                <TooltipTrigger asChild>
                  <div
                    className={`hover:border-accent flex h-8 w-8 items-center justify-center rounded-full border border-gray-900 bg-white p-1 dark:border-gray-600 dark:bg-gray-900 ${index !== 0 ? 'ml-[-0.5rem] group-hover:ml-2' : ''}`}
                    tabIndex={0}
                    style={{
                      zIndex: 10 - index,
                      outline: 'none',
                    }}
                  >
                    <TagIcon
                      icon={<IconComponent className="h-4 w-4" />}
                      variant="ghost"
                      size={size}
                    />
                    <span className="sr-only">{tech}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  {tech}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </TooltipProvider>
  )
}
