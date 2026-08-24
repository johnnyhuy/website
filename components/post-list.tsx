import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Blog } from 'contentlayer/generated'
import { resolvePostIcon } from '@/lib/post-icons'

interface PostListProps {
  posts: CoreContent<Blog>[]
}

// More images in the post body -> more transparent the row thumbnail gets.
// Single-image posts stay at the default ~70%; multi-image posts fade so
// the row text carries the eye and the thumbnail stays a peek.
function thumbnailOpacity(imageCount: number | undefined): string {
  if (!imageCount || imageCount <= 1) return 'opacity-70'
  if (imageCount === 2) return 'opacity-50'
  if (imageCount === 3) return 'opacity-35'
  return 'opacity-25'
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="divide-y border-y">
      {posts.map((post) => {
        const Icon = resolvePostIcon(post.icon)
        const sneak = post.firstImage
        const opacity = thumbnailOpacity(post.imageCount)
        return (
          <li key={post.slug} className="relative overflow-hidden">
            {sneak && (
              <Image
                src={sneak}
                alt=""
                aria-hidden="true"
                width={320}
                height={200}
                className={`pointer-events-none absolute right-0 top-0 z-0 h-full w-[160px] object-cover ${opacity} [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)] md:w-[220px]`}
              />
            )}
            <Link
              href={`/blog/${post.slug}`}
              className="group relative z-10 flex items-baseline gap-4 py-4 transition-colors hover:bg-gray-100/60 md:gap-6 dark:hover:bg-gray-800/40"
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
