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
| 2026-10-15 | johnnyhuy/* and echohello-dev/* PRs and releases, getpaseo/paseo issues PRs and releases, openclaw/openclaw issues PRs and releases, openchamber/openchamber issues PRs and releases, pingdotgg/t3code issues PRs and releases, deepseek-ai/deepseek-harness releases, Next.js / Tailwind / ContentLayer2 / shadcn-ui releases | Three resolutions from after the previous run - Node DEP0190 warning on every Windows .cmd shim spawn when an args array meets shell: true, fixed by joining args into a single command string (t3code PR #19385); diagnostic and status code paths skipping SecretRef resolution so a working credential reports Invalid API key while the runtime authenticates fine (openclaw #172098 / PR #172135); and proxies hardcoding 127.0.0.1 as the upstream returning 502 for IPv6-only dev services that bind to ::1 (paseo #678 / PR #6753). shadcn@4.21.5 patch released with an MCP search fix showing [object Promise] instead of the add command - too narrow for an entry. No new stable releases in the other tracked upstream projects; nightly and pre-release builds skipped. | cmd-shims-warn-dep0190-with-args-and-shell, diagnostic-paths-must-resolve-secrets, ipv6-only-services-fail-behind-ipv4-proxies |
