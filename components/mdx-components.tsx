import React from 'react'
import TOCInline from 'pliny/ui/TOCInline.js'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import type { MDXComponents } from 'mdx/types'
import TableWrapper from './table-wrapper'
import CustomLink from './link'
import Image from './image'
import YouTube from './youtube'
import { CustomPre } from './custom-pre'

const extractText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (React.isValidElement(node)) {
    return extractText((node.props as { children?: React.ReactNode }).children)
  }
  return ''
}

const H3 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const match = /^(\d+)\.\s+(.+)$/.exec(extractText(children))
  if (!match) return <h3 {...props}>{children}</h3>
  return (
    <h3 {...props} className="step-heading">
      <span className="step-icon" aria-hidden="true">
        {match[1]}
      </span>
      <span>{match[2]}</span>
    </h3>
  )
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: CustomPre,
  table: TableWrapper,
  h3: H3,
  YouTube,
  BlogNewsletterForm,
}
