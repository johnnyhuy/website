import Link from 'next/link'
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react'
import { TagIcon } from '@/components/ui/tag-icon'
import { getTagIcon } from '@/components/tag-icons'
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Blog } from 'contentlayer/generated'

interface BlogPostItemProps {
  post: CoreContent<Blog>
}

export default function BlogPostItem({ post }: BlogPostItemProps) {
  const postDate = parseISO(post.date)
  const formattedShortDate = format(postDate, 'MMM d')
  const formattedRelativeDate = formatDistanceToNow(postDate, { addSuffix: true })

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="mb-2 flex items-center text-sm text-muted-foreground">
        <CalendarIcon className="mr-1 h-3 w-3" />
        {/* Display both short and relative dates */}
        <span>{`${formattedShortDate} (${formattedRelativeDate})`}</span>
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
          {post.tags.map((tag: string, index: number) => {
            const IconComponent = getTagIcon(tag)
            return (
              <Link
                href={`/blog?tag=${tag}`}
                key={index}
                className="transition-colors hover:bg-accent/10"
              >
                <TagIcon
                  icon={IconComponent ? <IconComponent /> : undefined}
                  label={tag || undefined}
                  variant="solid"
                  size="sm"
                  className="rounded-md bg-secondary/50 px-2 py-1 text-xs flex items-center"
                />
              </Link>
            )
          })}
        </div>
        <Link href={`/blog/${post.slug}`} aria-label="Read post">
          <ArrowRight className="h-4 w-4 text-primary transition-colors hover:text-accent" />
        </Link>
      </div>
    </div>
  )
}
