'use client'

import type React from 'react'
import { use } from 'react'

import { useState } from 'react'
import { Tag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogPostItem from '@/components/blog-post-item'
import { useRouter } from 'next/navigation'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'

const posts: CoreContent<Blog>[] = allCoreContent(sortPosts(allBlogs))
const allTags: string[] = Array.from(
  new Set(posts.flatMap((post: CoreContent<Blog>) => post.tags))
).sort()

export default function BlogPage() {
  const router = useRouter()
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on selected tags only
  const filteredPosts = posts.filter((post: CoreContent<Blog>) => {
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag: string) => post.tags.includes(tag))
    return matchesTags
  })

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) setSelectedTags([...selectedTags, tag])
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag: string) => tag !== tagToRemove))
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Blog</h1>
            <p className="text-lg text-gray-400 md:text-xl">Thoughts, learnings, and insights.</p>
          </div>
        </div>

        {/* Tag filter section */}
        {selectedTags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
            {selectedTags.map((tag) => (
              <div
                key={tag}
                className="bg-secondary flex items-center gap-1 rounded-full px-3 py-1 text-sm"
              >
                {tag}
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-1 h-4 w-4 p-0"
                  onClick={() => removeTag(tag)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => setSelectedTags([])}
              >
                Clear all
              </Button>
            )}
          </div>
        )}

        {/* Blog posts list */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <BlogPostItem key={post.slug} post={post} />)
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-400">No posts found matching your filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
