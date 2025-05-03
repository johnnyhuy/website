import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TechStack from '@/components/tech-stack'
import { projects } from '@/data/siteData'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiTerraform,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiReact,
} from 'react-icons/si'
import type { JSX } from 'react'

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="mb-8 text-lg text-gray-400 md:mb-12 md:text-xl">
          A collection of my work and open-source contributions.
        </p>

        {/* Mobile-optimized project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            // Use githubUrl as the toggle for GitHub button
            const image = project.image || project.imgSrc
            const github = project.githubUrl || null
            const demo = project.demo || project.href || null
            const tags = project.tags || []
            const date = project.date || ''
            return (
              <div
                key={index}
                className="shadow-custom flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-900 dark:border-gray-200"
              >
                {/* Project image */}
                <div className="relative h-48 w-full">
                  {typeof image === 'string' ? (
                    <Image src={image} alt={project.title} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <SiReact className="text-4xl text-gray-400" />
                    </div>
                  )}
                  {date && (
                    <div className="absolute top-2 right-2 flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs backdrop-blur-xs dark:bg-gray-700">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{date}</span>
                    </div>
                  )}
                </div>

                <div className="flex grow flex-col p-4">
                  <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                  <p className="mb-4 grow text-sm text-gray-400">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <TechStack technologies={tags} size="md" />
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-2">
                    {github && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="default" size="sm">
                          <Github className="mr-1 h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {demo && (
                      <Link
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="default" size="sm">
                          <ExternalLink className="mr-1 h-4 w-4" />
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
