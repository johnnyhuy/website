'use client'

import { useState } from 'react'

interface Annotation {
  /** Percentage from left edge of the SVG canvas (1536px wide) */
  x: number
  /** Percentage from top edge of the SVG canvas (860px tall) */
  y: number
  label: string
  description: string
  color?: string
}

// Positions computed from the SVG chart coordinates (canvas 1536×860)
const ANNOTATIONS: Annotation[] = [
  {
    x: 19.9,
    y: 79.4,
    label: 'Year 1 — First launch',
    description: 'A small step into the world.',
    color: '#EF4444',
  },
  {
    x: 44.4,
    y: 77.8,
    label: 'Year 5 — Sustainable income',
    description: 'From side project to real revenue.',
    color: '#EAB308',
  },
  {
    x: 59.4,
    y: 76.6,
    label: 'Year 10 — A portfolio business',
    description: 'Multiple products. Real independence.',
    color: '#22C55E',
  },
  {
    x: 91.8,
    y: 11.0,
    label: 'Year 20 — 65,536',
    description: '~65× higher than power, ~650× higher than linear.',
    color: '#2563EB',
  },
  {
    x: 91.8,
    y: 31.4,
    label: 'Power — 3,578',
    description: 'Power growth curve endpoint.',
  },
  {
    x: 91.8,
    y: 39.2,
    label: 'Linear — 1,000',
    description: 'Steady progress, no compounding.',
  },
]

export function CompoundingChart() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <figure className="not-prose my-8">
      {/* Always-mounted style block so CSS is available before tooltip renders */}
      <style>{`
        .comp-tip {
          position: absolute;
          z-index: 20;
          pointer-events: none;
          border: 1px solid #d1d5db;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          padding: 6px 10px;
          max-width: 150px;
          transform: translate(-50%, -130%);
          display: block;
          box-sizing: border-box;
          font-size: 10px !important;
          line-height: 1.35 !important;
          font-family: var(--font-inter), sans-serif !important;
        }
        .dark .comp-tip {
          background: #1f2937;
          border-color: #4b5563;
        }
        .comp-tip-label {
          display: block;
          font-family: var(--font-plex-mono), ui-monospace, monospace !important;
          font-size: 8px !important;
          line-height: 1.3 !important;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #6b7280;
          margin: 0 0 2px 0;
          padding: 0;
          font-weight: 400 !important;
        }
        .dark .comp-tip-label { color: #9ca3af; }
        .comp-tip-desc {
          display: block;
          font-family: var(--font-inter), sans-serif !important;
          font-size: 10px !important;
          line-height: 1.35 !important;
          color: #374151;
          margin: 0;
          padding: 0;
          font-weight: 400 !important;
        }
        .dark .comp-tip-desc { color: #d1d5db; }
      `}</style>

      <div className="relative border bg-[#FAF9F6] dark:bg-[#1a1a1a]">
        <img
          src="/images/blog/neo-enterprises-compounding.svg"
          alt="Compounding growth chart showing exponential, power, and linear curves over 20 years"
          className="w-full"
          width={1536}
          height={860}
        />
        {ANNOTATIONS.map((a, i) => (
          <button
            key={i}
            className="absolute z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-white shadow-md transition-transform hover:scale-150 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            style={{
              left: `${a.x}%`,
              top: `${a.y}%`,
              backgroundColor: a.color ?? '#525252',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            aria-label={a.label}
          />
        ))}
        {hovered !== null && (
          <div
            className="comp-tip"
            style={{
              left: `${ANNOTATIONS[hovered].x}%`,
              top: `${ANNOTATIONS[hovered].y}%`,
            }}
          >
            <div className="comp-tip-label">{ANNOTATIONS[hovered].label}</div>
            <div className="comp-tip-desc">{ANNOTATIONS[hovered].description}</div>
          </div>
        )}
      </div>
      <figcaption className="mono-label mt-3 text-[10px]">
        Hover the dots to explore milestones.
      </figcaption>
    </figure>
  )
}
