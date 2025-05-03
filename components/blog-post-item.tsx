import Link from 'next/link'
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react'
import { TagIcon } from '@/components/ui/tag-icon'
import { getTagIcon } from '@/components/ui/tag-icon'
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
      <h3 className="hover:text-primary mb-1 text-lg font-medium">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="mb-2 flex items-center text-sm text-gray-400">
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
      <p className="mb-3 text-sm text-gray-400">{post.summary ?? ''}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string, index: number) => {
            const Icon = getTagIcon(tag)
            return (
              <Link href={`/blog?tag=${tag}`} key={index} className="cursor-pointer">
                <TagIcon
                  icon={Icon ? <Icon /> : undefined}
                  label={tag}
                  variant="outline"
                  size="sm"
                />
              </Link>
            )
          })}
        </div>
        <Link href={`/blog/${post.slug}`} aria-label="Read post">
          <ArrowRight className="text-primary hover:text-accent h-4 w-4 transition-colors" />
        </Link>
      </div>
    </div>
  )
}
