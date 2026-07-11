# Agent Handoff — Current State & Open Work

**Last updated: 2026-07-11** (by the GSC-driven SEO session — Tier 12).
Rule: whoever finishes an item strikes it here and re-dates this header. This file is the single answer to "what's the state and what do I do next?" — read `CLAUDE.md` first for the standing orders.

## Current state

The 2026-07-07 batch (SEO phases 1–6, One Day homepage) WAS pushed on
2026-07-08 and is live in production — an earlier version of this file said
"not yet pushed"; that was stale.

**Tier 12 (2026-07-11, committed locally, NOT yet pushed).** Driven by a fresh
GSC API pull (creds in `~/.openclaw/workspace/.credentials/`, 28d + 180d):

- 31 GSC-indexed dead URLs → single-hop 301s in `next.config.mjs` (incl. the
  `/services/ai-automation` 404 Mujo flagged 5 weeks running, and 18 deleted
  blog posts nobody redirected). ~1,275 impr/6mo were landing on 404s.
- Footer had 6 links pointing at 301 sources — repointed to live routes.
  5 route dirs shadowed by config redirects deleted (dead code).
- NEW pages: `/ai-seo-adelaide` (query at pos 15 on homepage, no page) and
  `/aged-care-seo-services` (47 impr, completes automotive/hotel trio).
- `/seo` hub got a "SEO services by focus" spoke block — `/local-seo-adelaide`
  previously had ONE internal link sitewide while `/seo` soaked up its
  498-impr target query at pos 63.
- Intent alignment: `/ai-app-development-adelaide` retitled to carry the
  ~325 impr/mo national "ai development company" cluster (was ranking on the
  homepage); `/ai-automation-adelaide` +"business automation" FAQ (105 impr
  @ 8.4 was being served by /port-adelaide); receptionist comparison page
  retitled "Virtual Receptionist Adelaide: AI vs Human" (427 impr @ 14, 0
  clicks); suburb template titles now say "Web Design" not "Websites"
  (suburb pages rank 9-18 for "website designer {suburb}").
- PRICING landmines killed: local-seo ($297/497/797), hotel ($497/897/1497),
  ai-marketing meta ($497) all now match `lib/constants.ts` ($399/$699).
  One invented client stat removed (logged in claims-to-verify.md).
- check-meta: **fully clean** (was 28 failures). check-links: clean.
  tsc: clean. All new/edited pages verified rendering on localhost:3000.

**Strategy note (Ivan, 2026-07-11): receptionist/answering is harvest-tier
only — capture cheap clicks, StackCTA upsells them. Money and effort go to
web design, SEO services, and automation.**

## Ivan's gate (blocks everything below)

1. `npm run build` locally, click through `/seo`, `/ai-seo-adelaide`,
   `/aged-care-seo-services`, footer links, one suburb page.
2. `git push origin main` → Vercel deploys.
3. Post-deploy GSC (biggest lever, 10 min): request indexing on
   `/ai-seo-adelaide`, `/aged-care-seo-services`, `/local-seo-adelaide`,
   `/seo`, `/ai-app-development-adelaide`, `/ai-receptionist-vs-virtual-receptionist`;
   resubmit sitemap. Watch Coverage for the 31 redirected URLs 2–4 weeks.

## Open work — priority order

**Q1. Contact form prefill (small, high value).** `components/ContactForm.tsx`: read `?business=` + `?service=` params into fields; then point the hero/BuildYours personal CTA at `/contact?business={biz}#send-message` (currently plain `/contact#send-message`). Spec: PROMOTE-V2-PLAN A4.

**Q2. GA4 events (can't optimize what we don't measure).** Fire `gtag` events: build-mine submits (+trade), personal-closer clicks, sticky-bar clicks, tel: clicks (demo line vs nav vs footer), leak-calc interaction (v2 relic — skip), FAQ opens. Pattern in `app/layout.tsx`. Spec: A7.

**Q3. Phase D — interior pages to v4 language.** Order: `/website-pricing` + `/website-design-adelaide` → `/seo` + `/seo-for-tradies-adelaide` → `/ai-receptionist-adelaide` + `/ai-automation-adelaide` → `websites-for-*` cluster → suburb template → blog template (template only, not per-post). Method: extract primitives from `components/home-day` + `home-v3` into `components/v3/`; re-skin WITHOUT rewriting copy (the words are ranking). Full spec: PROMOTE-V2-PLAN Phase D + DESIGN-SYSTEM-V3.

~~**Q4. Meta-length backlog (28 cosmetic).**~~ DONE 2026-07-11 — checker fully clean; only 2 by-design warnings on noindexed audit-funnel routes remain.

**Q5. Phase 7 off-site [HUMAN — Ivan].** GSC/GA4 verification, GBP optimization + review velocity (target 25+ in 90 days), citations blitz (NAP: "AI Adelaide, 5 Peel St, Adelaide SA 5000, (08) 7100 9788"), rank-grid tracking, PR data study. Spec: IMPLEMENTATION-PLAN Phase 7.

**Q6. Human inputs waiting [Ivan].** (a) `docs/claims-to-verify.md` decisions — testimonials/case studies keep-label-remove; (b) ABN for the footer placeholder; (c) founder line wording + photo (`components/`—search "HUMAN INPUT"); (d) real portfolio screenshots + permissions; (e) confirm demo-line missed-call text-back actually fires → then build the "hang-up challenge" section.

**Q7. Content-calendar seeds (updated 2026-07-11 from fresh GSC data).** Variant gaps to grow into: a "Do I need a website if I have Facebook/Instagram?" blog post (FAQ seed already on /website-design-adelaide), a "web designer Adelaide" angle (suburb titles now carry "Web Design"; still no dedicated content), "how much does SEO cost in Adelaide" post expanding the /seo FAQ. New from GSC: "small business websites adelaide" (75 impr @ 44), "seo for tradies" national (116 impr @ 27), "ecommerce adelaide" (86 impr @ 84 — no offering, decide first), "plumbing websites" national (47 impr @ 68). Keep exact-match anchors natural — semantic coverage beats stuffing.

**Q8. Nice-to-haves parked.** OG image restyle to v4 language (`app/opengraph-image.tsx`); 404 page delight; `scripts/check-links.mjs` in CI (exists? verify) ; drop Space Grotesk font once no page uses `font-display` (after Q3).

## Landmines (learn from our scars)

- `lib/constants.ts PRICING` is the only place prices live. Grep before you trust any doc's numbers — including old audits.
- Adding a suburb: `data/suburbs.json` only — never write the count in copy.
- One FAQPage per URL and it must match visible Q&As. Layout owns LocalBusiness.
- `git push` deploys production. Commits are safe; pushes are not yours to make.
- The sandbox cannot run `next build` (SWC binary + registry blocked) — `tsc --noEmit` + scripts are your ceiling; say so rather than claiming build-verified.
