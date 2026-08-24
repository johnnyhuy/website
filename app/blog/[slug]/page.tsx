import { allBlogs, allAuthors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog-post'

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

// Rank posts by tag overlap with the current post, exclude self + drafts,
// return up to four. Stable secondary sort by date desc so ties break
// towards newer posts.
function pickRelated(slug: string, tags: readonly string[] | undefined) {
  if (!tags || tags.length === 0) return []
  const currentTags = new Set(tags)
  return allBlogs
    .filter((b) => b.slug !== slug && !b.draft)
    .map((b) => ({
      slug: b.slug,
      title: b.title,
      date: b.date,
      icon: b.icon,
      score: (b.tags ?? []).filter((t) => currentTags.has(t)).length,
    }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score || (a.date < b.date ? 1 : -1))
    .slice(0, 4)
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  // Find the blog post by slug
  const post = allBlogs.find((p) => p.slug === slug)

  // Return 404 if post not found
  if (!post) {
    notFound()
  }

  // Next post in the index = the next older post (one click down in the
  // newest-first list). Used by the header's "Next →" chip.
  const idx = allBlogs.findIndex((p) => p.slug === slug)
  const nextPost = idx >= 0 ? allBlogs[idx + 1] : undefined
  const relatedPosts = pickRelated(slug, post.tags)

  // Get author info if available
  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  return <BlogPost post={post} author={author} nextPost={nextPost} relatedPosts={relatedPosts} />
}
