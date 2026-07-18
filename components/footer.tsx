import Link from 'next/link'
import { profile } from '@/data/siteData'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="mono-label">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <nav className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-gray-900 dark:hover:text-gray-100"
          >
            github ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-gray-900 dark:hover:text-gray-100"
          >
            linkedin ↗
          </a>
          <Link href="/feed.xml" className="mono-label hover:text-gray-900 dark:hover:text-gray-100">
            rss
          </Link>
          <a
            href={profile.siteRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-gray-900 dark:hover:text-gray-100"
          >
            source ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
