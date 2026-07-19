# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: Use `pnpm` (required for this project)

**Toolchain**: Node 22.14.0 (`.tool-versions`) and `corepack pnpm@9.3.0` are required for builds. Newer Node (26+) breaks ContentLayer via a uuid ESM error. CI installs with `--frozen-lockfile` on pnpm 9.3.0; do not downgrade pnpm, it re-resolves the v9 lockfile.

**Primary Development Commands**:
- `pnpm dev` - Start development server with ContentLayer watching and Next.js turbopack
- `pnpm build` - Build the project (runs ContentLayer build first, then Next.js build, then post-build scripts)
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm start` - Start production server

**Content Management**:
- `pnpm contentlayer` - Build ContentLayer content (processes MDX files)
- `pnpm generate-sitemap` - Generate sitemap.xml
- `pnpm generate-rss` - Generate RSS feed
- `pnpm generate-robots` - Generate robots.txt
- `pnpm generate-llms` - Generate llms.txt and markdown copies of posts
- `node scripts/blog-image.mjs` - Fetch xkcd comics or memegen memes into `public/images/blog/` (see `skills/blog-writing/SKILL.md`)

## Architecture Overview

**Framework**: Next.js 16.2.6 with App Router and TypeScript
**Content System**: ContentLayer for MDX blog posts and author profiles
**Styling**: Tailwind CSS with custom components using Radix UI primitives
**Deployment**: Static export ready (uses `output: 'export'` when EXPORT env var is set)

**Key Architectural Patterns**:

1. **Content-Driven Architecture**: ContentLayer processes MDX files in `data/blog/` and `data/authors/` into type-safe content objects
2. **Component-First Design**: Heavily component-based with reusable UI components in `/components/ui/` using Radix primitives
3. **Configuration-Driven**: Site metadata, projects, and experience data stored in structured TypeScript files (`data/siteMetadata.js`, `data/siteData.ts`)
4. **Theme System**: next-themes integration with system/light/dark mode support

## Critical File Structure

**Content**:
- `data/blog/*.mdx` - Blog posts with frontmatter (title, date, tags, draft, summary, etc.)
- `data/authors/*.mdx` - Author profiles
- `data/siteMetadata.js` - Global site configuration (analytics, comments, search, social links)
- `data/siteData.ts` - Personal data (profile, projects, experiences, tech stack)

**Configuration**:
- `contentlayer.config.ts` - ContentLayer configuration with MDX plugins (rehype/remark)
- `next.config.ts` - Next.js configuration with security headers and ContentLayer integration
- `components.json` - shadcn/ui component configuration

**Core Layout**:
- `app/layout.tsx` - Root layout with theme provider, navbar, footer
- `app/globals.css` - Global styles and Tailwind imports

## ContentLayer Integration

ContentLayer automatically:
- Processes MDX files into typed objects
- Generates reading time calculations
- Creates table of contents from headings
- Builds tag counting system (outputs to `app/tag-data.json`)
- Generates search index for kbar (outputs to `public/search.json`)

**Blog Post Frontmatter Schema**:
```yaml
title: string (required)
date: date (required)
tags: string[]
draft: boolean
summary: string
images: array
authors: string[]
layout: string
canonicalUrl: string
```

## Component Architecture

**UI Components**: Located in `components/ui/` - mostly shadcn/ui components based on Radix primitives
**Feature Components**: Located in `components/` - custom components like blog posts, GitHub calendar, Discord presence, etc.

**Key Components**:
- `mdx-components.tsx` - Custom MDX component overrides
- `mdx-layout-renderer.tsx` - Blog post layout wrapper
- Theme system: `theme-provider.tsx`, `theme-toggle.tsx`, `theme-indicator.tsx`

## Development Notes

**Content Workflow**: 
1. Add MDX files to `data/blog/` or `data/authors/`
2. ContentLayer processes them automatically during `pnpm dev`
3. TypeScript types are generated for all content

**Styling**: Minimal industrial design system (flat hairlines, sharp corners, IBM Plex Mono labels). Follow the conventions in `skills/site-conventions/SKILL.md` for any page or component work.

**Site Archive**: Frozen snapshots of past designs live in `public/archive/` and are served as-is. See `skills/archive-snapshots/SKILL.md` before adding a new snapshot.

**Code Style**: 
- Prettier configuration: 100 char width, single quotes, no semicolons, Tailwind plugin
- ESLint: Next.js recommended + TypeScript rules

**Environment Variables**:
- `EXPORT=true` - Enable static export mode
- `BASE_PATH` - Set base path for deployment
- `UNOPTIMIZED=true` - Disable image optimization
- `NEXT_UMAMI_ID` - Analytics ID

## Third-party Integrations

- **Comments**: Giscus (GitHub discussions)
- **Analytics**: Umami (configured in siteMetadata.js)
- **Search**: kbar with local search index
- **Discord**: Real-time presence via react-use-lanyard
- **GitHub**: Calendar integration via react-activity-calendar