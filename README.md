<div align="center">

```
   _     _                  _                            
  (_)___| |_  _ _  _ _ _  _| |_ _  _ _  _   __ ___ _ __  
  | / _ \ ' \| ' \| ' \ || | ' \ || | || |_/ _/ _ \ '  \ 
 _/ \___/_||_|_||_|_||_\_, |_||_\_,_|\_, (_)__\___/_|_|_|
|__/                   |__/          |__/                
```

**Personal site and blog. Sharp corners, hairline rules, IBM Plex Mono. No rounded AI-startup cards.**

[![Pages CI](https://github.com/johnnyhuy/website/actions/workflows/pages.yml/badge.svg)](https://github.com/johnnyhuy/website/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/github/license/johnnyhuy/website?color=blue)](LICENSE)
[![Node 22.14+](https://img.shields.io/badge/node-22.14%2B-blue)](https://nodejs.org)
[![Live site](https://img.shields.io/website?label=site&up_message=johnnyhuy.com&down_message=down&url=https://johnnyhuy.com)](https://johnnyhuy.com)

[Live](https://johnnyhuy.com) · [Blog](https://johnnyhuy.com/blog) · [Architecture](#layout) · [Philosophy](#philosophy) · [AGENTS.md](AGENTS.md)

</div>

## What this is

The source for [johnnyhuy.com](https://johnnyhuy.com). A single-column personal site built on Next.js 16 with ContentLayer for MDX posts. The visual language is deliberately industrial: flat hairlines, sharp corners, one yellow accent, mono micro-labels. It is the opposite of a Tailwind kit with rounded cards and gradient hero sections.

The repo also ships an archive of past site designs in `public/archive/` (v1, v2, v3) served as-is, so old URLs keep resolving.

## Quick start

Requires Node 22.14.0 and pnpm 9.3.0 (enforced via `.tool-versions`). See [AGENTS.md](AGENTS.md) for the full toolchain notes.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. Other scripts:

```bash
pnpm build       # contentlayer build + next build + postbuild (sitemap, rss, robots, llms.txt)
pnpm lint
pnpm start
```

## Features

| Area | What |
|---|---|
| Blog | MDX posts in `data/blog/`, auto TOC, reading time, tags, footnotes |
| Comments | Giscus, wired through Pliny (`data/siteMetadata.js`) |
| Search | kbar with a generated `public/search.json` |
| Diagrams | Mermaid blocks themed for light and dark |
| Themes | light / dark / system via next-themes |
| Feeds | RSS (`feed.xml`), sitemap, robots, llms.txt all generated at build |
| Archive | Frozen snapshots of v1/v2/v3 served from `public/archive/` |
| Analytics | Umami, configured in `siteMetadata.js` |

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind 4, Radix primitives, shadcn/ui |
| Content | ContentLayer 2 + Pliny |
| Type | TypeScript (strict) |
| Toolchain | pnpm 9.3.0 on Node 22.14.0 |
| Deploy | GitHub Pages via `.github/workflows/pages.yml` |

## Layout

```
app/                  App Router pages, layouts, globals
components/           UI + feature components (blog-post, navbar, footer, mdx, ...)
data/                 siteMetadata.js, siteData.ts, blog/*.mdx, authors/*.mdx
scripts/              postbuild generators (sitemap, rss, robots, llms.txt, blog-image)
public/archive/       frozen snapshots of past designs (v1, v2, v3)
.agents/skills/       design + blog writing conventions (SKILL.md per topic)
```

See [AGENTS.md](AGENTS.md) for architecture, conventions, and ContentLayer details. See `.agents/skills/site-conventions/SKILL.md` for the design system and `.agents/skills/blog-writing/SKILL.md` for post patterns.

## Philosophy

The conventions below come from `.agents/skills/site-conventions/SKILL.md`. Follow them when touching anything visible.

1. **Sharp corners everywhere.** No `rounded-*` except the hero portrait.
2. **Hairlines, not cards.** Separate sections with `border-b`, never shadows or elevated cards.
3. **One accent color.** Yellow (`yellow-500`) only: the nav square, link underlines, focus outlines. Everything else is gray scale.
4. **Mono micro-labels.** IBM Plex Mono, uppercase, tracking-wide, gray-500 for dates, tags, and section labels.
5. **Borders use `var(--color-border)`.** Never hardcode gray border colors, dark mode depends on the variable.

## License

MIT, Copyright (c) Johnny Huynh. See [LICENSE](LICENSE).

Built in Melbourne. Hosted on GitHub Pages. Powered by strong opinions about typography.
