'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { components } from '@/components/mdx-components'
import HeroPattern from '@/components/hero-pattern'
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import type { Blog, Authors } from 'contentlayer/generated'

interface BlogPostProps {
  post: Blog
  author?: Authors
}

export function BlogPost({ post }: BlogPostProps) {
  const postDate = parseISO(post.date)
  const isoDate = format(postDate, 'yyyy-MM-dd')
  const [formattedRelativeDate, setFormattedRelativeDate] = useState('')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormattedRelativeDate(formatDistanceToNow(postDate, { addSuffix: true }))

    const timer = setInterval(() => {
      setFormattedRelativeDate(formatDistanceToNow(postDate, { addSuffix: true }))
    }, 60000)

    return () => clearInterval(timer)
  }, [postDate])

  return (
    <div className="px-6 py-12 md:py-16">
      <Link
        href="/blog"
        className="mono-label mb-10 inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <ArrowLeft className="h-3 w-3" />
        all posts
      </Link>

      <article itemScope itemType="https://schema.org/BlogPosting">
        <header className="relative mb-10 border-b pb-10 md:mb-12">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 text-gray-800 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)] dark:text-gray-200"
          >
            <HeroPattern seed={post.slug} className="absolute inset-0" />
          </div>
          <div className="relative pt-20">
            <h1 itemProp="headline" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              {post.title}
            </h1>

            <p className="mono-label mb-6">
              <time dateTime={post.date} itemProp="datePublished">
                {isoDate}
              </time>
              {formattedRelativeDate ? ` · ${formattedRelativeDate}` : ''}
              {post.readingTime?.text ? ` · ${post.readingTime.text}` : ''}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {post.tags.map((tag: string, index: number) => (
                  <Link
                    href={`/blog?tag=${tag}`}
                    key={index}
                    className="font-mono text-xs text-gray-500 underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        {post.image && (
          <div className="relative mb-10 flex h-[250px] w-full items-center justify-center overflow-hidden border bg-gray-100 md:h-[350px] dark:bg-gray-800">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div
          itemProp="articleBody"
          className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 max-w-none"
        >
          <MDXLayoutRenderer code={post.body.code} components={components} />
        </div>
      </article>
    </div>
  )
}
