'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { GitCommit, User, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Commit = {
  id: string
  message: string
  author: string
  date: string
  url: string
}

// Mock data - in a real app, this would come from GitHub API
const mockCommits: Commit[] = [
  {
    id: 'abc123',
    message: 'Fix responsive layout issues on mobile devices',
    author: 'johnnyhuy',
    date: '2 days ago',
    url: 'https://github.com/johnnyhuy/repo/commit/abc123',
  },
  {
    id: 'def456',
    message: 'Add dark mode toggle component',
    author: 'johnnyhuy',
    date: '3 days ago',
    url: 'https://github.com/johnnyhuy/repo/commit/def456',
  },
  {
    id: 'ghi789',
    message: 'Update dependencies to latest versions',
    author: 'johnnyhuy',
    date: '5 days ago',
    url: 'https://github.com/johnnyhuy/repo/commit/ghi789',
  },
]

interface GitHubRecentCommitsProps {
  showMultiple?: boolean
}

export default function GitHubRecentCommits({ showMultiple = false }: GitHubRecentCommitsProps) {
  const { theme } = useTheme()
  const [commits, setCommits] = useState<Commit[]>(mockCommits)

  // In a real app, you would fetch commits from GitHub API here
  useEffect(() => {
    // Simulating API fetch
    const fetchCommits = async () => {
      // In a real app: const response = await fetch('https://api.github.com/users/johnnyhuy/events')
      // const data = await response.json()
      // Process the data and update state
      setCommits(mockCommits)
    }

    fetchCommits()
  }, [])

  // If showMultiple is false, only show the most recent commit
  const displayCommits = showMultiple ? commits : [commits[0]]

  return (
    <div className="w-full space-y-3">
      {!showMultiple && <div className="text-muted-foreground mb-2 text-xs">Latest commit</div>}

      <div className="space-y-3">
        {displayCommits.map((commit) => (
          <div
            key={commit.id}
            className="border-border bg-background/50 hover:bg-secondary/30 rounded-xl border p-3 transition-colors"
          >
            <div className="flex items-start gap-2">
              <GitCommit className="text-accent mt-0.5 h-4 w-4 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{commit.message}</p>
                <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-3 text-xs">
                  <span className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {commit.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {commit.date}
                  </span>
                </div>
              </div>
              <a
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {showMultiple && (
        <div className="mt-2 text-center">
          <a
            href="https://github.com/johnnyhuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" size="sm" className="text-xs">
              View all activity
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </a>
        </div>
      )}
    </div>
  )
}
