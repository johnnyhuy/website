import { writeFileSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
const tagData = JSON.parse(
  readFileSync(new URL('../app/tag-data.json', import.meta.url), 'utf8')
)
import { allBlogs, allNotes } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const outputFolder = process.env.EXPORT ? 'out' : 'public'

// `section` is the URL prefix a doc lives under, so Blog and Notes share one
// item builder instead of duplicating the template. `overrides` replaces the
// channel-level title/description when a surface needs its own identity.
const generateRssItem = (config, post, section) => `
  <item>
    <guid>${config.siteUrl}/${section}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${section}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const NOTES_CHANNEL = {
  title: 'Johnny - Notes',
  description:
    'Short, self-contained, actionable write-ups. Each note is something a reader could act on, or would otherwise have to rediscover.',
}

const generateRss = (config, posts, page = 'feed.xml', section = 'blog', overrides = {}) => {
  const channel = { ...config, ...overrides }
  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(channel.title)}</title>
      <link>${config.siteUrl}/${section}</link>
      <description>${escape(channel.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post, section)).join('')}
    </channel>
  </rss>
`
}

async function generateRSS(config, allBlogs, allNotes) {
  const publishPosts = allBlogs.filter((post) => post.draft !== true)
  // RSS for blog post
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts))
    writeFileSync(`./${outputFolder}/feed.xml`, rss)
  }

  // Notes get their own feed at /notes/feed.xml. Deliberately a separate
  // feed rather than extra items in the blog one: they are a different
  // cadence and a different reader, and mixing them buries both.
  const publishNotes = allNotes.filter((note) => note.draft !== true)
  if (publishNotes.length > 0) {
    const rss = generateRss(config, sortPosts(publishNotes), 'notes/feed.xml', 'notes', NOTES_CHANNEL)
    const rssPath = path.join(outputFolder, 'notes')
    mkdirSync(rssPath, { recursive: true })
    writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  if (publishPosts.length > 0) {
    for (const tag of Object.keys(tagData)) {
      const filteredPosts = allBlogs.filter((post) => post.tags.map((t) => slug(t)).includes(tag))
      const rss = generateRss(config, filteredPosts, `tags/${tag}/feed.xml`)
      const rssPath = path.join(outputFolder, 'tags', tag)
      mkdirSync(rssPath, { recursive: true })
      writeFileSync(path.join(rssPath, 'feed.xml'), rss)
    }
  }
}

const rss = () => {
  generateRSS(siteMetadata, allBlogs, allNotes)
  console.log('RSS feed generated...')
}

rss()
