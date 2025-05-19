'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

interface WakaTimeChartProps {
  omitLanguages?: string[]
}

// Lazy load the chart with a skeleton fallback
const WakaTimeChart = dynamic<WakaTimeChartProps>(() => import('@/components/wakatime-chart'), {
  ssr: false,
  loading: () => (
    <div className="size-full p-4">
      <Skeleton className="h-32 w-full" />
    </div>
  ),
})

interface Props {
  omitLanguages?: string[]
}

const WakatimeGraph = ({ omitLanguages = [] }: Props) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="size-full p-4">
        <div className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
          languages all time spent
        </div>
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  return <WakaTimeChart omitLanguages={omitLanguages} />
}

export default WakatimeGraph
