import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TechStack from '@/components/tech-stack'
import { projects } from '@/data/siteData'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiKubernetes, SiTerraform, SiGraphql, SiPostgresql, SiMongodb, SiReact } from 'react-icons/si'
import type { JSX } from 'react'

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="text-muted-foreground mb-8 text-lg md:mb-12 md:text-xl">
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
            // Icon mapping for react-icons fallback
            const techIcons: Record<string, JSX.Element> = {
              React: <FaReact />,
              'TypeScript': <SiTypescript />,
              'Next.js': <SiNextdotjs />,
              'Node.js': <FaNodeJs />,
              AWS: <FaAws />,
              Docker: <FaDocker />,
              Kubernetes: <SiKubernetes />,
              Terraform: <SiTerraform />,
              Python: <FaPython />,
              GraphQL: <SiGraphql />,
              PostgreSQL: <SiPostgresql />,
              MongoDB: <SiMongodb />,
            }
            return (
              <div
                key={index}
                className="bg-background border-foreground shadow-custom flex h-full flex-col overflow-hidden rounded-lg border-2"
              >
                {/* Project image */}
                <div className="relative h-48 w-full">
                  {typeof image === 'string' ? (
                    <Image src={image} alt={project.title} fill className="object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-muted">
                      <SiReact className="text-4xl text-gray-400" />
                    </div>
                  )}
                  {date && (
                    <div className="bg-background/80 absolute top-2 right-2 flex items-center rounded-md px-2 py-1 text-xs backdrop-blur-xs">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{date}</span>
                    </div>
                  )}
                </div>

                <div className="flex grow flex-col p-4">
                  <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground mb-4 grow text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <TechStack technologies={tags} size="sm" />
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
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent hover:bg-accent/10 w-full"
                        >
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
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent hover:bg-accent/10 w-full"
                        >
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
