'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TagIcon, hasIcon } from '@/components/ui/tag-icon'
import { experiences, techExperienceBlurbs } from '@/data/siteData'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const techStackWithIcons = Array.from(
  new Set(experiences.flatMap((exp) => exp.technologies))
).filter(hasIcon)

export default function TechStackCarousel({ direction = 'ltr' }: { direction?: 'ltr' | 'rtl' }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || !mounted) return

    // Set initial position based on direction
    if (direction === 'rtl') {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2
    }

    const currentScrollWidth = scrollContainer.scrollWidth

    let animationId: number
    let position = direction === 'rtl' ? scrollContainer.scrollWidth / 2 : 0

    const scroll = () => {
      if (!scrollRef.current) {
        cancelAnimationFrame(animationId)
        return
      }
      const container = scrollRef.current

      if (isHovered || isTouched) {
        animationId = requestAnimationFrame(scroll)
        return
      }

      position += direction === 'rtl' ? -0.5 : 0.5
      if (direction === 'rtl' && position <= 0) {
        position = container.scrollWidth / 2
      } else if (direction === 'ltr' && position >= container.scrollWidth / 2) {
        position = 0
      }

      container.scrollLeft = position
      animationId = requestAnimationFrame(scroll)
    }

    // Start animation immediately
    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovered, isTouched, direction, mounted])

  useEffect(() => {
    if (isTouched) {
      const timer = setTimeout(() => {
        setIsTouched(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isTouched])

  if (!mounted) return null

  return (
    <TooltipProvider>
      <div
        className="align relative flex h-full flex-row items-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsTouched(true)}
      >
        <div
          ref={scrollRef}
          className="scrollbar-hide flex w-full space-x-4 overflow-x-auto px-10 md:space-x-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...techStackWithIcons, ...techStackWithIcons].map((tech, index) => {
            const blurb = techExperienceBlurbs.get(tech) || tech
            return (
              <Tooltip key={`${tech}-${index}`}>
                <TooltipTrigger asChild>
                  <div className="flex flex-shrink-0 items-center justify-center">
                    <TagIcon tag={tech} variant="ghost" size="xl2" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{blurb}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>

        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-800 dark:via-gray-800/80"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-800 dark:via-gray-800/80"></div>
      </div>
    </TooltipProvider>
  )
}
