'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { getTagIcon } from '@/components/tag-icons'
import { TagIcon } from '@/components/ui/tag-icon'

export default function TechStackCarousel({
  direction = 'ltr',
  techStack,
}: {
  direction?: 'ltr' | 'rtl'
  techStack?: { name: string }[]
}) {
  const stack = techStack || []
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

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
        {[...stack, ...stack].map((item, index) => {
          const Icon = getTagIcon(item.name)

          if (!Icon) {
            return null
          }
          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center"
              title={item.name}
            >
              <TagIcon
                icon={<Icon />}
                label={item.name || undefined}
                variant="carousel"
                size="lg"
              />
            </div>
          )
        })}
      </div>

      <div className="absolute top-0 left-0 z-10 h-full w-8 bg-linear-to-r from-white to-transparent dark:from-gray-800"></div>
      <div className="absolute top-0 right-0 z-10 h-full w-8 bg-linear-to-l from-white to-transparent dark:from-gray-800"></div>
    </div>
  )
}
