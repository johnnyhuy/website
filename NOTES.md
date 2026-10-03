# Notes

The bar for `data/notes/`, the second content surface on this site. Longer first-person
opinion pieces live in `data/blog/`; see `AGENTS.md` and
`.agents/skills/site-conventions/SKILL.md` for the shared formatting rules.

## The bar

A note earns its place here if **a reader could act on it, or would otherwise have to
rediscover the thing themselves.** That is the whole test.

Write one if:

- You hit a specific failure and worked out the cause and the fix.
- There is a behaviour of a tool that surprised you and you verified why.
- You found a pattern in a system that generalises past the one system.

Do not write one if:

- It is a report of what you shipped. That is a work log, not a note.
- It is an opinion piece you could expand into a blog post. Put it in `data/blog/`.
- It only makes sense to people who already know your context.
- You could not state the symptom precisely.

## Shape

- Frontmatter: `title`, `summary`, `date`, `tags`, `draft`, `icon`.
- `icon` must already be registered in `lib/post-icons.ts` (lucide icon names). The
  navbar, index rows and detail header all resolve from that one map.
- `date` is the date the note was written, not the date you fixed the thing.
- Keep it short. If it runs past a few hundred lines, it is a blog post.
- Footnotes (`[^1]`) for citations, never a `## References` heading.
- No em dashes. No bold-as-speech. No AI slop openers or endings.
- Link to the primary source when there is one. A note that cites a GitHub doc is
  worth ten notes that cite a forum.

## Notes are draft-free

`draft: true` still works and hides the note from the index, the feed and the
static params. The seed notes are published. Use `draft` while a note is still
rough.
