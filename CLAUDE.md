# AI Adelaide project rules

## Sources and invariants

- Next.js App Router and Tailwind; verify versions in `package.json`. The existing Vercel project is `ai-adelaide`.
- All prices come from `lib/constants.ts` `PRICING`; do not copy prices from historical reports or hardcode them. The old paid-audit offer is retired. Sell business outcomes and truthful delivery capabilities.
- Never invent clients, testimonials, statistics, reviews or results. Use `<!-- HUMAN INPUT NEEDED -->` and `docs/claims-to-verify.md` for missing proof. Mockups use “Your …” and `yourbusiness.com.au`, not invented businesses.
- Preserve Ivan's brand-led identity preference: no personal founder-name/photo promotion without his instruction.
- Add suburbs through `data/suburbs.json`; derive changing counts rather than hardcoding them.
- For pages: one H1; one FAQPage matching visible questions where applicable; LocalBusiness only in `app/layout.tsx`; non-www canonical host. Sitemap dates use `PAGE_DATES` in `app/sitemap.ts`; update dates for changed page content. Redirects live in `next.config.mjs` and remain single-hop.
- Preserve `/seo-services-adelaide` → `/seo` and the tradie blog → `/seo-for-tradies-adelaide` redirects. Do not recreate the old post. Answering/receptionist URL/title churn remains frozen until approximately 15 September 2026; then reassess with fresh GSC, not automatic edits. Content/CTA changes still require applicable scope. Do not redirect ranking pages without query/page evidence.

## Authority and completion

Scoped local edits, tests and commits can proceed when requested. `git push` remains Ivan-only. Deployments and external actions require explicit action coverage. For the active growth programme, `docs/GROWTH-OPERATING-BRIEF.md` defines the standing authority, expiry and exclusions; it is not blanket authority for other tasks. Historical handoffs do not grant permission. Blog drafts follow ordinary local scope; publication follows the applicable release/publication authority.

Before an authorised release, show the result on localhost, run the build and required checks, and verify the canonical workflow afterwards. For code changes run `npx tsc --noEmit`; for page/metadata changes also run `node scripts/check-meta.mjs` (money pages must be clean). Choose other checks for the affected behavior. Report existing unrelated failures explicitly; do not silently waive a release gate. Documentation-only edits need document/link validation.

## Read when relevant

- `docs/AGENT-HANDOFF.md`: current priorities, unresolved work and evidence links. Update after meaningful status changes.
- `docs/DESIGN-SYSTEM-V3.md`: binding visual guidance for UI changes.
- `docs/GROWTH-OPERATING-BRIEF.md`: programme execution, release/outreach scope and consent rules.
- `docs/claims-to-verify.md`: proof gaps; `docs/meta-issues.md`: metadata backlog.
- `docs/PROMOTE-V2-PLAN.md`: optional interior polish. Completed implementation plans and dated reports are history, not new work orders.
