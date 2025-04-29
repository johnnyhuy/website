'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useState } from 'react'
import Calendar, {
  type Props as ActivityCalendarProps,
} from 'react-activity-calendar'
import { SiDiscord } from 'react-icons/si'
import { useTheme } from "next-themes"

// Adopted from https://github.com/grubersjoe/react-github-calendar & https://github.com/jktrn/enscribe.dev
// All credit to the original authors
// All legal rights reserved to the original authors

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {
  username: string
}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
  )
  const data: ApiResponse | ApiErrorResponse = await response.json()

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`,
    )
  }

  return data as ApiResponse
}

const GithubCalendar: FunctionComponent<Props> = ({ username, ...props }) => {
  const { resolvedTheme } = useTheme();
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const calendarTheme = {
    dark: [
      'hsl(var(--background))',
      'hsl(var(--yellow-100))',
      'hsl(var(--yellow-200))',
      'hsl(var(--yellow-300))',
      'hsl(var(--yellow-400))',
    ],
    light: [
      'hsl(var(--background))',
      'hsl(var(--yellow-100))',
      'hsl(var(--yellow-200))',
      'hsl(var(--yellow-300))',
      'hsl(var(--yellow-400))',
    ],
  };

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCalendarData(username)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [username])

  useEffect(fetchData, [fetchData])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <SiDiscord className="w-24 h-auto sm:w-48 text-[#5865F2]" />
        <p className="w-48 text-center text-sm text-muted-foreground sm:w-64">
          This component is down. Please DM me on{' '}
          <a
            href="https://discord.com/users/183829779810615297"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary"
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
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          blockSize={20}
          blockMargin={6}
          blockRadius={7}
          {...props}
          maxLevel={4}
          hideTotalCount
          hideColorLegend
        />
      </div>
      <div className="m-4 scale-110 sm:hidden">
        <Calendar
          data={selectLastNDays(data.contributions, 60)}
          theme={calendarTheme}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
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
