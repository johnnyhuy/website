'use client'

import { createElement } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { components } from '@/components/mdx-components'
import { resolvePostIcon } from '@/lib/post-icons'
import { format, parseISO } from 'date-fns'
import type { Devlog } from 'contentlayer/generated'

interface DevlogViewProps {
  entry: Devlog
  related?: Array<{ slug: string; title: string; date: string; icon?: string }>
}

const ICON_CLASS = 'h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500'

// resolvePostIcon during render and then using it as <Icon /> trips
// react-hooks/static-components. createElement sidesteps it the same way
// NavLogoIcon does in components/navbar.tsx: the registry only ever returns
// a fixed set of components, so there is no per-render identity to lose.
function PostIcon({ name, className }: { name?: string; className: string }) {
  return createElement(resolvePostIcon(name), { className, 'aria-hidden': true })
}

// Deliberately lighter than BlogPost. No hero pattern band, no card peek,
// no sign-off block, no comments: an entry is a reference, not an essay, and
// the chrome that makes a long read feel like a long read is noise here.
export function Devlog({ entry, related }: DevlogViewProps) {
  return (
    <div className="px-6 py-12 md:py-16">
      <Link
        href="/devlog"
        className="mono-label mb-10 inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <ArrowLeft className="h-3 w-3" />
        all entries
      </Link>

      <article itemScope itemType="https://schema.org/TechArticle">
        <header className="mb-10 border-b pb-8">
          <div className="mb-4 flex items-center gap-2">
            <PostIcon name={entry.icon} className={ICON_CLASS} />
            <span className="mono-label" itemProp="datePublished">
              <time dateTime={entry.date}>{format(parseISO(entry.date), 'yyyy-MM-dd')}</time>
              {entry.readingTime?.text ? ` · ${entry.readingTime.text}` : ''}
            </span>
          </div>

          <h1 itemProp="headline" className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            {entry.title}
          </h1>

          {entry.summary && <p className="text-gray-500 dark:text-gray-400">{entry.summary}</p>}

          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {entry.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/devlog?tag=${encodeURIComponent(tag)}`}
                  className="font-mono text-xs text-gray-500 underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div
          itemProp="articleBody"
          className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 max-w-none"
        >
          <MDXLayoutRenderer code={entry.body.code} components={components} />
        </div>
      </article>

      {related && related.length > 0 && (
        <section aria-label="Related entries" className="mt-12 border-t pt-8">
          <h2 className="mono-label mb-4">related entries</h2>
          <ul className="divide-y border-y">
            {related.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/devlog/${related.slug}`}
                  className="group flex items-baseline gap-4 py-3 transition-colors hover:bg-gray-100/60 md:gap-6 dark:hover:bg-gray-800/40"
                >
                  <time
                    dateTime={related.date}
                    className="shrink-0 font-mono text-xs text-gray-500 tabular-nums dark:text-gray-400"
                  >
                    {format(parseISO(related.date), 'yyyy-MM-dd')}
                  </time>
                  <PostIcon
                    name={related.icon}
                    className="h-4 w-4 shrink-0 translate-y-0.5 text-gray-400 dark:text-gray-500"
                  />
                  <span className="min-w-0 flex-1 truncate font-medium text-gray-900 group-hover:underline group-hover:decoration-yellow-500 group-hover:underline-offset-4 dark:text-gray-100">
                    {related.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
