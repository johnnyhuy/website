'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiGraphql,
  SiMarkdown,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si'

// Map of tech names to their icons
const techIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // Languages & Frameworks
  React: FaReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  Python: FaPython,
  GraphQL: SiGraphql,
  Markdown: SiMarkdown,

  // Cloud & DevOps
  AWS: FaAws,
  GCP: SiGooglecloud,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Jenkins: FaJenkins,
  GitHub: FaGithub,

  // Databases
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  SQL: FaDatabase,

  // Other
  'Tailwind CSS': SiTailwindcss,
}

interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function TechIcon({ name, size = 'md', className = '' }: TechIconProps) {
  const IconComponent = techIcons[name]

  // Size mappings
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div
            className={`tech-icon ${sizeClasses[size]} ${className} bg-secondary border-border hover:border-accent flex items-center justify-center rounded-full border transition-all duration-200`}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: iconSize[size], height: iconSize[size] }}
            >
              {IconComponent ? (
                <IconComponent size={iconSize[size]} className="object-contain p-1" />
              ) : (
                <span className="text-xs">?</span>
              )}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
