import type { Metadata } from 'next'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { now } from '@/data/now'
import { allBlogs, allDevlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import DevlogList from '@/components/devlog-list'
import PostList from '@/components/post-list'

const description = 'What I’m working on, tinkering with, and writing about at the moment.'

export const metadata: Metadata = {
  title: 'Now',
  description,
  alternates: { canonical: '/now' },
  openGraph: { title: 'Now', description, url: '/now' },
  twitter: { title: 'Now', description },
}

const buildTime = Date.now()
const published = <T extends { date: string; draft?: boolean }>(posts: T[]) =>
  posts.filter((post) => post.draft !== true && Date.parse(post.date) <= buildTime)
const devlogs = allCoreContent(sortPosts(published(allDevlogs))).slice(0, 3)
const blogs = allCoreContent(sortPosts(published(allBlogs))).slice(0, 3)
// Content dates describe actual updates; daily rebuilds should not bump this label.
const updated = new Date(
  Math.max(
    ...[now.updated, ...devlogs.map((post) => post.date), ...blogs.map((post) => post.date)].map(
      Date.parse
    )
  )
).toISOString()

export default function NowPage() {
  return (
    <div>
      <header className="border-b px-6 py-16">
        <p className="mono-label mb-6">
          Updated <time dateTime={updated}>{format(parseISO(updated), 'd MMMM yyyy')}</time>
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Now</h1>
        <p className="max-w-prose text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </header>

      {now.sections.map((section) => (
        <section key={section.title} className="border-b px-6 py-10">
          <h2 className="mono-label mb-4">{section.title}</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">{section.description}</p>
        </section>
      ))}

      <section className="border-b px-6 py-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="mono-label">Tinkering</h2>
          <Link
            href="/devlog"
            className="mono-label underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            all entries
          </Link>
        </div>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          The latest things I’ve been building, trying, and working out.
        </p>
        {devlogs.length > 0 ? (
          <DevlogList entries={devlogs} />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">First entry coming soon.</p>
        )}
      </section>

      <section className="border-b px-6 py-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="mono-label">Writing</h2>
          <Link
            href="/blog"
            className="mono-label underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            all posts
          </Link>
        </div>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          A peek at my recently published blog posts.
        </p>
        {blogs.length > 0 ? (
          <PostList posts={blogs} showSummary />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">First post coming soon.</p>
        )}
      </section>
    </div>
  )
}
