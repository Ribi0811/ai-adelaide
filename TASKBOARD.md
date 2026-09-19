# AI Adelaide Taskboard

## Tier 8 — Chat Lead Capture Fix (2026-06-23)

See Tier 8 above. Files: app/api/chat/route.ts, ~/.hermes/scripts/aiadelaide_chat_daily.py, ~/.hermes/cron/jobs.json

---

## SEO Audit — 2026-07-09 (Mujo-initiated, GSC data + scripts)

**Status:** Audit complete, report at `~/.openclaw/workspace/reports/aiadelaide-seo-audit-2026-07-09.md`.

**Key data (28d, ends 2026-07-08):**
- Recent: 17 clicks / 8,716 imp / 0.20% CTR / avg pos 48.0
- Previous 28d: 22 clicks / 5,342 imp / 0.41% CTR / avg pos 40.8
- **Impressions +63%, but clicks dropped 22→17 and CTR halved** — phase 1–8 work is uncommitted in the repo, prod still serves the older state.

**Top rank-climb targets (50+ impressions, position >5, biggest CTR leverage):**
- `/seo` — pos **72.3**, 2,203 impressions, 1 click (page 7)
- `/` — pos 28.8, 1,683 impressions, 10 clicks
- `/website-design-adelaide` — 814 imp / 0 clicks
- `/ai-receptionist-vs-virtual-receptionist` — 627 imp / 0 clicks
- `/virtual-receptionist-adelaide` — 522 imp / 0 clicks
- `/after-hours-answering-adelaide` — 358 imp / 0 clicks
- `/seo-services-adelaide` — 223 imp / 0 clicks (pos 86!)

**Top query targets where impressions>50 but pos>5:**
- `local seo adelaide` (479 imp, pos 63.3)
- `virtual receptionist adelaide` (407 imp, pos 15.6)
- `adelaide seo` (280 imp, pos 67.7)
- `adelaide local seo` (216 imp, pos 63.3)
- `website design adelaide small business` (156 imp, pos 62)
- `seo in adelaide` (146 imp, pos 74.8)
- `after hours call answering` (139 imp, pos 43)

**Tools status:**
- `npm run check-meta` → 0 double-brand titles, 2 title-length on money pages, ~30 cosmetic description issues (Q4 from handoff), 2 warn-level noindexed routes — **all previously documented & gated**
- `npm run check-links` → 77 unique internal hrefs, 124 real routes, 0 broken, 0 chains ✅
- `tsc --noEmit` → clean ✅
- Production sitemap.xml: **116 URLs**, robots.txt clean
- 28 production pages flagged as having 50+ imp + <3% CTR (rank-climb leverage)
- 31 production queries flagged as having 50+ imp + pos>5 (page-1 push candidates)

**Recommendation:** Open Phases 1–8 changes are uncommitted on `aiadelaide-CANONICAL` working tree (per Ivan's "never push without approval" rule, 89 files uncommitted per P10). The biggest single SEO lever right now is **push the existing changes** — every fix in the phase 1-8 / P1-P4 work *already* improves ranking signals: cleanup redirects, fixed meta, schema, breadcrumbs, removed contradictory "$247 audit", 13 LinkStack on money pages, sitemap with real dates. No new content needed; deploy what's already built.
