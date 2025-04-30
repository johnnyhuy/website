import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Github,
  Linkedin,
  Search,
  Laptop,
  Briefcase,
  BookOpen,
  ExternalLink,
  LucideCode2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import GithubCalendar from '@/components/github-calendar'
import DiscordPresence from '@/components/discord-presence'
import WakatimeGraph from '@/components/wakatime-graph'
import BlogPostItem from '@/components/blog-post-item'
import ExperienceTimeline from '@/components/experience-timeline'
import CloudPattern from '@/components/cloud-pattern'
import TechStackCarousel from '@/components/tech-stack-carousel'
import ProjectCarousel from '@/components/project-carousel'
import { SiDiscord, SiGithub, SiWakatime } from 'react-icons/si'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { allTeches } from 'contentlayer/generated'
import type { Tech } from 'contentlayer/generated'
import { getTagIcon } from '@/components/tag-icons'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'

// Get the full data for the latest 3 posts from Contentlayer
const sortedPosts = sortPosts(allBlogs)
const corePosts = allCoreContent(sortedPosts)
const featuredPostsData: CoreContent<Blog>[] = corePosts.slice(0, 3)

// Fetch and sort tech stack data from Contentlayer
const sortedTechs = allTeches.sort((a: Tech, b: Tech) => a.name.localeCompare(b.name))
const techStackWithIcons = sortedTechs.map((tech: Tech) => ({
  name: tech.name,
  iconElement: getTagIcon(tech.name),
}))

// Split tech stack for carousels
const techStack = techStackWithIcons.slice(0, techStackWithIcons.length)

export default function Home() {
  return (
    <div className="pt-20 pb-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
          {/* First Row: Profile and Cloud Pattern */}
          <Card className="relative col-span-1 overflow-hidden sm:col-span-2 md:col-span-8">
            <CardContent className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:gap-6 md:p-6">
              <div className="relative h-24 w-24 shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40">
                <Image
                  src="/images/me.jpg"
                  alt="Johnny Huynh"
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="mb-1 text-2xl font-bold md:mb-2 md:text-3xl lg:text-4xl">
                  Johnny Huynh
                </h1>
                <h2 className="text-muted-foreground mb-2 text-lg md:mb-4 md:text-xl lg:text-2xl">
                  Principal Engineer
                </h2>
                <p className="mb-3 max-w-xl text-sm md:mb-4 md:text-base">
                  Dynamic and skilled Principal Software Engineer with over 6 years of industry
                  experience in platform engineering. Eager to leverage expertise in high-impact,
                  cutting-edge technology projects.
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  <Link
                    href="https://github.com/johnnyhuy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/johnnyhuy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="sm">
                      <span className="mr-1">Projects</span>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
                <p className="text-muted-foreground mt-3 text-xs md:mt-4">
                  For recruitment and job opportunities, please contact me via LinkedIn only.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-4 hidden h-auto overflow-hidden md:block">
            <CloudPattern className="absolute" />
          </Card>

          {/* Second Row */}
          {/* GitHub Activity Graph */}
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-6">
            <CardContent className="p-4">
              <h3 className="mb-3 flex items-center text-lg font-medium md:mb-4">
                <SiGithub className="mr-2 h-8 w-8" />
              </h3>
              <div className="space-y-4">
                <GithubCalendar username="johnnyhuy" />
                <div className="text-center">
                  <a
                    href="https://github.com/johnnyhuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View all activity
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-6">
            <CardContent className="p-4">
              <h3 className="mb-3 flex items-center text-lg font-medium">
                <Laptop className="mr-2 h-4 w-4" />
                Current Projects
              </h3>
              <ProjectCarousel />
            </CardContent>
          </Card>

          {/* Third Row: Discord Status, Tech Stack, Current Position */}
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-4">
            <CardContent className="flex h-full flex-row items-start gap-4 p-4">
              <DiscordPresence />
              <SiDiscord className="mr-2 h-8 w-8" />
            </CardContent>
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-4">
            <CardContent className="flex h-full flex-row items-start gap-4 p-4">
              <TechStackCarousel direction="ltr" techStack={techStack} />
              <LucideCode2 className="h-8 w-8" />
            </CardContent>
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-4">
            <CardContent className="flex flex-row items-start justify-between p-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded">
                  <div className="text-xl font-bold">S</div>
                </div>
                <div>
                  <h4 className="font-medium">Lead Engineer</h4>
                  <p className="text-muted-foreground text-sm">Sportsbet</p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Dec 2021 - Present &middot; &gt; 2 yrs
                  </p>
                  <Link
                    href="/resume"
                    className="text-primary mt-2 inline-flex items-center text-xs"
                  >
                    View resume
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
              <Briefcase className="h-8 w-8" />
            </CardContent>
          </Card>

          {/* Fourth Row: WakaTime and Spacer */}
          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 md:col-span-6 md:block">
            <CloudPattern className="absolute" />
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-6">
            <CardContent className="flex flex-row gap-4 p-4">
              <WakatimeGraph />
              <SiWakatime className="h-8 w-8" />
            </CardContent>
          </Card>

          {/* Blog Preview Card */}
          <Card className="col-span-1 overflow-hidden sm:col-span-2 md:col-span-12">
            <CardContent className="p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between">
                <h3 className="mb-2 flex items-center text-lg font-medium sm:mb-0">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Blogs
                </h3>
                <div className="flex w-full items-center gap-2 sm:w-auto">
                  <Link href="/blog" className="flex-1 sm:flex-auto">
                    <Button variant="ghost" size="sm" className="w-full gap-1 sm:w-auto">
                      View all
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <Link href="/blog/random" className="flex-1 sm:flex-auto">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Random Post
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <Search className="text-muted-foreground h-4 w-4" />
                </div>
                <Link href="/blog" className="block">
                  <div className="border-input bg-background hover:bg-secondary/50 flex h-10 w-full cursor-pointer items-center rounded-md border px-3 py-2 pl-10 text-sm transition-colors">
                    Search posts or filter by tags...
                  </div>
                </Link>
              </div>

              <div className="divide-border mt-4 divide-y rounded-lg">
                {featuredPostsData.map((post) => (
                  <div key={post.slug} className="px-4 py-4">
                    <BlogPostItem post={post} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Section */}
        <section className="border-border mt-8 border-t pt-8 md:mt-12 md:pt-12">
          <h2 className="mb-6 flex items-center text-2xl font-bold md:mb-8 md:text-3xl">
            <Briefcase className="mr-2 h-5 w-5 md:mr-3 md:h-6 md:w-6" />
            Experience
          </h2>
          <ExperienceTimeline />
        </section>
      </div>
    </div>
  )
}
