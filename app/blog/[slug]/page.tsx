import { allBlogs, allAuthors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog-post'
import { publishedOnly, isPublished } from '@/lib/published'

// Only published posts become static pages. The site deploys as a static
// export, so a slug missing from this list is not emitted and the request
// 404s. Without the filter, a draft is fully readable at its public URL.
// Only the slugs returned by generateStaticParams exist. Without this,
// Next renders an unlisted slug on demand and answers 200, which turns a
// missing post into a soft 404. Combined with the isPublished guard in the
// body it is closed in both static export and plain SSG.
export const dynamicParams = false

export function generateStaticParams() {
  return publishedOnly(allBlogs).map((post) => ({
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

// Belt and braces for the draft case. In production a draft 404s before this
// matters, but on a non-production deploy it is served, and a draft should
// never be indexed. Keyed on `draft` rather than isPublished() because
// isPublished() is true in dev, where a draft is deliberately previewable.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = allBlogs.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    robots: post.draft ? { index: false, follow: false } : undefined,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  // Find the blog post by slug
  const post = allBlogs.find((p) => p.slug === slug)

  // Return 404 if post not found, or if it is a draft in production. The
  // second guard is load-bearing: generateStaticParams omits drafts, but
  // under plain SSG Next renders unlisted slugs on demand.
  if (!post || !isPublished(post)) {
    notFound()
  }

  // Next post in the index = the next older post (one click down in the
  // newest-first list). Used by the header's "Next →" chip.
  // Resolved against the published set: indexing the raw collection would
  // link the chip at a draft, which 404s in production.
  const publishedBlogs = publishedOnly(allBlogs)
  const idx = publishedBlogs.findIndex((p) => p.slug === slug)
  const nextPost = idx >= 0 ? publishedBlogs[idx + 1] : undefined
  const relatedPosts = pickRelated(slug, post.tags)

  // Get author info if available
  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  return <BlogPost post={post} author={author} nextPost={nextPost} relatedPosts={relatedPosts} />
}
