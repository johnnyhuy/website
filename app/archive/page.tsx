import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'Snapshots of this website at different points in time.',
}

const versions = [
  {
    id: 'v3',
    name: 'The bento grid',
    period: '2025 — 2026',
    stack: 'Next.js, Tailwind, Contentlayer',
    note: 'Cards, widgets, live presence, activity graphs. Everything I was up to, on one grid.',
    href: '/archive/v3',
  },
  {
    id: 'v2',
    name: 'The first Next.js',
    period: '2025',
    stack: 'Next.js, Tailwind, Contentlayer',
    note: 'The first cut of the rewrite off Jekyll. Rough edges and all.',
    href: '/archive/v2',
  },
  {
    id: 'v1',
    name: 'The original',
    period: '2020 — 2025',
    stack: 'Jekyll, GitHub Pages gem',
    note: 'Where it started. Repo cards pulled straight from the GitHub API.',
    href: '/archive/v1',
  },
]

export default function ArchivePage() {
  return (
    <div className="px-6 py-16">
        <div className="mb-4 flex items-baseline justify-between">
          <h1 className="mono-label">Archive</h1>
          <span className="mono-label">{versions.length} versions</span>
        </div>
        <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
          This site gets rebuilt every so often. Older versions are frozen here as static snapshots,
          served from this domain for posterity.
        </p>

        <ul className="divide-y border-y">
          {versions.map((v) => (
            <li key={v.id}>
              <a
                href={v.href}
                className="group flex items-baseline gap-4 py-5 transition-colors hover:bg-gray-100/60 md:gap-6 dark:hover:bg-gray-800/40"
              >
                <span className="mono-label w-8 shrink-0 pt-0.5">{v.id}</span>
                <span className="min-w-0 flex-1">
                  <span className="font-medium text-gray-900 group-hover:underline group-hover:decoration-yellow-500 group-hover:underline-offset-4 dark:text-gray-100">
                    {v.name}
                  </span>
                  <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                    {v.note}
                  </span>
                  <span className="mono-label mt-2 block">
                    {v.period} · {v.stack}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="hidden shrink-0 font-mono text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 md:block"
                >
                  -&gt;
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mono-label mt-8">Current: v4, the one you are looking at</p>
    </div>
  )
}
