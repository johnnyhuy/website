import TOCInline from 'pliny/ui/TOCInline.js'
import Pre from 'pliny/ui/Pre.js'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import type { MDXComponents } from 'mdx/types'
import TableWrapper from './table-wrapper'
import CustomLink from './link'
import Image from './image'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
