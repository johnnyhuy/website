'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import type { FC } from 'react'

// Use an interface for props if you want to extend in the future
export interface BackgroundWavyLinesProps {}

export const BackgroundWavyLines: FC<BackgroundWavyLinesProps> = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Always render the SVG, but use a default color before mount
  const strokeColor = mounted
    ? (resolvedTheme || theme) === 'dark'
      ? 'var(--color-gray-100)'
      : 'var(--color-gray-900)'
    : 'var(--color-gray-900)' // match the server default

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[50vh] w-full opacity-5"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 712 232"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="presentation"
        focusable="false"
      >
        <path
          d="M-1.5 220.5C28.3333 206.833 91.5 185.7 91.5 218.5C91.5 259.5 322.928 176.884 403.5 144C686.5 28.5 633.5 42 711.5 2"
          stroke={strokeColor}
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  )
}

// Named export for best practice
export default BackgroundWavyLines
