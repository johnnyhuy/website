'use client'
import type { FC } from 'react'

export const NotFound: FC = () => (
  <main
    className="flex min-h-screen flex-col items-center justify-center"
    role="main"
    aria-label="404 Not Found"
  >
    <h1 className="mb-4 text-5xl font-bold">404 - Page Not Found</h1>
    <p className="mb-8 text-lg">Sorry, the page you are looking for does not exist.</p>
    <a
      href="/"
      className="rounded bg-black px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none dark:bg-white dark:text-black dark:focus:ring-white"
      aria-label="Go to homepage"
    >
      Go Home
    </a>
  </main>
)

export default NotFound
