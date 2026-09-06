# AI Adelaide growth launch: search baseline

Date: 6 September 2026 (Adelaide). Read-only baseline; no production changes, indexing submissions, profile edits, messages or customer records accessed.

The immediate priority is to convert and build credibility around existing commercial visibility while the 5 September release settles. The site has a low organic click volume; this is not evidence that another broad rewrite or more landing pages will produce customers. The latest final data predates the release entirely, so it cannot measure that release's effect.

## Verified live data

Source: direct Google Search Console API for `sc-domain:aiadelaide.com.au`, web search, `dataState=final`. Existing service-account credentials were used with the read-only scope. Raw credentials were neither printed nor saved in the report.

The common final end is **3 September 2026**, with a three-day reporting lag. A separate date-dimension request confirmed all 56 dates were present. Each headline metric below comes from one no-dimension aggregate row. Page and query diagnostics are not summed into totals. Australia is the `aus` country filter; this does not isolate Adelaide residents or qualified buyers.

| Aggregate | 7 Aug–3 Sep (28 days) | 10 Jul–6 Aug (28 days) | Change |
|---|---:|---:|---:|
| Global clicks | 21 | 28 | -25.0% |
| Global impressions | 10,963 | 21,498 | -49.0% |
| Global CTR | 0.192% | 0.130% | +0.061 percentage points |
| Global average position | 28.52 | 31.57 | 3.05 positions lower numerically |
| Australia clicks | 15 | 25 | -40.0% |
| Australia impressions | 10,471 | 20,432 | -48.8% |
| Australia CTR | 0.143% | 0.122% | +0.021 percentage points |
| Australia average position | 28.44 | 31.62 | 3.18 positions lower numerically |

Interpretation: clicks and impressions declined while aggregate CTR and position improved. A changed query mix can produce that pattern. The sample is small and supplies no causal explanation, conversion rate or revenue result. Qualified enquiries, quotes, wins and cash received remain separate measures, to be established from the private register and actual outcomes by the operating programme.

Evidence: [sanitized API responses and live HTTP checks](./gsc-baseline.json). This contains aggregate responses, page diagnostics and a deliberately limited selection of commercial query diagnostics; it excludes unrelated search strings.

## Commercial signals to preserve

These are current-window Australia query/page diagnostics, **not keyword volume estimates, fixed rankings or site totals**. Each selected query returned zero clicks in this window. Their value is evidence of relevant exposure worth evaluating against real enquiries.

| Query | Existing destination | Impressions | Average position |
|---|---|---:|---:|
| websites for electricians | `/websites-for-electricians-adelaide` | 107 | 9.9 |
| website for electricians | `/websites-for-electricians-adelaide` | 66 | 14.8 |
| seo for tradies adelaide | `/seo-for-tradies-adelaide` | 55 | 1.9 |
| reynella website designer | `/reynella` | 46 | 5.9 |
| web design reynella | `/reynella` | 46 | 7.5 |
| website designer marion | `/marion` | 45 | 10.6 |
| website designer morphett vale | `/morphett-vale` | 38 | 8.1 |
| morphett vale website designer | `/morphett-vale` | 37 | 4.6 |
| local seo adelaide | `/local-seo-adelaide` | 252 | 17.5 |
| adelaide local seo | `/local-seo-adelaide` | 142 | 13.2 |
| cheap website design adelaide | `/blog/cheap-website-design-adelaide` | 64 | 12.4 |

The five priority pages were changed on 5 September. Their pre-release query signals support keeping them stable, observing what Google serves and gathering proof. `/local-seo-adelaide` is a subsequent evidence-led review candidate, but its impression count alone does not establish a copy defect or mandate an edit.

Live read-only HTTP checks on 6 September confirmed the homepage, the five priority routes and `/local-seo-adelaide` all return 200, one H1, the expected canonical and `index, follow`. This is server-HTML integrity evidence. It is not a new browser, Core Web Vitals, live form-delivery or Google indexing verification. Those broader checks must not be inferred from HTTP success.

## Three next priorities

1. **Operate the enquiry-to-revenue loop first.** At each scheduled check, identify genuine new enquiries and overdue decisions, prepare the next useful response or scope, and reconcile qualified/quoted/won/revenue outcomes. Exclude marked synthetic test entries. Confirm the audit, chat, booking and phone paths are accounted for before claiming complete lead coverage; the current Contact/Tradie integration does not cover them. This protects the commercial value of scarce visitors. Dependency: authenticated access and the agreed customer-communication authority; never invent status or revenue. Completion evidence: actual enquiry disposition and paid outcome, not an empty Sheet or notification acceptance.

2. **Prepare genuine proof and local credibility instead of another content batch.** Use the existing permission-backed portfolio and actual delivered work to assemble one concrete example of the problem, implementation and verified workflow; exclude unsupported customer or financial results. Prepare a small factual GBP correction brief and a genuine review-request draft, using confirmed business coverage and customer-facing location. The 5 September owner audit recorded one review and empty service areas, but that is historical and should be rechecked before a public change. Public profile edits and sending messages remain subject to the programme's authority and verified facts. Google's guidance links local visibility to relevance, distance and prominence, including accurate information, reviews and links: [Google Business Profile guidance](https://support.google.com/business/answer/7091?hl=en), rechecked 6 September.

3. **Run a protected-page observation programme with small, evidence-led changes elsewhere.** Keep the electrician, tradie and three southern-suburb URLs, titles and intent stable while their 5 September changes are evaluated. Weekly, inspect crawl/canonical status, relevant query/page pairs and genuine enquiry paths; investigate broken functionality immediately. Do not repeatedly request recrawls or declare success from daily rank movement. Review `/local-seo-adelaide` next for a specific buyer or workflow gap only if inspection finds one. Google says crawling may take days to weeks and repeated requests do not make it faster: [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), rechecked 6 September.

These are priorities and verification criteria, not customer or ranking forecasts. Routine production fixes may still be justified if a real defect is found; the observation period is not a reason to leave a broken customer workflow live.

## Measurement dates and guardrails

- Every weekly report: refresh final, equal 28-day aggregate windows with at least a three-day lag; verify coverage and keep diagnostics distinct. Record the precise dates and release dates.
- First directional post-release seven-day window: 6–12 September, available no earlier than 15 September with the conservative lag and actual final coverage confirmed. This is an early health signal, not an SEO verdict.
- First full 28-day post-release window: 6 September–3 October, available no earlier than 6 October with the lag and final coverage confirmed. Compare to the complete pre-release window 8 August–4 September, explicitly omitting the 5 September release day. Re-pull both windows at that time. Even then, seasonality, query mix and other changes limit causal claims.
- Preserve the existing answering/receptionist URL/title freeze until approximately 15 September and re-evaluate with fresh evidence; this cluster is lower commercial priority.
- Do not expand generic blogs, suburbs or cities to satisfy output counts. Do not change prices, customer promises or business identity to manufacture a search experiment.

## Historical context used

`CLAUDE.md`, `docs/AGENT-HANDOFF.md`, `docs/AI-ADELAIDE-BUSINESS-REVIEW-2026-09-05.md` and `docs/SEO-PREVIEW-AUDIT-2026-09-05.md` were inspected for current standing orders and release context. The 5 September GSC extract used 6 August–2 September and is a different rolling window (21 global clicks / 12,013 impressions versus 33 / 20,979); it has not been substituted for today's live totals. No post-release ranking gain is asserted.
