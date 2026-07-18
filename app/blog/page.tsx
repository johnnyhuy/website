'use client'

import type React from 'react'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import PostList from '@/components/post-list'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'

const posts: CoreContent<Blog>[] = allCoreContent(sortPosts(allBlogs))

function BlogIndex() {
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tag = searchParams.get('tag')
    return tag ? [tag] : []
  })

  const filteredPosts = posts.filter((post: CoreContent<Blog>) => {
    return selectedTags.length === 0 || selectedTags.some((tag: string) => post.tags.includes(tag))
  })

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag: string) => tag !== tagToRemove))
  }

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-3xl border-x px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="mono-label">Lingering thoughts</h1>
          <span className="mono-label">{filteredPosts.length} posts</span>
        </div>

        {selectedTags.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {selectedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => removeTag(tag)}
                className="flex items-center gap-1.5 border px-2 py-1 font-mono text-xs hover:border-yellow-500"
              >
                {tag}
                <X className="h-3 w-3" />
              </button>
            ))}
            <button
              onClick={() => setSelectedTags([])}
              className="mono-label underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
            >
              clear
            </button>
          </div>
        )}

        {filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <p className="py-12 text-center font-mono text-sm text-gray-500">
            No posts found for this filter.
          </p>
        )}
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense>
      <BlogIndex />
    </Suspense>
  )
}
