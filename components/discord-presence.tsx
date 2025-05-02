"use client"
import { useMemo, useState, useEffect } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { statusColors, lanyard } from '@/data/siteData'

// const statusColors: Record<string, string> = {
//   online: 'bg-green-500',
//   idle: 'bg-yellow-400',
//   dnd: 'bg-red-500',
//   offline: 'bg-muted-foreground',
// }

const DiscordPresence = () => {
  // Simulate the payload for demo/development
  // const lanyard = {
  //   data: {
  //     discord_user: {
  //       id: '183829779810615297',
  //       username: 'thejohnnaye',
  //       avatar: '14c25c04f274ac5d641d0223e3767e2b',
  //       display_name: 'John Doe',
  //     },
  //     discord_status: 'online',
  //     activities: [
  //       {
  //         id: '87cb1d50afaf131e',
  //         name: 'Visual Studio Code',
  //         type: 0,
  //         state: 'Workspace: cloud',
  //         details: 'Editing values.kube01.yaml',
  //         application_id: '383226320970055681',
  //         timestamps: {
  //           start: 1745678099307,
  //         },
  //         assets: {
  //           large_image: '1359299519124078724',
  //           large_text: 'Editing a YAML file',
  //           small_image: '1359308034446200892',
  //           small_text: 'Cursor',
  //         },
  //         created_at: 1745678099552,
  //       },
  //     ],
  //   },
  //   success: true,
  // }
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
    <div className="w-full h-full flex flex-row justify-between gap-1 pb-2">
      {/* Header: Avatar, Name, Status, Discord logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={discord_user.display_name || discord_user.username}
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
                width={48}
                height={48}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <FaDiscord className="text-xl text-muted-foreground" />
              </div>
            )}
            {/* Status dot */}
            <span
              className={cn(
                'absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-zinc-900 dark:border-zinc-900 border-white',
                statusColors[discord_status] || statusColors['offline']
              )}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-base truncate text-foreground">
              {discord_user.display_name || discord_user.username}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              @{discord_user.username}
            </span>
          </div>
        </div>
      </div>
      {/* Activity Section */}
      <div className="flex items-center gap-4">
        {mainActivity ? (
          <>
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-secondary">
              <img
                src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.large_image}.png`}
                alt={mainActivity.assets.large_text || mainActivity.name}
                width={28}
                height={28}
                className="rounded-md"
              />
              {mainActivity.assets.small_image && (
                <img
                  src={`https://cdn.discordapp.com/app-assets/${mainActivity.application_id}/${mainActivity.assets.small_image}.png`}
                  alt={mainActivity.assets.small_text || ''}
                  width={20}
                  height={20}
                  className="absolute -bottom-2 -right-2 rounded-full border border-border bg-background shadow-sm"
                />
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate max-w-[140px] text-foreground">{mainActivity.name}</span>
              {mainActivity.details && (
                <span className="text-xs text-foreground/80 truncate max-w-[140px]">{mainActivity.details}</span>
              )}
            </div>
          </>
        ) : (
          <div className="text-xs text-muted-foreground">No current activity</div>
        )}
      </div>
    </div>
  )
}

export default DiscordPresence
