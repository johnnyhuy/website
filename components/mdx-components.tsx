import React from 'react'
import TOCInline from 'pliny/ui/TOCInline.js'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import type { MDXComponents } from 'mdx/types'
import TableWrapper from './table-wrapper'
import CustomLink from './link'
import Image from './image'
import { CustomPre } from './custom-pre'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: CustomPre,
  table: TableWrapper,
  BlogNewsletterForm,
}
