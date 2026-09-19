# SEO audit of the local preview — 5 September 2026

**Decision: the redesigned homepage has a sound foundation after the fixes below, but the site is not yet fully optimised or commercially validated.** The shortest credible SEO route is to improve existing electrician, tradie SEO and southern-suburb pages that already earn relevant impressions. Creating another batch of keyword pages is a weaker use of time.

Release update: these fixes and the accepted Business World homepage were deployed on 5 September from `fc1c295`, followed by canonical-host checks and sitemap submission. See `SEO-RELEASE-2026-09-05.md`. The audit and Search Console baseline below were collected before release; they do not establish post-release ranking gains.

## What was checked

- Crawled all **113 URLs in the local sitemap** before and after the fixes: HTTP response, titles, descriptions, canonical tags, headings, robots directives, internal links, image alternatives and server-rendered structured data.
- Read live robots.txt and refreshed Search Console directly using **final Web data**, including Australia-filtered query/page rows and separate property-level totals.
- Inspected seven priority live URLs through Google's URL Inspection API.
- Checked homepage service selection, SEO enquiry preselection and the revised mobile layout in a real browser. Reviewed two local competitors' published package pages for buyer clarity.
- Performance measurement was attempted, but the unauthenticated PageSpeed endpoint returned **429**. No Lighthouse score or Core Web Vitals pass is claimed.

This is not a backlink inventory, an authenticated Google Business Profile audit or a full manual-actions/security review. Seven indexed samples do not establish that all 113 URLs are indexed. Local HTTP timings are not real-user performance metrics.

## Technical fixes completed locally

| Finding | Change | Verification and meaning |
|---|---|---|
| Both the preview and live robots.txt blocked `/_next/`, which contains Next.js rendering assets | Removed that disallow rule; retained `/api/` | All homepage CSS, JavaScript and image URLs tested return 200 and are now crawlable. This removes a real rendering obstacle; it does not prove the obstacle caused the traffic decline. |
| Layout-owned LocalBusiness data depended on an after-interactive script | Rendered native JSON-LD in the initial HTML | Exactly one LocalBusiness block on each of the 113 crawled pages; real configured telephone replaces a masked fallback. Prices now derive from `PRICING`. |
| Only the initially selected website panel appeared in server HTML | Rendered all three service panels, with inactive panels hidden until selected | Website, SEO and automation text is present without requiring a crawler to click. Browser checks confirm only the chosen panel is visible and SEO still prefills the contact form. |
| The new homepage could more clearly reinforce commercial topics and deeper pages | Clarified the opening paragraph and service anchors; added contextual links to electricians, cafés, tradie SEO and the existing Starter/cheap-website guide | Relevant existing URLs get descriptive links without changing the headline design or creating duplicate pages. |
| Small-business AI consulting page had no inbound link in the sitemap crawl | Added a contextual link from the automation service page | This relevant Adelaide page is no longer orphaned in the crawl. |

Google documents that it cannot render blocked JavaScript. Server-rendered business information also makes the initial page easier to process. These are accessibility and understanding improvements, not a ranking guarantee. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [Next.js 14 structured-data guidance](https://nextjs.org/docs/14/app/building-your-application/optimizing/metadata).

The final crawl has **113 successful pages, one H1 per page, unique titles and canonical URLs, no page-level noindex directives, and alt attributes on the images inspected**. The homepage has one LocalBusiness, one WebSite and one FAQPage in server HTML. Robots.txt continues to exclude API routes; robots rules are not access control.

Two existing interstate consulting pages remain without inbound links: Brisbane and Melbourne. They are low-priority leftovers, not a reason to expand nationally or delete pages without checking their evidence. Sitewide footer links help discovery, but contextual links from relevant service content are more useful to readers.

## Current organic baseline

Equal 28-day windows, `dataState=final`, Web search: **6 August–2 September 2026** versus **9 July–5 August 2026**. Totals below come from separate no-dimension property aggregates, not sums of query/page rows.

| Measure | Previous 28 days | Current 28 days |
|---|---:|---:|
| Global clicks | 33 | 21 |
| Global impressions | 20,979 | 12,013 |
| Global average position | 32.01 | 28.60 |
| Australian clicks | 30 | 15 |
| Australian impressions | 19,915 | 11,469 |
| Australian CTR | 0.151% | 0.131% |
| Australian average position | 32.09 | 28.51 |

**Interpretation:** Australian clicks halved and impressions fell about 42%, while the average position improved. This mixed movement does not establish a recovery, a penalty or a cause. An average can improve as lower-position impressions disappear. Fifteen clicks is also too small a sample for reliable conversion conclusions. The important commercial constraint is very little relevant traffic reaching the business, followed by incomplete enquiry-to-revenue measurement.

All seven live URL samples were reported submitted and indexed, with Google's canonical matching the submitted URL. Latest recorded crawls ranged from **4 July to 28 August**; some existing improvements may need another crawl. The samples were electricians, tradie SEO, the cheap-website guide, Marion, Reynella, broad SEO and local SEO.

## 25 evidence-backed keyword opportunities

These are Australian impressions and average positions for the **current query/page pair** in Search Console. For each query, the table identifies the page with most impressions in the returned rows. Impressions are observed exposure, **not monthly search volume**; positions are averages, **not fixed live ranks**. Difficulty and competitor authority were not measured. Every listed pair currently recorded zero clicks, making these opportunities to investigate rather than proven sales channels. The CSV/JSON retain previous-window impressions and positions.

| Priority | Query | AU impressions | Avg. position | Existing page |
|---|---|---:|---:|---|
| High | seo for tradies adelaide | 53 | 2.04 | `/seo-for-tradies-adelaide` |
| High | websites for electricians | 117 | 9.90 | `/websites-for-electricians-adelaide` |
| High | website for electricians | 70 | 14.97 | `/websites-for-electricians-adelaide` |
| High | cheap website design adelaide | 70 | 12.04 | `/blog/cheap-website-design-adelaide` |
| High | local seo adelaide | 287 | 17.72 | `/local-seo-adelaide` |
| High | adelaide local seo | 157 | 13.27 | `/local-seo-adelaide` |
| High | website designer marion | 51 | 10.92 | `/marion` |
| High | web design marion | 29 | 10.45 | `/marion` |
| High | web design reynella | 51 | 7.55 | `/reynella` |
| High | website designer morphett vale | 43 | 8.84 | `/morphett-vale` |
| High | website designer seaford | 44 | 12.11 | `/seaford` |
| High | web design seaford | 33 | 12.85 | `/seaford` |
| Medium | website designer moana | 20 | 5.35 | `/moana` |
| Medium | website designer reynella | 48 | 17.27 | `/reynella` |
| Medium | website design adelaide prices | 48 | 25.06 | `/website-cost-adelaide` |
| Medium | web design pricing adelaide | 27 | 32.04 | `/website-cost-adelaide` |
| Medium | affordable website design adelaide | 7 | 15.14 | `/blog/cheap-website-design-adelaide` |
| Medium | website for cafe | 21 | 19.38 | `/websites-for-cafes-adelaide` |
| Medium | websites for plumbers | 24 | 21.04 | `/websites-for-plumbers-adelaide` |
| Medium | website for plumbers | 31 | 33.35 | `/websites-for-plumbers-adelaide` |
| Medium | ai automation adelaide | 42 | 3.62 | `/` |
| Medium | ai seo adelaide | 80 | 3.70 | `/` |
| Later | seo for small business adelaide | 24 | 51.92 | `/seo` |
| Later | seo packages adelaide | 57 | 69.98 | `/seo` |
| Medium | websites for electricians adelaide | 3 | 13.67 | `/websites-for-electricians-adelaide` |

### Page and intent decisions

1. **Electrician websites:** use `/websites-for-electricians-adelaide` for singular, plural and Adelaide variations. It already appears around positions 10–15 for the larger observed query pairs. Give electrical buyers a clear scope, service-area/contact examples, ownership/hosting answers and a relevant enquiry action. Use an actual electrical project only when one is available; do not imply the car-hire work is a trade case study. The homepage link is now implemented.
2. **Tradie SEO:** use `/seo-for-tradies-adelaide`. At 53 impressions and average position 2.04, this is primarily a click/enquiry opportunity, not a need for another landing page. Audit the search snippet and above-fold value proposition, and replace the existing proof placeholder only with permission-backed evidence. The homepage link is now implemented.
3. **Southern suburbs:** prioritise Marion, Reynella and Morphett Vale, then Seaford. Retain the existing website-intent URLs; add genuinely relevant local detail and proof where available. Do not generate near-identical suburb paragraphs or imply offices/customer projects that do not exist.
4. **Affordable websites:** retain `/blog/cheap-website-design-adelaide`, already visible around position 12 for the main query. Keep the buying guide useful and connect its recommendation to the actual Starter scope and pricing. Keep `/website-cost-adelaide` for cost research and `/website-pricing` for choosing the actual plan.
5. **Local SEO:** `/local-seo-adelaide` owns local intent; `/seo` owns broader SEO services. The local page is closer to useful visibility than broad package queries currently around positions 52–70. Do not merge these distinct intents.
6. **Automation and AI SEO:** the homepage currently leads for “ai automation adelaide” and “ai seo adelaide” in this dataset. Do not attribute its positions to the dedicated service pages. Support the existing service links and practical deliverables; watch Google's selected URL over time before considering any consolidation.

The primary website page remains `/website-design-adelaide`. Broad “web design Adelaide” is commercially relevant but more competitive in practical terms; this audit does not have a measured difficulty score. Industry and suburb opportunities with existing exposure are the more defensible first focus.

## Content and buyer-confidence gaps

The homepage now explains the offer, starting prices, actual portfolio work, genuine abbreviated customer feedback and how to enquire. Personal-name promotion is not required: the public site stays **AI Adelaide / we / small Adelaide business**, following Ivan's preference.

Further improvement is still needed on older pages. Some industry/suburb copy retains broad **48-hour** wording; the electrician page includes “From Brief to Live in 48 Hours”. This should be scoped to a ready-to-start Starter build, consistent with the new homepage, rather than implying all builds have that turnaround. Genuine customer quotations must remain unchanged. A focused pass on the priority landing pages is preferable to another wholesale rewrite.

The next proof assets should connect a real business problem to the work, timeframe, evidence and permitted attribution. The current car-hire examples show actual work but do not establish results for Adelaide electricians or tradies. Do not manufacture that bridge.

For comparison, [Red Moth's small-business package](https://redmoth.com.au/small-business-website-package/) explicitly publishes page scope, inclusions and project examples. [Reward Design's package comparison](https://www.rewardinc.com.au/small-business-website-design-packages/) makes package/payment differences and inclusions easier to compare. The useful lesson is buyer clarity: explain exactly what the starting price buys, exclusions, revisions, recurring costs and handover. This is a review of their public sales pages, not evidence of their rankings, traffic or customer outcomes.

## What deserves work next

| Order | Action | Effort / likely value | Completion evidence |
|---|---|---|---|
| 1 | Review and approve the local release, then deploy the verified commit | Small; removes the actual rendering obstacle and publishes the improved sales page | Live robots/assets, HTML/schema, mobile enquiry path and exact deployed commit checked |
| 2 | Finish the electrician and tradie SEO landing-page pass, then the three leading southern suburbs | Medium; closest observed commercial opportunities | Scoped claims, buyer-specific detail, relevant proof where supplied, clear enquiry action |
| 3 | Verify durable enquiry storage and real delivery; track qualified, quoted, won and value | Medium; essential to know whether SEO produces jobs | A production test reaches the agreed record and notification destination; an opportunity can be followed to an outcome |
| 4 | Review the actual Google Business Profile, categories, service areas, links and authentic review process | Requires owner access and evidence; meaningful local visibility work | Current settings and reviews checked, changes agreed, no invented locations or mass directory submissions |
| 5 | After deployment, request recrawls of the changed priority URLs and measure the next equal windows | Small setup; ongoing observation | Live URL inspection, deployed crawl checks, AU commercial clicks and qualified enquiries tracked |

Google says local results depend mainly on relevance, distance and prominence; on-page optimisation alone cannot control all three. Genuine reviews, accurate business information and relevant local recognition deserve attention alongside the site. [Google Business Profile guidance](https://support.google.com/business/answer/7091?hl=en).

Recrawling can take days to weeks, and requests do not guarantee inclusion or immediate ranking changes. Repeated submissions do not accelerate the process. Use the first two weeks to verify crawling and delivery; assess commercial search movement over several comparable windows rather than declaring success after a few impressions. [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

For getting paid sooner, SEO should run alongside a focused, authorised sales effort using the real work and a clear website offer. Reconcile existing enquiries and opportunities first. No outreach or campaign change was performed by this audit.

## Work to avoid

- More generic AI articles, new suburb batches, duplicate singular/plural keyword pages or interstate expansion.
- Keyword stuffing, changing a good headline merely to repeat a phrase, or using arbitrary word-count targets. Google has no preferred minimum word count. [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- Selling FAQ markup as a rich-result shortcut: Google reports that FAQ rich results stopped appearing from **7 May 2026**. Keep useful customer answers; do not spend a sprint expanding markup for a retired display feature. Google also says `llms.txt` neither helps nor hurts its visibility. [Google Search documentation updates](https://developers.google.com/search/updates).
- Receptionist/answering title or URL churn during the existing freeze to approximately 15 September.
- Claiming a Core Web Vitals pass, verified GBP review count, ranking uplift or working production lead delivery from this local audit.

## Validation and evidence

Production build and TypeScript pass. Targeted lint passes for the changed homepage/SEO code. `check-links` resolves 96 unique internal hrefs directly. `check-meta` retains one known receptionist-title length failure under the documented freeze; the metadata check is **not fully clean**.

Browser verification confirms that each service selection shows only its own panel, and the SEO action opens the contact form with SEO selected. The 390px mobile layout has no horizontal overflow; the added business links wrap cleanly. Portfolio images load when brought into view. No form was submitted and no customer notification was sent. Desktop viewport settings were restored.

Evidence in [`reviews/2026-09-05/seo-preview/`](./reviews/2026-09-05/seo-preview/):

- `crawl-before.json` and `crawl-after.json`: all 113 local pages, metadata, links, schema and robots results.
- `live-robots.txt`: existing production rule at audit time.
- `gsc-au-opportunities.json`: direct aggregate, query/page and URL Inspection responses.
- `keyword-opportunities.csv` and `keyword-opportunities.json`: 25 query/page opportunities with prior-window comparisons and actions.
- `verification.json`: final asset HTTP/robots and server schema checks.
- `pagespeed-status.json`: unavailable performance measurement, recorded explicitly.
- `mobile-390.png` and `desktop.png`: browser evidence of the local build.

Local review: [this computer](http://127.0.0.1:3000) or [same-Wi-Fi phone](http://192.168.68.106:3000). The LAN address may change after a network change. Keep production release approval separate from this completed local audit.
