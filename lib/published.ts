// Single gate for "does this document exist for the current build".
//
// Every other surface on the site already excludes drafts from production
// output: the sitemap, both RSS feeds, the per-tag feeds, the search index,
// the tag counts and the blog index (via pliny's allCoreContent, which
// applies this same NODE_ENV check). The detail pages were the one place
// that did not, so a `draft: true` post was still fully readable at its
// public URL.
//
// Gated on NODE_ENV rather than applied unconditionally so a draft stays
// previewable by direct URL under `pnpm dev`. That is the point of the
// draft flag for a writer, and it matches the convention already in the
// codebase.
const isProduction = process.env.NODE_ENV === 'production'

/**
 * Whether a document may be served for this build.
 *
 * Used both to decide what `generateStaticParams` emits and to guard the page
 * body, because the two are not equivalent: the site deploys as a static
 * export, but under plain SSG (`next start`, no EXPORT) Next defaults
 * `dynamicParams` to true and will render an unlisted slug on demand. Guarding
 * only generateStaticParams closes the hole for the export and leaves it open
 * for every other deploy target.
 */
export function isPublished(doc: { draft?: boolean }): boolean {
  return !isProduction || doc.draft !== true
}

export function publishedOnly<T extends { draft?: boolean }>(docs: T[]): T[] {
  return isProduction ? docs.filter(isPublished) : docs
}
