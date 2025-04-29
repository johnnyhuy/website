"use client"

import { useState, useEffect } from "react"
import { GitCommit, GitPullRequest, Star } from "lucide-react"

interface GithubStats {
  contributions: number
  repositories: number
  stars: number
  pullRequests: number
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockStats: GithubStats = {
      contributions: 842,
      repositories: 28,
      stars: 156,
      pullRequests: 217,
    }

    setTimeout(() => {
      setStats(mockStats)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-16 animate-pulse">
        <span className="text-muted-foreground">Loading GitHub stats...</span>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-16">
        <span className="text-muted-foreground">Unable to load GitHub stats</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center p-3 bg-secondary rounded-md">
        <GitCommit className="h-5 w-5 mb-1" />
        <span className="font-bold">{stats.contributions}</span>
        <span className="text-xs text-muted-foreground">Contributions</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-secondary rounded-md">
        <GitPullRequest className="h-5 w-5 mb-1" />
        <span className="font-bold">{stats.pullRequests}</span>
        <span className="text-xs text-muted-foreground">Pull Requests</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-secondary rounded-md">
        <Star className="h-5 w-5 mb-1" />
        <span className="font-bold">{stats.stars}</span>
        <span className="text-xs text-muted-foreground">Stars Received</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-secondary rounded-md">
        <svg
          className="h-5 w-5 mb-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        <span className="font-bold">{stats.repositories}</span>
        <span className="text-xs text-muted-foreground">Repositories</span>
      </div>
    </div>
  )
}
