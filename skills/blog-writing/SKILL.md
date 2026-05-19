# Blog Writing Skill

Transform Obsidian notes into essay-style blog posts for johnnyhuy/website.

## Voice and Style

**Write as Johnny** — direct, Australian warmth, scannable, claim-driven.

- **Hook openings.** Start with a bold claim or observation.
- **Short paragraphs.** 1-3 sentences max.
- **Direct statements.** "The problem wasn't X. It was Y."
- **Australian informality.** Conversational but sharp.
- **Bullet summaries.** Tables and bullets for scannable complexity.
- **Action-oriented endings.** Close with "What's Next" — practical, not philosophical.

**Avoid:**
- Formal transitions ("Furthermore", "Moreover")
- Generic AI filler ("In today's fast-paced world")
- Passive voice
- Long dense paragraphs
- Fabricated scenarios or stories

## Post Structure

```
---
title: [Bold claim, not a summary]
date: "YYYY-MM-DD HH:MM:SS +1000"
summary: |
  [One paragraph. Hook + thesis.]
tags:
  - [2-4 tags, Title Case]
draft: false
---

[Hook paragraph]

## [Claim-driven heading]

[Body with tables, bullets]

## Summary

- **[Bold takeaway.]** [Elaboration.]

## What's Next

[Practical action item.]
```

## Word Count Targets

- **Minimum:** 1,000 words
- **Target:** 1,200-1,800 words

## Authenticity Rules

- ✅ Use insights from notes
- ✅ Use general observations
- ❌ Do NOT fabricate specific stories
- ❌ Do NOT mention work details or names

## Commit Process

```bash
git add data/blog/post-name.mdx
GIT_COMMITTER_DATE="YYYY-MM-DD HH:MM:SS +1000" \
  git -c commit.gpgsign=false commit \
  -m "content: add backfill post on [topic]" \
  --date="YYYY-MM-DD HH:MM:SS +1000"
```

**Timestamp rules:**
- Natural hours (9 AM - 9 PM)
- Random minutes and seconds
- Match frontmatter date field

## Quality Checklist

- [ ] 1,000+ words
- [ ] No fabricated scenarios
- [ ] No work details or names
- [ ] Johnny's voice (direct, Australian, scannable)
- [ ] Hook opening
- [ ] Summary section with bold takeaways
- [ ] What's Next section
- [ ] Inline links for references
- [ ] Frontmatter date matches commit
- [ ] Tags in Title Case

## When NOT to Write a Post

Don't convert if:
- Pure research without thesis
- Meeting recap with no generalisable insight
- Todo list or project plan
- Shorter than 500 words of substance
- Too specific to work context

Good notes have: a strong opinion, framework, pattern, or lesson beyond the specific context.
