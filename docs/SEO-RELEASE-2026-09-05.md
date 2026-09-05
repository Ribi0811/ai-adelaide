# Commercial SEO follow-through — 5 September 2026

Status: approved changes deployed and verified on `https://aiadelaide.com.au`. Source commit: `fc1c29527afb70267011c0eff39c184b84f14bbe`, branch `codex/customer-first-homepage`. Vercel production deployment `dpl_9UrXyza4hpxDhiuS6CLau35Pt4ee` is Ready and aliased to the canonical domain. Deployment used an archive of the committed source through the existing project, with no local environment files. Ivan accepted the recommendation to improve priority pages, verify enquiries, release changes and review Google Business Profile. Durable lead-storage selection remains pending. No git push, customer outreach, campaign change or Business Profile edit was performed.

## Priority pages

- Electricians: retained the title and URL; made the heading direct, added a quote action near the introduction, clarified the three-page Starter scope, ownership, hosting and conditional build timing. Photo uploads, integrations and extra location pages are explicitly additional scope. Removed unsupported time-saving claims and assertions about where most electrical work occurs. Prices come from `PRICING`.
- Tradie SEO: retained the title, URL and H1; improved the search description and opening offer, added a baseline/work-plan/reporting explanation, and preselected SEO on the contact link. Removed blanket one-page-per-suburb advice, word-count targets and assured outcomes. The ranking animation is explicitly illustrative. The review form no longer promises a response within two business hours without an operational basis.
- Marion, Reynella and Morphett Vale: retained their titles, URLs and headings; clarified search descriptions, Starter scope, ownership and hosting. Added different buyer-brief examples and a direct website quote action. These are service examples, not invented local client work. Other suburb records retain their existing copy.
- Sitemap dates now reflect these five edited URLs. Per-suburb dates override the shared historical fallback without changing every suburb date.
- The static metadata checker now resolves `PRICING.website.from` so the checked title matches the rendered title.

## Verification

Production build, TypeScript and targeted lint pass. All 97 internal-link destinations resolve directly. The sole metadata-check failure remains the frozen receptionist title; it is explicitly retained, not presented as a clean full check.

Initial HTML on the homepage and five priority pages returns 200, one H1, the expected canonical, one layout-owned LocalBusiness and one FAQPage. Homepage metadata and identity are unchanged by this pass. Browser checks cover desktop electrician presentation, all five priority pages at 390px with no horizontal overflow, the tradie review form and the Marion quote link opening Contact with website selected. Evidence: `reviews/2026-09-05/seo-release/`.

Post-release checks on the canonical host confirm the new homepage and all five priority pages return 200 with one H1, expected canonical, one LocalBusiness and one FAQPage. All 23 sampled script, stylesheet and image assets return 200 and are allowed to Googlebot; the earlier `/_next/` robots block is removed. All five edited landing-page sitemap dates are 5 September. The desktop homepage and 390px Marion page were visually checked; Marion had no horizontal overflow. The quote link preselected website in the live contact form. Screenshots and HTTP results are saved in the evidence directory.

Core Web Vitals remain unmeasured: the earlier PageSpeed request returned 429, and the authenticated Search Console overview showed no mobile or desktop CWV data. These checks do not prove ranking or conversion gains. The production install also reported 15 dependency vulnerabilities; dependency remediation was not included in this content release and needs a separate triage before any upgrade.

## Real enquiry delivery

A clearly labelled internal test (`AIA-SEO-20260905-01`) was submitted to the existing production contact endpoint. It returned HTTP 200, Telegram accepted the notification, and SMTP accepted the email. A read-only IMAP check found the matching message in the business inbox and confirmed its test marker. No customer was contacted. Exclude this test from commercial reporting.

A second clearly labelled test (`AIA-SEO-20260905-02`) followed the live Marion quote link at 390px, submitted the real Contact form and displayed the success state. Read-only IMAP found exactly one matching message in the business inbox, dated 5 September 13:46:50 UTC, with the test marker verified. This confirms the browser-to-inbox path on the new release. Both synthetic tests must be excluded from commercial reporting.

The first API response explicitly reported `persisted: false`. Production contact/audit routes still rely on notifications and cannot use the deployment filesystem as a durable lead database. No CRM/database/Sheet configuration was present in the production environment listing. A private Google Sheet is recommended as a simple initial record; Ivan's destination choice is pending. No database or paid service was created, and no customer records were copied.

The general Contact page still carries an existing two-business-hour response promise; its operational basis remains unverified. Confirm the service standard or revise that copy in the next focused conversion pass.

Recommended record fields: lead ID, enquiry date, requested service, business/contact details, enquiry, source, consented attribution, stage (new/qualified/quoted/won/lost), next action/date, quote value, won value, recurring fee and outcome notes. Use the same ID in notifications and the record. A live write/read-back test is required after connecting the selected destination.

## Google Business Profile — owner access verified

Read the actual managed AI Adelaide profile through the signed-in browser. No settings were changed.

- Verified. Primary category: Web Designer. Additional categories: Software company, Automation company, Computer consultant, Marketing consultant, Internet marketing service, Telephone answering service, IT support and services.
- Website: `https://aiadelaide.com.au/`; phone matches the website's `(08) 7100 9788`.
- Public address: 5 Peel Street, Adelaide SA 5000. This matches current website schema; whether customers are actually received at a staffed business location was not verified.
- Listed hours: Monday–Friday 08:00–20:00; Saturday/Sunday closed.
- One Google review, displayed rating 5.0. This does not independently validate the website's separate customer comments.
- Service areas and social profiles are unfilled. Google has a pending accessibility update asserting a wheelchair-accessible entrance; that physical fact was not verified or accepted.
- Existing description prioritises websites, SEO and automation, but should distinguish one-off website ownership from the monthly plan before a future edit. Do not change categories, address or hours without checking actual operations.

### Performance shown by Google

The selected period is April–September 2026 as displayed on 5 September. September is partial and may lag. These are Business Profile metrics, separate from Search Console; do not add them to organic website totals.

| Metric | Total |
|---|---:|
| Profile views | 1,837 |
| Profile interactions | 206 |
| Direction requests | 179 |
| Website clicks | 26 |
| Calls metric | 1 |
| Bookings metric | 0 |

Monthly interaction totals: April 56, May 25, June 42, July 45, August 38, September 0 at inspection. August comprises 34 direction requests, four website clicks and zero recorded calls. A call action or direction request is not a verified enquiry or completed visit.

The displayed search breakdown is dominated by broad `ai` (404), followed by `ai adelaide` (58), `ai development company adelaide` (37), `ai development company` (17), and `adelaide ai` (under 15). These are reported profile search terms for the selected period, not keyword volumes or qualified demand.

The immediate off-site priorities are authentic reviews from completed clients, accurate service coverage and confirmation of the actual customer-facing location. The large direction-request share makes location accuracy particularly worth checking; it does not prove the requests were irrelevant or fraudulent. Keep Web Designer primary while confirming that each additional category represents an actual current service.

Suggested review-request wording, prepared only for a real completed client: “Thanks for working with AI Adelaide. If you would like to share your experience, an honest Google review would help other local business owners understand our work. All feedback is welcome.” No incentive, rating requirement or review gating. No requests sent.

## Release and follow-up

Pre-release production rollback target verified in Vercel: `dpl_3bANipgayrvwSXX4DGcTXw2J7737`, `https://ai-adelaide-ccxi5notq-ivans-projects-9bc72bf6.vercel.app`, created 30 August 2026, Ready. Released through the existing `ai-adelaide` project at `https://ai-adelaide-c89ee5p0i-ivans-projects-9bc72bf6.vercel.app`, aliased to `https://aiadelaide.com.au`. Canonical-host and real enquiry checks are recorded above. Subsequent documentation-only commits are not the deployed application source.

The Search Console API accepted the sitemap submission at 13:46:38 UTC. Read-back showed `isPending: true`, zero errors and warnings; `lastDownloaded` still referred to the earlier 05:06 crawl. This confirms acceptance, not processing of the new 113-URL sitemap. The returned 110 submitted URLs belong to that earlier read, and the returned zero indexed field is not a valid sitewide index count. The owner interface reported all five priority URLs already on Google and accepted one fresh indexing request for each after release: electricians, tradie SEO, Marion, Reynella and Morphett Vale. Each displayed “Indexing requested” and confirmed addition to the priority crawl queue. This is not confirmation that Google has replaced its indexed copy. Evidence: `reviews/2026-09-05/seo-release/google-recrawl-requests.json`. Repeated indexing requests do not accelerate crawling. Use early checks for crawl/delivery health, then compare equal final-data commercial search windows and qualified enquiries. No ranking date or sales uplift is promised.

Sources: [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google local-ranking guidance](https://support.google.com/business/answer/7091?hl=en), [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl). Actual profile settings and performance above were read in the owner interface on 5 September 2026.
