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
// Single-image posts stay at the default ~50%; multi-image posts fade so
// the row text carries the eye and the thumbnail stays a peek.
function thumbnailOpacity(imageCount: number | undefined): string {
  if (!imageCount || imageCount <= 1) return 'opacity-50'
  if (imageCount === 2) return 'opacity-35'
  if (imageCount === 3) return 'opacity-25'
  return 'opacity-15'
}

// Cards fan across the right edge of each row with alternating rotation.
const PEEK_ROTATIONS = ['-rotate-[6deg]', 'rotate-[3deg]', '-rotate-[4deg]', 'rotate-[7deg]']

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="divide-y border-y">
      {posts.map((post) => {
        const Icon = resolvePostIcon(post.icon)
        const cards = (post.peekImages?.length
          ? post.peekImages
          : post.firstImage
            ? [post.firstImage]
            : []
        ).slice(0, 4)
        const opacity = thumbnailOpacity(post.imageCount)
        return (
          <li key={post.slug} className="relative overflow-hidden">
            {cards.length > 0 && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 z-0 flex h-[64px] w-[200px] -translate-y-1/2 items-center md:h-[72px] md:w-[240px]"
              >
                {cards.map((src, i) => {
                  const rot = PEEK_ROTATIONS[i % PEEK_ROTATIONS.length]
                  return (
                    <div
                      key={`${src}-${i}`}
                      style={{ zIndex: cards.length - i, transform: `translateX(${i * 16}px)` }}
                      className={`relative h-full w-[72px] -ml-5 origin-bottom overflow-hidden border border-[var(--color-border)] object-cover shadow-sm first:ml-0 [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)] md:w-[80px] ${rot}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        aria-hidden="true"
                        width={160}
                        height={120}
                        className={`h-full w-full object-cover ${opacity}`}
                      />
                    </div>
                  )
                })}
              </div>
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
