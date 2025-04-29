'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface EnhancedGlassEffectProps {
  isActive: boolean
}

export function EnhancedGlassEffect({ isActive }: EnhancedGlassEffectProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isActive) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 backdrop-blur"
      style={{
        background:
          resolvedTheme === 'dark'
            ? `radial-gradient(circle at top center, var(--color-yellow-900) / 0.10 0%, var(--color-yellow-900) / 0.10 100%)`
            : `radial-gradient(circle at top center, var(--color-yellow-900) / 0.12 0%, var(--color-yellow-900) / 0.12 100%)`,
        boxShadow:
          resolvedTheme === 'dark'
            ? '0 1px 8px rgba(0, 0, 0, 0.12)'
            : '0 1px 8px rgba(0, 0, 0, 0.03)',
      }}
    />
  )
}
