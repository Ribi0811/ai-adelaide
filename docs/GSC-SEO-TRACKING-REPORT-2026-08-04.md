# AI Adelaide SEO & GSC Tracking Report

**Checked:** 4 August 2026 (Adelaide time)  
**Property:** `sc-domain:aiadelaide.com.au`  
**Live site:** [aiadelaide.com.au](https://aiadelaide.com.au)

## Executive Summary

- **The measurement foundations are working.** The GSC domain property is accessible, `robots.txt` and the sitemap return successfully, the main pages inspected are indexed with matching canonicals, and the live site contains the GA4 measurement tag and event instrumentation.
- **Visibility is growing faster than qualified traffic.** In the latest complete 28-day window, impressions rose to 19,399 and clicks to 41, while average position improved to 33.6. That is genuine discovery, but a 0.21% CTR is still very low. The latest seven days then produced only 6 clicks from 6,456 impressions (0.09% CTR), so the immediate bottleneck is turning exposure into clicks and enquiries.
- **The best local opportunities are already on the site.** `/local-seo-adelaide`, the southern-suburb pages, `/seo-for-tradies-adelaide`, and `/websites-for-electricians-adelaide` are showing relevant Adelaide demand. They need recrawling, proof, clearer internal ownership, and stronger conversion paths—not another large batch of pages.
- **OpenClaw is running, but its reports are not using one consistent measurement definition.** The daily snapshot, weekly raw report, and comparison script use different date cut-offs, data states, and aggregation methods. That can make a healthy week look like a failure. Fixing this reporting layer should come before making decisions from automated alerts.

## 1. What is being tracked today

### Search Console and indexation

The read-only service-account check can access the correct domain property. Spot checks returned the following healthy states:

| Check | Result | Meaning |
|---|---|---|
| GSC property | Accessible | The reporting account can query `sc-domain:aiadelaide.com.au`. |
| `robots.txt` | HTTP 200 | No server-level robots outage observed. |
| Canonical sitemap | HTTP 200 | `https://aiadelaide.com.au/sitemap.xml` is available and contains 122 URLs. |
| URL inspection | PASS on checked pages | Core pages were submitted and indexed, with indexing allowed and Google/user canonicals matching. |
| Crawl freshness | Mixed | The homepage was crawled on 2 August; several important service/suburb pages were last crawled between 4 and 24 July. |

There are currently two sitemap submissions in GSC: the canonical non-www sitemap and the www version. Both download without errors, but the www URL redirects to the non-www host. Keep the canonical non-www sitemap and remove the duplicate www submission in the GSC interface for cleaner administration. Do not interpret the API's `indexed: 0` contents field as “nothing is indexed” here; the URL Inspection results contradict that interpretation and the same field is unreliable across the connected properties.

### GA4 and onsite lead tracking

The live homepage contains measurement ID `G-VCH0ZWH5HT`. The repository also has event wiring for CTA clicks, phone clicks, form starts/submissions, audit completion, attribution, and the tradie lead form. This means the implementation exists and is deployed.

What has not been proved by this read-only check is that every event is arriving in the GA4 property. Confirm the following in GA4 Realtime or DebugView:

- `form_start` and `form_submit` from the contact form;
- `audit_start` and `audit_complete` from the readiness tool;
- `tradie_lead_submit` from the tradie page;
- `tel_*`, quote, and booking CTA events;
- first-touch source/medium and landing-page values on a lead notification.

Do not manufacture a customer lead to test this in production. Use DebugView, a controlled internal test, or a browser session that is explicitly marked as a test.

## 2. What GSC says about performance

The figures below come from the Search Console API using aggregate rows, `dataState: final`, and a three-day reporting lag. The latest complete day available for this check is 1 August 2026.

| Window | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| 5 July–1 August (28 days) | 41 | 19,399 | 0.211% | 33.6 |
| 7 June–4 July (previous 28 days) | 13 | 7,951 | 0.164% | 47.3 |
| Change | **+215%** | **+144%** | **+0.047 pp** | **13.7 positions better** |
| 26 July–1 August (7 days) | 6 | 6,456 | 0.093% | 32.6 |
| 19–25 July (previous 7 days) | 7 | 5,342 | 0.131% | 28.4 |

### The interpretation

The 28-day trend is positive: Google is showing AI Adelaide for substantially more searches and the average position is improving. However, the latest seven-day comparison is a warning that impressions are expanding faster than clicks. This is typical of a young domain being tested across a broad set of queries, but it means we should optimise for qualified click-through rate and enquiries rather than celebrate impression growth alone.

Australia accounts for almost all current visibility (38 of 41 clicks and 18,366 of 19,399 impressions). Mobile is currently stronger than desktop (approximately 0.47% CTR at position 26.5 versus 0.16% CTR at position 34.9), so the mobile CTA and form path deserve continued attention.

The sample is still small. A single click changes the weekly percentages materially, so use rolling 28-day and 8–12-week views for decisions, not day-to-day movement.

## 3. The pages and queries worth acting on

### Local SEO is the clearest service opportunity

`/local-seo-adelaide` generated 1,368 impressions at average position 36.1. The exact query `local seo adelaide` generated 494 impressions at position 23.3 on that page. The same query also appeared on `/seo` for 378 impressions at position 73.2.

This is a query/page ownership signal, not proof that a redirect is required. Keep `/seo` as the broader SEO hub, make `/local-seo-adelaide` the exact local-intent owner through descriptive internal links and anchor text, and allow Google to recrawl the recent changes before rewriting the structure again.

### Suburb pages are striking distance, but need evidence

| Page | Impressions | Avg. position | Query signal |
|---|---:|---:|---|
| `/reynella` | 552 | 22.0 | `web design reynella` position 9.4; `reynella website designer` position 7.5 |
| `/morphett-vale` | 524 | 22.1 | `morphett vale website designer` position 7.5 |
| `/seaford` | 463 | 17.7 | `website designer seaford` position 14.4 |
| `/marion` | 235 | 18.5 | `website designer marion` position 7.4 |
| `/moana` | 212 | 16.2 | `moana website designer` position 8.4 |

Several of these terms are already on page one or close to it but have recorded no click. The metadata has recently been corrected, yet Google last crawled many of these pages in early July. The next move is to request indexing in GSC, add genuine suburb-specific proof/portfolio details supplied by Ivan, and improve the above-fold CTA. Do not create another suburb batch until these pages have had time to settle.

### Tradie and electrician pages are the strongest commercial signals

- `/seo-for-tradies-adelaide`: 635 impressions and 3 clicks in the 28-day window. The exact query `seo for tradies adelaide` appeared at position 5.0 and produced 2 clicks.
- `/websites-for-electricians-adelaide`: 382 impressions and 4 clicks. `websites for electricians` appeared at position 27.6 and produced 1 click.

Protect these pages. Add real proof, a specific Adelaide outcome or process, and a clear lead CTA. The tradie article should remain a conversion-supporting asset; its ranking should not be sacrificed by redirecting it into the landing page.

### The commercial receptionist pages need intent clarity, not another URL churn

`/virtual-receptionist-adelaide` received 1,017 impressions at position 44.8. The comparison page `/ai-receptionist-vs-virtual-receptionist` appeared for `virtual receptionist adelaide` at position 15.3 while the commercial page appeared for the same query at position 39.9.

That is an intent-overlap signal. Use internal links and calls to action to distinguish “compare/how it works” from “get the service”, and monitor the settled answering-service cluster for 60–90 days. Do not reorganise the cluster again immediately after the recent changes.

### Broad AI queries are inflating impressions without proving demand

The homepage received 726 impressions for `ai application development adelaide` and 521 for the generic query `ai`, with no clicks in either row. These are not automatically good opportunities for AI Adelaide’s priority services. Do not build more application-development or ecommerce pages from these rows unless those offers are confirmed business priorities. Treat them as discovery noise until the offer and conversion path are clear.

## 4. OpenClaw tracking health and the reporting problem

The daily GSC snapshot is running successfully. The 4 August snapshot exists at [daily-snapshots/2026-08-04.json](</Users/ivanribicic/.openclaw/workspace/projects/analytics/daily-snapshots/2026-08-04.json>) and reports AI Adelaide at 6 clicks, 6,456 impressions, and position 32.6 for its comparison window.

The weekly raw extract at [gsc-weekly-2026-08-04-raw.json](</Users/ivanribicic/.openclaw/workspace/projects/analytics/gsc-weekly-2026-08-04-raw.json>) uses a different window (28 July–3 August) and reports 3 clicks, 4,828 impressions, and position 33.4. That is not an apples-to-apples contradiction; it is a different period, with the most recent days still subject to Search Console finalisation.

The underlying scripts also need standardisation:

- `gsc_weekly_report.py` uses “yesterday” as its end date and does not set `dataState: final` on the aggregate request.
- `compare_gsc_weeks.py` requests `query + page + date` rows and then sums a row-limited extract. That is useful for drivers, but it is not a safe source of truth for site totals.
- The weekly aggregate and the dimension breakdown should be stored separately. A dimension extract must never be used to recreate the aggregate total when the API may have truncated rows.
- The daily Analyst job is healthy, but `SEO Weekly — Combined Analysis` is in error with 12 consecutive errors and `SEO Quality Gap Analysis` is in error with 2. The data files are still being produced, but delivery/alerting is not reliable enough to trust silently.

### Recommended tracking definition

Use one canonical extractor for all AI Adelaide reporting:

1. Property: `sc-domain:aiadelaide.com.au`.
2. End date: today minus three days.
3. Windows: fixed rolling 7 days and 28 days, plus the immediately preceding equal windows.
4. Aggregate totals: one no-dimension API request with `dataState: final`.
5. Drivers: separate page, query, device, and country requests; never sum them to replace aggregate totals.
6. Every output: record the property, start/end dates, data state, row limits, extraction timestamp, and a warning if a comparison source does not match the canonical aggregate.

## 5. Recommended action queue

### Do now

1. **Request recrawls in GSC** for `/seo`, `/local-seo-adelaide`, `/website-design-adelaide`, `/seo-for-tradies-adelaide`, `/virtual-receptionist-adelaide`, and the six priority suburb pages. Their current metadata/layout changes are newer than Google’s last crawl.
2. **Clean the sitemap list** in GSC by retaining `https://aiadelaide.com.au/sitemap.xml` and removing the duplicate www submission.
3. **Fix the OpenClaw measurement definition** so the daily and weekly reports use the same final-data lag and fixed windows. Mark the aggregate row as the authoritative total.
4. **Repair the two failing SEO jobs and their delivery path.** A report that is saved but not delivered is not a dependable alerting system.
5. **Verify GA4 events in Realtime/DebugView** and check that a lead notification contains the first-touch source/medium and landing page.

### Do over the next 30–60 days

1. Add human-supplied Adelaide proof: real projects, before/after outcomes, testimonials/reviews, service-area detail, and a complete Google Business Profile.
2. Strengthen internal links so local-intent links point to `/local-seo-adelaide`, broader SEO links point to `/seo`, and comparison content links to the commercial receptionist page.
3. Improve the snippet/conversion path on pages with meaningful impressions but zero clicks. Do not mass-retitle every URL; let the recent changes be crawled first.
4. Track commercial outcomes in addition to GSC: qualified lead, call, booked meeting, and won job. GSC can show visibility; it cannot show revenue.

### Do not do yet

- Do not create another large set of suburb or “AI” pages based only on impressions.
- Do not redirect the ranking tradie article.
- Do not reopen the answering-service URL consolidation while the recent six-page structure is settling.
- Do not treat automated “quick win” rows for generic AI or unconfirmed offers as business priorities.

## Further questions that affect prioritisation

1. Which two offers are the immediate revenue priorities: local SEO, website design, tradie SEO, receptionist/answering, or automation?
2. Which Adelaide case studies, reviews, or project screenshots can be used as real proof on the local and suburb pages?
3. Should OpenClaw deliver SEO alerts to Telegram, email, or both? The failing jobs need one tested owner and delivery path.

## Caveats and assumptions

- Search Console data is delayed and revised. This report uses a three-day lag and final data for the main comparisons.
- Average position is an aggregate across queries and devices; it is not a single guaranteed rank.
- The site has only 41 clicks in the 28-day window, so percentage changes are volatile.
- This check did not attribute actual revenue or qualified leads to organic search. GA4 and CRM/lead records must be joined for that decision.
- Query/page overlap is reported as a signal for clearer ownership, not as proof that a page must be deleted or redirected.
