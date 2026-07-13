<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Imported Claude Cowork project instructions

Read `CLAUDE.md` (standing orders, pricing source of truth, SEO invariants)
and `docs/AGENT-HANDOFF.md` (current state + prioritized queue) before any
work. Rules that most often get violated: prices only from
`lib/constants.ts PRICING`; never invent clients/stats; `git push` deploys
production and is Ivan-only; if you did work, commit it to THIS repo —
claims without artifacts here don't count.
