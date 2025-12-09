'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { SiGithub } from 'react-icons/si'
import { useTheme } from 'next-themes'
import { profile } from '@/data/siteData'

// Lazy load the heavy calendar component
const Calendar = dynamic(() => import('react-activity-calendar').then((mod) => mod.ActivityCalendar), {
  ssr: false,
  loading: () => <Skeleton className="h-[70%] w-[85%]" />,
})

// Import the type separately to avoid loading the component during SSR
type ActivityCalendarProps = import('react-activity-calendar').Props

// Adopted from https://github.com/grubersjoe/react-github-calendar & https://github.com/jktrn/enscribe.dev
// All credit to the original authors
// All legal rights reserved to the original authors

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const currentYear = new Date().getFullYear()
  const lastYear = currentYear - 1

  // Fetch both years in a single request
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}&y=${lastYear}`
  )
  const data: ApiResponse | ApiErrorResponse = await response.json()

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`
    )
  }

  // Sort contributions by date ascending
  if ('contributions' in data && Array.isArray(data.contributions)) {
    data.contributions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  return data as ApiResponse
}

const GithubCalendar: FunctionComponent<Props> = (props) => {
  const { resolvedTheme } = useTheme()
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const calendarTheme = {
    dark: [
      'var(--color-gray-800)',
      'var(--color-yellow-900)',
      'var(--color-yellow-700)',
      'var(--color-yellow-600)',
      'var(--color-yellow-500)',
    ],
    light: [
      'var(--color-gray-100)',
      'var(--color-yellow-200)',
      'var(--color-yellow-400)',
      'var(--color-yellow-600)',
      'var(--color-yellow-800)',
    ],
  }

  const calendarContainerRef = useRef<HTMLDivElement>(null)

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCalendarData(profile.githubUsername)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  useEffect(fetchData, [fetchData])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <SiGithub className="h-12 w-12 text-gray-400 dark:text-gray-600" />
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Unable to load GitHub activity. Try refreshing the page.
        </p>
      </div>
    )
  }

  if (loading || !data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Skeleton className="h-[70%] w-[85%]" />
      </div>
    )
  }

  // Returns only the contributions from the last N months, up to but not including today
  const selectLastNMonths = (
    contributions: Activity[],
    months: number,
    currentDate: Date = new Date()
  ) => {
    // Start from the first day of the month N months ago
    const start = new Date(currentDate.getFullYear(), currentDate.getMonth() - months, 1)
    // End at the last day of the previous month
    const end = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
    return contributions.filter((activity) => {
      const activityDate = new Date(activity.date)
      return activityDate >= start && activityDate <= end
    })
  }

  return (
    <div className="hide-scrollbar m-4 overflow-x-auto" ref={calendarContainerRef}>
      <Calendar
        data={selectLastNMonths(data.contributions, 6)}
        theme={calendarTheme}
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        blockSize={16}
        blockMargin={6}
        blockRadius={4}
        maxLevel={4}
        labels={{
          totalCount:
            '{{count}} activities in ' +
            (new Date().getFullYear() - 1) +
            ' & ' +
            new Date().getFullYear(),
        }}
      />
    </div>
  )
}

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: Array<Activity>
}

interface ApiErrorResponse {
  error: string
}

export default GithubCalendar
