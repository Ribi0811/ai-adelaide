# AI Adelaide SEO recovery and customer-acquisition investigation

**Checked:** 22 August 2026 (Australia/Adelaide)  
**Property:** `sc-domain:aiadelaide.com.au`  
**Scope:** Google Search Console, live indexability, local/service-page intent, OpenClaw reporting, conversion surfaces and competitor trust signals.

## Executive answer

The latest impression fall is real, but it is not evidence that AI Adelaide has been removed from Google or that the whole site has collapsed.

The more important commercial diagnosis is:

1. **Visibility is expanding and moving around, but the pages that sell websites and SEO are not earning enough clicks.** In the latest 28-day comparison, impressions rose 58.6% while clicks fell 31.6%, average position improved, and CTR fell sharply. That is a visibility-to-click problem, not simply an indexing problem.
2. **OpenClaw's headline GSC numbers are currently unreliable.** Its weekly comparison script sums query/page/date rows and treats those diagnostic rows as site totals. That under-counted AI Adelaide's clicks and impressions in the latest snapshot. Fixing this is the first priority, otherwise we can make the wrong SEO decisions from false alarms.
3. **The commercial pages need proof, clearer intent ownership and stronger local authority.** `/website-design-adelaide`, `/seo` and `/local-seo-adelaide` are indexed, but their current click yield is weak. The site has polished offers, pricing and CTAs; it does not yet have enough permission-backed Adelaide proof, reviews, portfolio evidence and relevant links to compete with established local providers.
4. **Do not respond with a blanket noindex experiment, another suburb-page expansion or another round of URL/title churn.** The key pages inspected are indexed and canonical. The answering/receptionist cluster is explicitly frozen until approximately 15 September in the project handoff.

The strongest path to customers is therefore: **repair measurement, make the website/SEO pages unmistakably useful and trustworthy, then build real Adelaide proof and authority while measuring qualified leads—not impressions alone.**

## 1. What was checked

- Direct Search Console API queries for `sc-domain:aiadelaide.com.au`, using aggregate (no-dimension) rows as the source of truth and `dataState=final` for the main comparisons.
- Query, page, country and device dimensions separately to diagnose drivers. Dimension rows are not added back together to recreate site totals.
- URL Inspection for the homepage and the main website, SEO, local SEO, tradie, answering and AI service pages.
- Live HTML, metadata, canonical tags, robots.txt, sitemap.xml, H1 counts and internal-link resolution.
- OpenClaw cron status, latest snapshot and the scripts that produce the daily/weekly GSC figures.
- Current local competitor trust surfaces for Adelaide website design and SEO.
- Repository checks: `npm run check-meta` and `npm run check-links`.

This is a read-only investigation. No production code, Google Business Profile, Search Console setting or deployment was changed.

## 2. The actual GSC movement

### Authoritative aggregate comparisons

The latest complete-safe window used here ends 19 August. The last couple of Search Console days can be revised, so the 7-day movement is directional rather than a final monthly verdict.

| Window | Clicks | Impressions | CTR | Average position | Interpretation |
|---|---:|---:|---:|---:|---|
| 23 Jul–19 Aug 2026 | 26 | 23,000 | 0.113% | 30.5 | Current 28 days |
| 25 Jun–22 Jul 2026 | 38 | 14,517 | 0.262% | 38.7 | Previous 28 days |
| Change | **-31.6%** | **+58.6%** | **-0.149 pp** | **8.2 positions better** | More exposure, much weaker click yield |
| 13–19 Aug 2026 | 10 | 3,610 | 0.277% | 27.0 | Latest 7 days |
| 6–12 Aug 2026 | 8 | 7,133 | 0.112% | 29.4 | Previous 7 days |
| Change | **+25.0%** | **-49.4%** | **+0.165 pp** | **2.4 positions better** | Short-window volatility; impressions genuinely fell |

The two comparisons can both be true: the young domain has accumulated more 28-day visibility while the latest week has pulled back. Average position improving while impressions fall can indicate a narrower, more qualified or simply different query mix; it does **not** look like a blanket ranking penalty.

### Where the latest 7-day impression loss came from

Page rows are diagnostic, not additive site totals. The largest directional losses were:

| Page | Current 13–19 Aug impressions | Previous 6–12 Aug | Position movement | Read |
|---|---:|---:|---:|---|
| `/answering-service-adelaide` | 314 | 1,389 | 37.6 → 39.4 | Largest loss, but harvest-tier rather than a priority offer; freeze the cluster |
| `/local-seo-adelaide` | 240 | 585 | 34.2 → 24.1 | Visibility fell while position improved; likely query mix/revision, not deindexing |
| `/websites-for-plumbers-adelaide` | 130 | 459 | 15.4 → 23.4 | Page remains visible but demand/query mix is noisy |
| `/seo` | 254 | 538 | 59.4 → 64.5 | Broad SEO page is still too deep for high click yield |
| `/` | 657 | 932 | 23.4 → 19.2 | Homepage position improved; it is still being tested for many broad AI terms |
| `/ai-seo-adelaide` | 94 | 284 | 20.8 → 10.5 | Better position but fewer impressions; not a reason to expand AI pages |

The largest loss is therefore not the core website offer. It is a mix of the frozen answering cluster, noisy vertical/suburb queries and unstable early-domain testing.

### Commercial pages are visible but under-clicked

Current 28-day page diagnostics show the commercial gap clearly:

| Page | Impressions | Average position | Clicks | What it means |
|---|---:|---:|---:|---|
| `/website-design-adelaide` | 493 | 52.3 | 0 | Exact page exists, but it is too deep and has no click evidence yet |
| `/website-cost-adelaide` | 382 | 27.7 | 1 | Pricing intent is closer to page one; use it as a conversion bridge |
| `/seo` | 1,684 | 62.1 | 0 | Broad SEO intent is not yet competitive enough |
| `/local-seo-adelaide` | 1,648 | 37.8 | 0 | Local intent is closer, but the page needs authority/proof and a clean internal-link owner |
| `/seo-for-tradies-adelaide` | 107 | 8.2 | 0 | Strong rank for a narrow term, but the search snippet/offer is not winning the click |
| `/websites-for-electricians-adelaide` | 687 | 29.2 | 1 | A viable vertical page, but it needs proof and stronger conversion evidence |
| `/websites-for-plumbers-adelaide` | 914 | 21.9 | 0 | Visibility is not yet translating to enquiries |
| `/` | 3,628 | 21.4 | 7 | Homepage is attracting broad AI/application searches as well as brand searches |

The homepage's largest current query/page exposure includes AI application development and broad AI terms. That is useful discovery traffic, but it is not the same as a small business owner looking for a website or an Adelaide SEO provider. The site needs a more deliberate path from those broad impressions to the commercial service pages.

## 3. What is wrong—and what is not

### 3.1 The OpenClaw tracker is creating a false level of certainty

`/Users/ivanribicic/.openclaw/workspace/projects/analytics/compare_gsc_weeks.py` currently requests `query + page + date` rows, sums them and calculates a site total. That is not a safe reconstruction of Search Console's aggregate total. The daily job in `run_daily_gsc_command.py` invokes that script.

For the exact week recorded in the 22 August snapshot:

| Source | 14–20 Aug clicks | 14–20 Aug impressions | 7–13 Aug clicks | 7–13 Aug impressions |
|---|---:|---:|---:|---:|
| OpenClaw snapshot | 1 | 2,192 | 1 | 5,275 |
| Direct aggregate GSC query | **6** | **2,916** | **12** | **6,688** |

The direction of the impression movement is still negative, but the magnitude and click story are wrong. The alerting/reporting layer must be repaired before it is used for page pruning or strategy changes.

### 3.2 Indexing and canonical health are not the immediate failure

URL Inspection returned **Submitted and indexed** with indexing allowed and matching Google/user canonicals for the homepage, `/seo`, `/local-seo-adelaide`, `/website-design-adelaide`, `/seo-for-tradies-adelaide`, `/answering-service-adelaide`, `/ai-seo-adelaide` and `/ai-app-development-adelaide`.

Live checks also found:

- `robots.txt` returns 200 and points at the canonical non-www sitemap.
- The sitemap returns 200 with 122 URLs.
- Checked pages return 200, are index-follow, use non-www canonicals and have one H1.
- `npm run check-meta` passes all 122 routes.
- `npm run check-links` passes with no internal redirect chains.

There are two Search Console sitemap submissions (www and non-www). The canonical non-www submission is healthy; keep one canonical submission to reduce avoidable noise, but this is not the explanation for the impression movement.

### 3.3 Local SEO intent is not cleanly owned in the internal links

The project decision is that `/local-seo-adelaide` owns local-intent language and `/seo` owns broad SEO Services Adelaide language. Several visible internal links still use “Local SEO” or “Local SEO Adelaide” while pointing to `/seo`, including:

- `components/home-v3/FAQV3.tsx`
- `components/home-day/MorningSearch.tsx`
- `components/home-day/NewDawn.tsx`
- `app/services/page.tsx`

Search Console shows the same query family appearing on both pages: `/local-seo-adelaide` is around positions 19–22 for `local seo adelaide`/`adelaide local seo`, while `/seo` appears around positions 69–78 for those terms. That is a page-ownership signal and a clear, low-risk internal-link correction—not proof that either page should be redirected.

### 3.4 The website page is not explicit enough in its first screen

`/website-design-adelaide` has an exact title, but its rendered H1 is **“A Professional Website, Live in 48 Hours”**. That is a good offer statement, but it does not explicitly say “Website Design Adelaide” in the primary heading. The page is currently around position 52 for its page-level visibility and has no clicks in the current 28-day window.

The first screen should make three things unambiguous:

1. who it is for: Adelaide small businesses;
2. what is being bought: website design/build, not abstract AI capability;
3. why trust it: real portfolio/proof, price/what is included and a direct next step.

This is a controlled conversion/intent improvement, not a reason to rewrite every title or create another near-duplicate website page.

## 4. Competitive trust gap

The local competitors checked put trust and buying clarity above clever positioning:

- Nailed It Websites foregrounds an Adelaide-based founder, local positioning, a portfolio, a seven-day turnaround and clear one-off/no-lock-in pricing: [Nailed It Websites](https://naileditwebsites.com.au/).
- Page Web Studio foregrounds Adelaide location, recent work/reviews, fixed pricing and concrete performance/delivery claims: [Page Web Studio](https://pagewebstudio.com.au/).
- Bold Agency publishes Adelaide-specific service proof, fixed package starting prices and performance/ownership signals: [Bold Agency Adelaide web design](https://www.boldagency.com.au/web-design/adelaide).
- Sitecentre's Adelaide SEO page leads with case studies, measurable organic/conversion outcomes, GMB, links, content and reporting: [Sitecentre Adelaide SEO](https://www.sitecentre.com.au/seo/adelaide).

AI Adelaide already has a strong visual system, an offer, pricing and a fast-turnaround angle. The missing layer is **permission-backed proof**: Ivan's founder identity and local story, real portfolio URLs/screenshots, genuine reviews, and case studies with a named business/suburb, baseline, timeframe and evidence. The existing illustrative examples must remain clearly illustrative until real evidence and permission are supplied.

## 5. Prioritised recovery plan

### P0 — repair the measuring instrument (before making SEO calls)

1. Replace the OpenClaw headline-total logic with one canonical aggregate extractor:
   - no dimensions for clicks/impressions/CTR/position totals;
   - `dataState: final` for the main report;
   - end date today minus three (or four) days, with the lag stated in every report;
   - fixed 7-day and 28-day windows;
   - query/page/device/country pulls kept as driver diagnostics only;
   - an explicit reconciliation warning if diagnostic rows are mistaken for totals.
2. Repair and test the failed OpenClaw jobs: **SEO Weekly — Combined Analysis** and **SEO Quality Gap Analysis** currently report errors/not-delivered. A tracker that silently fails or uses bad totals is a business risk.
3. Add a report label distinguishing “final data” from the latest two provisional Search Console days.
4. Remove the duplicate www sitemap submission in Search Console and retain the canonical non-www sitemap.
5. Verify GA4 in Realtime/DebugView after consent and submit a real test form. The code contains the tracking paths, but a code check is not proof that production beacons or email/Telegram delivery are arriving.

### P1 — improve the pages most likely to create revenue

1. **Website page:** make the hero/H1 explicitly own “Website Design Adelaide for Small Businesses” (wording can be refined), then place real portfolio evidence, inclusions, the current approved price, 48-hour qualifier and one above-fold CTA. Keep the exact title unless a controlled test shows a reason to change it.
2. **Local SEO ownership:** change local-intent internal anchors to `/local-seo-adelaide`; reserve `/seo` for broad “SEO Services Adelaide” anchors. Keep the existing URLs and redirects.
3. **SEO page:** add a decision-stage “what is included / first 90 days / how reporting works” block and link the existing `/website-cost-adelaide` and relevant vertical pages into the right service owner. Do not promise rankings or invented outcomes.
4. **Tradie/electrician pages:** protect the pages that already show useful positions, add a tracked audit/review CTA and replace the HUMAN INPUT NEEDED placeholder only with a real, permission-backed case study.
5. **Commercial navigation:** make the primary site path obvious: Website Design → Website Cost/Portfolio → Contact/Build; Local SEO → SEO Services/Local SEO → Free Visibility Review. Broad AI pages should link into these paths where a visitor is actually ready to buy.

### P1 — build the proof layer Google and customers both need

This is the highest-leverage work after tracking. It requires Ivan's input and cannot be safely generated by an agent:

- founder name, photo, Adelaide location/story and LinkedIn/about link;
- real portfolio screenshots and live URLs where permission allows;
- two or three permission-backed case studies with baseline, timeframe and evidence;
- genuine Google Business Profile reviews requested after completed work;
- approved business identity details (for example ABN) if Ivan wants them public;
- a short explanation of who does the work and what the customer receives after enquiry.

Do not replace this with more generic suburb copy. Competitors can copy wording; they cannot easily copy credible local proof.

### P2 — build local authority, not just more pages

- Audit the Google Business Profile primary/secondary categories, services, photos, description and UTM-tagged website link.
- Keep business details consistent across a small set of quality Australian/SA directories; prefer accuracy and relevance over bulk citations.
- Ask real clients, partners and local associations for relevant mentions or links. A useful Adelaide/SA research asset (for example a missed-call cost or small-business digital visibility study) can earn links if it contains original data and a genuine outreach plan.
- Continue monitoring the existing southern-suburb pages, but do not add another batch until the current pages have real proof and a conversion signal.

### Deliberately do not do now

- Do not noindex 18 suburb/service pages based on the OpenClaw “Tier 9D” diagnosis. It is not confirmed by the current evidence, and URL Inspection shows the important pages indexed.
- Do not redirect or recreate the tradie blog; its 301 to `/seo-for-tradies-adelaide` is already settled.
- Do not re-organise the answering/receptionist cluster before the handoff's approximately 15 September review date.
- Do not mass-rewrite titles, meta descriptions, H1s or schema while the site is still settling and proof is the bigger constraint.
- Do not treat the current low-volume GSC sample as a precise forecast. Twenty-six clicks in 28 days is directional evidence, not a statistically stable business verdict.

## 6. Customer-acquisition operating loop

Ranking work only matters if it creates conversations. For the next 30 days, use this loop:

1. **One clear offer per intent:** website design for Adelaide small businesses; local SEO for businesses already operating; a free visibility review as the low-friction next step.
2. **One measurable CTA per page:** form submit, call or review request. Keep the first-touch source/landing page/service attached to each notification.
3. **One proof improvement per week:** a real portfolio item, review, founder detail or permissioned result.
4. **One authority action per week:** a relevant GBP update, partner mention, local association link or useful original asset.
5. **Weekly review:** direct GSC aggregate totals, money-page query/page movement, GA4 accepted-consent events, form delivery and qualified leads. Record qualified, won and revenue outcomes separately from raw enquiries.

The primary KPI is **qualified Adelaide enquiries for websites and SEO**, followed by booked calls and paying customers. Impressions are a diagnostic leading indicator; they are not the business result.

## 7. Suggested 30-day acceptance criteria

These are measurement gates rather than guaranteed ranking targets:

- OpenClaw total clicks/impressions reconcile to a direct aggregate GSC query for the same property and date window.
- Failed combined/quality jobs deliver a clear success or error state and no stale headline is presented as current.
- `/website-design-adelaide`, `/seo` and `/local-seo-adelaide` each have a single intentional internal-link owner and a visible, working CTA.
- At least two real proof assets are live, with permission and provenance recorded.
- Every test lead shows landing page, service, first-touch source and delivery status; GA4 events are confirmed in Realtime/DebugView after consent.
- Weekly reporting includes qualified leads, booked calls, won work and revenue—not only impressions/clicks.

Do not set a success condition such as “rank number one in 30 days.” The honest near-term test is whether the right pages earn more qualified clicks and whether those clicks become conversations.

## 8. Recommended implementation order in this repository

When Ivan authorises implementation, use this order:

1. OpenClaw reporting repair (outside this Next.js repo) and a saved reconciliation example.
2. Internal-link owner correction in `components/home-v3/FAQV3.tsx`, `components/home-day/MorningSearch.tsx`, `components/home-day/NewDawn.tsx` and the local SEO card in `app/services/page.tsx`.
3. Controlled website hero/H1 and proof/CTA improvement in `app/website-design-adelaide/page.tsx`.
4. SEO/local SEO decision-stage content and cross-links, preserving approved pricing from `lib/constants.ts`.
5. Proof assets and GBP/off-site work after Ivan supplies/approves the real evidence.
6. Re-run `npm run build`, `npm run check-meta`, `npm run check-links`, localhost browser checks and real form/analytics delivery checks before any push.

## Bottom line

AI Adelaide does not need another large content expansion to solve this week's fall. It needs a trustworthy measurement layer, a cleaner local-intent map, stronger click/conversion surfaces and real Adelaide proof/authority. Fix those in that order and the SEO work is more likely to produce the thing that matters: paying website and SEO customers.
