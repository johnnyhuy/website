import React from 'react'

type YouTubeProps = {
  id: string
  title: string
  caption?: string
}

export default function YouTube({ id, title, caption }: YouTubeProps) {
  return (
    <figure className="my-8">
      <div className="aspect-video w-full border border-[var(--color-border)]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      {caption ? <figcaption className="mono-label mt-3">{caption}</figcaption> : null}
    </figure>
  )
}
