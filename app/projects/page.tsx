import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TagIcon, getTagIcon } from '@/components/ui/tag-icon'
import { projects } from '@/data/siteData'
import React from 'react'
import { LuCalendar, LuExternalLink, LuGithub } from 'react-icons/lu'
import { generateBackgroundColor } from '@/data/utils'

/**
 * Compare function to sort projects by date in descending order
 */
const sortProjectsByDateDesc = (a: { date?: string }, b: { date?: string }): number => {
  // Handle cases where date might be undefined
  if (!a.date && !b.date) return 0
  if (!a.date) return 1 // a comes after b if a has no date
  if (!b.date) return -1 // b comes after a if b has no date

  // Special handling for "Present" dates (should come first)
  const aHasPresent = a.date.includes('Present')
  const bHasPresent = b.date.includes('Present')

  if (aHasPresent && !bHasPresent) return -1
  if (!aHasPresent && bHasPresent) return 1

  // For date ranges like "2020 - Present" or "2020 - 2022", extract start year
  const getYearFromDate = (date: string): number => {
    const yearMatch = date.match(/(\d{4})/)
    return yearMatch ? parseInt(yearMatch[0], 10) : 0
  }

  const aYear = getYearFromDate(a.date)
  const bYear = getYearFromDate(b.date)

  // Sort by year descending
  return bYear - aYear
}

export default function ProjectsPage() {
  // Sort projects by date in descending order
  const sortedProjects = [...projects].sort(sortProjectsByDateDesc)

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="mb-8 text-lg text-gray-400 md:mb-12 md:text-xl">
          A collection of my work and open-source contributions.
        </p>

        {/* Mobile-optimized project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => {
            // Use githubUrl as the toggle for GitHub button
            const image = project.image || project.imgSrc
            const github = project.githubUrl || null
            const demo = project.demo || project.href || null
            const tags = project.tags || []
            const date = project.date || ''
            const bgColorClasses = generateBackgroundColor(project.title)

            return (
              <div
                key={index}
                className="shadow-custom flex h-full flex-col overflow-hidden rounded-lg border-1 border-gray-900 dark:border-gray-200"
              >
                {/* Project image */}
                <div className="relative h-48 w-full">
                  {typeof image === 'string' ? (
                    <Image src={image} alt={project.title} fill className="object-cover" />
                  ) : tags.length > 0 && getTagIcon(tags[0]) ? (
                    <div
                      className={`flex h-full w-full items-center justify-center ${bgColorClasses}`}
                    >
                      <TagIcon
                        icon={React.createElement(getTagIcon(tags[0]), {
                          className: 'h-20 w-20 text-gray-900 dark:text-gray-100',
                        })}
                        size="lg"
                        variant="ghost"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center ${bgColorClasses}`}
                    />
                  )}
                  {date && (
                    <div className="absolute top-2 right-2 flex items-center rounded-md border-1 border-gray-900 bg-white px-2 py-1 text-xs backdrop-blur-xs dark:border-gray-200 dark:bg-gray-700">
                      <LuCalendar className="mr-1 h-3 w-3" />
                      <span>{date}</span>
                    </div>
                  )}
                </div>

                <div className="flex grow flex-col p-4">
                  <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                  <p className="mb-4 grow text-sm text-gray-400">{project.description}</p>

                  {/* Tech Stack */}
                  {tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tags.map((tag, tagIndex) => {
                        return (
                          <TagIcon
                            key={tagIndex}
                            tag={tag}
                            label={tag}
                            variant="outline"
                            size="sm"
                          />
                        )
                      })}
                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-auto flex items-start justify-start gap-2">
                    {github && (
                      <Link href={github} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm">
                          <LuGithub className="mr-1 h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {demo && (
                      <Link href={demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm">
                          <LuExternalLink className="mr-1 h-4 w-4" />
                          Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
