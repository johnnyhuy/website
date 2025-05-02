import Link from 'next/link'
import Image from 'next/image'
import { LuLinkedin, LuRss, LuCode, LuBookOpen, LuLaptop, LuGithub } from 'react-icons/lu'
import WavyLine from '@/components/wavy-line'
import { profile } from '@/data/siteData'
import Me from '@/data/images/me.jpg'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Abstract wavy background */}
      <WavyLine className="absolute inset-0 z-0 opacity-5" color="currentColor" animated={false} />

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Main info */}
          <div className="md:col-span-5 lg:col-span-4">
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

          {/* RSS Feed */}
          <div className="md:col-span-7 lg:col-span-4">
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

          {/* Categories */}
          <div className="md:col-span-12 lg:col-span-4">
            <h3 className="mb-4 text-lg font-medium">Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/blog?tag=DevOps"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <LuCode className="h-4 w-4" />
                <span className="text-sm">DevOps</span>
              </Link>
              <Link
                href="/blog?tag=Kubernetes"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <LuLaptop className="h-4 w-4" />
                <span className="text-sm">Kubernetes</span>
              </Link>
              <Link
                href="/blog?tag=Cloud"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <LuBookOpen className="h-4 w-4" />
                <span className="text-sm">Cloud</span>
              </Link>
              <Link
                href="/blog?tag=Architecture"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <LuCode className="h-4 w-4" />
                <span className="text-sm">Architecture</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
