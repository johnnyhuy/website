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
| 2026-10-11 | getpaseo/paseo issues and PRs, pingdotgg/t3code releases, openchamber/openchamber releases, openclaw/openclaw releases, deepseek-ai/deepseek-harness releases, johnnyhuy/* and echohello-dev/* PRs, Next.js / Tailwind / ContentLayer2 / shadcn-ui releases | Three reusable gotchas from getpaseo/paseo issue resolutions - wide characters shifting in terminal snapshot replay, React act missing when the shell sets NODE_ENV production, external diff commands emptying parsed git patch hunks. Nightly and pre-release builds skipped. | wide-characters-shift-after-terminal-snapshot-replay, react-act-missing-when-shell-sets-node-env-production, external-diff-commands-empty-git-patch-hunks |
| 2026-10-11 | johnnyhuy/* and echohello-dev/* PRs and releases, getpaseo/paseo issues PRs and releases, openclaw/openclaw issues PRs releases and 2026.10.1 changelog, openchamber/openchamber issues PRs and releases, pingdotgg/t3code releases, deepseek-ai/deepseek-harness releases, Next.js / Tailwind / ContentLayer2 / shadcn-ui releases | Ollama Cloud quota read from the balance endpoint rather than the analytics endpoint (openchamber), a patch release retiring a plugin SDK export and hard-breaking published plugins at load (openclaw 2026.10.1), and the client-side identity key pattern for create calls that only dedupe per idempotency key (paseo). One item from a private source dropped on sanitisation grounds. Nightly and pre-release builds skipped. | ollama-cloud-quota-is-on-the-balance-endpoint, plugins-fail-when-a-patch-retires-an-sdk-export, idempotency-keys-do-not-deduplicate-by-directory |
