import Link from 'next/link'
import Image from 'next/image'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { profile, experiences } from '@/data/siteData'
import CloudPattern from '@/components/cloud-pattern'
import PostList from '@/components/post-list'
import Me from '@/data/images/me.jpg'

const sortedPosts = sortPosts(allBlogs)
const corePosts = allCoreContent(sortedPosts)
const recentPosts: CoreContent<Blog>[] = corePosts.slice(0, 8)

export default function Home() {
  const current = experiences[0]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        >
          <CloudPattern className="absolute inset-0" animated />
        </div>
        <div className="relative px-6 pt-20 pb-16 md:pt-24">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src={Me}
              alt={profile.name}
              className="h-10 w-10 rounded-full border object-cover grayscale md:h-12 md:w-12"
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
