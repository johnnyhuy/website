import BlogIndex from '@/components/blog-index'
import { allBlogs } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Blog } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { publishedOnly } from '@/lib/published'

// Server component. It owns the data so the body-free rows can be handed to
// the client index as props; importing allBlogs from a 'use client' module
// publishes every post body as a static JS asset.
export default function BlogPage() {
  const posts = allCoreContent(sortPosts(publishedOnly(allBlogs))) as CoreContent<Blog>[]
  return <BlogIndex posts={posts} />
}
