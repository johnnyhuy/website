"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeIndicator() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showIndicator, setShowIndicator] = useState(true)

  // Ensure we're mounted on the client to avoid hydration issues
  useEffect(() => {
    setMounted(true)

    // Hide indicator after 3 seconds
    const timer = setTimeout(() => {
      setShowIndicator(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show indicator briefly when theme changes
    setShowIndicator(true)
    const timer = setTimeout(() => {
      setShowIndicator(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [theme])

  if (!mounted || !showIndicator) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 py-1.5 px-3 md:py-2 md:px-4 bg-background/90 backdrop-blur-xs rounded-full border border-border shadow-md flex items-center gap-2 transition-all duration-300 text-xs md:text-sm">
      {resolvedTheme === "dark" ? (
        <>
          <Moon className="h-3 w-3 md:h-4 md:w-4 text-indigo-400" />
          <span>Dark mode active</span>
        </>
      ) : resolvedTheme === "light" ? (
        <>
          <Sun className="h-3 w-3 md:h-4 md:w-4 text-amber-500" />
          <span>Light mode active</span>
        </>
      ) : (
        <>
          <Monitor className="h-3 w-3 md:h-4 md:w-4" />
          <span>System theme active</span>
        </>
      )}
    </div>
  )
}
