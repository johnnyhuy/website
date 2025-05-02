'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/siteData'

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-1 overflow-hidden rounded-xl">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="flex">
            {projects.map((project) => (
              <div key={project.id} className="w-full shrink-0">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">{project.title}</h4>
                    {project.githubUrl && (
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3 min-h-[4rem] text-sm">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="bg-primary/10 rounded-full px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="mt-4 flex items-center justify-between">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={goToPrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous project</span>
        </Button>

        <div className="flex gap-1">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-accent w-4' : 'bg-muted hover:bg-muted-foreground w-2'
              }`}
              onClick={() => {
                setActiveIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" className="h-8 w-8" onClick={goToNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>
    </div>
  )
}
