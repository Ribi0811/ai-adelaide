# AI Adelaide Full-Site SEO Quality Audit

**Audit date:** 24 August 2026  
**Site:** https://aiadelaide.com.au  
**Search Console property:** `sc-domain:aiadelaide.com.au`  
**Commercial priority:** qualified Adelaide enquiries for website design and SEO

## Executive verdict

The site is technically healthy, but technical SEO is not the main reason AI Adelaide has produced no enquiries.

The real problem is a combination of:

1. **very little trustworthy public proof;**
2. **weak local prominence away from the website** — reviews, citations, local links and a fully developed Google Business Profile;
3. **too much legacy copy that sounded more successful than the evidence supports;**
4. **a large amount of low-quality or automated-looking search exposure that inflates impressions without representing real Adelaide buyers;** and
5. **a young domain trying to compete with established website and SEO providers before it has comparable authority.**

The site does not need another batch of pages. It needs stronger proof, a better real-world local footprint, and a smaller set of pages that deserve to rank.

The work completed in this audit improves quality and removes credibility problems. It does **not** create an instant ranking guarantee. Rankings should be judged over an 8–12 week period while the off-site work is completed and qualified leads are tracked separately.

## 1. Search Console: what is actually happening

The figures below use one aggregate Search Console row with no dimensions, `dataState: final`, and a three-day reporting lag.

| Window | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| 25 Jul–21 Aug | 26 | 21,719 | 0.120% | 30.6 |
| 27 Jun–24 Jul | 38 | 15,154 | 0.251% | 36.9 |
| 15–21 Aug | 5 | 2,409 | 0.208% | 27.7 |
| 8–14 Aug | 10 | 6,177 | 0.162% | 28.4 |

### Interpretation

- The 28-day impression total is **43% higher**, while average position improved by about six places.
- Clicks still fell from 38 to 26 and CTR roughly halved.
- The latest seven days show impressions falling sharply, but average position improved slightly.
- This is not evidence of a sitewide indexing failure or penalty.
- The site is receiving broad, unstable testing across many searches, but very little of that visibility converts into a click.

### Important data-quality finding

Some high-impression queries are plainly not normal Adelaide customer searches. Examples include malformed strings, scraped-looking terms and long prompt-style searches. One plumber-page query produced 293 impressions at position 6.5 but was unrelated to a genuine Adelaide plumbing website buyer. Other queries contain full conversational prompts or corrupted text.

This matters because the impression graph can fall when automated or low-quality query activity disappears. That is not the same as losing hundreds of prospective customers.

Use GSC to track these commercial query groups separately:

- website design Adelaide;
- website designer plus priority suburb;
- SEO services Adelaide;
- local SEO Adelaide;
- websites for electricians/plumbers/tradies;
- website cost/pricing Adelaide.

Do not judge performance from the all-query impression total alone.

## 2. Commercial opportunities visible in GSC

### Website and pricing pages

- `/website-design-adelaide` has almost no meaningful broad-query traction yet. Its visible queries are low-volume and average positions are generally poor. Another title rewrite will not solve the authority gap.
- `/website-cost-adelaide` is the stronger website opportunity:
  - `website design adelaide prices`: 95 impressions, position 21.3;
  - `web design pricing adelaide`: 56 impressions, position 28.7.
- The cost guide should continue to support the design and pricing pages. Its job is to capture comparison-stage visitors and move them toward a quote.

### SEO pages

- `/local-seo-adelaide` correctly owns the exact local intent:
  - `adelaide local seo`: 272 impressions, position 19.6, zero clicks.
- `/seo` still appears for the same query at position 77.5. That is not a reason to merge the pages; the local page is already the clear owner.
- The most credible path upward is stronger local proof and authority linking into `/local-seo-adelaide`, not another metadata change.

### Industry page

- `/websites-for-electricians-adelaide` is the best website-industry opportunity:
  - `websites for electricians`: 202 impressions, position 11.7, one click;
  - `websites for electrician`: 37 impressions, position 11.2;
  - `websites for electricians adelaide`: 7 impressions, position 13.7.
- This page is close enough to page one to justify proof, careful internal links and genuine trade-specific examples. It does not justify a guaranteed-ranking claim.

### Southern suburb pages

Several pages rank well but produce no clicks:

| Page/query | Impressions | Position | Clicks |
|---|---:|---:|---:|
| Morphett Vale website designer | 96 | 4.7 | 0 |
| Moana website designer | 55 | 3.1 | 0 |
| Reynella website designer | 105 | 6.5 | 0 |
| Web design Reynella | 109 | 7.6 | 0 |
| Marion website designer | 117 | 10.1 | 0 |
| Seaford website designer | 107 | 11.5 | 0 |

These are useful footholds, but the zero clicks suggest a mixture of very low genuine demand, imperfect result presentation, non-customer searches and weak brand trust. Do not create more suburb pages. Improve these only when genuine local photos, work, testimonials or community proof are available.

## 3. Technical audit

### Healthy foundations

After the quality changes in this audit:

- every published sitemap URL returns a successful page;
- every published page has exactly one H1;
- every published page has one self-referencing canonical;
- titles and meta descriptions are unique and inside the repository's length rules;
- no published page is below 300 rendered words;
- all checked internal links resolve directly with no redirect chains;
- the production build completes successfully;
- robots.txt allows public pages and points to the canonical sitemap;
- the non-www HTTPS host is the canonical site;
- the sitemap uses `updatedAt` for revised articles rather than always publishing the original date.

### Structured-data issue fixed

The site claimed that the root layout owned the single LocalBusiness entity, but multiple service pages embedded additional LocalBusiness objects or full provider objects.

This audit changed the model to:

- one canonical LocalBusiness at `https://aiadelaide.com.au/#organization` in the root layout;
- Service schema references that entity by `@id`;
- the locations page uses CollectionPage and ItemList schema instead of declaring another business.

This is a cleaner entity graph and avoids contradictory business details across pages.

### No technical shortcut remains

There is no robots, sitemap, canonical, H1, broken-link or metadata defect large enough to explain the lack of customers. More technical polishing will have a lower return than proof, GBP, reviews, citations, local links and direct sales activity.

## 4. Content and trust audit

### Critical issue found: unsupported proof

The repository records that Ivan confirmed the abbreviated customer comments as genuine. A separate set of numerical case studies was documented as illustrative, yet visitor-facing pages placed both types of content together as client proof. That blurred an important evidence boundary.

Examples included page-one rankings, large booking increases, no-show reductions and revenue gains attached to abbreviated names. That was a serious credibility and misleading-claims risk.

Changes made:

- retained the genuine customer comments with names shortened for privacy;
- removed the illustrative numerical case studies from shared visitor-facing components;
- added a transparent measurement model and links to work visitors can inspect;
- rebuilt `/testimonials` as a portfolio and proof-standard page;
- added the permission-backed CarHire.global and 365CarHire examples;
- labelled the platforms accurately as Next.js / React and WordPress;
- removed the unsupported “verified reviews” count, decorative star ratings and unverifiable case-study outcomes;
- retired 18 weak legacy posts that presented invented people, unsupported figures or repetitive scenarios, with permanent redirects to the closest relevant service or tool pages.

### Commercial copy cleaned

High-priority website and SEO pages no longer promise:

- sustained page-one rankings;
- universal two-to-four-week SEO movement;
- a fixed under-two-second load time;
- a fixed number of extra jobs or bookings;
- automatic payback within a set period;
- that a platform such as WordPress, Wix or Next.js receives an automatic ranking advantage.

The copy now explains what is built, what is tested, what depends on the client's business, and how results are measured.

### Remaining content debt

The traffic-priority content review is now complete locally. The published blog was reduced from 28 to 10 focused articles. Eighteen weak articles that relied on invented local examples, unsupported averages or repetitive automation arithmetic are excluded from blog, sitemap, feed and LLM outputs and permanently redirect in one hop to the closest relevant service or diagnostic page.

Nine useful high-intent URLs keep their existing slug and title but now render reviewed replacement content: SEO cost, website versus social media, website cost, website builders, local SEO, SEO versus Ads, hairdresser websites, cafe websites and Google Business Profile. The page-two cheap-website guide remains published in its already reviewed form. New internal links point directly to these surviving assets or to the relevant commercial page.

The same claim-pattern scan was extended to application pages. Fabricated Adelaide scenarios, universal missed-call percentages, fixed lead recovery, fixed no-show reductions and automatic payback claims were removed or changed to clearly labelled user-input arithmetic. The lost-leads calculator now asks the visitor for an estimated win rate instead of applying an unsourced 85% “never call back” benchmark.

## 5. Internal linking and page ownership

The current linking architecture is broadly sound:

- website cost and website-builder articles support `/website-design-adelaide` and `/website-pricing`;
- industry website pages support the website hub;
- `/local-seo-adelaide` owns exact local SEO intent;
- `/seo` owns broader SEO-services intent;
- priority suburb pages receive links from the website-design hub;
- the tradie SEO landing page links naturally to relevant trade website pages;
- internal links avoid redirect hops.

Changes made in this audit:

- removed money-page links to retired fake case studies;
- linked genuine customer feedback to permission-backed selected work and the public proof standard;
- kept the ranking-page titles and H1 intent stable where GSC already shows useful positions.

Do not add sitewide exact-match links or another footer keyword block. The next useful internal links should come from genuinely relevant new proof or a carefully rewritten article.

## 6. Local SEO: the work that now matters most

Google describes local results through relevance, distance and prominence. The website can improve relevance, but it cannot manufacture distance or prominence.

### Google Business Profile

The public profile exists, but the owner-side configuration and performance are still unverified. Complete this before another content sprint:

- confirm the real primary category matches the main commercial offer;
- add only accurate secondary categories;
- complete website, phone, hours, service areas and business description;
- add website design and SEO services with accurate descriptions and prices where suitable;
- upload genuine Adelaide/team/work photos regularly;
- add UTM parameters to the website link so GBP enquiries are attributable;
- review calls, website clicks, messages and direction requests monthly;
- answer genuine customer questions clearly;
- request reviews only from real customers, without incentives or gating.

### Citations explained

A citation is a listing of the same business name, address and phone number on a trusted directory or map service. Examples include Apple Business Connect/Apple Maps, Bing Places, Yellow Pages and TrueLocal.

The goal is not to buy hundreds of directory links. The goal is to make AI Adelaide's real business details consistent and verifiable across a small set of legitimate sources. Do not create listings until the exact public name, address, phone and opening-hours policy are confirmed.

### Local links and prominence

The strongest next ranking work is earning real Adelaide references:

- supplier or technology-partner directories where AI Adelaide genuinely qualifies;
- Adelaide business associations or local chambers that provide a real member profile;
- collaborations with local businesses whose website can credit the work with permission;
- a useful Adelaide small-business benchmark or research asset that local publications may cite;
- founder and team profiles that connect AI Adelaide to a real Adelaide person and professional history.

Avoid paid link packages, mass guest posts and irrelevant directories.

## 7. Conversion and lead generation

SEO cannot be the only customer-acquisition channel while the domain is young.

Run these in parallel:

1. **Direct outreach:** select a small number of Adelaide businesses with obvious website problems and send a genuinely personalised two-minute audit.
2. **Referral proof:** ask the owners of permission-backed sites whether they will provide a truthful review of the specific work completed.
3. **Lead attribution:** continue recording first-touch source, landing page and form event; add qualified, won and revenue status in a durable CRM/Sheet/database.
4. **Response speed:** verify production email and Telegram delivery and respond to every real enquiry quickly.
5. **Optional paid validation:** only after attribution is working, test a tightly limited website-design search campaign. This is for learning and leads, not to “help SEO.”

The fastest credible path to a customer is a combination of targeted outreach, permission-backed proof and local search—not waiting for another metadata change to produce a lead.

## 8. Prioritised action plan

### Now — before deployment

- [x] Separate genuine abbreviated customer feedback from illustrative and unverified case-study proof.
- [x] Publish the two permission-backed website examples locally.
- [x] Make both screenshots the same aspect ratio and show loaded booking journeys.
- [x] Distinguish Next.js / React and WordPress accurately.
- [x] Remove fixed-ranking, fixed-speed and fixed-outcome promises from priority website/SEO pages.
- [x] Retire 18 weak or unsupported legacy posts with one-hop permanent redirects.
- [x] Rewrite nine useful high-intent guides without changing their established URLs or titles.
- [x] Remove unsupported result and benchmark claims from the remaining application-page scan.
- [x] Repair duplicate LocalBusiness schema.
- [x] Run metadata, link, TypeScript, build and browser checks.

### Next 14 days

- [ ] Ivan reviews the localhost website-design and portfolio pages.
- [ ] Push and deploy only after approval.
- [ ] Verify form delivery in production using the real email and Telegram configuration.
- [ ] Audit the GBP owner dashboard and record categories, completeness and 90-day interactions.
- [ ] Add a UTM-tagged website link to GBP.
- [ ] Confirm the single public NAP record, then create/clean the core citations.
- [ ] Ask for permission-backed reviews from real completed work.
- [ ] Add a real founder identity, photo, relevant experience and LinkedIn connection to the About page.
- [ ] Start a small, personalised Adelaide website-audit outreach routine.

### Next 30–60 days

- [ ] Earn at least a few genuine Adelaide or industry-relevant links/references.
- [x] Rewrite or consolidate remaining legacy blog claims in GSC traffic order.
- [ ] Add one verifiable website case study when scope, permission and evidence are available.
- [ ] Review `/local-seo-adelaide`, `/website-cost-adelaide`, the electrician page and six southern suburb pages by commercial query group.
- [ ] Record qualified leads, won jobs and revenue—not just impressions and clicks.

### Do not do

- do not create another suburb batch;
- do not mass-rewrite titles that were changed recently;
- do not reopen the answering/receptionist URL consolidation before the freeze review;
- do not reverse the tradie SEO redirect;
- do not buy bulk backlinks, reviews or citations;
- do not publish synthetic testimonials or “typical result” numbers as client proof;
- do not treat all-query GSC impressions as customer demand.

## 9. Success criteria

Use an 8–12 week directional review because the click sample is small.

Track:

- qualified website-design and SEO enquiries;
- enquiry-to-meeting and meeting-to-won rate;
- revenue attributed to organic, GBP, referral and outreach;
- clicks and CTR for the defined commercial query groups;
- `/local-seo-adelaide` movement from its current position around 20;
- electrician-page movement from positions around 11–14;
- website-cost/pricing query movement from positions around 21–29;
- GBP calls, website clicks, messages and direction requests;
- genuine review count and recency;
- new legitimate referring domains.

The real success condition is not “impressions went up.” It is that AI Adelaide becomes easier to verify, earns more relevant Adelaide visibility, and converts that visibility into qualified enquiries and paying website or SEO work.
