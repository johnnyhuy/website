import { allDevlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Devlog } from '@/components/devlog'
import { publishedOnly, isPublished } from '@/lib/published'

// Same reasoning as app/blog/[slug]: the export only emits these slugs, so
// an entry marked `draft: true` is not served in production. Latent today
// because every seed entry is published, but the flag had to actually work.
// Same reasoning as the blog detail route: unlisted slugs must not be
// generated on demand.
export const dynamicParams = false

export function generateStaticParams() {
  return publishedOnly(allDevlogs).map((entry) => ({
    slug: entry.slug,
  }))
}

// Rank entries by tag overlap, exclude self + drafts, cap at three. An entry is
// a single topic so four suggestions is already a filter in disguise.
function pickRelated(slug: string, tags: readonly string[] | undefined) {
  if (!tags || tags.length === 0) return []
  const currentTags = new Set(tags)
  return allDevlogs
    .filter((n) => n.slug !== slug && !n.draft)
    .map((n) => ({
      slug: n.slug,
      title: n.title,
      date: n.date,
      icon: n.icon,
      score: (n.tags ?? []).filter((t) => currentTags.has(t)).length,
    }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score || (a.date < b.date ? 1 : -1))
    .slice(0, 3)
}

export default async function DevlogEntryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const entry = allDevlogs.find((n) => n.slug === slug)

  // Same two guards as the blog detail page: unknown slug, or a draft in
  // production. generateStaticParams alone is not enough under plain SSG.
  if (!entry || !isPublished(entry)) {
    notFound()
  }

  const related = pickRelated(slug, entry.tags)

  return <Devlog entry={entry} related={related} />
}
