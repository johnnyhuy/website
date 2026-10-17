import { mkdirSync, writeFileSync, copyFileSync, existsSync, readdirSync, rmSync } from 'fs'
import path from 'path'

// Keep old /notes/ URLs alive after the surface was renamed to /devlog.
// Static export means no server redirects, so each old path gets a small
// meta-refresh stub. The old feed is copied rather than redirected because
// feed readers do not follow HTML refresh.

const projectRoot = process.cwd()
const outputFolder = process.env.EXPORT ? 'out' : 'public'
const basePath = process.env.BASE_PATH || ''

const html = (target) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting</title>
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${target}" />
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <p>This moved to <a href="${target}">${target}</a>.</p>
  </body>
</html>
`

async function main() {
  const contentlayerPath = path.join(projectRoot, '.contentlayer/generated/index.mjs')
  if (!existsSync(contentlayerPath)) {
    console.warn('No contentlayer output found, skipping redirect generation')
    return
  }

  const { allDevlogs } = await import(contentlayerPath)
  const published = (allDevlogs || []).filter((entry) => entry.draft !== true)

  const notesRoot = path.join(projectRoot, outputFolder, 'notes')
  mkdirSync(notesRoot, { recursive: true })

  // Do not retain generated redirects for entries that no longer publish.
  const publishedSlugs = new Set(published.map((entry) => entry.slug))
  for (const entry of readdirSync(notesRoot, { withFileTypes: true })) {
    if (entry.isDirectory() && !publishedSlugs.has(entry.name)) {
      rmSync(path.join(notesRoot, entry.name, 'index.html'), { force: true })
    }
  }

  // /notes/ -> /devlog/
  const indexTarget = `${basePath}/devlog/`
  writeFileSync(path.join(notesRoot, 'index.html'), html(indexTarget))

  // /notes/<slug>/ -> /devlog/<slug>/
  for (const entry of published) {
    const dir = path.join(notesRoot, entry.slug)
    mkdirSync(dir, { recursive: true })
    writeFileSync(path.join(dir, 'index.html'), html(`${basePath}/devlog/${entry.slug}/`))
  }

  // Feed readers do not follow HTML redirects, so keep the old feed serving
  // the same bytes under the old URL.
  const newFeed = path.join(projectRoot, outputFolder, 'devlog', 'feed.xml')
  if (existsSync(newFeed)) {
    copyFileSync(newFeed, path.join(notesRoot, 'feed.xml'))
    console.log(`Copied feed to ${outputFolder}/notes/feed.xml for existing subscribers`)
  }

  console.log(
    `Generated ${published.length + 1} redirect stubs under ${outputFolder}/notes/ (base path "${basePath || '/'}")`
  )
}

main()
