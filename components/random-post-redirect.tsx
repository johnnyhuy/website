'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RandomPostRedirect({ slugs }: { slugs: string[] }) {
  const router = useRouter()

  useEffect(() => {
    // Slugs are passed in rather than imported from contentlayer, so the
    // client bundle does not carry the full post collection. Already
    // filtered to published posts by the server parent.
    if (slugs.length === 0) return
    const randomPost = slugs[Math.floor(Math.random() * slugs.length)]
    router.push(`/blog/${randomPost}`)
  }, [router, slugs])

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Redirecting to a random blog post...</p>
      </div>
    </div>
  )
}
