import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechStack from "@/components/tech-stack"

const projects = [
  {
    title: "AI Transcription Tooling",
    description: "Open-source AI-powered transcription tools for converting audio to text with high accuracy.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "React", "Node.js", "AI"],
    github: "https://github.com/johnnyhuy",
    demo: null,
    date: "2023 - Present",
  },
  {
    title: "Markdown Extensions",
    description: "Custom extensions for Markdown to enhance documentation capabilities and formatting options.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "Markdown", "Node.js"],
    github: "https://github.com/johnnyhuy",
    demo: null,
    date: "2022 - 2023",
  },
  {
    title: "Game Server Data Warehousing",
    description:
      "Solutions for collecting, storing, and analyzing data from game servers to improve performance and player experience.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "SQL", "AWS", "Data Engineering"],
    github: "https://github.com/johnnyhuy",
    demo: null,
    date: "2021 - 2022",
  },
  {
    title: "Melbourne Corporate Coffee",
    description: "JAM Stack website for a corporate coffee service in Melbourne.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Tailwind CSS", "JAM Stack"],
    github: null,
    demo: "https://melbournecorporatecoffee.com.au",
    date: "2021",
  },
  {
    title: "Fun Flicks",
    description: "JAM Stack website for a movie entertainment service.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Tailwind CSS", "JAM Stack"],
    github: null,
    demo: "https://funflicks.com.au",
    date: "2020",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and professional experience.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/johnnyhuy",
    demo: "https://johnnyhuy.com",
    date: "2020 - Present",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
          A collection of my work and open-source contributions.
        </p>

        {/* Mobile-optimized project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background border-2 border-foreground rounded-lg shadow-custom overflow-hidden flex flex-col h-full"
            >
              {/* Project image */}
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-xs rounded-md px-2 py-1 text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col grow">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <TechStack technologies={project.tags} size="sm" />
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full border-accent hover:bg-accent/10">
                        <Github className="mr-1 h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full border-accent hover:bg-accent/10">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
