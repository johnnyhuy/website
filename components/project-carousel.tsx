"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

type Project = {
  id: number
  title: string
  description: string
  githubUrl: string
  techStack: string[]
}

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

  const activeProject = projects[activeIndex]

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden rounded-xl">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="flex">
            {projects.map((project) => (
              <div key={project.id} className="w-full shrink-0">
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{project.title}</h4>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-primary/10 rounded-full">
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
      <div className="flex items-center justify-between mt-3">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={goToPrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous project</span>
        </Button>

        <div className="flex gap-1">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-4 bg-accent" : "w-2 bg-muted hover:bg-muted-foreground"
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

        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={goToNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>

      <div className="text-center mt-3">
        <Link href="/projects">
          <Button variant="link" size="sm" className="rounded-full">
            View all projects
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
