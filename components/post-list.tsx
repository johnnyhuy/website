import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { FileText } from 'lucide-react'
import { getTagIcon } from '@/components/ui/tag-icon'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Blog } from 'contentlayer/generated'

interface PostListProps {
  posts: CoreContent<Blog>[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="divide-y border-y">
      {posts.map((post) => {
        const TagIcon = post.tags.length > 0 ? getTagIcon(post.tags[0]) : undefined
        const Icon = TagIcon ?? FileText
        return (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-gray-100/60 md:gap-6 dark:hover:bg-gray-800/40"
            >
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs text-gray-500 tabular-nums dark:text-gray-400"
              >
                {format(parseISO(post.date), 'yyyy-MM-dd')}
              </time>
              <Icon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 translate-y-0.5 text-gray-400 dark:text-gray-500"
              />
              <span className="min-w-0 flex-1 truncate font-medium text-gray-900 group-hover:underline group-hover:decoration-yellow-500 group-hover:underline-offset-4 dark:text-gray-100">
                {post.title}
              </span>
              <span
                aria-hidden="true"
                className="hidden shrink-0 font-mono text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 md:block"
              >
                -&gt;
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
