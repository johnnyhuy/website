---
name: blog-writing
description: This skill should be used when the user asks to "write a blog post", "create a blog post from notes", "convert notes to blog", "backfill blog posts", "write an essay", or mentions blog post creation, backfill, or converting Obsidian notes into published posts.
version: 1.0.0
---

# Blog Writing Skill

Transform Obsidian notes into essay-style blog posts for johnnyhuy/website.

## Purpose

This skill provides a complete workflow for converting research notes, meeting insights, and personal reflections into polished, voice-consistent blog posts. It covers voice calibration, structure patterns, authenticity rules, and the commit process for backdated posts.

## When to Use

Use this skill when:
- Converting an Obsidian note into a blog post
- Backfilling historical blog posts from notes
- Writing new essay-style posts in Johnny's voice
- Expanding or editing existing blog posts
- Creating posts from research, talks, or meeting insights

## Prerequisites

Before starting:
1. Read the source note completely
2. Identify the core thesis (one sentence)
3. Verify the note has enough substance (500+ words of insight)
4. Check it doesn't contain work-specific details to anonymise

## Workflow Overview

```
Read Note → Extract Thesis → Structure Argument → Draft Body → 
Add Scannable Elements → Write Summary → Write Hook → 
Quality Check → Commit with Backdate
```

## Voice Calibration

Write as Johnny. For detailed voice guidance, consult `references/voice-and-style-guide.md`.

Key principles:
- Direct, Australian warmth, scannable, claim-driven
- Hook openings, short paragraphs (1-3 sentences), action-oriented endings
- No formal transitions, no generic AI filler, no passive voice
- No fabricated scenarios or specific stories

## Post Structure

Standard structure:

```
---
title: [Bold claim]
date: "YYYY-MM-DD HH:MM:SS +1000"
summary: |
  [Hook + thesis + scope. Write last.]
tags:
  - [Title Case]
draft: false
---

[Hook paragraph — bold, direct]

## [Claim-driven heading]

[Body with tables, bullets, analysis]

## [Another claim-driven heading]

[Body]

## Summary

- **[Bold takeaway.]** [Elaboration.]

## What's Next

[Practical action item.]
```

For detailed structure patterns by post type, consult `references/post-structure-patterns.md`.

## Word Count Targets

- Minimum: 1,000 words
- Target: 1,200-1,800 words
- Long-form: 2,000+ only if depth justifies it

## Writing Process

### Step 1: Extract Thesis

Draft the thesis in one sentence. If impossible, the note isn't ready.

Good thesis examples:
- "AI degrades software engineering jobs rather than replacing them."
- "The real AI skill isn't prompting — it's closing the feedback loop."
- "Psychological detachment, not sleep, is the strongest predictor of recovery."

### Step 2: Structure the Argument

Create 3-5 sections that build the case. Each section should have a claim-driven heading and support the central thesis.

### Step 3: Draft the Body

Write using the note's insights in conversational voice. Use:
- Tables for comparisons and frameworks
- Bullet lists for scannable takeaways
- Block quotes for key insights
- Mermaid diagrams if the note includes them (simplify for blog)

### Step 4: Add Scannable Elements

Transform dense paragraphs into:
- Comparison tables (Before/After, Good/Bad, X vs Y)
- Process lists (numbered steps)
- Framework tables (dimensions, attributes, levels)
- Key insight callouts

### Step 5: Write Summary and What's Next

Summary: 4-6 bold takeaways with one-line elaborations.
What's Next: One specific, actionable step. Not philosophical.

### Step 6: Write the Hook

Write the opening paragraph last. It should:
- Make a bold claim
- Be personal if authentic to the note
- Establish stakes
- Be under 100 words

## Authenticity Rules

Use insights from notes. Use general observations. Use analytical patterns.

Do NOT:
- Fabricate specific stories ("I watched an architect...")
- Mention work details (company names, project names, internal tools)
- Use real people's names from meetings or notes

If an example is needed, use:
- General patterns ("The pattern usually looks like this...")
- Hypothetical scenarios ("Ask an agent to refactor a system and...")
- Anonymised observations ("At major tech companies, engineers report...")

## Quality Checklist

Before committing:
- [ ] 1,000+ words
- [ ] No fabricated scenarios
- [ ] No work details or names
- [ ] Voice matches Johnny's style
- [ ] Has hook opening
- [ ] Has Summary section with bold takeaways
- [ ] Has What's Next section
- [ ] Inline links for external references
- [ ] Frontmatter date matches commit date
- [ ] Tags in Title Case (2-4 tags)
- [ ] Short paragraphs throughout

## Commit Process

Backdate commits to match the note date or natural writing date.

```bash
# Stage the file
git add data/blog/post-name.mdx

# Commit with backdated timestamp
GIT_COMMITTER_DATE="YYYY-MM-DD HH:MM:SS +1000" \
  git -c commit.gpgsign=false commit \
  -m "content: add backfill post on [topic]" \
  --date="YYYY-MM-DD HH:MM:SS +1000"
```

Timestamp rules:
- Natural hours (9 AM - 9 PM)
- Random minutes and seconds
- Space multiple posts with buffer time
- Match frontmatter `date:` field

## Frontmatter Format

```yaml
---
title: [Bold Claim, Not a Question]
summary: |
  [One paragraph. Hook + thesis.]
date: "YYYY-MM-DD HH:MM:SS +1000"
tags:
  - [Title Case]
  - [Title Case]
draft: false
---
```

Tag conventions:
- Title Case
- 2-4 tags maximum
- Prefer: AI, Career, Leadership, Productivity, Software Engineering, Health, Future of Work

## Additional Resources

### Reference Files

For detailed guidance, consult:
- **`references/voice-and-style-guide.md`** — Detailed voice instructions with do/don't examples
- **`references/post-structure-patterns.md`** — Structure patterns by post type (research-based, opinion, framework, analysis)
- **`references/example-posts-index.md`** — Index of published posts to reference for voice and structure

### Example Files

Working examples in `examples/`:
- **`examples/sample-post.mdx`** — Complete sample blog post demonstrating structure

## When NOT to Write

Don't convert a note if:
- Pure research without a thesis
- Meeting recap with no generalisable insight
- Todo list or project plan
- Shorter than 500 words of substance
- Too specific to work context (even anonymised)

Good notes have: a strong opinion, a framework, a pattern, or a lesson that applies beyond the specific context.
