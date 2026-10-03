import { allNotes } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Note } from '@/components/note'

export function generateStaticParams() {
  return allNotes.map((note) => ({
    slug: note.slug,
  }))
}

// Rank notes by tag overlap, exclude self + drafts, cap at three. A note is
// a single topic so four suggestions is already a filter in disguise.
function pickRelated(slug: string, tags: readonly string[] | undefined) {
  if (!tags || tags.length === 0) return []
  const currentTags = new Set(tags)
  return allNotes
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

export default async function NotePage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const note = allNotes.find((n) => n.slug === slug)

  if (!note) {
    notFound()
  }

  const relatedNotes = pickRelated(slug, note.tags)

  return <Note note={note} relatedNotes={relatedNotes} />
}
