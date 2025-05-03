import Link from 'next/link'
import Image from 'next/image'
import { LuLinkedin, LuRss, LuGithub, LuCode } from 'react-icons/lu'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRadixui,
  SiPnpm,
} from 'react-icons/si'
import { profile } from '@/data/siteData'
import Me from '@/data/images/me.jpg'
import { LucideHome } from 'lucide-react'
import BackgroundWavyLines from './background-wavy-lines'

const Footer = () => {
  return (
    <footer className="relative">
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Main info (left) */}
          <div className="flex flex-col justify-center md:col-span-6 lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="border-primary/10 relative h-12 w-12 overflow-hidden rounded-full border-2">
                <Image src={Me} alt={profile.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-sm text-gray-400">{profile.title}</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-gray-400">{profile.bio}</p>
            <div className="mb-6 flex space-x-4">
              {profile.github && (
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <LuGithub className="hover:text-primary h-5 w-5" />
                  <span className="sr-only">Github</span>
                </Link>
              )}
              {profile.linkedin && (
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LuLinkedin className="hover:text-primary h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
            </div>
            <p className="text-sm text-gray-400">
              For recruitment and job opportunities, please contact me via LinkedIn only. I don't
              accept unsolicited phone calls or emails.
            </p>
          </div>

          {/* Stay Updated (right) */}
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            <h3 className="mb-4 text-lg font-medium">Stay Updated</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to my RSS feed to receive updates on new projects, blog posts, and tech
              insights.
            </p>
            <Link href="/rss.xml">
              <div className="inline-flex items-center gap-2 rounded-md bg-yellow-500 px-4 py-2 text-gray-900 hover:bg-yellow-400">
                <LuRss className="h-4 w-4" />
                <span>RSS Feed</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href={profile.siteRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-100"
            >
              <LuCode className="h-4 w-4" />
              <span className="text-xs">Source code</span>
            </Link>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-xs">Built with:</span>
              <div className="flex items-center gap-1.5">
                <SiNextdotjs
                  className="h-4 w-4 hover:text-[#000000] dark:hover:text-white"
                  title="Next.js"
                />
                <SiReact className="h-4 w-4 hover:text-[#61DAFB]" title="React" />
                <SiTypescript className="h-4 w-4 hover:text-[#3178C6]" title="TypeScript" />
                <SiTailwindcss className="h-4 w-4 hover:text-[#06B6D4]" title="Tailwind CSS" />
                <SiRadixui className="h-4 w-4 hover:text-[#E2E8F0]" title="Radix UI" />
                <SiPnpm className="h-4 w-4 hover:text-[#F69220]" title="pnpm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundWavyLines />
    </footer>
  )
}

export default Footer
