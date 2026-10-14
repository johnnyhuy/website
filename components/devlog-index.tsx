'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'
import DevlogList from '@/components/devlog-list'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import type { Devlog } from 'contentlayer/generated'

interface DevlogIndexProps {
  // Body-free rows, computed on the server, for the same reason as
  // components/blog-index.tsx.
  entries: CoreContent<Devlog>[]
}

export default function DevlogIndex({ entries }: DevlogIndexProps) {
  return (
    <Suspense>
      <DevlogIndexInner entries={entries} />
    </Suspense>
  )
}

function DevlogIndexInner({ entries }: DevlogIndexProps) {
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tag = searchParams.get('tag')
    return tag ? [tag] : []
  })

  const filtered = entries.filter((entry) => {
    return selectedTags.length === 0 || selectedTags.some((tag: string) => entry.tags.includes(tag))
  })

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag: string) => tag !== tagToRemove))
  }

  return (
    <div className="px-6 py-16">
      <div className="mb-3 flex items-baseline justify-between">
        <h1 className="mono-label">Devlog</h1>
        <span className="mono-label">{filtered.length} entries</span>
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

      {filtered.length > 0 ? (
        <DevlogList entries={filtered} />
      ) : (
        <p className="py-12 text-center font-mono text-sm text-gray-500">
          No entries found for this filter.
        </p>
      )}
    </div>
  )
}
