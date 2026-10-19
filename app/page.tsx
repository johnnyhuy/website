import Link from 'next/link'
import Image from 'next/image'
import { allBlogs, allDevlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { profile, experiences } from '@/data/siteData'
import CloudPattern from '@/components/cloud-pattern'
import PostList from '@/components/post-list'
import DevlogList from '@/components/devlog-list'
import { publishedOnly } from '@/lib/published'
import Me from '@/data/images/me.jpg'

const sortedPosts = sortPosts(allBlogs)
const corePosts = allCoreContent(sortedPosts)
const recentPosts: CoreContent<Blog>[] = corePosts.slice(0, 8)
const devlogs = allCoreContent(sortPosts(publishedOnly(allDevlogs)))
const recentDevlogs = devlogs.slice(0, 5)

export default function Home() {
  const current = experiences[0]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-25"
        >
          <CloudPattern className="absolute inset-0" animated />
        </div>
        <div className="relative px-6 pt-20 pb-16 md:pt-24">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src={Me}
              alt={profile.name}
              className="h-10 w-10 rounded-full border object-cover md:h-12 md:w-12"
              priority
            />
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{profile.name}</h1>
          </div>
          <p className="mb-8 max-w-prose text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {profile.bio}
          </p>
          <dl className="space-y-2 font-mono text-sm">
            <div className="flex gap-4">
              <dt className="mono-label w-12 shrink-0 pt-0.5">Now</dt>
              <dd className="text-gray-700 dark:text-gray-200">
                <Link
                  href="/now"
                  className="underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {current.position} @ {current.company}
                </Link>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mono-label w-12 shrink-0 pt-0.5">Else</dt>
              <dd className="flex gap-5">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                  >
                    {link.label.toLowerCase()} ↗
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Devlog */}
      <section className="border-b px-6 py-16">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="mono-label">Devlog</h2>
          <Link
            href="/devlog"
            className="mono-label underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            all entries
          </Link>
        </div>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Things I’m building, trying, and working out along the way.
        </p>
        {recentDevlogs.length > 0 ? (
          <DevlogList entries={recentDevlogs} />
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">First entry coming soon.</p>
        )}
      </section>

      {/* Writing */}
      <section className="px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="mono-label">Lingering thoughts</h2>
          <span className="mono-label">
            {corePosts.length} posts ·{' '}
            <Link
              href="/blog"
              className="underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
            >
              all
            </Link>
          </span>
        </div>
        <PostList posts={recentPosts} />
      </section>
    </div>
  )
}
