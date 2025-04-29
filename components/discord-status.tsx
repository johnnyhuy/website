"use client"

import { useState, useEffect } from "react"

interface DiscordStatus {
  status: "online" | "idle" | "dnd" | "offline"
  activity?: {
    name: string
    details?: string
    state?: string
    applicationId?: string
    timestamps?: {
      start?: number
      end?: number
    }
  }
}

export default function DiscordStatus() {
  const [status, setStatus] = useState<DiscordStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockStatus: DiscordStatus = {
      status: "online",
      activity: {
        name: "Visual Studio Code",
        details: "Editing portfolio-website.tsx",
        state: "Working on a personal project",
        timestamps: {
          start: Date.now() - 3600000, // 1 hour ago
        },
      },
    }

    setTimeout(() => {
      setStatus(mockStatus)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-16 animate-pulse">
        <span className="text-muted-foreground">Loading Discord status...</span>
      </div>
    )
  }

  if (!status) {
    return (
      <div className="flex items-center justify-center h-16">
        <span className="text-muted-foreground">Unable to load Discord status</span>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "dnd":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "idle":
        return "Idle"
      case "dnd":
        return "Do Not Disturb"
      default:
        return "Offline"
    }
  }

  const getElapsedTime = (timestamp: number) => {
    const now = Date.now()
    const elapsed = now - timestamp
    const hours = Math.floor(elapsed / 3600000)
    const minutes = Math.floor((elapsed % 3600000) / 60000)

    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  return (
    <div className="p-3 bg-secondary rounded-md">
      <div className="flex items-center mb-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <svg
              className="h-6 w-6 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${getStatusColor(status.status)} border-2 border-background`}
          ></span>
        </div>
        <div className="ml-3">
          <p className="font-medium">Johnny Huynh</p>
          <p className="text-xs text-muted-foreground flex items-center">
            <span className={`inline-block h-2 w-2 rounded-full ${getStatusColor(status.status)} mr-1`}></span>
            {getStatusText(status.status)}
          </p>
        </div>
      </div>

      {status.activity && (
        <div className="mt-2 text-sm">
          <p className="font-medium">{status.activity.name}</p>
          {status.activity.details && <p className="text-muted-foreground">{status.activity.details}</p>}
          {status.activity.state && <p className="text-muted-foreground">{status.activity.state}</p>}
          {status.activity.timestamps?.start && (
            <p className="text-xs text-muted-foreground mt-1">
              {getElapsedTime(status.activity.timestamps.start)} elapsed
            </p>
          )}
        </div>
      )}
    </div>
  )
}
