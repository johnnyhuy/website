'use client'

import { useLanyard } from 'react-use-lanyard'
import type { LanyardData as LibraryLanyardData, Activity as LibraryActivity, Spotify as LibrarySpotifyData, DiscordUser as LibraryDiscordUser } from 'react-use-lanyard/dist/types'
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
    return <div>Error loading Discord status.</div>
  }

  if (!lanyardSWRData) {
    return (
      <div className="flex items-center space-x-2 rounded-md border border-neutral-200 p-3 dark:border-neutral-700">
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
      <div className="flex items-center space-x-2 rounded-md border border-neutral-200 p-3 dark:border-neutral-700">
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

  const avatarUrl = discord_user?.avatar
    ? `https://cdn.discordapp.com/avatars/${profile.discord.userId}/${discord_user.avatar}.png`
    : '/images/default-discord.png'

  return (
    <a
      href={profile.discord.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-md border border-neutral-200 p-3 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src={avatarUrl}
            alt={`${discord_user.username}'s Discord Avatar`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white dark:border-neutral-900 ${statusColor}`}
            title={`Status: ${discord_status}`}
            aria-label={`Status: ${discord_status}`}
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="truncate text-sm font-semibold text-neutral-800 dark:text-neutral-100">
            {/* Use global_name instead of display_name */}
            {(discord_user?.global_name || discord_user?.username) ?? 'Discord User'}
          </p>
          {spotify ? (
            <p className="truncate text-xs text-neutral-600 dark:text-neutral-400">
              Listening to {spotify.song} by {spotify.artist}
            </p>
          ) : primaryActivity ? (
            <p className="truncate text-xs text-neutral-600 dark:text-neutral-400">
              {getActivityText(primaryActivity)}
            </p>
          ) : customStatus ? (
            <p className="truncate text-xs text-neutral-600 dark:text-neutral-400">
              {customStatus.state}
            </p>
          ) : (
            <p className="truncate text-xs capitalize text-neutral-600 dark:text-neutral-400">
              {discord_status}
            </p>
          )}
        </div>
        <SiDiscord className="h-5 w-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400" />
      </div>
    </a>
  )
}
