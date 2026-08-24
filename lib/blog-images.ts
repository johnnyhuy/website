import type { Blog } from 'contentlayer/generated'

const MDX_IMAGE = /<Image[^>]*?\bsrc=["']([^"']+)["'][^>]*>/g
const MD_IMAGE = /!\[[^\]]*\]\(([^)]+)\)/g
const YOUTUBE = /<YouTube\b[^>]*?\bid=["']([^"']+)["']/g

const ytThumb = (id: string) => `/images/blog/yt-${id}.jpg`

/**
 * Pull every blog-body image src + YouTube thumbnail out of an MDX post
 * body (deduped, in source order). Matches the <Image> JSX component,
 * markdown `![alt](src)` references, and <YouTube id="..." /> embeds.
 * Video thumbnails resolve to the locally-saved /images/blog/yt-<id>.jpg.
 */
export function extractPostImages(post: Blog): string[] {
  return extractImagesFromRaw(post.body?.raw ?? '')
}

/** Same logic as extractPostImages but takes the raw body string directly
 *  so it can run inside contentlayer's computed-field resolver, which
 *  hands you a doc rather than a Blog with the parsed body. */
export function extractImagesFromRaw(raw: string): string[] {
  const found: string[] = []
  const seen = new Set<string>()

  MDX_IMAGE.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = MDX_IMAGE.exec(raw)) !== null) {
    const src = m[1]
    if (!src || seen.has(src)) continue
    seen.add(src)
    found.push(src)
  }

  MD_IMAGE.lastIndex = 0
  while ((m = MD_IMAGE.exec(raw)) !== null) {
    const src = m[1]
    if (!src || seen.has(src)) continue
    seen.add(src)
    found.push(src)
  }

  YOUTUBE.lastIndex = 0
  while ((m = YOUTUBE.exec(raw)) !== null) {
    const id = m[1]
    const src = ytThumb(id)
    if (seen.has(src)) continue
    seen.add(src)
    found.push(src)
  }

  return found
}

/** First image src in a blog body (or undefined). Used by the blog index
 *  for the per-row sneak peek. */
export function firstPostImage(post: Blog): string | undefined {
  return extractPostImages(post)[0]
}
