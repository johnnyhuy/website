'use client'

import type React from 'react'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import NoteList from '@/components/note-list'
import { allNotes } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'

// Newest first. sortPosts is the same helper the blog index uses, so the
// two surfaces order identically.
const notes = allCoreContent(sortPosts(allNotes))

function NotesIndex() {
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tag = searchParams.get('tag')
    return tag ? [tag] : []
  })

  const filteredNotes = notes.filter((note) => {
    return selectedTags.length === 0 || selectedTags.some((tag: string) => note.tags.includes(tag))
  })

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag: string) => tag !== tagToRemove))
  }

  return (
    <div className="px-6 py-16">
      <div className="mb-3 flex items-baseline justify-between">
        <h1 className="mono-label">Notes</h1>
        <span className="mono-label">{filteredNotes.length} notes</span>
      </div>
      <p className="mb-8 max-w-prose text-sm text-gray-500 dark:text-gray-400">
        Short write-ups of things that cost me time to work out. Each one is something a reader
        could act on, or would otherwise have to rediscover.
      </p>

      {selectedTags.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => removeTag(tag)}
              className="flex items-center gap-1.5 border px-2 py-1 font-mono text-xs hover:border-yellow-500"
            >
              {tag}
              <X className="h-3 w-3" />
            </button>
          ))}
          <button
            onClick={() => setSelectedTags([])}
            className="mono-label underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            clear
          </button>
        </div>
      )}

      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="py-12 text-center font-mono text-sm text-gray-500">
          No notes found for this filter.
        </p>
      )}
    </div>
  )
}

export default function NotesPage() {
  return (
    <Suspense>
      <NotesIndex />
    </Suspense>
  )
}
