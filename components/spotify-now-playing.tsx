"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Music } from "lucide-react"
import { FaReact } from 'react-icons/fa'

interface SpotifyData {
  isPlaying: boolean
  title: string
  artist: string
  album: string
  albumImageUrl: string
  songUrl: string
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockData: SpotifyData = {
      isPlaying: true,
      title: "Don't Stop Me Now",
      artist: "Queen",
      album: "Jazz",
      albumImageUrl: "/placeholder.svg?height=64&width=64",
      songUrl: "https://open.spotify.com",
    }

    setTimeout(() => {
      setData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-16 animate-pulse">
        <Music className="h-5 w-5 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading...</span>
      </div>
    )
  }

  if (!data || !data.isPlaying) {
    return (
      <div className="flex items-center justify-center h-16">
        <Music className="h-5 w-5 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Not playing</span>
      </div>
    )
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 rounded-md hover:bg-secondary transition-colors"
    >
      <div className="relative h-16 w-16 shrink-0">
        {data.albumImageUrl ? (
          <Image
            src={data.albumImageUrl}
            alt={data.album}
            fill
            className="object-cover rounded-md"
          />
        ) : (
          <FaReact className="text-2xl text-gray-400" />
        )}
      </div>
      <div className="ml-4 overflow-hidden">
        <p className="font-medium truncate">{data.title}</p>
        <p className="text-sm text-muted-foreground truncate">{data.artist}</p>
        <div className="flex items-center mt-1">
          <span className="inline-block h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-xs text-muted-foreground">Playing on Spotify</span>
        </div>
      </div>
    </a>
  )
}
