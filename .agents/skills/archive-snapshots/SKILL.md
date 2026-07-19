---
name: archive-snapshots
description: Freeze a past or current version of the website into public/archive/. Use when adding a new version snapshot to the site archive, rebuilding an existing snapshot, or troubleshooting archive rendering.
version: 1.0.0
---

# Archive Snapshots

The site keeps frozen copies of its past designs at `/archive/vN`, served as static files from `public/archive/` by the normal GitHub Pages deploy. No CI changes are needed; snapshots are committed build artifacts.

## Existing Snapshots

- `v1` - Jekyll site (2020-2025), commit `39ca02f7`
- `v2` - first Next.js cut (May 2025), commit `b2dce8f0`
- `v3` - bento grid (2025-2026), commit `d25c7834`

## Freezing a Next.js Version

1. `git worktree add <tmpdir> <commit>` (use the pre-approved temp dir, not the repo).
2. In the worktree: `corepack pnpm@9.3.0 install --frozen-lockfile`.
3. Build with the repo-pinned Node (`export PATH="$(asdf where nodejs 22.14.0)/bin:$PATH"`):
   `EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/archive/vN corepack pnpm@9.3.0 build`
4. Copy `out/` to `public/archive/vN/`. Remove generated root files from the copy (`sitemap.xml`, `robots.txt`, `rss/feed` files) so they don't shadow the live ones.
5. Verify: grep the exported `index.html` for `/archive/vN/_next/` asset paths.
6. Remove the worktree when done (`git worktree remove --force`).

Gotchas:

- Commits before `2fc51a7d` cannot statically export (`generateStaticParams` missing on `/blog/[slug]`). Pick the closest later commit instead.
- Node 26 breaks the ContentLayer build (uuid ESM error). Always use Node 22.14.

## Freezing the Jekyll Version

1. Worktree at the Jekyll-era commit.
2. Build via Docker (host Ruby is too old):
   `docker run --rm -v "$PWD:/srv/jekyll" -e JEKYLL_ENV=production -e PAGES_REPO_NWO=johnnyhuy/website jekyll/jekyll:pages sh -c "bundle install --quiet && jekyll build --baseurl /archive/v1 -d /srv/jekyll/_site"`
3. Copy `_site/` to `public/archive/v1/`.

Gotchas:

- `PAGES_REPO_NWO` is required; the worktree has no origin remote.
- jekyll-github-metadata pulls live GitHub API data at build time, so repo cards show current repos, not era-accurate ones. Rate-limit warnings during the build are harmless.

## After Adding a Snapshot

1. Add a `Disallow: /archive/vN/` entry in `scripts/generate-robots.mjs` (archived blog copies must not compete with live posts in search).
2. Add the era to the `versions` list in `app/archive/page.tsx` with name, period, stack, and a one-line note.
3. Snapshot HTML uses absolute paths, so verify a page and one asset over the served site, not just the filesystem.
