# AI Adelaide Project

## Context (updated 2026-07-07 — trust this over anything older)
- Website design, local SEO & AI automation for Adelaide small businesses
- Website: aiadelaide.com.au — Next.js 14.2.35 App Router per `package.json` (an older note claimed 16.2 — verify against package.json, not docs), Tailwind, deployed via Vercel
- Vercel project: `ai-adelaide` (WITH HYPHEN — never create a new one)
- **Pricing (single source of truth: `PRICING` in `lib/constants.ts` — never hardcode):**
  websites $699 / $1,299 / $2,499 one-off · SEO $399–699/mo · automation $199–399/mo · audit is FREE
  (the old "$247 audit → retainer" model is DEAD — if you see it anywhere except "used to cost $247" framing, it's a bug)
- Positioning: sell outcomes; AI is the *reason* for the speed/price, never the product label
- BDM lead pool: ~1,169 leads (saturating — inbound SEO is the replacement strategy)
- Twilio number: 08 7100 9788 (Retell AI voice receptionist — it really answers; we market that)
- Homepage = the "One Day" design (dawn→dawn scroll narrative, `components/home-day/`)

## Standing Orders
- Show on localhost before any Vercel deploy
- Never deploy without Ivan's approval (local commits OK; `git push` = deploy = needs Ivan)
- Never invent client names, testimonials, stats, or reviews — use `<!-- HUMAN INPUT NEEDED -->` and log in `docs/claims-to-verify.md`
- No invented business names/domains in mockups — use "Your …" placeholders + `yourbusiness.com.au`
- Don't hardcode counts that grow (e.g. number of suburbs)
- Publish blog posts ✅

## Before you code
- **Start here for status + backlog:** `docs/AGENT-HANDOFF.md`
- **Design rules (binding):** `docs/DESIGN-SYSTEM-V3.md`
- **Checks that must pass:** `npx tsc --noEmit` · `node scripts/check-meta.mjs` (money pages must be clean)
- SEO invariants: one H1 per page · one FAQPage per URL, matching visible content · LocalBusiness lives in `app/layout.tsx` only · canonical host is non-www · sitemap dates come from `PAGE_DATES` in `app/sitemap.ts` (bump when you edit a page) · redirects live in `next.config.mjs`, keep them single-hop

## Doc map
- `docs/AGENT-HANDOFF.md` — current state + prioritized open work (UPDATE IT when you finish something)
- `docs/DESIGN-SYSTEM-V3.md` — design language
- `docs/PROMOTE-V2-PLAN.md` — homepage promotion (DONE) + Phase D interior-migration order (ACTIVE)
- `docs/claims-to-verify.md` — unverified marketing claims awaiting Ivan
- `docs/meta-issues.md` — cosmetic meta-length backlog
- `IMPLEMENTATION-PLAN.md`, `PUNCH-LIST-PHASE-8.md`, `SEO-AUDIT-JULY-2026.md` — historical record (completed)

## Related Obsidian Vault
- Mujo's vault has SEO data, BDM leads, GSC snapshots
- Search: `search_vault(query="AI Adelaide", vault="mujo")`
