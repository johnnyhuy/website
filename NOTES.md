# Devlog

The bar for `data/devlog/`, the second content surface on this site. Longer first-person
opinion pieces live in `data/blog/`; see `AGENTS.md` and
`.agents/skills/site-conventions/SKILL.md` for the shared formatting rules.

## The bar

A note earns its place here if **a reader could act on it, or would otherwise have to
rediscover the thing themselves.** That is the whole test.

Write about a specific day's work or learning in the author's voice. Make the
project, question or activity recognisable in the opening. Ground claims in
evidence from that work or learning. Distinguish documented behaviour from direct
experience, experiments from tested fixes, and proposed changes from shipped work.
Do not imply the author encountered or fixed something without support.

Write one if:

- You hit a specific failure and worked out the cause and the fix.
- There is a behaviour of a tool that surprised you and you verified why.
- You found a pattern in a system that generalises past the one system.
- You investigated a concrete research question and can explain what the evidence
  established, without presenting documented behaviour as a local reproduction.

Do not write one if:

- It is a list of shipped changes with no useful observation or explanation.
- It is an opinion piece you could expand into a blog post. Put it in `data/blog/`.
- It only makes sense to people who already know your context.
- You could not state the symptom precisely.
- It only repeats a release announcement or another write-up without adding a
  supported, useful lesson.

## Shape

- Frontmatter: `title`, `summary`, `date`, `tags`, `draft`, `icon`.
- `icon` must already be registered in `lib/post-icons.ts` (lucide icon names). The
  navbar, index rows and detail header all resolve from that one map.
- `date` identifies the day being described. When backfilling, use the verified
  work or learning date; use a date without a time when the time is unknown.
- Keep it short. If it runs past a few hundred lines, it is a blog post.
- Footnotes (`[^1]`) for citations, never a `## References` heading.
- No em dashes. No bold-as-speech. No AI slop openers or endings.
- Link to the primary source when there is one. A note that cites a GitHub doc is
  worth ten notes that cite a forum.

## Drafts

`draft: true` still works and hides the note from the index, the feed and the
static params. Keep an entry in draft while it is rough or its claims remain
unverified. Correct and verify withdrawn entries before republishing them.
