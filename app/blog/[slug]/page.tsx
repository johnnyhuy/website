import { allBlogs, allAuthors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog-post'

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string | string[] } }) {
  const slugStr = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  const post = allBlogs.find((p) => p.slug === slugStr)

  if (!post) {
    return notFound()
  }

  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  return <BlogPost post={post} author={author} />
}
