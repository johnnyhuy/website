import { allBlogs, allAuthors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog-post'

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
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

  // Get author info if available
  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  return <BlogPost post={post} author={author} nextPost={nextPost} />
}
