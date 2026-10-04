import NotesIndex from '@/components/notes-index'
import { allNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { publishedOnly } from '@/lib/published'

// Server component, for the same reason as app/blog/page.tsx.
export default function NotesPage() {
  const notes = allCoreContent(sortPosts(publishedOnly(allNotes)))
  return <NotesIndex notes={notes} />
}
