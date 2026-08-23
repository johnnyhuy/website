'use client'

import { useState, useEffect, useMemo, type ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { Comments } from 'pliny/comments'
import { components } from '@/components/mdx-components'
import HeroPattern from '@/components/hero-pattern'
import Me from '@/data/images/me.jpg'
import siteMetadata from '@/data/siteMetadata'
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import type { Blog, Authors } from 'contentlayer/generated'

interface BlogPostProps {
  post: Blog
  author?: Authors
}

const SIGN_OFF_PHRASES = [
  'Thanks for reading',
  "You've made it this far",
  'Appreciate you reading',
  'Thanks for sticking around',
  'Cheers for stopping by',
  'Appreciate your time',
  'Still here? Nice',
]

// deterministic per post - same slug always gets the same sign-off
function seedIndex(seed: string, mod: number) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h % mod
}

function PostSignature({
  dateTime,
  year,
  phrase,
}: {
  dateTime: string
  year: string
  phrase: string
}) {
  return (
    <footer className="not-prose post-sig mt-8 flex items-center justify-end gap-3">
      <div className="flex flex-col gap-1 text-right">
        <p className="mono-label leading-tight">{phrase}</p>
        <p className="mono-label leading-tight">
          - John, <time dateTime={dateTime}>{year}</time>
        </p>
      </div>
      <Image
        src={Me}
        alt="Johnny Huynh"
        className="h-9 w-9 rounded-full border object-cover"
      />
    </footer>
  )
}

const withSignatureBeforeFootnotes = (dateTime: string, year: string, phrase: string) => {
  const Section = (props: ComponentPropsWithoutRef<'section'>) => {
    if (typeof props.className === 'string' && props.className.includes('footnotes')) {
      return (
        <>
          <PostSignature dateTime={dateTime} year={year} phrase={phrase} />
          <section {...props} />
        </>
      )
    }
    return <section {...props} />
  }
  return Section
}

export function BlogPost({ post }: BlogPostProps) {
  const postDate = parseISO(post.date)
  const isoDate = format(postDate, 'yyyy-MM-dd')
  const year = format(postDate, 'yyyy')
  const hasFootnotes = /^\[\^\d+\]:/m.test(post.body.raw)
  const signOff = SIGN_OFF_PHRASES[seedIndex(post.slug, SIGN_OFF_PHRASES.length)]
  // useMemo keeps the component identity stable across the 60s date tick,
  // so the MDX subtree never remounts
  const mdxComponents = useMemo(
    () => ({ ...components, section: withSignatureBeforeFootnotes(post.date, year, signOff) }),
    [post.date, year, signOff]
  )
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
          <MDXLayoutRenderer code={post.body.code} components={mdxComponents} />
        </div>

        {!hasFootnotes && <PostSignature dateTime={post.date} year={year} phrase={signOff} />}
      </article>

      {siteMetadata.comments?.provider && (
        <section
          aria-label="Comments"
          className="mt-12 border-t pt-10 md:mt-16 md:pt-12"
        >
          <h2 className="mono-label mb-6">comments</h2>
          <Comments commentsConfig={siteMetadata.comments} />
        </section>
      )}
    </div>
  )
}
