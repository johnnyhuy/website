'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { allBlogs } from 'contentlayer/generated'

export default function RandomBlogPost() {
  const router = useRouter()

  useEffect(() => {
    if (allBlogs.length === 0) return
    const randomIndex = Math.floor(Math.random() * allBlogs.length)
    const randomPost = allBlogs[randomIndex]
    router.push(`/blog/${randomPost.slug}`)
  }, [router])

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Redirecting to a random blog post...</p>
      </div>
    </div>
  )
}
