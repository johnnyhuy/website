'use client'
import { useMemo, useState, useEffect } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { lanyard } from '@/data/siteData'

const DiscordPresence = () => {
  const isLoading = false

  const { discord_user, discord_status, activities } = lanyard.data
  const avatarUrl = discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=128`
    : undefined

  // Find main activity (type 0, with assets)
  const mainActivity = useMemo(() => {
    if (!activities) return null
    return activities.find((activity) => activity.type === 0 && activity.assets)
  }, [activities])

  // Elapsed time for activity
  const [elapsedTime, setElapsedTime] = useState('')
  useEffect(() => {
    if (!mainActivity?.timestamps?.start) return
    const updateElapsedTime = () => {
      if (mainActivity.timestamps?.start) {
        const now = Date.now()
        const elapsed = now - mainActivity.timestamps.start
        const hours = Math.floor(elapsed / 3600000)
        const minutes = Math.floor((elapsed % 3600000) / 60000)
        const seconds = Math.floor((elapsed % 60000) / 1000)
        setElapsedTime(
          hours > 0
            ? `${hours}h ${minutes}m`
            : minutes > 0
              ? `${minutes}m ${seconds}s`
              : `${seconds}s`
        )
      }
    }
    updateElapsedTime()
    const intervalId = setInterval(updateElapsedTime, 1000)
    return () => clearInterval(intervalId)
  }, [mainActivity])

  if (isLoading) {
    return (
      <div className="relative overflow-hidden sm:aspect-square">
        <Skeleton className="bg-secondary/50 h-40 w-full" />
      </div>
    )
  }

  if (!lanyard || !lanyard.data) {
    return null
  }

  return (
    <div className="flex h-full w-full flex-row justify-between gap-1 pr-2 pb-2">
      {/* Header: Avatar, Name, Status, Discord logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={discord_user.display_name || discord_user.username}
                className="border-background h-10 w-10 rounded-full border-2 object-cover"
                width={48}
                height={48}
              />
            ) : (
              <div className="bg-secondary flex h-12 w-12 items-center justify-center rounded-full">
                <FaDiscord className="text-xl text-gray-400" />
              </div>
            )}
            {/* Status dot */}
            <span
              className={cn(
                'absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-900',
                discord_status === 'online' && 'bg-green-500',
                discord_status === 'idle' && 'bg-yellow-400',
                discord_status === 'dnd' && 'bg-red-500',
                discord_status !== 'online' &&
                  discord_status !== 'idle' &&
                  discord_status !== 'dnd' &&
                  'bg-gray-400 dark:bg-gray-600'
              )}
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-base font-semibold">
              {discord_user.display_name || discord_user.username}
            </span>
            <span className="truncate text-xs text-gray-400">@{discord_user.username}</span>
          </div>
        </div>
      </div>
      {/* Activity Section */}
      <div className="flex items-center gap-4">
        {mainActivity ? (
          <>
            <div className="bg-secondary relative flex h-10 w-10 items-center justify-center rounded-lg">
              <img
                src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.large_image}.png`}
                alt={mainActivity.assets.large_text || mainActivity.name}
                width={42}
                height={42}
                className="rounded-md"
              />
              {mainActivity.assets.small_image && (
                <img
                  src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.small_image}.png`}
                  alt={mainActivity.assets.small_text || ''}
                  width={20}
                  height={20}
                  className="border-border bg-background absolute -right-2 -bottom-2 rounded-full border shadow-sm"
                />
              )}
            </div>
          </>
        ) : (
          <div className="text-xs text-gray-400">No current activity</div>
        )}
      </div>
    </div>
  )
}

export default DiscordPresence
