import DevlogIndex from '@/components/devlog-index'
import { allDevlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { publishedOnly } from '@/lib/published'

// Server component, for the same reason as app/blog/page.tsx.
export default function DevlogPage() {
  const entries = allCoreContent(sortPosts(publishedOnly(allDevlogs)))
  return <DevlogIndex entries={entries} />
}
