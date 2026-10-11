import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { resolvePostIcon } from '@/lib/post-icons'

interface DevlogListItem {
  slug: string
  title: string
  date: string
  summary?: string
  icon?: string
}

interface DevlogListProps {
  entries: DevlogListItem[]
}

// Denser than PostList: py-3 against py-4, no thumbnail peek, and the
// summary sits under the title instead of being deferred to the detail
// page. Entries are meant to be scanned, not browsed.
export default function DevlogList({ entries }: DevlogListProps) {
  return (
    <ul className="divide-y border-y">
      {entries.map((entry) => {
        const Icon = resolvePostIcon(entry.icon)
        return (
          <li key={entry.slug} className="group relative">
            <Link
              href={`/devlog/${entry.slug}`}
              className="flex flex-col gap-1.5 py-3 transition-colors hover:bg-gray-100/60 md:flex-row md:items-baseline md:gap-6 dark:hover:bg-gray-800/40"
            >
              <time
                dateTime={entry.date}
                className="shrink-0 font-mono text-xs text-gray-500 tabular-nums dark:text-gray-400"
              >
                {format(parseISO(entry.date), 'yyyy-MM-dd')}
              </time>
              <Icon
                aria-hidden="true"
                className="hidden h-4 w-4 shrink-0 translate-y-0.5 text-gray-400 md:block dark:text-gray-500"
              />
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-gray-900 group-hover:underline group-hover:decoration-yellow-500 group-hover:underline-offset-4 dark:text-gray-100">
                  {entry.title}
                </span>
                {entry.summary && (
                  <span className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                    {entry.summary}
                  </span>
                )}
              </span>
              <span
                aria-hidden="true"
                className="hidden shrink-0 font-mono text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 md:block"
              >
                -&gt;
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
