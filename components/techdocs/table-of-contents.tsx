"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="border rounded-lg p-4 bg-background">
      <h2 className="text-lg font-medium mb-3 flex items-center">
        <List className="h-4 w-4 mr-2" />
        Table of Contents
      </h2>
      <nav>
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "cursor-pointer hover:text-accent transition-colors",
                heading.level === 2 ? "pl-0" : "pl-4",
                activeId === heading.id ? "text-accent font-medium" : "text-muted-foreground",
              )}
              onClick={() => handleClick(heading.id)}
            >
              {heading.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
