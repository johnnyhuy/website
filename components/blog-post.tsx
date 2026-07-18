'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, Copy, Check, Code, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { copyToClipboard, generateShareableUrl } from '@/lib/copy-utils'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { components } from '@/components/mdx-components'
import { format, formatDistanceToNow, parseISO } from 'date-fns'
import type { Blog, Authors } from 'contentlayer/generated'

interface BlogPostProps {
  post: Blog & { summaryCode?: string }
  author?: Authors
}

export function BlogPost({ post }: BlogPostProps) {
  const searchParams = useSearchParams()
  const [showTldr, setShowTldr] = useState(() => searchParams.get('tldr') === 'true')
  const [showFullContent, setShowFullContent] = useState(() => searchParams.get('tldr') !== 'true')
  const [copied, setCopied] = useState<string | null>(null)
  const [showCodeSnippet, setShowCodeSnippet] = useState(false)

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
      textToCopy = post.summaryCode ?? ''
    }

    copyToClipboard(textToCopy).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const toggleCodeSnippet = () => {
    setShowCodeSnippet(!showCodeSnippet)
  }

  const postDate = parseISO(post.date)
  const isoDate = format(postDate, 'yyyy-MM-dd')
  const [formattedRelativeDate, setFormattedRelativeDate] = useState('')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormattedRelativeDate(formatDistanceToNow(postDate, { addSuffix: true }))

    const timer = setInterval(() => {
      setFormattedRelativeDate(formatDistanceToNow(postDate, { addSuffix: true }))
    }, 60000)

    return () => clearInterval(timer)
  }, [postDate])

  return (
    <div className="pt-14">
      <div className="mx-auto max-w-3xl border-x px-6 py-12 md:py-16">
        <Link
          href="/blog"
          className="mono-label mb-10 inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <ArrowLeft className="h-3 w-3" />
          all posts
        </Link>

        <article>
          <header className="mb-10 border-b pb-10 md:mb-12">
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="mono-label">
                <time dateTime={post.date}>{isoDate}</time>
                {formattedRelativeDate ? ` · ${formattedRelativeDate}` : ''}
                {post.readingTime?.text ? ` · ${post.readingTime.text}` : ''}
              </p>

              <div className="flex items-center space-x-2">
                <Label htmlFor="tldr-mode" className="mono-label cursor-pointer">
                  tl;dr
                </Label>
                <Switch id="tldr-mode" checked={showTldr} onCheckedChange={handleTldrToggle} />
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {post.tags.map((tag: string, index: number) => (
                  <Link
                    href={`/blog?tag=${tag}`}
                    key={index}
                    className="font-mono text-xs text-gray-500 underline decoration-yellow-500 underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {!showTldr && post.image && (
            <div className="relative mb-10 flex h-[250px] w-full items-center justify-center overflow-hidden border bg-gray-100 md:h-[350px] dark:bg-gray-800">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          {showTldr && (
            <div className="mb-10 border md:mb-12">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <span className="mono-label text-yellow-600 dark:text-yellow-500">tl;dr</span>

                <div className="flex items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => handleCopy('full')}
                        >
                          {copied === 'full' ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Link2 className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied === 'full' ? 'Copied!' : 'Copy link'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {post.summaryCode && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={toggleCodeSnippet}
                          >
                            <Code className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
                  {post.summary}
                </div>

                {showCodeSnippet && post.summaryCode && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="mono-label">Code</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-none"
                              onClick={() => handleCopy('code')}
                            >
                              {copied === 'code' ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copied === 'code' ? 'Copied!' : 'Copy code'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <pre className="mt-2 overflow-x-auto bg-gray-100 p-3 text-xs dark:bg-gray-800">
                      <code>{post.summaryCode}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {showFullContent && (
            <div className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 max-w-none">
              <MDXLayoutRenderer code={post.body.code} components={components} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
