import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { profile, experiences } from '@/data/siteData'
import CloudPattern from '@/components/cloud-pattern'
import PostList from '@/components/post-list'

const sortedPosts = sortPosts(allBlogs)
const corePosts = allCoreContent(sortedPosts)
const recentPosts: CoreContent<Blog>[] = corePosts.slice(0, 8)

export default function Home() {
  const current = experiences[0]

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-3xl border-x">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-40 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          >
            <CloudPattern className="absolute inset-0" animated={false} />
          </div>
          <div className="relative px-6 pt-24 pb-16 md:pt-32">
            <p className="mono-label mb-4">{profile.title}</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{profile.name}</h1>
            <p className="mb-8 max-w-prose text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {profile.bio}
            </p>
            <dl className="mb-8 space-y-2 font-mono text-sm">
              <div className="flex gap-4">
                <dt className="mono-label w-12 shrink-0 pt-0.5">Now</dt>
                <dd className="text-gray-700 dark:text-gray-200">
                  {current.position} @ {current.company}
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

        {/* Writing */}
        <section className="px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="mono-label">Lingering thoughts</h2>
            <span className="mono-label">
              {corePosts.length} posts · <Link href="/blog" className="underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100">all</Link>
            </span>
          </div>
          <PostList posts={recentPosts} />
        </section>
      </div>
    </div>
  )
}
