import { useId } from 'react'

interface HeroPatternProps {
  seed: string
  className?: string
}

const hash = (s: string): number => {
  let h = 5381
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

const patterns: { width: number; height: number; body: React.ReactNode }[] = [
  {
    // graph paper
    width: 28,
    height: 28,
    body: <path d="M28 0H0v28" fill="none" stroke="currentColor" strokeWidth="1" />,
  },
  {
    // diagonal stripes
    width: 16,
    height: 16,
    body: (
      <path
        d="M-2 2l4-4M0 16L16 0M14 18l4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    ),
  },
  {
    // dots
    width: 20,
    height: 20,
    body: <circle cx="10" cy="10" r="1.5" fill="currentColor" />,
  },
  {
    // plus
    width: 24,
    height: 24,
    body: <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1" />,
  },
  {
    // zigzag
    width: 24,
    height: 12,
    body: <path d="M0 6l6-6 6 6 6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1" />,
  },
  {
    // squares
    width: 26,
    height: 26,
    body: (
      <rect x="7" y="7" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
    ),
  },
  {
    // cross
    width: 16,
    height: 16,
    body: <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1" />,
  },
  {
    // waves
    width: 24,
    height: 12,
    body: <path d="M0 6q6-8 12 0t12 0" fill="none" stroke="currentColor" strokeWidth="1" />,
  },
]

export default function HeroPattern({ seed, className = '' }: HeroPatternProps) {
  const id = useId()
  const pattern = patterns[hash(seed) % patterns.length]

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={pattern.width} height={pattern.height}>
          {pattern.body}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
