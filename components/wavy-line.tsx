"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface WavyLineProps {
  className?: string
  color?: string
  animated?: boolean
}

export default function WavyLine({ className = "", color, animated = true }: WavyLineProps) {
  const { theme } = useTheme()
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Default colors based on theme with better contrast
    const defaultColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
    const lineColor = color || defaultColor

    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path")
      paths.forEach((path) => {
        path.setAttribute("stroke", lineColor)

        // Add animation classes if animated is true
        if (animated) {
          const index = Array.from(paths).indexOf(path)
          if (index === 0) {
            path.classList.add("wave-1")
          } else if (index === 1) {
            path.classList.add("wave-2")
          } else if (index === 2) {
            path.classList.add("wave-3")
          }
        }
      })
    }
  }, [theme, color, animated])

  return (
    <svg
      ref={svgRef}
      className={`absolute pointer-events-none ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={animated ? "wave-1" : ""}
        d="M0,100 C300,300 600,0 900,100 C1200,200 1500,0 1800,100 L1800,600 L0,600 Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5,12"
      />
      <path
        className={animated ? "wave-2" : ""}
        d="M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 L1800,600 L0,600 Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5,12"
      />
      <path
        className={animated ? "wave-3" : ""}
        d="M0,300 C300,400 600,200 900,300 C1200,400 1500,200 1800,300 L1800,600 L0,600 Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5,12"
      />
    </svg>
  )
}
