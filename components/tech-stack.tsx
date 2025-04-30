'use client'

import { useState } from 'react'
import { getTagIcon } from '@/components/tag-icons'

interface TechStackProps {
  technologies: string[]
  size?: 'sm' | 'md' | 'lg'
  limit?: number
  className?: string
}

export default function TechStack({
  technologies,
  size = 'md',
  limit = 5,
  className = '',
}: TechStackProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Limit the number of technologies shown
  const visibleTechs = technologies.slice(0, limit)
  const remainingCount = technologies.length - limit

  return (
    <div
      className={`tech-stack-container relative flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`tech-stack-group flex transition-all duration-300 ${isHovered ? 'expanded' : ''}`}
      >
        {visibleTechs.map((tech, index) => {
          const IconComponent = getTagIcon(tech)
          // Only render if an icon component is found
          if (!IconComponent) {
            return null
          }
          const iconSizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
          return (
            <div
              key={tech}
              className={`tech-icon-wrapper border-border bg-secondary flex items-center justify-center rounded-full border p-1 ${size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'} hover:border-accent transition-all duration-200`}
              title={tech}
              style={{
                zIndex: 10 - index,
                marginLeft: index === 0 ? '0' : isHovered ? '0.5rem' : '-0.5rem',
                transition: 'margin 0.3s ease',
              }}
            >
              <IconComponent className={iconSizeClass} />
            </div>
          )
        })}

        {remainingCount > 0 && (
          <div
            className={`tech-icon-wrapper flex items-center justify-center ${size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'} bg-secondary border-border hover:border-accent rounded-full border transition-all duration-200`}
            style={{
              zIndex: 10 - visibleTechs.length,
              marginLeft: isHovered ? '0.5rem' : '-0.5rem',
              transition: 'margin 0.3s ease',
            }}
          >
            <span className="text-xs font-medium">+{remainingCount}</span>
          </div>
        )}
      </div>
    </div>
  )
}
