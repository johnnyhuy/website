"use client"

import { useState } from "react"
import TechIcon from "./tech-icon"

interface TechStackProps {
  technologies: string[]
  size?: "sm" | "md" | "lg"
  limit?: number
  className?: string
}

export default function TechStack({ technologies, size = "md", limit = 5, className = "" }: TechStackProps) {
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
      <div className={`tech-stack-group flex transition-all duration-300 ${isHovered ? "expanded" : ""}`}>
        {visibleTechs.map((tech, index) => (
          <div
            key={tech}
            className="tech-icon-wrapper"
            style={{
              zIndex: 10 - index,
              marginLeft: index === 0 ? "0" : isHovered ? "0.5rem" : "-0.5rem",
              transition: "margin 0.3s ease",
            }}
          >
            <TechIcon name={tech} size={size} />
          </div>
        ))}

        {remainingCount > 0 && (
          <div
            className={`tech-icon-wrapper flex items-center justify-center ${size === "sm" ? "w-6 h-6" : size === "lg" ? "w-10 h-10" : "w-8 h-8"} bg-secondary rounded-full border border-border hover:border-accent transition-all duration-200`}
            style={{
              zIndex: 10 - visibleTechs.length,
              marginLeft: isHovered ? "0.5rem" : "-0.5rem",
              transition: "margin 0.3s ease",
            }}
          >
            <span className="text-xs font-medium">+{remainingCount}</span>
          </div>
        )}
      </div>
    </div>
  )
}
