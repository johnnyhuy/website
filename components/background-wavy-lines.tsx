'use client'

import { Parallax } from 'react-scroll-parallax'
import { useTheme } from 'next-themes'
import type { FC } from 'react'

// Use an interface for props if you want to extend in the future
export interface BackgroundWavyLinesProps {}

export const BackgroundWavyLines: FC<BackgroundWavyLinesProps> = () => {
  const { theme, resolvedTheme } = useTheme()
  const strokeColor =
    (resolvedTheme || theme) === 'dark' ? 'var(--color-gray-100)' : 'var(--color-gray-900)'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[-1] h-[60vh] w-full opacity-5"
    >
      <Parallax translateY={[-5, 5]}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 595 232"
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
      </Parallax>
    </div>
  )
}

// Named export for best practice
export default BackgroundWavyLines
