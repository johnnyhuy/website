'use client'

import { useState, useEffect, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, notFound } from 'next/navigation'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  MessageSquare,
  Bookmark,
  Heart,
  Twitter,
  Facebook,
  Linkedin,
  ChevronDown,
  Copy,
  Check,
  Code,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import WavyLine from '@/components/wavy-line'
import TechStack from '@/components/tech-stack'
import { FloatingThemeToggle } from '@/components/floating-theme-toggle'
import { copyToClipboard, generateShareableUrl, generateSocialShareText } from '@/lib/copy-utils'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import { components } from '@/components/mdx-components'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { coreContent } from 'pliny/utils/contentlayer.js'
import { Giscus, GiscusProps } from 'pliny/comments/Giscus.js'
import siteMetadata from '@/data/siteMetadata'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const { slug } = use(params)
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug
  const post = allBlogs.find((p) => p.slug === slugStr)
  if (!post) return notFound()

  const searchParams = useSearchParams()
  const [showTldr, setShowTldr] = useState(false)
  const [showFullContent, setShowFullContent] = useState(true)
  const [copied, setCopied] = useState<string | null>(null)
  const [showCodeSnippet, setShowCodeSnippet] = useState(false)

  // Check URL parameter on initial load
  useEffect(() => {
    const tldrParam = searchParams.get('tldr')
    if (tldrParam === 'true') {
      setShowTldr(true)
      setShowFullContent(false)
    }
  }, [searchParams])

  // Toggle TLDR mode
  const handleTldrToggle = (checked: boolean) => {
    setShowTldr(checked)
    setShowFullContent(!checked)

    // Update URL with the new state
    const url = new URL(window.location.href)
    if (checked) {
      url.searchParams.set('tldr', 'true')
    } else {
      url.searchParams.delete('tldr')
    }
    window.history.pushState({}, '', url)
  }

  // Copy URL to clipboard
  const handleCopy = (type: string) => {
    let textToCopy = ''

    if (type === 'full') {
      textToCopy = generateShareableUrl(window.location.href, false)
    } else if (type === 'tldr') {
      textToCopy = generateShareableUrl(window.location.href, true)
    } else if (type === 'twitter') {
      textToCopy = generateSocialShareText('twitter', post.title, window.location.href)
    } else if (type === 'linkedin') {
      textToCopy = generateSocialShareText('linkedin', post.title, window.location.href)
    } else if (type === 'facebook') {
      textToCopy = generateSocialShareText('facebook', post.title, window.location.href)
    } else if (type === 'code') {
      textToCopy = post.tldrCode ?? ''
    }

    copyToClipboard(textToCopy).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  // Toggle code snippet visibility
  const toggleCodeSnippet = () => {
    setShowCodeSnippet(!showCodeSnippet)
  }

  const mainContent = coreContent(post)
  // Get author details from allAuthors
  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  return (
    <div className="pt-20 pb-16 md:pt-24">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          href="/blog"
          className="hover:text-accent mb-6 inline-flex items-center text-sm transition-colors md:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        {/* Article header */}
        <article className="mx-auto max-w-4xl">
          <header className="mb-6 md:mb-8">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>

            <div className="text-muted-foreground mb-4 flex flex-wrap items-center justify-between text-sm md:mb-6">
              <div className="mb-2 flex items-center space-x-4 sm:mb-0">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{post.readingTime?.text}</span>
                </div>
              </div>

              {/* TLDR Toggle */}
              <div className="flex w-full items-center space-x-2 sm:w-auto">
                <Label htmlFor="tldr-mode" className="cursor-pointer text-sm">
                  TLDR Mode
                </Label>
                <Switch id="tldr-mode" checked={showTldr} onCheckedChange={handleTldrToggle} />
              </div>
            </div>

            <div className="mb-4 flex items-center md:mb-6">
              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={author?.avatar || '/placeholder.svg'}
                  alt={author?.name || 'Author'}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{author?.name}</div>
                <div className="text-muted-foreground text-sm">
                  {author?.occupation}
                  {author?.company ? `, ${author.company}` : ''}
                </div>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-6 overflow-x-auto pb-2 md:mb-8">
              <TechStack technologies={post.tags} size="md" />
            </div>
          </header>

          {/* Featured image - only show in full content mode */}
          {!showTldr && (
            <div className="border-foreground shadow-custom relative mb-6 h-[200px] w-full overflow-hidden rounded-lg border-2 sm:h-[250px] md:mb-8 md:h-[300px] lg:h-[400px]">
              <Image
                src={post.image || '/placeholder.svg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* TLDR Section (always visible if not in TLDR mode) */}
          {post.tldr && !showTldr && (
            <div className="border-accent/20 bg-secondary/50 mb-6 rounded-lg border p-4 md:mb-8 md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between">
                <h2 className="mb-2 flex items-center text-xl font-bold sm:mb-0">
                  <span className="text-accent mr-2">TLDR;</span> Summary
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-accent flex w-full items-center text-sm sm:w-auto"
                  onClick={() => handleTldrToggle(true)}
                >
                  <span className="mr-1">Show only TLDR</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none text-sm">{post.tldr}</div>
            </div>
          )}

          {/* Optimized TLDR View */}
          {showTldr && (
            <div className="mb-8 md:mb-12">
              {/* TLDR Card with optimized layout */}
              <Card className="border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  {/* Simplified header with just the TLDR label and sharing options */}
                  <div className="border-accent/20 bg-secondary/50 flex items-center justify-between border-b p-3">
                    <div className="flex items-center">
                      <span className="text-accent mr-2 text-sm font-bold">TLDR;</span>
                      <h2 className="max-w-[200px] truncate text-base font-medium sm:max-w-none">
                        {post.title}
                      </h2>
                    </div>

                    {/* Compact sharing options */}
                    <div className="flex items-center space-x-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => handleCopy('tldr')}
                            >
                              {copied === 'tldr' ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Copy TLDR link</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => handleCopy('twitter')}
                            >
                              {copied === 'twitter' ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Twitter className="h-3 w-3" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Share on Twitter</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => handleCopy('linkedin')}
                            >
                              {copied === 'linkedin' ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Linkedin className="h-3 w-3" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Share on LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  {/* TLDR Content - more compact */}
                  <div className="bg-background p-3 md:p-4">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
                      {post.tldr}
                    </div>

                    {/* Code Snippet Toggle - more compact */}
                    {post.tldrCode && (
                      <div className="mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={toggleCodeSnippet}
                          className="flex h-7 items-center px-2 text-xs"
                        >
                          <Code className="mr-1 h-3 w-3" />
                          {showCodeSnippet ? 'Hide Code' : 'Show Code Example'}
                        </Button>

                        {/* Code Snippet */}
                        {showCodeSnippet && (
                          <div className="relative mt-2">
                            <pre className="bg-secondary overflow-x-auto rounded-md p-2 font-mono text-xs">
                              <code>{post.tldrCode}</code>
                            </pre>
                            <Button
                              variant="outline"
                              size="icon"
                              className="bg-background/80 absolute top-1 right-1 h-6 w-6"
                              onClick={() => handleCopy('code')}
                            >
                              {copied === 'code' ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Compact footer */}
                  <div className="border-accent/20 bg-secondary/50 flex justify-end border-t p-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleTldrToggle(false)}
                      className="flex h-7 items-center text-xs"
                    >
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Article content - conditionally shown based on TLDR mode */}
          {!showTldr && (
            <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert mb-8 max-w-none overflow-x-auto md:mb-12">
              <MDXLayoutRenderer
                layout={post.layout || 'PostLayout'}
                code={post.body.code}
                components={components}
                toc={post.toc}
              />
            </div>
          )}

          {/* Article footer - only show in full content mode */}
          {!showTldr && (
            <footer className="border-border mb-8 border-t pt-6 md:mb-12 md:pt-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="mb-4 flex w-full flex-wrap gap-2 sm:w-auto md:mb-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-1 items-center sm:flex-auto"
                  >
                    <Heart className="mr-1 h-4 w-4" />
                    <span>Like</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-1 items-center sm:flex-auto"
                  >
                    <Bookmark className="mr-1 h-4 w-4" />
                    <span>Save</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-1 items-center sm:flex-auto"
                  >
                    <Share2 className="mr-1 h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleCopy('twitter')}
                  >
                    {copied === 'twitter' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Twitter className="h-4 w-4" />
                    )}
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleCopy('facebook')}
                  >
                    {copied === 'facebook' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Facebook className="h-4 w-4" />
                    )}
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => handleCopy('linkedin')}
                  >
                    {copied === 'linkedin' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Linkedin className="h-4 w-4" />
                    )}
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </footer>
          )}
        </article>

        {/* Related posts - only show in full content mode */}
        {!showTldr && Array.isArray(post.relatedPosts) && post.relatedPosts.length > 0 && (
          <div className="mx-auto mb-8 max-w-4xl md:mb-12">
            <h2 className="mb-4 text-2xl font-bold md:mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {post.relatedPosts.map((relatedPost: any) => (
                <Card key={relatedPost.id} className="overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-muted-foreground mb-2 flex items-center text-sm">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{relatedPost.readingTime?.text}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="hover:text-accent transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                    <TechStack technologies={relatedPost.tags} size="sm" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Comments section - only show in full content mode */}
        {!showTldr && (
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center justify-between md:mb-6">
              <h2 className="mb-2 text-2xl font-bold sm:mb-0">Comments</h2>
            </div>
            <Giscus {...(post.comments as GiscusProps)} />
          </div>
        )}
      </div>

      {/* Background wavy line */}
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <WavyLine className="absolute inset-0 opacity-5" animated={false} />
      </div>

      {/* Floating Theme Toggle */}
      <FloatingThemeToggle position="bottom-right" />
    </div>
  )
}
