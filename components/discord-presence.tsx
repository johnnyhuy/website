'use client'

import { useLanyard } from 'react-use-lanyard'
import type {
  LanyardData as LibraryLanyardData,
  Activity as LibraryActivity,
  Spotify as LibrarySpotifyData,
  DiscordUser as LibraryDiscordUser,
} from 'react-use-lanyard/dist/types'
import { profile } from '@/data/siteData'
import Image from 'next/image'
import { SiDiscord } from 'react-icons/si'

interface LanyardData extends LibraryLanyardData {}
interface Activity extends LibraryActivity {}
interface SpotifyData extends LibrarySpotifyData {}
interface DiscordUser extends LibraryDiscordUser {}

const getStatusColor = (status: LanyardData['discord_status']) => {
  switch (status) {
    case 'online':
      return 'bg-green-500'
    case 'idle':
      return 'bg-yellow-500'
    case 'dnd':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}

const getActivityText = (activity: Activity): string => {
  switch (activity.type) {
    case 0:
      return `Playing ${activity.name}`
    case 2:
      return ''
    case 4:
      return activity.state || 'Custom Status'
    default:
      return `${activity.name}: ${activity.state || activity.details || ''}`
  }
}

export function DiscordPresence() {
  const { data: lanyardSWRData, error } = useLanyard({ userId: profile.discord.userId })

  if (error) {
    console.error('Lanyard hook error:', error)
    return (
      <div className="flex items-center space-x-2 rounded-md p-3">
        <SiDiscord className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Discord Status
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">Error loading</p>
        </div>
      </div>
    )
  }

  if (!lanyardSWRData) {
    return (
      <div className="flex items-center space-x-2 rounded-md p-3">
        <SiDiscord className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Discord Status
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    )
  }

  const lanyardData = lanyardSWRData.data

  if (!lanyardData) {
    return (
      <div className="flex items-center space-x-2 rounded-md p-3">
        <SiDiscord className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            Discord Status
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            {lanyardSWRData.error?.message ?? 'Unavailable'}
          </p>
        </div>
      </div>
    )
  }

  const { discord_status, activities, spotify, discord_user } = lanyardData
  const statusColor = getStatusColor(discord_status)
  const primaryActivity = activities?.find((a: Activity) => a.type !== 4)
  const customStatus = activities?.find((a: Activity) => a.type === 4)
  const avatarUrl = discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${profile.discord.userId}/${discord_user.avatar}.png`
    : '/images/default-discord.png'

  let activityText = ''
  if (spotify) {
    activityText = `Listening to ${spotify.song}`
  } else if (primaryActivity) {
    activityText = getActivityText(primaryActivity)
  } else if (customStatus) {
    activityText = customStatus.state ?? ''
  } else {
    activityText = discord_status.charAt(0).toUpperCase() + discord_status.slice(1)
  }

  return (
    <div className="flex h-full w-full flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`${discord_user.username}'s Discord Avatar`}
            width={40}
            height={40}
            className="rounded-full border-2 border-white dark:border-neutral-900"
          />
          <span
            className={`absolute right-0 bottom-0 block h-3.5 w-3.5 rounded-full border-2 border-white dark:border-neutral-900 ${statusColor}`}
            title={`Status: ${discord_status}`}
            aria-label={`Status: ${discord_status}`}
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-neutral-800 dark:text-neutral-100">
            {discord_user.global_name || discord_user.username}
          </span>
          <span className="truncate text-xs text-neutral-500 dark:text-neutral-400">
            @{discord_user.username}
          </span>
        </div>
      </div>

      <div className="hidden flex-shrink-0 text-right text-xs text-neutral-600 sm:block dark:text-neutral-400">
        <p className="truncate" title={activityText}>
          {activityText}
        </p>
      </div>
    </div>
  )
}
