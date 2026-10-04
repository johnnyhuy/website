import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files'
import { writeFileSync } from 'fs'
import readingTime from 'reading-time'
import { slug } from 'github-slugger'
import path from 'path'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { extractImagesFromRaw } from './lib/blog-images'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins/index.js'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeKatexNoTranslate from 'rehype-katex-notranslate'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import siteMetadata from './data/siteMetadata'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import prettier from 'prettier'

const root = process.cwd()

// heroicon mini link
const icon = fromHtmlIsomorphic(
  `
  <span class="content-header-link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
  </span>
`,
  { fragment: true }
)

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

/**
 * Up to four body images, used to compose the multi-card row peek in the
 * blog and notes indexes. Excludes YouTube embeds from the row peek (those
 * are heavy and noisy at 60px tall); only <Image> + markdown.
 *
 * Shared by Blog and Notes so the two surfaces cannot drift apart.
 */
function resolvePeekImages(doc: { body: { raw: string } }): string[] {
  const raw = doc.body.raw
  const found: string[] = []
  const seen = new Set<string>()
  const re1 = /<Image[^>]*?\bsrc=["']([^"']+)["']/g
  re1.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = re1.exec(raw)) !== null) {
    const src = m[1]
    if (!src || seen.has(src)) continue
    seen.add(src)
    found.push(src)
  }
  const re2 = /!\[[^\]]*\]\(([^)]+)\)/g
  re2.lastIndex = 0
  while ((m = re2.exec(raw)) !== null) {
    const src = m[1]
    if (!src || seen.has(src)) continue
    seen.add(src)
    found.push(src)
  }
  return found.slice(0, 4)
}

/**
 * Count the occurrences of all tags across blog posts and write to json file.
 * Drafts are always excluded: this runs under `contentlayer2 build`, before
 * `next build` sets NODE_ENV, so gating on production never took effect and
 * the tracked file churned with draft-inflated counts on every build.
 */
async function createTagCount(allBlogs: any[]) {
  const tagCount: Record<string, number> = {}
  allBlogs.forEach((file: any) => {
    if (file.tags && file.draft !== true) {
      file.tags.forEach((tag: string) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  const formatted = await prettier.format(JSON.stringify(tagCount, null, 2), { parser: 'json' })
  writeFileSync('./app/tag-data.json', formatted)
}

function createSearchIndex(allBlogs: any[]) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
      // Served publicly, so drafts must be dropped here. allCoreContent only
      // filters them when NODE_ENV is production, which it is not at this point.
      JSON.stringify(allCoreContent(sortPosts(allBlogs.filter((post) => post.draft !== true))))
    )
    console.log('Local search index generated...')
  }
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'json' },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
    tldr: { type: 'string' },
    tldrCode: { type: 'string' },
    image: { type: 'string' },
    author: { type: 'json' },
    readTime: { type: 'string' },
    relatedPosts: { type: 'json' },
    comments: { type: 'json' },
    icon: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    firstImage: {
      type: 'string',
      resolve: (doc) => extractImagesFromRaw(doc.body.raw)[0],
    },
    imageCount: {
      type: 'number',
      resolve: (doc) => extractImagesFromRaw(doc.body.raw).length,
    },
    // Up to four body images used to compose the multi-card row peek
    // in the blog index. Excludes YouTube embeds from the row peek
    // (those are heavy and noisy at 60px tall); only <Image> + markdown.
    peekImages: {
      type: 'list',
      of: { type: 'string' },
      resolve: resolvePeekImages,
    },
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

// Notes are the second content surface: short, self-contained, actionable
// write-ups. Same MDX pipeline and computed fields as Blog (readingTime,
// slug, toc, image extraction) so /notes behaves exactly like /blog at the
// component level. Deliberately a smaller field set - a note does not need
// authors, images frontmatter, layouts, bibliographies or canonical URLs.
export const Notes = defineDocumentType(() => ({
  name: 'Notes',
  filePathPattern: 'notes/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    image: { type: 'string' },
    icon: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    firstImage: {
      type: 'string',
      resolve: (doc) => extractImagesFromRaw(doc.body.raw)[0],
    },
    imageCount: {
      type: 'number',
      resolve: (doc) => extractImagesFromRaw(doc.body.raw).length,
    },
    peekImages: {
      type: 'list',
      of: { type: 'string' },
      resolve: resolvePeekImages,
    },
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/notes/${doc.slug}`,
      }),
    },
  },
}))

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    bluesky: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Notes, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
      remarkAlert,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          headingProperties: {
            className: ['content-header'],
          },
          content: icon,
        },
      ],
      rehypeKatex,
      rehypeKatexNoTranslate,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData()
    createTagCount(allBlogs)
    createSearchIndex(allBlogs)
  },
})
