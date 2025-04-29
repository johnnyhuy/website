"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function BackgroundWavyLines() {
  const { theme, resolvedTheme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it taller than viewport to cover scrolling
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw wavy lines
    const drawWavyLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set line style based on theme - white for dark mode
      const currentTheme = resolvedTheme || theme
      ctx.strokeStyle = currentTheme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
      ctx.lineWidth = 1.5

      // Create multiple wavy lines with different patterns
      for (let i = 0; i < 3; i++) {
        const y = canvas.height * (0.2 + i * 0.15)
        const amplitude = 80 + i * 20
        const frequency = 0.002 - i * 0.0003

        ctx.beginPath()
        ctx.moveTo(0, y)

        // Create a smooth wave across the width
        for (let x = 0; x <= canvas.width; x += 1) {
          const yOffset = amplitude * Math.sin(frequency * x * Math.PI + (i * Math.PI) / 2)
          ctx.lineTo(x, y + yOffset)
        }

        ctx.stroke()
      }
    }

    drawWavyLines()

    // Redraw when theme changes
    const observer = new MutationObserver(() => {
      drawWavyLines()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
    }
  }, [theme, resolvedTheme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
}
