import Link from 'next/link'
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react'
import TechIcon from './tech-icon'
import { formatDistanceToNow, parseISO, differenceInYears } from 'date-fns'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Blog } from 'contentlayer/generated'

interface BlogPostItemProps {
  post: CoreContent<Blog>
}

export default function BlogPostItem({ post }: BlogPostItemProps) {
  // Format the date as "time ago" with special handling for older posts
  const formatTimeAgo = (dateString: string) => {
    const date = parseISO(dateString)
    const now = new Date()

    // If the date is more than a year old or in the future
    if (differenceInYears(now, date) >= 1 || date > now) {
      return 'a while ago'
    }

    return formatDistanceToNow(date, { addSuffix: true })
  }

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="mb-2 flex items-center text-sm text-muted-foreground">
        <CalendarIcon className="mr-1 h-3 w-3" />
        <span>{formatTimeAgo(post.date)}</span>
        {post.readingTime?.text && (
          <>
            <span className="mx-2">•</span>
            <Clock className="mr-1 h-3 w-3" />
            <span>{post.readingTime.text}</span>
          </>
        )}
      </div>
      <h3 className="mb-1 text-lg font-medium hover:text-primary">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mb-3 text-sm text-muted-foreground">{post.summary ?? ''}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string, index: number) => (
            <Link
              href={`/blog?tag=${tag}`}
              key={index}
              className="flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs transition-colors hover:bg-accent/10"
            >
              <TechIcon name={tag} size="sm" className="mr-1" />
              <span>{tag}</span>
            </Link>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`} aria-label="Read post">
          <ArrowRight className="h-4 w-4 text-primary transition-colors hover:text-accent" />
        </Link>
      </div>
    </div>
  )
}
