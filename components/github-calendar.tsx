'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useState } from 'react'
import Calendar, { type Props as ActivityCalendarProps } from 'react-activity-calendar'
import { SiDiscord } from 'react-icons/si'
import { useTheme } from 'next-themes'
import { profile } from '@/data/siteData'

// Adopted from https://github.com/grubersjoe/react-github-calendar & https://github.com/jktrn/enscribe.dev
// All credit to the original authors
// All legal rights reserved to the original authors

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${new Date().getFullYear()}`
  )
  const data: ApiResponse | ApiErrorResponse = await response.json()

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`
    )
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

  return (
    <>
      <div className="m-4 hidden sm:block">
        <Calendar
          data={selectLastNDays(data.contributions, 133)}
          theme={calendarTheme}
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={16}
          blockMargin={6}
          blockRadius={4}
          {...props}
          maxLevel={4}
        />
      </div>
      <div className="m-4 scale-110 sm:hidden">
        <Calendar
          data={selectLastNDays(data.contributions, 60)}
          theme={calendarTheme}
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          blockSize={20}
          blockMargin={6}
          blockRadius={7}
          {...props}
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

const selectLastNDays = (contributions: Activity[], days: number) => {
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - days)

  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date)
    return activityDate >= startDate && activityDate <= today
  })
}

export default GithubCalendar
