# Agent Handoff — Current State & Open Work

**Last updated: 2026-07-07** (by the session that shipped the One Day homepage).
Rule: whoever finishes an item strikes it here and re-dates this header. This file is the single answer to "what's the state and what do I do next?" — read `CLAUDE.md` first for the standing orders.

## Current state (verified, committed, NOT yet pushed)

Local commits ahead of `origin/main` (622a09b): SEO phases 1–6 · One Day homepage promotion · day-aware navbar · editorial footer · live visitor dates · meta length fixes. Working tree clean, `tsc --noEmit` green, `check-meta` clean on homepage + all money pages.

- Homepage `/` = One Day design (`components/home-day/`), production metadata, one FAQPage/LocalBusiness/WebSite, suburb link strip, sticky quote bar. `/v2 /v3 /v4` → 301 `/`.
- Nav: glass, inverts over `[data-nav-dark]` sections, scroll-progress hairline. Footer: editorial, all legacy links preserved, ABN placeholder.
- All redirects single-hop; sitemap has real dates via `PAGE_DATES`; audit funnel noindexed; cannibal clusters consolidated; claims catalogued (not deleted) in `docs/claims-to-verify.md`.

## Ivan's gate (blocks everything below)

1. `npm install && npm run build` locally (sandbox can't run builds), click through `/`, one service page, one blog post, mobile menu.
2. `git push origin main` → Vercel deploys.
3. Post-deploy: GSC → inspect `/` + new pages → request indexing; Rich Results Test on `/`; PSI mobile (LCP <2.5s, CLS <0.1); watch Coverage for redirected URLs 2–4 weeks.

## Open work — priority order

**Q1. Contact form prefill (small, high value).** `components/ContactForm.tsx`: read `?business=` + `?service=` params into fields; then point the hero/BuildYours personal CTA at `/contact?business={biz}#send-message` (currently plain `/contact#send-message`). Spec: PROMOTE-V2-PLAN A4.

**Q2. GA4 events (can't optimize what we don't measure).** Fire `gtag` events: build-mine submits (+trade), personal-closer clicks, sticky-bar clicks, tel: clicks (demo line vs nav vs footer), leak-calc interaction (v2 relic — skip), FAQ opens. Pattern in `app/layout.tsx`. Spec: A7.

**Q3. Phase D — interior pages to v4 language.** Order: `/website-pricing` + `/website-design-adelaide` → `/seo` + `/seo-for-tradies-adelaide` → `/ai-receptionist-adelaide` + `/ai-automation-adelaide` → `websites-for-*` cluster → suburb template → blog template (template only, not per-post). Method: extract primitives from `components/home-day` + `home-v3` into `components/v3/`; re-skin WITHOUT rewriting copy (the words are ranking). Full spec: PROMOTE-V2-PLAN Phase D + DESIGN-SYSTEM-V3.

**Q4. Meta-length backlog (28 cosmetic).** Blog posts + legacy secondary pages + `app/layout.tsx` fallback description — list via `node scripts/check-meta.mjs`. Fix opportunistically during Q3 migrations.

**Q5. Phase 7 off-site [HUMAN — Ivan].** GSC/GA4 verification, GBP optimization + review velocity (target 25+ in 90 days), citations blitz (NAP: "AI Adelaide, 5 Peel St, Adelaide SA 5000, (08) 7100 9788"), rank-grid tracking, PR data study. Spec: IMPLEMENTATION-PLAN Phase 7.

**Q6. Human inputs waiting [Ivan].** (a) `docs/claims-to-verify.md` decisions — testimonials/case studies keep-label-remove; (b) ABN for the footer placeholder; (c) founder line wording + photo (`components/`—search "HUMAN INPUT"); (d) real portfolio screenshots + permissions; (e) confirm demo-line missed-call text-back actually fires → then build the "hang-up challenge" section.

**Q7. Nice-to-haves parked.** OG image restyle to v4 language (`app/opengraph-image.tsx`); 404 page delight; `scripts/check-links.mjs` in CI (exists? verify) ; drop Space Grotesk font once no page uses `font-display` (after Q3).

## Landmines (learn from our scars)

- `lib/constants.ts PRICING` is the only place prices live. Grep before you trust any doc's numbers — including old audits.
- Adding a suburb: `data/suburbs.json` only — never write the count in copy.
- One FAQPage per URL and it must match visible Q&As. Layout owns LocalBusiness.
- `git push` deploys production. Commits are safe; pushes are not yours to make.
- The sandbox cannot run `next build` (SWC binary + registry blocked) — `tsc --noEmit` + scripts are your ceiling; say so rather than claiming build-verified.
