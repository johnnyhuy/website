import RandomPostRedirect from '@/components/random-post-redirect'
import { allBlogs } from 'contentlayer/generated'
import { publishedOnly } from '@/lib/published'

// Server component. Hands the client only the published slugs, so the
// redirect can pick one without importing allBlogs into the client bundle.
export default function RandomBlogPost() {
  const slugs = publishedOnly(allBlogs).map((post) => post.slug)
  return <RandomPostRedirect slugs={slugs} />
}
