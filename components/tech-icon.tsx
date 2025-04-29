"use client"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Map of tech names to their icons
const techIcons: Record<string, string> = {
  // Languages & Frameworks
  React: "/placeholder.svg?height=40&width=40",
  TypeScript: "/placeholder.svg?height=40&width=40",
  JavaScript: "/placeholder.svg?height=40&width=40",
  "Next.js": "/placeholder.svg?height=40&width=40",
  "Node.js": "/placeholder.svg?height=40&width=40",
  Python: "/placeholder.svg?height=40&width=40",
  GraphQL: "/placeholder.svg?height=40&width=40",
  Markdown: "/placeholder.svg?height=40&width=40",

  // Cloud & DevOps
  AWS: "/placeholder.svg?height=40&width=40",
  Azure: "/placeholder.svg?height=40&width=40",
  GCP: "/placeholder.svg?height=40&width=40",
  Docker: "/placeholder.svg?height=40&width=40",
  Kubernetes: "/placeholder.svg?height=40&width=40",
  Terraform: "/placeholder.svg?height=40&width=40",
  Jenkins: "/placeholder.svg?height=40&width=40",
  GitHub: "/placeholder.svg?height=40&width=40",
  "CI/CD": "/placeholder.svg?height=40&width=40",

  // Databases
  PostgreSQL: "/placeholder.svg?height=40&width=40",
  MongoDB: "/placeholder.svg?height=40&width=40",
  SQL: "/placeholder.svg?height=40&width=40",

  // Other
  DevOps: "/placeholder.svg?height=40&width=40",
  Security: "/placeholder.svg?height=40&width=40",
  mTLS: "/placeholder.svg?height=40&width=40",
  Architecture: "/placeholder.svg?height=40&width=40",
  Cloud: "/placeholder.svg?height=40&width=40",
  AI: "/placeholder.svg?height=40&width=40",
  "Data Engineering": "/placeholder.svg?height=40&width=40",
  "JAM Stack": "/placeholder.svg?height=40&width=40",
  "Tailwind CSS": "/placeholder.svg?height=40&width=40",
  Reliability: "/placeholder.svg?height=40&width=40",
  SRE: "/placeholder.svg?height=40&width=40",
  "Developer Experience": "/placeholder.svg?height=40&width=40",
  "Internal Tools": "/placeholder.svg?height=40&width=40",
  Containers: "/placeholder.svg?height=40&width=40",
  "PCI Compliance": "/placeholder.svg?height=40&width=40",
  "Legacy Systems": "/placeholder.svg?height=40&width=40",
}

interface TechIconProps {
  name: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function TechIcon({ name, size = "md", className = "" }: TechIconProps) {
  const iconSrc = techIcons[name] || "/placeholder.svg?height=40&width=40"

  // Size mappings
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
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
            className={`tech-icon ${sizeClasses[size]} ${className} bg-secondary rounded-full flex items-center justify-center border border-border hover:border-accent transition-all duration-200`}
          >
            <div className="relative" style={{ width: iconSize[size], height: iconSize[size] }}>
              <Image src={iconSrc || "/placeholder.svg"} alt={name} fill className="object-contain p-1" />
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
