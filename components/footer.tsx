import Link from 'next/link'
import Image from 'next/image'
import { LuLinkedin, LuRss, LuGithub, LuCode } from 'react-icons/lu'
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
                <p className="text-muted-foreground text-sm">{profile.jobTitle}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">{profile.bio}</p>
            <div className="mb-6 flex space-x-4">
              {profile.github && (
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <LuGithub className="hover:text-primary h-5 w-5 transition-colors" />
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
                  <LuLinkedin className="hover:text-primary h-5 w-5 transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
            </div>
            <p className="text-muted-foreground text-sm">
              For recruitment and job opportunities, please contact me via LinkedIn only. I don't
              accept unsolicited phone calls or emails.
            </p>
          </div>

          {/* Stay Updated (right) */}
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            <h3 className="mb-4 text-lg font-medium">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to my RSS feed to receive updates on new projects, blog posts, and tech
              insights.
            </p>
            <Link href="/rss.xml">
              <div className="bg-secondary hover:bg-secondary/80 inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors">
                <LuRss className="h-4 w-4" />
                <span>Subscribe to RSS Feed</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <LucideHome className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="https://github.com/johnnyhuy/website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <LuCode className="h-4 w-4" />
              <span>Source code</span>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundWavyLines />
    </footer>
  )
}

export default Footer
