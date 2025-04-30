'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface TechStackItemProp {
  name: string
  iconElement: JSX.Element | null
}

export default function TechStackCarousel({
  direction = 'ltr',
  techStack,
}: {
  direction?: 'ltr' | 'rtl'
  techStack?: TechStackItemProp[]
}) {
  const stack = techStack || []
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    setScrollWidth(scrollContainer.scrollWidth)

    let animationId: number
    let position = direction === 'rtl' ? scrollContainer.scrollWidth / 2 : 0

    const scroll = () => {
      if (isHovered || isTouched) {
        animationId = requestAnimationFrame(scroll)
        return
      }

      position += direction === 'rtl' ? -0.5 : 0.5
      if (direction === 'rtl' && position <= 0) {
        position = scrollContainer.scrollWidth / 2
      } else if (direction === 'ltr' && position >= scrollContainer.scrollWidth / 2) {
        position = 0
      }

      scrollContainer.scrollLeft = position
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovered, isTouched, direction, stack.length])

  useEffect(() => {
    if (isTouched) {
      const timer = setTimeout(() => {
        setIsTouched(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isTouched])

  return (
    <div
      className="align relative flex h-full flex-row items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
    >
      <div
        ref={scrollRef}
        className="scrollbar-hide flex w-[400px] space-x-4 overflow-x-auto md:space-x-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...stack, ...stack].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="bg-secondary/50 hover:bg-secondary flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg transition-colors md:h-16 md:w-16"
            title={tech.name}
          >
            {tech.iconElement ? tech.iconElement : <span className="text-xs text-gray-500">?</span>}
            <span className="text-muted-foreground mt-1 max-w-full truncate px-1 text-[10px] md:text-xs">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="from-background absolute top-0 left-0 z-10 h-full w-8 bg-linear-to-r to-transparent"></div>
      <div className="from-background absolute top-0 right-0 z-10 h-full w-8 bg-linear-to-l to-transparent"></div>
    </div>
  )
}
