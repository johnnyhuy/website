'use client'

import type React from 'react'
import { use } from 'react'

import { useState } from 'react'
import { Search, Tag, X, Shuffle } from 'lucide-react'
import { Input } from '@/components/ui/input'
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
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [suggestedTags, setSuggestedTags] = useState<string[]>([])
  const [suggestedPosts, setSuggestedPosts] = useState<CoreContent<Blog>[]>([])

  // Filter posts based on search term and selected tags
  const filteredPosts = posts.filter((post: CoreContent<Blog>) => {
    const matchesSearch =
      searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag: string) => post.tags.includes(tag))
    return matchesSearch && matchesTags
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    if (value.trim() !== '') {
      const tagSuggestions: string[] = allTags
        .filter(
          (tag: string) =>
            tag.toLowerCase().includes(value.toLowerCase()) && !selectedTags.includes(tag)
        )
        .slice(0, 3)
      setSuggestedTags(tagSuggestions)
      const postSuggestions: CoreContent<Blog>[] = posts
        .filter(
          (post: CoreContent<Blog>) =>
            post.title.toLowerCase().includes(value.toLowerCase()) ||
            post.summary?.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 2)
      setSuggestedPosts(postSuggestions)
    } else {
      setSuggestedTags([])
      setSuggestedPosts([])
    }
  }

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) setSelectedTags([...selectedTags, tag])
    setSearchTerm('')
    setSuggestedTags([])
    setSuggestedPosts([])
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag: string) => tag !== tagToRemove))
  }

  const handleRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * posts.length)
    const randomPost = posts[randomIndex]
    router.push(`/blog/${randomPost.slug}`)
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Blog</h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Thoughts, learnings, and insights from my experience in software engineering.
            </p>
          </div>
          <Button
            onClick={handleRandomPost}
            variant="ghost"
            className="flex w-full items-center gap-2 sm:w-auto"
          >
            <Shuffle className="h-4 w-4" />
            Random Post
          </Button>
        </div>

        {/* Search and filter section */}
        <div className="mb-6 space-y-4 md:mb-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Search className="text-muted-foreground h-4 w-4" />
            </div>
            <Input
              type="text"
              placeholder="Search posts or type a tag name..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {(suggestedTags.length > 0 || suggestedPosts.length > 0) && (
              <div className="border-border bg-background absolute z-10 mt-1 w-full rounded-md border shadow-lg">
                {suggestedTags.length > 0 && (
                  <div>
                    <div className="text-muted-foreground p-2 text-xs">
                      <Tag className="mr-1 inline h-3 w-3" /> Suggested Tags
                    </div>
                    <ul className="py-1">
                      {suggestedTags.map((tag) => (
                        <li
                          key={tag}
                          className="hover:bg-secondary cursor-pointer px-3 py-2 text-sm"
                          onClick={() => addTag(tag)}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {suggestedPosts.length > 0 && (
                  <div>
                    <div className="border-border text-muted-foreground border-t p-2 text-xs">
                      <Search className="mr-1 inline h-3 w-3" /> Suggested Posts
                    </div>
                    <ul className="py-1">
                      {suggestedPosts.map((post) => (
                        <li
                          key={post.slug}
                          className="hover:bg-secondary cursor-pointer px-3 py-2 text-sm"
                          onClick={() => router.push(`/blog/${post.slug}`)}
                        >
                          {post.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Blog posts list */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <BlogPostItem key={post.slug} post={post} />)
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No posts found matching your search criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedTags([])
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
