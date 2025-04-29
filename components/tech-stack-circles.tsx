"use client"

import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

// Tech stack data
const techStack = [
  { name: "React", icon: "/placeholder.svg?height=40&width=40" },
  { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Node.js", icon: "/placeholder.svg?height=40&width=40" },
  { name: "AWS", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Docker", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Kubernetes", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Terraform", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Python", icon: "/placeholder.svg?height=40&width=40" },
  { name: "GraphQL", icon: "/placeholder.svg?height=40&width=40" },
  { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40" },
  { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40" },
]

export default function TechStackCircles() {
  const { theme } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative py-4">
      <div className="tech-stack-group">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-stack-circle"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ zIndex: hoveredIndex === index ? 20 : 10 - index }}
          >
            <div className="relative w-6 h-6">
              <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
            </div>
            <div className="tech-stack-tooltip">{tech.name}</div>
          </div>
        ))}
      </div>

      {/* Gradient fade effect on edges - theme aware */}
      <div className="absolute top-0 left-0 h-full w-8 bg-linear-to-r from-background to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-8 bg-linear-to-l from-background to-transparent z-10"></div>
    </div>
  )
}
