'use client'
import { useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { Skeleton } from '@/components/ui/skeleton'
import { MoveUpRight } from 'lucide-react'

interface Track {
  name: string
  artist: { '#text': string }
  album: { '#text': string }
  image: { '#text': string }[]
  url: string
  '@attr'?: { nowplaying: string }
}

const SpotifyPresence = () => {
  const [displayData, setDisplayData] = useState<Track | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://lastfm-last-played.biancarosa.com.br/johniqua/latest-song')
      .then((response) => response.json())
      .then((data) => {
        setDisplayData(data.track)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching latest song:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="relative flex h-full w-full flex-col justify-between rounded-3xl p-6">
        <Skeleton className="mb-2 h-[55%] w-[55%] rounded-xl" />
        <div className="flex min-w-0 flex-1 flex-col justify-end overflow-hidden">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
        <div className="text-primary absolute top-0 right-0 m-3">
          <FaSpotify size={56} />
        </div>
        <Skeleton className="absolute right-0 bottom-0 m-3 h-10 w-10 rounded-full" />
      </div>
    )
  }

  if (!displayData) return <p>Something absolutely horrible has gone wrong</p>

  const { name: song, artist, album, image, url } = displayData

  return (
    <>
      <div className="relative flex h-full w-full flex-col justify-between p-6">
        <img
          src={image[3]['#text']}
          alt="Album art"
          width={128}
          height={128}
          className="border-border mb-2 w-[55%] rounded-xl border grayscale"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-end overflow-hidden">
          <div className="flex flex-col">
            <span className="mb-2 flex gap-2">
              <img
                src="/static/bento/bento-now-playing.svg"
                alt="Now playing"
                width={16}
                height={16}
              />
              <span className="text-primary text-sm">
                {displayData['@attr']?.nowplaying === 'true' ? 'Now playing...' : 'Last played...'}
              </span>
            </span>
            <span className="text-md mb-2 truncate leading-none font-bold">{song}</span>
            <span className="w-[85%] truncate text-xs text-gray-400">
              <span className="text-secondary-foreground font-semibold">by</span> {artist['#text']}
            </span>
            <span className="w-[85%] truncate text-xs text-gray-400">
              <span className="text-secondary-foreground font-semibold">on</span> {album['#text']}
            </span>
          </div>
        </div>
      </div>
      <div className="text-primary absolute top-0 right-0 m-3">
        <FaSpotify size={56} />
      </div>
      <a
        href={url}
        aria-label="View on last.fm"
        title="View on last.fm"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary/50 text-primary hover:ring-primary absolute right-0 bottom-0 m-3 flex w-fit items-end rounded-full border p-3 transition-all duration-300 hover:rotate-12 hover:ring-1"
      >
        <MoveUpRight size={16} />
      </a>
    </>
  )
}

export default SpotifyPresence
