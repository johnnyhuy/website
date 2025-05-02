'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
import Calendar, { type Props as ActivityCalendarProps } from 'react-activity-calendar'
import { SiDiscord } from 'react-icons/si'
import { useTheme } from 'next-themes'
import { profile } from '@/data/siteData'

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
      'var(--color-background)',
      'var(--color-yellow-100)',
      'var(--color-yellow-200)',
      'var(--color-yellow-400)',
      'var(--color-yellow-800)',
    ],
    light: [
      'var(--color-background)',
      'var(--color-yellow-100)',
      'var(--color-yellow-300)',
      'var(--color-yellow-500)',
      'var(--color-yellow-700)',
    ],
  }

  const calendarContainerRef = useRef<HTMLDivElement>(null)
  const mobileCalendarContainerRef = useRef<HTMLDivElement>(null)

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCalendarData(profile.githubUsername)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  useEffect(fetchData, [fetchData])

  useEffect(() => {
    if (!loading && data) {
      // Desktop calendar scroll
      if (calendarContainerRef.current) {
        calendarContainerRef.current.scrollLeft = calendarContainerRef.current.scrollWidth
      }
      // Mobile calendar scroll
      if (mobileCalendarContainerRef.current) {
        mobileCalendarContainerRef.current.scrollLeft =
          mobileCalendarContainerRef.current.scrollWidth
      }
    }
  }, [loading, data])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <SiDiscord className="h-auto w-24 text-[#5865F2] sm:w-48" />
        <p className="text-muted-foreground w-48 text-center text-sm sm:w-64">
          This component is down. Please DM me on{' '}
          <a
            href={profile.discord.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Discord
          </a>
          !
        </p>
      </div>
    )
  }

  if (loading || !data) {
    return <Skeleton className="h-[70%] w-[85%] rounded-3xl" />
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
    <>
      <div className="m-4 hidden sm:block" ref={calendarContainerRef} style={{ overflowX: 'auto' }}>
        <Calendar
          data={selectLastNMonths(data.contributions, 6)}
          theme={calendarTheme}
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={16}
          blockMargin={6}
          blockRadius={4}
          maxLevel={4}
        />
      </div>
      <div
        className="m-4 scale-110 sm:hidden"
        ref={mobileCalendarContainerRef}
        style={{ overflowX: 'auto' }}
      >
        <Calendar
          data={selectLastNMonths(data.contributions, 6)}
          theme={calendarTheme}
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={20}
          blockMargin={6}
          blockRadius={7}
          maxLevel={4}
          hideTotalCount
          hideColorLegend
        />
      </div>
    </>
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
