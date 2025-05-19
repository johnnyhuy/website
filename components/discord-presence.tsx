'use client'

import { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

// Lazy load the heavy lanyard dependency
const LanyardPresence = dynamic(() => import('@/components/lanyard-presence'), {
  ssr: false,
  loading: () => (
    <div className="h-32 w-full">
      <Skeleton className="h-full w-full" />
    </div>
  ),
})

interface DiscordPresenceProps {
  initialData?: any
}

export function DiscordPresence({ initialData }: DiscordPresenceProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="h-32 w-full">
        <Skeleton className="h-full w-full" />
      </div>
    )
  }

  return (
    <Suspense fallback={<Skeleton className="h-32 w-full" />}>
      <LanyardPresence initialData={initialData} />
    </Suspense>
  )
}
