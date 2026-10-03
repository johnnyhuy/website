'use client'

import { createElement } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { components } from '@/components/mdx-components'
import { resolvePostIcon } from '@/lib/post-icons'
import { format, parseISO } from 'date-fns'
import type { Notes } from 'contentlayer/generated'

interface NoteViewProps {
  note: Notes
  relatedNotes?: Array<{ slug: string; title: string; date: string; icon?: string }>
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
// no sign-off block, no comments: a note is a reference, not an essay, and
// the chrome that makes a long read feel like a long read is noise here.
export function Note({ note, relatedNotes }: NoteViewProps) {
  return (
    <div className="px-6 py-12 md:py-16">
      <Link
        href="/notes"
        className="mono-label mb-10 inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <ArrowLeft className="h-3 w-3" />
        all notes
      </Link>

      <article itemScope itemType="https://schema.org/TechArticle">
        <header className="mb-10 border-b pb-8">
          <div className="mb-4 flex items-center gap-2">
            <PostIcon name={note.icon} className={ICON_CLASS} />
            <span className="mono-label" itemProp="datePublished">
              <time dateTime={note.date}>{format(parseISO(note.date), 'yyyy-MM-dd')}</time>
              {note.readingTime?.text ? ` · ${note.readingTime.text}` : ''}
            </span>
          </div>

          <h1 itemProp="headline" className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            {note.title}
          </h1>

          {note.summary && <p className="text-gray-500 dark:text-gray-400">{note.summary}</p>}

          {note.tags && note.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {note.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/notes?tag=${encodeURIComponent(tag)}`}
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
          <MDXLayoutRenderer code={note.body.code} components={components} />
        </div>
      </article>

      {relatedNotes && relatedNotes.length > 0 && (
        <section aria-label="Related notes" className="mt-12 border-t pt-8">
          <h2 className="mono-label mb-4">related notes</h2>
          <ul className="divide-y border-y">
            {relatedNotes.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/notes/${related.slug}`}
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
