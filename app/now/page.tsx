import type { Metadata } from 'next'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { now } from '@/data/now'

const description = 'What I’m working on, tinkering with, and writing about at the moment.'

export const metadata: Metadata = {
  title: 'Now',
  description,
  alternates: { canonical: '/now' },
  openGraph: { title: 'Now', description, url: '/now' },
  twitter: { title: 'Now', description },
}

export default function NowPage() {
  return (
    <div>
      <header className="border-b px-6 py-16">
        <p className="mono-label mb-6">
          Updated <time dateTime={now.updated}>{format(parseISO(now.updated), 'd MMMM yyyy')}</time>
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
          {section.links.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
