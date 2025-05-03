'use client'
import type { FC } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export const Error: FC<ErrorProps> = ({ error, reset }) => (
  <main
    className="flex min-h-screen flex-col items-center justify-center"
    role="main"
    aria-label="Application Error"
  >
    <h1 className="mb-4 text-5xl font-bold">Something went wrong</h1>
    <p className="mb-8 text-lg">{error.message || 'An unexpected error has occurred.'}</p>
    <Button
      onClick={reset}
      variant="default"
      size="default"
      aria-label="Try again"
      className="mt-2"
    >
      Try Again
    </Button>
  </main>
)

export default Error
