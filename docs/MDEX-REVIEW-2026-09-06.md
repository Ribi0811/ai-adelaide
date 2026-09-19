# MDEX redesign and commercial assessment

Read-only public review, 6 September 2026. Recommendation only; no client contact, account changes, form submissions, deployment or commitments.

## Verified observations

- https://mdex.com.au/ uses WordPress, Astra and Elementor, with Forminator forms and Elfsight widgets. Public version strings are not a security audit or reliable installation-age evidence.
- Homepage HTML and rendered document have an empty title. Service titles are generic, e.g. Verandahs and Carports.
- All 19 page URLs in the public WordPress page sitemap returned HTTP 200 using curl. This is availability evidence, not proof of indexing or enquiry delivery. Web fetch and Python urllib received 403 responses while curl and the browser worked; do not infer Googlebot is blocked.
- Desktop homepage: busy navigation, heavily darkened outdoor photo, large enquiry form, Reviews and Recent Projects as hero buttons. Mobile at 390px: the roof dominates the image crop; the form becomes a long vertical block.
- Footer FAQ link points to http://faq instead of /faqs/.
- /recent-projects/ is an Elfsight Facebook feed. After asynchronous loading, its leading visible post was 6 March 2025 and several image thumbnails were broken in this browser. The cause and current Facebook posting cadence are unverified; the feed might be stale or deliberately configured this way.
- /verandahs/ has introductory service copy, ten linked gallery images, an enquiry form and optional photo/file/plan upload. Preserve this useful upload capability.
- Homepage displays Google-attributed reviews. Review themes include communication, custom fit and management of design/approval/installation. These are displayed customer claims, not independently audited business guarantees.
- Public posts API returned two default Hello world posts dated May 2024. Assess their index/backlink status before deciding removal or redirect treatment.
- Existing footer credits Redbax. Confirm client ownership, image rights and current provider arrangements before replacing assets or moving services.

## Recommended design

Create an outdoor-living portfolio with an architectural feel: charcoal, warm off-white, retained restrained blue brand accent, generous type and real completed-project photography. Suggested headline: “Make more of life outdoors.” Pair it with clear Adelaide/verandah/carport service wording.

Opening: one excellent completed-project image or lightweight optional film, short proposition, View our work and Discuss your project actions. On phones use a deliberate crop and persistent Call / Enquire actions. No heavy scroll effects or invented project renders.

Follow with three featured projects, service selection, a real before/after if matching photographs exist, clear consultation/design/approval/build process confirmed by the owner, attributed reviews and a short enquiry journey. Keep photos/plans upload optional. Project details should use owner-confirmed suburb, materials, problem and solution. Confirm actual image ownership before treating gallery assets as his completed work.

Keep partner/finance/career content reachable while reducing main-navigation clutter. Finance representations must remain approved and accurate. The large gallery and genuine project stories should do most of the visual work.

## Stack and content workflow

Next.js plus a small editing interface is a reasonable choice if AI Adelaide manages the site. WordPress can achieve the same visual quality and is the lower-migration-cost choice if the owner values familiar self-editing. Do not choose headless WordPress by default: it retains WordPress maintenance and adds another application.

Launch scope: preserve a connected social feed as a secondary Latest updates section, after checking his Elfsight ownership, plan, source and connection. Curated projects must remain independent of that widget.

Later paid automation: an authorised Facebook/Instagram post can create a website project draft; owner confirms project details and rights, then approves a polished website story and tailored Google Business Profile update. Deduplicate posts cross-posted to both networks. Plan for token expiry, retries, source deletions and a visible failure alert. Validate supported post types and actual account access before selling unattended sync. Meta's Instagram APIs require professional accounts and appropriate permissions. Google Business Profile posting needs separate authorised access and API eligibility. A GBP post is distinct from organic indexing; neither a social embed nor publication guarantees search visibility.

## Preserve migration value

Retain domain, paths and useful page content. Sitemap page inventory:

```
/
/blinds-heating-lighting-screens/
/comfortline-patio-heating/
/bondor-solarspan/
/lysaght-living/
/outdoor-rooms/
/carports/
/careers/
/handypay/
/our-partners/
/reviews-2/
/recent-projects/
/decks/
/patios-pergolas/
/verandahs/
/contact-us/
/projects/
/services/
/faqs/
```

This is the 19-page sitemap inventory, not a full historical URL inventory. Before implementation collect WordPress export/backup, media and PDF URLs, Search Console landing pages and links, analytics and existing redirects. Include legacy query URLs and any alternative domains. Keep /reviews-2/ unless a justified one-hop permanent redirect is mapped. Do not redirect every retired URL to the homepage. Preserve media paths or map equivalents; fix the malformed FAQ link rather than preserving its error.

Before launch compare statuses, canonicals, titles, headings, useful copy, internal links, robots, sitemap, forms/uploads and analytics. Keep staging out of indexing. Test real authorised enquiry delivery after launch, preserve DNS mail records and independently hosted email, retain rollback, and monitor 404s and Search Console. No ranking-preservation guarantee is justified without the baseline or even with careful migration.

## Commercial recommendation

Prefer paid work. One bounded neighbour showcase can be justified as a customer-acquisition investment if supported by case-study permission and paid care from launch. A backlink alone or hypothetical later SEO is insufficient return.

Existing PRICING at review time: Starter $699, Business $1,299, Growth $2,499; monthly website plan $199 setup plus $99/month; Local SEO $399/month and Growth SEO $699/month. These are reference prices, not a quote that a 19-page migration and automation fit a standard package.

Possible negotiated pilot, subject to Ivan's decision and actual cost/scope review: waive a clearly defined build fee, charge $99/month care (or $1,188/year if annual billing is explicitly agreed), require permission to showcase actual work, and cap revisions/support. Confirm whether the full 19-page migration fits the donated effort cap before offering it. Itemise hosting, recovery, security/dependency upkeep, enquiry monitoring and a limited edit allowance. Exclude new features, substantive SEO and custom multi-network automation unless quoted. Define domain/content ownership and export/exit terms; do not present a rented monthly site as unconditional ownership. No new public pricing is approved here.

Vercel commercial hosting requires an appropriate paid plan; Hobby is personal/non-commercial. Current Pro documentation lists US$20/month platform fee, one deploying seat, usage credit and potential usage charges. A shared agency team can spread platform cost, but support and integrations still have costs. Use separate client projects/secrets and clear transfer arrangements. Domain and email charges should be transparent. Do not sell this merely as Vercel hosting markup.

Do not exchange the waived fee for a Google review, including an “honest” review: Google prohibits reviews offered for free services or other incentives. Use case-study permission as the portfolio benefit. A discreet design credit can help referral discovery; where exchanged for the build, qualify it with rel="sponsored" (or nofollow). Do not promise ranking credit from it.

SEO can be proposed later against qualified enquiries, quotes and won jobs, using real completed-project content and service-area evidence. Basic migration SEO belongs in the rebuild, not an upsell needed to repair avoidable damage.

## Next bounded step and unknowns

Recommend one private homepage concept, one service/project template and a written migration/care scope before committing the full build. Required inputs: preferred profitable jobs and service areas; original project images and rights; current hosting/domain/email/provider arrangements; who will edit; Facebook/Instagram/Elfsight ownership; Search Console access; enquiry handling; willingness to pay ongoing care. No paid tools or integrations were connected during this assessment.

## Primary references

- Current site: https://mdex.com.au/ ; https://mdex.com.au/recent-projects/ ; https://mdex.com.au/verandahs/ ; https://mdex.com.au/wp-sitemap-posts-page-1.xml
- Google review policy: https://support.google.com/contributionpolicy/answer/7400114
- Google link policy: https://developers.google.com/search/docs/essentials/spam-policies#link-spam
- Google migration guidance: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- GBP posts: https://developers.google.com/my-business/content/posts-data
- Meta's official Instagram API collection: https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api
- Vercel: https://vercel.com/docs/plans/hobby ; https://vercel.com/docs/plans/pro-plan

Limitations: no WordPress admin, GSC, analytics, current provider contract, Google profile management, social account configuration or form-delivery access inspected. No measured performance, ranking, traffic, security or financial outcome claimed.
