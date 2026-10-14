# Devlog Sweep Status

Cutoff table for the 4-hourly devlog sweep. Each run reads this first, folds in only
what is genuinely new, then appends one row. Runs that find nothing leave no row.

This file is `.md`, not `.mdx`, so contentlayer does not pick it up as an entry.

## Rules for this file

- One row per run that folded something in.
- Newest row last.
- `Sources checked` lists the repos or feeds looked at this run.
- `Published` links the devlog entry slugs added or updated.
- Do not rewrite or delete old rows. This is the audit trail.

## Sweep Status

| Date | Sources checked | Folded in | Published |
|---|---|---|---|
| 2026-10-11 | baseline | Sweep configured. No entries folded in yet. | none |
