import Link from 'next/link'
import Image from 'next/image'
import { LuArrowRight, LuLaptop, LuBookOpen } from 'react-icons/lu'
import { Card, CardContent } from '@/components/ui/card'
import GithubCalendar from '@/components/github-calendar'
import DiscordPresence from '@/components/discord-presence'
import WakatimeGraph from '@/components/wakatime-graph'
import BlogPostItem from '@/components/blog-post-item'
import ExperienceTimeline from '@/components/experience-timeline'
import TechStackCarousel from '@/components/tech-stack-carousel'
import ProjectCarousel from '@/components/project-carousel'
import { SiDiscord, SiGithub, SiWakatime } from 'react-icons/si'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { profile, experiences } from '@/data/siteData'
import { getTagIcon } from '@/components/ui/tag-icon'
import CloudPattern from '../components/cloud-pattern'
import Me from '@/data/images/me.jpg'
import { CompanyLogo } from '@/components/company-logo'

const sortedPosts = sortPosts(allBlogs)
const corePosts = allCoreContent(sortedPosts)
const featuredPostsData: CoreContent<Blog>[] = corePosts.slice(0, 3)

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
                  src={Me}
                  alt={profile.name}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="mb-1 text-2xl font-bold md:mb-2 md:text-3xl lg:text-4xl">
                  {profile.name}
                </h1>
                <h2 className="mb-2 text-lg text-gray-400 md:mb-4 md:text-xl lg:text-2xl">
                  {profile.title}
                </h2>
                <p className="mb-3 max-w-xl text-sm md:mb-4 md:text-base">{profile.bio}</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                  {profile.links.map((link) => {
                    const Icon = getTagIcon(link.icon)
                    return (
                      <a
                        href={link.href}
                        key={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
                <p className="mt-3 text-xs text-gray-400 italic md:mt-4">{profile.contactNote}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-4 hidden h-auto overflow-hidden md:block">
            <CloudPattern className="absolute" />
          </Card>

          {/* Second Row */}
          {/* GitHub Activity Graph */}
          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 sm:block md:col-span-6">
            <CardContent className="p-4">
              <h3 className="mb-3 flex items-center text-lg font-medium md:mb-4">
                <SiGithub className="mr-2 h-8 w-8" />
              </h3>
              <div className="space-y-4">
                <GithubCalendar />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-6">
            <CardContent className="h-full p-4">
              <h3 className="mb-3 flex items-center text-lg font-medium">
                <LuLaptop className="mr-2 h-8 w-8" />
                Projects
              </h3>
              <ProjectCarousel />
            </CardContent>
          </Card>

          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 sm:block md:col-span-4">
            <CardContent className="flex h-full flex-row items-start gap-4 p-4">
              <DiscordPresence />
              <SiDiscord className="mr-2 h-8 w-8" />
            </CardContent>
          </Card>
          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 sm:block md:col-span-4">
            <CardContent className="flex h-full flex-row items-start gap-4 p-4">
              <TechStackCarousel direction="ltr" />
            </CardContent>
          </Card>
          <Card className="col-span-1 overflow-hidden sm:col-span-1 md:col-span-4">
            <CardContent className="flex flex-row items-start justify-between p-4">
              <div className="flex items-start gap-3">
                <CompanyLogo companyName={experiences[0].company} className="h-10 w-10" />
                <div>
                  <h4 className="font-medium">{experiences[0].title}</h4>
                  <p className="text-sm text-gray-400">{experiences[0].company}</p>
                  <p className="mt-1 text-xs text-gray-400">
                    {experiences[0].startDate} - {experiences[0].endDate}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fourth Row: WakaTime and Spacer */}
          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 md:col-span-6 md:block">
            <CloudPattern className="absolute" />
          </Card>
          <Card className="col-span-1 hidden overflow-hidden sm:col-span-1 sm:block md:col-span-6">
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
                  <LuBookOpen className="mr-2 h-8 w-8" />
                </h3>
              </div>

              <div className="mt-4 divide-y divide-gray-100 rounded-lg dark:divide-gray-800">
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
        <section className="mt-8 pt-8 md:mt-12 md:pt-12">
          <h2 className="mb-6 flex items-center text-2xl font-bold md:mb-8 md:text-3xl">
            Experience
          </h2>
          <ExperienceTimeline />
        </section>
      </div>
    </div>
  )
}
