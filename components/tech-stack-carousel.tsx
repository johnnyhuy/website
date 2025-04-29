'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// Tech stack data
const defaultTechStack = [
  { name: 'React', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'TypeScript', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Next.js', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Node.js', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'AWS', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Docker', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Kubernetes', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Terraform', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'Python', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'GraphQL', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'PostgreSQL', icon: '/placeholder.svg?height=40&width=40' },
  { name: 'MongoDB', icon: '/placeholder.svg?height=40&width=40' },
]

export default function TechStackCarousel({
  direction = 'ltr',
  techStack,
}: {
  direction?: 'ltr' | 'rtl'
  techStack?: { name: string; icon: string }[]
}) {
  const stack = techStack || defaultTechStack
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Ensure scrollWidth is set after DOM is ready
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

  // Reset touch state after a delay
  useEffect(() => {
    if (isTouched) {
      const timer = setTimeout(() => {
        setIsTouched(false)
      }, 5000) // Resume scrolling after 5 seconds of inactivity
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
        {/* Double the items to create a seamless loop */}
        {[...stack, ...stack].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary/50 transition-colors hover:bg-secondary md:h-16 md:w-16"
            title={tech.name}
          >
            <div className="relative h-6 w-6 md:h-8 md:w-8">
              <Image
                src={tech.icon || '/placeholder.svg'}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="mt-1 max-w-full truncate px-1 text-[10px] text-muted-foreground md:text-xs">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Gradient fade effect on edges - theme aware */}
      <div className="absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-background to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-background to-transparent"></div>
    </div>
  )
}
