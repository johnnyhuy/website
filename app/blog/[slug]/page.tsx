'use client'

import { useState, useEffect, use } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, ChevronDown, Copy, Check, Code, Link2 } from 'lucide-react'
import { SiBlogger } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { copyToClipboard, generateShareableUrl, generateSocialShareText } from '@/lib/copy-utils'
import { allBlogs, allAuthors, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { coreContent } from 'pliny/utils/contentlayer.js'
import siteMetadata from '@/data/siteMetadata'
import { Comments, CommentsConfig } from 'pliny/comments/index.js'
import { components } from '@/components/mdx-components'
import { format, formatDistanceToNow } from 'date-fns'
import { TagIcon } from '@/components/ui/tag-icon'
import { getTagIcon } from '@/components/ui/tag-icon'

export async function generateStaticParams() {
  return allBlogs.map((post: Blog) => ({
    slug: post.slug,
  }))
}

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

  useEffect(() => {
    const tldrParam = searchParams.get('tldr')
    if (tldrParam === 'true') {
      setShowTldr(true)
      setShowFullContent(false)
    }
  }, [searchParams])

  const handleTldrToggle = (checked: boolean) => {
    setShowTldr(checked)
    setShowFullContent(!checked)

    const url = new URL(window.location.href)
    if (checked) {
      url.searchParams.set('tldr', 'true')
    } else {
      url.searchParams.delete('tldr')
    }
    window.history.pushState({}, '', url)
  }

  const handleCopy = (type: string) => {
    let textToCopy = ''

    if (type === 'full') {
      textToCopy = generateShareableUrl(window.location.href, false)
    } else if (type === 'code') {
      textToCopy = post.tldrCode ?? ''
    }

    copyToClipboard(textToCopy).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const toggleCodeSnippet = () => {
    setShowCodeSnippet(!showCodeSnippet)
  }

  const mainContent = coreContent(post)
  const authorId = post.authors && post.authors.length > 0 ? post.authors[0] : null
  const author = authorId
    ? allAuthors.find((a) => a.slug === authorId || a.name === authorId)
    : null

  const postDate = new Date(post.date)
  const formattedShortDate = format(postDate, 'MMM d')
  const formattedRelativeDate = formatDistanceToNow(postDate, { addSuffix: true })

  return (
    <div className="pt-20 pb-16 md:pt-24">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center text-sm transition-colors hover:text-yellow-500 md:mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <article className="mx-auto max-w-4xl">
          <header className="mb-6 md:mb-8">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>

            <div className="mb-4 flex flex-wrap items-center justify-between text-sm text-gray-400 md:mb-6">
              <div className="mb-2 flex items-center space-x-4 sm:mb-0">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>{`${formattedShortDate} (${formattedRelativeDate})`}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{post.readingTime?.text}</span>
                </div>
              </div>

              <div className="flex w-full items-center space-x-2 sm:w-auto">
                <Label htmlFor="tldr-mode" className="cursor-pointer text-sm">
                  TLDR Mode
                </Label>
                <Switch id="tldr-mode" checked={showTldr} onCheckedChange={handleTldrToggle} />
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2 pb-2 md:mb-8">
              {post.tags.map((tag: string, index: number) => {
                const IconComponent = getTagIcon(tag)
                return (
                  <Link
                    href={`/blog?tag=${tag}`}
                    key={index}
                    className="transition-colors hover:bg-yellow-500/10"
                  >
                    <TagIcon
                      icon={IconComponent ? <IconComponent className="mr-1 h-4 w-4" /> : undefined}
                      label={tag}
                      variant="outline"
                      size="sm"
                      className="bg-secondary/50 flex items-center rounded-md px-2 py-1 text-xs"
                    />
                  </Link>
                )
              })}
            </div>
          </header>

          {!showTldr && (
            <div className="border-foreground shadow-custom relative mb-6 flex h-[250px] w-full items-center justify-center overflow-hidden rounded-lg border-2 bg-gray-100 md:mb-8 md:h-[300px] lg:h-[400px] dark:bg-gray-800">
              {post.image ? (
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              ) : post.tags.length > 0 && getTagIcon(post.tags[0]) ? (
                <TagIcon icon={post.tags[0]} size="lg" variant="ghost" />
              ) : (
                <SiBlogger className="h-24 w-24 text-gray-400" />
              )}
            </div>
          )}

          {post.tldr && !showTldr && (
            <div className="bg-secondary/50 mb-6 rounded-lg border border-yellow-500/20 p-4 md:mb-8 md:p-6">
              <div className="mb-4 flex-col items-start sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <h2 className="mb-2 flex items-center text-xl font-bold sm:mb-0">
                  <span className="mr-2 text-yellow-500">TLDR;</span> Summary
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 flex w-full items-center self-end text-sm hover:text-yellow-500 sm:mt-0 sm:w-auto sm:self-auto"
                  onClick={() => handleTldrToggle(true)}
                >
                  <span className="mr-1">Show only TLDR</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none text-sm">{post.tldr}</div>
            </div>
          )}

          {showTldr && (
            <div className="mb-8 md:mb-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center">
                      <span className="mr-2 text-sm font-bold text-yellow-500">TLDR;</span>
                      <h2 className="max-w-[200px] truncate text-base font-medium sm:max-w-none">
                        {post.title}
                      </h2>
                    </div>

                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleCopy('tldr')}
                            >
                              {copied === 'tldr' ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Link2 className="h-4 w-4" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Copy TLDR link</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="p-3 md:p-4">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
                      {post.tldr}
                    </div>

                    {post.tldrCode && (
                      <div className="mt-3">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={toggleCodeSnippet}
                          className="flex h-7 items-center px-2 text-xs"
                        >
                          <Code className="mr-1 h-3 w-3" />
                          {showCodeSnippet ? 'Hide Code' : 'Show Code Example'}
                        </Button>

                        {showCodeSnippet && (
                          <div className="relative mt-2">
                            <pre className="bg-secondary overflow-x-auto rounded-md p-2 font-mono text-xs">
                              <code>{post.tldrCode}</code>
                            </pre>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="bg-background/80 absolute top-1 right-1 h-6 w-6"
                              onClick={() => handleCopy('code')}
                            >
                              {copied === 'code' ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="bg-secondary/50 flex justify-end p-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleTldrToggle(false)}
                      className="flex h-8 items-center text-xs"
                    >
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

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

          {!showTldr && Array.isArray(post.relatedPosts) && post.relatedPosts.length > 0 && (
            <div className="mx-auto mb-8 max-w-4xl md:mb-12">
              <h2 className="mb-4 text-2xl font-bold md:mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {post.relatedPosts.map((relatedPost: any) => (
                  <Card key={relatedPost.id} className="overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="mb-2 flex items-center text-sm text-gray-400">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{relatedPost.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{relatedPost.readingTime?.text}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold md:text-xl">
                        <Link
                          href={`/blog/${relatedPost.id}`}
                          className="transition-colors hover:text-yellow-500"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="mb-4 text-gray-400">{relatedPost.excerpt}</p>
                      <div className="mb-6 flex flex-wrap gap-2 pb-2 md:mb-8">
                        {relatedPost.tags.map((tag: string, index: number) => {
                          const IconComponent = getTagIcon(tag)
                          return (
                            <Link
                              href={`/blog?tag=${tag}`}
                              key={index}
                              className="transition-colors hover:bg-yellow-500/10"
                            >
                              <TagIcon
                                icon={
                                  IconComponent ? (
                                    <IconComponent className="mr-1 h-4 w-4" />
                                  ) : undefined
                                }
                                label={tag}
                                variant="solid"
                                size="sm"
                                className="bg-secondary/50 flex items-center rounded-md px-2 py-1 text-xs"
                              />
                            </Link>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {!showTldr && (
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center justify-between md:mb-6">
                <h2 className="mb-2 text-2xl font-bold sm:mb-0">Comments</h2>
              </div>
              <Comments commentsConfig={siteMetadata.comments as CommentsConfig} slug={slugStr} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
