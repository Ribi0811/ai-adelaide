# Search decline diagnosis — 15 September 2026

This is a read-only `dataState=final` Search Console extract for `sc-domain:aiadelaide.com.au`, web search, with the common final-data end date 11 September. It compares the complete equal 28-day windows **15 August–11 September** and **18 July–14 August**. Date coverage is complete in both windows.

## Assessment

The visible pattern is a step change in exposure beginning on 18 August. Retained-query positions are often stable or better, but aggregate averages cannot rule out lost rankings for queries that stopped appearing. The no-dimension headline aggregates show:

| Region | Previous | Current | Movement |
|---|---:|---:|---:|
| Global | 29 clicks, 24,332 impressions, 0.1192% CTR, position 30.23 | 10 clicks, 4,255 impressions, 0.2350% CTR, position 28.03 | clicks -65.5%; impressions -82.5%; CTR +0.1158 pp; position improves 2.20 |
| Australia | 26 clicks, 23,128 impressions, 0.1124% CTR, position 30.23 | 6 clicks, 4,099 impressions, 0.1464% CTR, position 27.82 | clicks -76.9%; impressions -82.3%; CTR +0.0340 pp; position improves 2.40 |

The daily rows locate the break: global impressions fell from 646 on 17 August to 111 on 18 August; Australia fell from 626 to 107. From 18 August through 11 September, global impressions stayed between 60 and 115 per day, averaging 88. The 5 September release cohort came after this decline and is not a plausible explanation for its start.

The aggregate row is the headline source. Page, query, query-plus-page and date rows were pulled separately for diagnosis and were not summed into the headline totals.

## Principal commercial page losses

These are Australia page-dimension diagnostics. Position is average position, where a lower number is better; the diagnostic rows are not site totals.

| URL | Impressions previous → current | Position previous → current | Reading |
|---|---:|---:|---|
| `/local-seo-adelaide` | 1,582 → 134 (-1,448) | 36.38 → 25.37 | Exposure fell while position improved. |
| `/websites-for-electricians-adelaide` | 581 → 67 (-514) | 27.37 → 19.46 | Exposure fell while position improved. |
| `/reynella` | 460 → 78 (-382) | 16.95 → 45.27 | Clear page-level regression; inspect at the next pull. |
| `/morphett-vale` | 356 → 36 (-320) | 10.98 → 8.39 | Exposure fell while position improved. |
| `/seo` | 1,511 → 133 (-1,378) | 64.98 → 65.11 | Low-ranking broad page lost exposure; inspection passes. |
| `/seo-for-tradies-adelaide` | 235 → 80 (-155) | 25.73 → 21.21 | Exposure fell while position improved. |
| `/marion` | 197 → 23 (-174) | 10.47 → 6.04 | Exposure fell while position improved. |
| `/website-cost-adelaide` | 225 → 22 (-203) | 35.58 → 20.36 | Exposure fell while position improved. |

The largest page loss is `/answering-service-adelaide` (3,342 → 304 impressions; position 39.30 → 65.31), but it belongs to the frozen, lower-priority answering cluster and remains out of scope for churn. The homepage also lost exposure (3,417 → 1,726) with stable position (18.61 → 18.65).

## Query intent diagnostics

The largest commercial query losses appear across local SEO, trade websites and suburb website intent. The important pattern is that most retained queries hold or improve position while their impressions collapse:

| Query | Intent | Impressions previous → current | Position previous → current |
|---|---|---:|---:|
| `local seo adelaide` | Local SEO | 657 → 66 (-591) | 27.13 → 26.74 |
| `adelaide local seo` | Local SEO | 358 → 37 (-321) | 25.61 → 20.35 |
| `websites for electricians` | Trade website | 206 → 25 (-181) | 13.50 → 7.16 |
| `website for electricians` | Trade website | 133 → 10 (-123) | 19.33 → 8.80 |
| `website designer marion` | Suburb website | 135 → 10 (-125) | 9.68 → 6.00 |
| `reynella website designer` | Suburb website | 134 → 10 (-124) | 6.93 → 6.20 |
| `web design reynella` | Suburb website | 133 → 9 (-124) | 8.25 → 7.00 |
| `morphett vale website designer` | Suburb website | 122 → 11 (-111) | 4.71 → 4.55 |
| `seo packages adelaide` | SEO pricing | 178 → 15 (-163) | 35.07 → 70.47 |
| `seo for ndis providers` | Industry SEO | 123 → 0 (-123) | 55.63 → no row |
| `website design adelaide prices` | Website pricing | 107 → 15 (-92) | 22.03 → 20.36 |

The previous window also contains the anomalous phrase `local seo with thealites for plumber` (297 → 21 impressions, position 6.07 → 9.95). It is not a sound content brief and should not drive an optimisation.

## Indexing and technical checks

URL Inspection was available and passed for the principal pages tested: electrician website, Local SEO, SEO for tradies, Marion, Reynella, Morphett Vale, website design, `/seo`, and NDIS provider marketing. Each returned “Submitted and indexed”, `robotsTxtState=ALLOWED`, `indexingState=INDEXING_ALLOWED`, `pageFetchState=SUCCESSFUL`, and a self-matching Google canonical. This extract therefore does not evidence a missing-page, robots, canonical or fetch defect.

## Decision

This comparison does not justify a broad SEO rewrite, title churn, URL or redirect change. It does not establish the cause of the site-wide decline. Preserve the 5 September cohort; the first complete post-release window is **6 September–3 October**, available no earlier than **6 October**. At that checkpoint, recheck `/reynella` rendered metadata/content and its query-page mapping, and edit only if a concrete defect is found. Continue observing `/local-seo-adelaide` and `/websites-for-electricians-adelaide` without rewriting them from impression loss alone.

The structured evidence and exact inspection statuses are in [`search-diagnosis.json`](./search-diagnosis.json).

## Coordinator follow-through

Google's [August 2026 spam update](https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE) began **18 August at 09:27 US/Pacific** and ended 21 August. Search Console date rows also use Pacific dates, so the timing overlaps the observed break. This is a plausible factor to investigate, not proof of a penalty or a specific policy violation. The [current data-anomaly notice](https://support.google.com/webmasters/answer/6211453) does not identify a standard web-search logging incident explaining this window. No local git commits were found from 14–21 August; that does not rule out an external deployment or configuration change.

For `seo packages adelaide`, the previous AU query-plus-page rows include `/blog/how-much-does-seo-cost-adelaide` at 111 impressions and position 12.47, plus `/seo` at 124 impressions and position 81.93. The current window retains `/seo` at 15 impressions and position 70.47; the article has no returned row for that query. These rows overlap and are not summed. The article is still HTTP 200, indexable, and reported as indexed with a matching canonical, although Google's reported last crawl is 18 July. No redirect or deletion explains the missing row. [Article inspection](seo-cost-inspection.json).

Source and live inspection found a separate buyer-path problem: the SEO service's primary audit action and the pricing guide's visibility-audit link led to a self-assessment, not a request for SEO work. The bounded change selected for 15 September gives these existing pages direct `service=seo` quote paths and adds a practical package-comparison checklist to the existing pricing guide. It preserves titles, prices, URL structure and the protected September cohort. This addresses buyer intent and enquiry friction; it is not represented as a remedy for the August site-wide exposure change.

Follow up on the specific `seo packages adelaide` query-page pair and the guide's crawl date during the 22 September diagnostic. Treat early movement as directional only. Earliest full 28-day post-change comparison for the 15 September pages is 17 October (16 September–13 October versus 18 August–14 September, excluding release day and allowing three days). The separate September 5 cohort checkpoint remains October 6.

### Subsequent live Search Console check

Authenticated Manual actions report for `sc-domain:aiadelaide.com.au` on 15 September showed **No issues detected**. This does not rule out algorithmic effects. Security issues report was not assessed.
