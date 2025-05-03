'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Music } from 'lucide-react'
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
      artist: 'Queen',
      album: 'Jazz',
      albumImageUrl: '/placeholder.svg?height=64&width=64',
      songUrl: 'https://open.spotify.com',
    }

    setTimeout(() => {
      setData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex h-16 animate-pulse items-center justify-center">
        <Music className="h-5 w-5 text-gray-400" />
        <span className="ml-2 text-gray-400">Loading...</span>
      </div>
    )
  }

  if (!data || !data.isPlaying) {
    return (
      <div className="flex h-16 items-center justify-center">
        <Music className="h-5 w-5 text-gray-400" />
        <span className="ml-2 text-gray-400">Not playing</span>
      </div>
    )
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-secondary flex items-center rounded-md p-2 transition-colors"
    >
      <div className="relative h-16 w-16 shrink-0">
        {data.albumImageUrl ? (
          <Image
            src={data.albumImageUrl}
            alt={data.album}
            fill
            className="rounded-md object-cover"
          />
        ) : (
          <FaReact className="text-2xl text-gray-400" />
        )}
      </div>
      <div className="ml-4 overflow-hidden">
        <p className="truncate font-medium">{data.title}</p>
        <p className="truncate text-sm text-gray-400">{data.artist}</p>
        <div className="mt-1 flex items-center">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs text-gray-400">Playing on Spotify</span>
        </div>
      </div>
    </a>
  )
}
