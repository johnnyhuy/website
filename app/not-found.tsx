'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-14">
      <div className="mx-auto flex max-w-3xl flex-col border-x px-6 py-24">
        <p className="mono-label mb-4">404</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mb-10 text-gray-600 dark:text-gray-300">
          Nothing lives here. It may have moved, or never existed.
        </p>
        <Link
          href="/"
          className="mono-label underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
        >
          &lt;- back home
        </Link>
      </div>
    </div>
  )
}
