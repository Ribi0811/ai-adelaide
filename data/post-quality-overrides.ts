import { PRICING } from "@/lib/constants";

type PostQualityOverride = {
  excerpt: string;
  seoDescription: string;
  updatedAt: string;
  readTime: string;
  content: string;
};

// The original versions of these high-intent guides had useful URLs but had
// become repetitive and included unsupported Adelaide examples, fixed ranking
// timelines and generic conversion statistics. These replacements keep the
// search intent and practical value without presenting forecasts as evidence.
export const postQualityOverrides: Record<string, PostQualityOverride> = {
  "how-much-does-seo-cost-adelaide": {
    excerpt:
      "Compare Adelaide SEO pricing, scope, contracts and reporting. Learn what AI Adelaide's $399 and $699 monthly plans include and what SEO cannot promise.",
    seoDescription:
      "Compare Adelaide SEO prices, scope and reporting. AI Adelaide offers $399 and $699 monthly plans with no lock-in and no fixed ranking guarantees.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>SEO prices vary because providers quote different scopes. A useful Adelaide SEO quote should state the pages and locations in scope, what work will be completed, how it will be measured and whether you can leave without a long contract.</p>

<h2>AI Adelaide SEO pricing</h2>
<p>Our two ongoing options are:</p>
<ul>
  <li><strong>${PRICING.seo.tiers[0].name} — ${PRICING.seo.tiers[0].price}:</strong> for a focused local business with a small number of priority services and locations.</li>
  <li><strong>${PRICING.seo.tiers[1].name} — ${PRICING.seo.tiers[1].price}:</strong> for a broader service mix or a more competitive search market that justifies additional work.</li>
</ul>
<p>Both are month to month. The right level depends on the current website, search demand, competition, service area and the amount of useful content already available.</p>

<h2>What should an SEO retainer cover?</h2>
<ul>
  <li>technical indexation, canonical and internal-link checks;</li>
  <li>query and page analysis in Google Search Console;</li>
  <li>improvements to priority service and location content;</li>
  <li>Google Business Profile and business-information alignment;</li>
  <li>guidance on genuine reviews, citations, proof and relevant links;</li>
  <li>reporting on completed work, search visibility and enquiries where tracking is available.</li>
</ul>

<h2>Why can two SEO quotes be so different?</h2>
<p>Scope is the main reason. A single-location trade business is different from a multi-location clinic or an online store. Price can also change with technical debt, content production, digital PR, link outreach, reporting and the seniority of the people doing the work.</p>

<h2>What should make you cautious?</h2>
<ul>
  <li>a guaranteed position or fixed ranking date;</li>
  <li>hundreds of directory or link submissions with no quality explanation;</li>
  <li>a content quota that ignores what customers actually search for;</li>
  <li>reporting that shows impressions but not qualified enquiries;</li>
  <li>unclear ownership of your website, analytics or Business Profile.</li>
</ul>

<h2>How long does SEO take?</h2>
<p>There is no responsible universal timetable. Existing authority, competition, proximity, technical condition and the quality of the business’s real-world signals all matter. Early work can fix eligibility and relevance, but meaningful commercial movement may take longer and should be judged over consistent reporting windows.</p>

<h2>How should return be measured?</h2>
<p>Start with a baseline for relevant queries, calls, forms and qualified leads. Record which leads become customers where practical. Ranking movement is useful, but the commercial test is whether the work produces more suitable opportunities at an acceptable cost.</p>

<p>Review our <a href="/seo">Adelaide SEO services</a>, the more focused <a href="/local-seo-adelaide">local SEO service</a>, or request a <a href="/audit">free visibility audit</a>.</p>`,
  },

  "do-i-need-a-website-if-i-have-facebook-instagram": {
    excerpt:
      "Facebook and Instagram can build familiarity, but a website gives an Adelaide business a controlled place for services, proof, search visibility and enquiries.",
    seoDescription:
      "Do you need a website if you use Facebook or Instagram? Compare ownership, search visibility, trust, tracking and enquiry control for Adelaide businesses.",
    updatedAt: "2026-08-24",
    readTime: "5 min read",
    content: `<p>Facebook and Instagram can be useful for showing recent work and staying visible to people who already know the business. A website serves a different purpose: it gives customers a stable place to understand services, prices, proof and how to enquire.</p>

<h2>What social profiles do well</h2>
<ul>
  <li>show recent work, events and behind-the-scenes activity;</li>
  <li>build familiarity through regular posts;</li>
  <li>support direct conversations and community referrals;</li>
  <li>make it easy for existing followers to share updates.</li>
</ul>

<h2>Where social-only businesses are exposed</h2>
<p>The platform controls the layout, reach, account access and rules. Important service information can become buried in a feed, and customers without the app may have a weaker experience. Search engines can index some social content, but a dedicated website gives the business much more control over page structure and information.</p>

<h2>What a website adds</h2>
<ul>
  <li><strong>Clear services:</strong> one reliable place for scope, service areas and common questions.</li>
  <li><strong>Proof:</strong> genuine reviews, qualifications and permission-backed work can be presented with context.</li>
  <li><strong>Search pages:</strong> useful service content can appear for relevant searches beyond the business name.</li>
  <li><strong>Enquiry control:</strong> forms, calls, bookings and tracking are not limited to a social inbox.</li>
  <li><strong>Ownership:</strong> the domain and core content remain business assets when accounts or platforms change.</li>
</ul>

<h2>Do you always need a website immediately?</h2>
<p>A new side business with no validated offer may sensibly start with a complete Google Business Profile and a social page. Once customers need to compare services, search beyond the business name, request quotes or verify credibility, a focused website becomes much more valuable.</p>

<h2>Use social media and the website together</h2>
<p>Publish recent work on social media, then send customers to the relevant website service, portfolio or booking page. Link the website back to active social profiles. Keep names, phone numbers, hours and service information consistent across every platform.</p>

<h2>What should the first website include?</h2>
<p>For a straightforward Adelaide service business, start with the pages customers actually need: a clear homepage, services, proof or about information, and a tested contact journey. Extra pages should answer distinct customer questions rather than existing only to target keywords.</p>

<p>AI Adelaide websites start <strong>${PRICING.website.fromLabel}</strong>. See <a href="/website-design-adelaide">website design and selected work</a>, compare <a href="/website-pricing">current packages</a>, or request a <a href="/audit">free website visibility audit</a>.</p>`,
  },

  "how-much-does-website-cost-adelaide": {
    excerpt:
      "A plain-English guide to Adelaide website costs, inclusions, ownership and ongoing fees, with AI Adelaide's current prices shown clearly.",
    seoDescription:
      "Compare Adelaide website costs, inclusions and ongoing fees. AI Adelaide websites start from $699 with clear scope and no ranking guarantees.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>Adelaide website quotes can range from a few hundred dollars to well into five figures. The useful question is not simply “what does a website cost?” It is “what is included, what do I own, and what will it cost to keep working?”</p>

<h2>Typical ways to buy a small-business website</h2>
<h3>DIY website builders</h3>
<p>Wix, Squarespace and similar platforms can suit a simple site when you have the time to write, design and maintain it yourself. Check the ongoing subscription, whether you can export the site, and what happens if you need custom booking, quoting or tracking later.</p>

<h3>Low-cost template builds</h3>
<p>A low upfront price may cover only a template and a few supplied pages. Ask who writes the copy, whether mobile layouts are reviewed, whether redirects are included for an existing site, and whether you keep the domain, analytics and website accounts.</p>

<h3>Custom small-business builds</h3>
<p>These normally include discovery, page structure, copy support, responsive design, forms, analytics and basic search setup. The price changes with the number of distinct pages, integrations, content migration and approval rounds.</p>

<h3>Larger agency projects</h3>
<p>Higher quotes may include brand strategy, research, photography, complex integrations and several specialist teams. That can be appropriate for a complex organisation, but a local trade or service business may not need that process.</p>

<h2>AI Adelaide website pricing</h2>
<p>Our websites start <strong>${PRICING.website.fromLabel}</strong>. The current one-off tiers are:</p>
<ul>
  <li><strong>${PRICING.website.tiers[0].name} — ${PRICING.website.tiers[0].price}:</strong> a focused three-page site for a straightforward local business.</li>
  <li><strong>${PRICING.website.tiers[1].name} — ${PRICING.website.tiers[1].price}:</strong> a broader service site with five to seven pages, a contact journey and search foundations.</li>
  <li><strong>${PRICING.website.tiers[2].name} — ${PRICING.website.tiers[2].price}:</strong> a larger build where the business genuinely needs more services, useful local content or integrations.</li>
</ul>
<p>There is also a month-to-month option at <strong>${PRICING.website.monthly.label}</strong>. See the <a href="/website-pricing">website pricing page</a> for the current inclusions.</p>

<h2>What should be clear before you approve a quote?</h2>
<ul>
  <li><strong>Scope:</strong> the exact pages, forms, integrations and content responsibilities.</li>
  <li><strong>Ownership:</strong> who controls the domain, source code, analytics and business accounts.</li>
  <li><strong>Ongoing costs:</strong> hosting, software licences, maintenance and optional marketing.</li>
  <li><strong>Migration:</strong> how existing URLs, content and tracking will be preserved.</li>
  <li><strong>Measurement:</strong> how calls, forms and other useful actions will be recorded.</li>
</ul>

<h2>Does a more expensive website rank better?</h2>
<p>Not automatically. A crawlable, fast and useful site is a foundation. Rankings also depend on search demand, competition, relevant content, business reputation, links and local signals. No responsible provider can guarantee a position or a fixed number of leads from the build alone.</p>

<h2>How to compare two website quotes</h2>
<p>Put the quotes side by side and compare the same things: page scope, content, mobile review, forms, tracking, technical SEO, ownership, support and total two-year cost. A cheaper quote can be the right choice when the scope is genuinely simple. A larger build is worthwhile only when the extra work supports a real customer need.</p>

<h2>What should you prepare?</h2>
<p>Bring your services, service area, preferred enquiries, genuine reviews, photographs and the questions customers ask before buying. Those inputs usually matter more than decorative effects. If you already have a site, include its analytics and Search Console data so useful pages and URLs are not discarded.</p>

<p>See our <a href="/website-design-adelaide">Adelaide website design service</a> and permission-backed <a href="/website-design-adelaide#selected-work">selected work</a>, or <a href="/contact?service=Website%20Design">ask for a scoped recommendation</a>.</p>`,
  },

  "best-website-builder-adelaide-small-business": {
    excerpt:
      "Wix, Squarespace, WordPress or a custom Next.js build? Choose by ownership, editing needs, integrations and total maintenance—not platform hype.",
    seoDescription:
      "Compare Wix, Squarespace, WordPress and custom websites for Adelaide small businesses by ownership, editing, integrations and total ongoing cost.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>There is no single best website platform for every Adelaide small business. Wix, Squarespace, WordPress and a custom Next.js build can all produce a useful website. The right choice depends on who will edit it, what it must connect to and how much maintenance you want to own.</p>

<h2>Quick comparison</h2>
<h3>Wix</h3>
<p>Wix is approachable for a small DIY site. It keeps hosting and editing in one place, but you remain tied to the platform and may need paid apps as requirements grow. It is strongest when simplicity matters more than portability.</p>

<h3>Squarespace</h3>
<p>Squarespace provides polished templates and a controlled editing experience. It can suit portfolios, hospitality and simple service sites. Check whether its booking, commerce and structured-content options match the way your business actually works.</p>

<h3>WordPress</h3>
<p>WordPress is flexible and widely supported. It can be a good fit when staff need to publish regularly or when an established site already has useful content. The trade-off is maintenance: themes, plugins, security and hosting need active care.</p>

<h3>Custom Next.js</h3>
<p>Next.js suits a streamlined custom build, strong performance control and integrations that do not fit a template. Editing normally needs a content system or developer workflow. It is not inherently “better for SEO”; the implementation and content still determine quality.</p>

<h2>Do website platforms determine Google rankings?</h2>
<p>No platform receives an automatic ranking bonus. Search engines need accessible pages, descriptive titles, helpful content, sensible internal links and reliable technical delivery. A useful Wix site can outperform a weak custom site, and a carefully built custom site can outperform a neglected template.</p>

<h2>Five questions that reveal the right choice</h2>
<ol>
  <li><strong>Who will update the website?</strong> A non-technical team may value a familiar editor more than custom flexibility.</li>
  <li><strong>What must it connect to?</strong> List booking, quoting, CRM, email, payment and analytics requirements before choosing.</li>
  <li><strong>Do you need to move later?</strong> Understand export options and who owns the domain, content and source code.</li>
  <li><strong>What is the full cost?</strong> Include subscriptions, plugins, maintenance and your own editing time.</li>
  <li><strong>What will count as success?</strong> Decide whether the site needs calls, quote requests, bookings, sales or simply accurate information.</li>
</ol>

<h2>Our practical recommendation</h2>
<p>Keep WordPress when an existing site is useful and maintainable. Choose a managed builder when the requirements are simple and the owner wants direct control. Choose a custom build when performance, design or integrations justify it. Do not migrate solely because a salesperson says one platform “ranks better.”</p>

<h2>What AI Adelaide builds</h2>
<p>We use the technology that fits the job. Our selected work includes a custom Next.js/React platform and a WordPress website, both shown with permission. Website projects start <strong>${PRICING.website.fromLabel}</strong>, with the exact stack and ownership explained before work begins.</p>

<p>Review the examples on our <a href="/website-design-adelaide#selected-work">website design page</a>, compare <a href="/website-pricing">website packages</a>, or <a href="/contact?service=Website%20Design">tell us what the site needs to do</a>.</p>`,
  },

  "local-seo-adelaide-small-business-guide": {
    excerpt:
      "A practical Adelaide local SEO guide covering Google Business Profile, service pages, reviews, citations, links and lead measurement.",
    seoDescription:
      "Improve Adelaide local SEO with a complete Google Business Profile, focused service pages, genuine reviews, citations, links and lead tracking.",
    updatedAt: "2026-08-24",
    readTime: "7 min read",
    content: `<p>Local SEO helps an Adelaide business appear when nearby customers search for a service. It combines your website, Google Business Profile, reviews and wider business references. No single tactic guarantees a map-pack or organic position.</p>

<h2>1. Make your business information consistent</h2>
<p>Use the same real business name, phone number, website and service details across your site and major profiles. For a service-area business, configure the Google Business Profile according to Google’s rules rather than displaying an address customers cannot visit.</p>

<h2>2. Complete the Google Business Profile</h2>
<p>Choose the most accurate primary category, add relevant secondary categories, describe real services, set correct hours and upload genuine photos. Completeness helps Google and customers understand the business, but proximity, relevance and prominence still affect local visibility.</p>

<h2>3. Build one strong page for each real service intent</h2>
<p>A page should answer what the service includes, who it suits, where it is delivered, what affects price and how to enquire. Avoid creating near-identical pages for every suburb. Add a location page only when you can provide genuinely useful local information or proof.</p>

<h2>4. Ask for genuine reviews</h2>
<p>Ask customers after a completed job and make the review link easy to use. Do not buy reviews, offer prohibited incentives or filter unhappy customers away from public platforms. Respond professionally and avoid disclosing private customer information.</p>

<h2>5. Build accurate citations and local references</h2>
<p>A citation is simply a mention of the business and its contact details on another trusted platform. Apple Business Connect, Bing Places, relevant Australian directories, industry associations, suppliers and local organisations may all help customers and search engines verify the business. Quality and accuracy matter more than submitting to hundreds of weak directories.</p>

<h2>6. Earn relevant links</h2>
<p>Useful local links normally come from real relationships: memberships, suppliers, community sponsorships, partnerships, events, professional directories or genuinely useful resources. Avoid buying bulk links or swapping links across unrelated websites.</p>

<h2>7. Connect the pages internally</h2>
<p>Link informational guides to the most relevant service page, and link service pages to pricing, proof and contact options. Use descriptive anchor text where it helps a reader. Do not force every page to link to every suburb.</p>

<h2>8. Measure enquiries, not only impressions</h2>
<p>Track calls, forms and bookings with consent-aware analytics. Record which enquiries become qualified opportunities and paying customers. Search Console impressions can move because Google tests a site across new or irrelevant queries; they are not revenue by themselves.</p>

<h2>A sensible first 90 days</h2>
<ul>
  <li><strong>Weeks 1–2:</strong> fix business information, tracking, indexation and the primary service pages.</li>
  <li><strong>Weeks 3–6:</strong> improve the Google Business Profile, review workflow and major citations.</li>
  <li><strong>Weeks 7–12:</strong> strengthen useful content and pursue relevant local proof and links.</li>
</ul>
<p>Ranking movement varies by starting authority, competition, location and the quality of the business’s real-world signals. Our <a href="/local-seo-adelaide">local SEO service</a> and broader <a href="/seo">SEO plans</a> start <strong>${PRICING.seo.fromLabel}</strong>. You can also request a <a href="/audit">free visibility audit</a>.</p>`,
  },

  "seo-vs-google-ads-adelaide-small-business": {
    excerpt:
      "SEO and Google Ads solve different problems. Compare speed, control, cost, measurement and risk before choosing an Adelaide lead-generation channel.",
    seoDescription:
      "Compare SEO and Google Ads for an Adelaide small business by speed, control, cost, measurement and commercial risk—without invented ROI promises.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>Google Ads can buy immediate visibility. SEO can build unpaid visibility over time. Neither channel guarantees profitable customers, and many Adelaide businesses need measurement before committing heavily to either.</p>

<h2>How Google Ads works</h2>
<p>You bid to show an advertisement for selected searches and generally pay when someone clicks. Ads provide control over budget, location, schedule and landing page. They can test demand quickly, but visibility stops when spending stops.</p>

<h2>How SEO works</h2>
<p>SEO improves the website and wider business signals so relevant pages can appear in unpaid search results. The work may include technical fixes, service content, internal links, Google Business Profile alignment, reviews and relevant authority. Movement is slower and less controllable than ads, but useful pages can keep attracting searches without a fee for each click.</p>

<h2>When Ads may be the better first choice</h2>
<ul>
  <li>You need to test whether a specific offer attracts enquiries.</li>
  <li>The website already converts and tracking is reliable.</li>
  <li>You can answer leads quickly and know what a qualified customer is worth.</li>
  <li>The campaign can exclude irrelevant searches and locations.</li>
</ul>

<h2>When SEO may be the better first choice</h2>
<ul>
  <li>Customers repeatedly search for your service and location.</li>
  <li>The site has weak service pages, technical problems or poor local signals.</li>
  <li>You can invest consistently without demanding a fixed ranking date.</li>
  <li>You have genuine expertise, proof and local relationships to publish.</li>
</ul>

<h2>When to use both</h2>
<p>Ads can test offers and produce query data while SEO improves the long-term foundation. Keep the channels separate in reporting: paid clicks are not organic growth, and rising rankings do not prove that SEO caused every enquiry.</p>

<h2>What to measure</h2>
<ul>
  <li>qualified calls and forms, not only clicks;</li>
  <li>cost per qualified opportunity and cost per won customer;</li>
  <li>search terms that produced useful or irrelevant enquiries;</li>
  <li>landing-page conversion and speed of lead follow-up;</li>
  <li>revenue where the sales cycle allows reliable attribution.</li>
</ul>

<h2>Common mistakes</h2>
<p>Sending paid traffic to a generic homepage, targeting all of Adelaide with no service focus, publishing dozens of thin SEO pages, and judging performance from a short period are all expensive mistakes. Fix the enquiry journey and attribution before scaling either channel.</p>

<h2>Our recommendation for a small budget</h2>
<p>First make the core website, Google Business Profile and tracking credible. If immediate demand testing is needed, run a tightly bounded Ads test. Build SEO around proven services and real customer questions rather than publishing to a quota.</p>

<p>AI Adelaide SEO starts <strong>${PRICING.seo.fromLabel}</strong>. See our <a href="/seo">SEO services</a>, <a href="/website-design-adelaide">landing-page and website work</a>, or request a <a href="/audit">free audit</a> before choosing a channel.</p>`,
  },

  "website-design-for-hairdressers-adelaide": {
    excerpt:
      "A practical Adelaide salon website guide covering services, pricing, booking, galleries, local SEO, accessibility and enquiry tracking.",
    seoDescription:
      "Plan an Adelaide hairdresser website with clear services, pricing, online booking, genuine photos, local SEO and reliable customer enquiry tracking.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>A hairdresser website should help a client decide three things quickly: whether the salon offers the right service, what it may cost, and how to book. Attractive design matters, but clarity and a reliable mobile booking journey matter more.</p>

<h2>Put the booking journey first</h2>
<p>Use a clear “Book” button near the top of the page and connect it to the salon’s real booking system. Test every step on a phone, including service selection, staff choice, date selection and confirmation. Keep a phone or enquiry option for services that require consultation.</p>

<h2>Explain services and pricing clearly</h2>
<p>List the services people actually search for and explain what affects the final price. Starting prices, consultation requirements, hair length and colour history can all be stated without promising a universal quote. A text service menu is easier for customers and search engines to understand than an image alone.</p>

<h2>Use genuine salon photography</h2>
<p>Show the exterior, interior, team and representative work with permission. Add descriptive alternative text where it helps someone who cannot see the image. Avoid stock photographs that could misrepresent the salon or its results.</p>

<h2>Build the essential pages</h2>
<ul>
  <li><strong>Home:</strong> location, positioning, key services and booking action.</li>
  <li><strong>Services:</strong> clear categories, inclusions and pricing guidance.</li>
  <li><strong>Gallery:</strong> genuine work with client consent.</li>
  <li><strong>About:</strong> team, qualifications and salon approach.</li>
  <li><strong>Contact:</strong> hours, parking or access information, phone and map.</li>
</ul>

<h2>Support local search without suburb spam</h2>
<p>Keep the salon name, address, phone and hours consistent with the Google Business Profile. Use one strong location page for the real salon location. Mention nearby areas naturally when they are useful to clients; do not clone the same page for every suburb.</p>

<h2>Make the site accessible and fast</h2>
<p>Use readable contrast, properly labelled forms, keyboard-accessible menus and images sized for the page. Avoid autoplay media and oversized galleries. Test the real site on a typical mobile connection rather than relying only on a score.</p>

<h2>Track what matters</h2>
<p>Measure booking-button clicks, completed enquiry forms and calls with consent-aware analytics. Where the booking platform allows it, distinguish a click from a completed booking. Review qualified new-client enquiries rather than claiming success from page views alone.</p>

<h2>What does a salon website cost?</h2>
<p>AI Adelaide websites start <strong>${PRICING.website.fromLabel}</strong>. The right scope depends on the number of services, whether booking is already configured, the photography available and whether an existing site needs careful migration.</p>

<p>See our <a href="/website-design-adelaide">Adelaide website design service</a>, review <a href="/website-pricing">current pricing</a>, or <a href="/contact?business=Hairdresser&service=Website%20Design">request a salon website review</a>.</p>`,
  },

  "adelaide-cafe-website-guide": {
    excerpt:
      "A practical Adelaide cafe website guide covering menus, hours, maps, ordering, photography, local SEO and mobile customer journeys.",
    seoDescription:
      "Plan an Adelaide cafe website with a readable menu, accurate hours, genuine photos, maps, ordering links, local SEO and mobile-first design.",
    updatedAt: "2026-08-24",
    readTime: "6 min read",
    content: `<p>A cafe website does not need to be complicated. It needs to answer the questions a customer has before visiting: what is on the menu, when are you open, where are you, and can they book or order?</p>

<h2>Show the essential information immediately</h2>
<p>Put current opening hours, address, phone number and the primary action near the top of the mobile page. Link the address to directions. If holiday hours change, update both the website and Google Business Profile.</p>

<h2>Publish a readable menu</h2>
<p>A text or accessible HTML menu is easier to read on a phone and easier to update than a photograph. A downloadable PDF can be offered as a secondary option, but it should not be the only way to see prices, dietary information and core items.</p>

<h2>Use genuine photography</h2>
<p>Show the food, drinks, interior and shopfront accurately. Compress images so they do not delay the page, and obtain permission before showing identifiable customers or staff. A clear exterior image also helps first-time visitors recognise the venue.</p>

<h2>Connect booking and ordering carefully</h2>
<p>Link to the cafe’s actual booking or ordering system and test the full journey on mobile. State whether catering, group bookings or functions require an enquiry. Do not claim a booking is complete merely because a visitor clicked into a third-party widget.</p>

<h2>Build local search foundations</h2>
<p>Keep the cafe’s name, address, phone and hours consistent across the site and Google Business Profile. Use the real suburb and relevant landmarks naturally. A complete profile, genuine reviews, accurate categories and useful local references can support visibility, but no review count or page format guarantees a map-pack position.</p>

<h2>Pages most cafes need</h2>
<ul>
  <li><strong>Home:</strong> positioning, hours, location and primary action.</li>
  <li><strong>Menu:</strong> current items, prices and dietary guidance.</li>
  <li><strong>Visit:</strong> directions, parking, accessibility and contact details.</li>
  <li><strong>Catering or functions:</strong> only where the cafe genuinely offers them.</li>
</ul>

<h2>Content that can be useful</h2>
<p>Seasonal menus, catering information, accessibility details and local event updates can help customers when they are maintained. Publishing generic posts merely to appear “fresh” is not a strategy. Every page should answer a real customer question.</p>

<h2>Measure visits and enquiries honestly</h2>
<p>Track direction clicks, calls, catering forms, booking clicks and online-order clicks with consent-aware analytics. If a third-party platform does not provide completion data, report the click rather than calling it a booking or sale.</p>

<h2>What does a cafe website cost?</h2>
<p>AI Adelaide websites start <strong>${PRICING.website.fromLabel}</strong>. Scope depends on the menu, photography, ordering or booking integrations, catering content and whether existing URLs need migration.</p>

<p>See our <a href="/website-design-adelaide">Adelaide website design service</a>, compare <a href="/website-pricing">current packages</a>, or <a href="/contact?business=Cafe&service=Website%20Design">request a cafe website review</a>.</p>`,
  },

  "google-business-profile-adelaide-guide": {
    excerpt:
      "Set up and improve an Adelaide Google Business Profile with accurate categories, service areas, photos, reviews, links and performance tracking.",
    seoDescription:
      "Set up an Adelaide Google Business Profile with accurate categories, service areas, photos, genuine reviews, website links and performance tracking.",
    updatedAt: "2026-08-24",
    readTime: "7 min read",
    content: `<p>A Google Business Profile helps eligible local businesses appear in Google Search and Maps. It is important, but completing a profile does not guarantee a map-pack position. Google describes local results in terms of relevance, distance and prominence.</p>

<h2>1. Confirm eligibility and ownership</h2>
<p>Create or claim the profile using the real business identity. A storefront should use the address customers can visit during stated hours. A service-area business should hide the address when customers are not served there and configure realistic service areas. Do not use a virtual office merely to rank in another location.</p>

<h2>2. Choose accurate categories</h2>
<p>Select the closest primary category for the main business activity, then add only relevant secondary categories. Categories describe what the business is; services can describe what it offers in more detail.</p>

<h2>3. Complete the customer information</h2>
<ul>
  <li>real business name without added keywords;</li>
  <li>correct phone number and website;</li>
  <li>regular and special hours;</li>
  <li>services and a factual business description;</li>
  <li>booking, appointment or menu links where relevant.</li>
</ul>

<h2>4. Add genuine photographs</h2>
<p>Use current photographs of the business, team, work, shopfront or service process with permission. Choose a clear logo and cover image, but remember Google may display a different image depending on the search and device.</p>

<h2>5. Build a compliant review process</h2>
<p>Ask genuine customers for an honest review after a completed transaction. Make the direct review link easy to use. Do not buy reviews, offer prohibited incentives, ask staff to review the business or selectively send only happy customers to Google. Respond politely without exposing personal information.</p>

<h2>6. Link to the most relevant website page</h2>
<p>The main website link normally goes to the best page for the business or location. Appointment, menu and product links should lead directly to the relevant action. Add tracking parameters where appropriate so visits can be measured without changing the visible destination.</p>

<h2>7. Keep the profile accurate</h2>
<p>Update holidays, temporary closures, services and contact details when they change. Posts and updates can communicate useful information to customers, but posting frequency alone is not a ranking guarantee.</p>

<h2>8. Measure commercial actions</h2>
<p>Review searches, calls, website clicks, messages, bookings and direction requests available in Business Profile performance. Compare them with qualified enquiries in your own lead records. A profile view is useful context, not a customer by itself.</p>

<h2>Common problems to avoid</h2>
<ul>
  <li>adding keywords to the business name;</li>
  <li>creating duplicate profiles for one eligible location;</li>
  <li>using an address customers cannot visit;</li>
  <li>listing huge service areas that are not genuinely served;</li>
  <li>buying reviews or using review gating;</li>
  <li>letting website, profile and directory details disagree.</li>
</ul>

<h2>How AI Adelaide can help</h2>
<p>Google Business Profile alignment is part of our <a href="/local-seo-adelaide">local SEO work</a>. SEO plans start <strong>${PRICING.seo.fromLabel}</strong>. We can audit the public profile and website, but verification, ownership decisions and real business evidence must come from the business owner.</p>

<p>Request a <a href="/audit">free local visibility audit</a> or review our <a href="/seo">Adelaide SEO service</a>.</p>`,
  },
};
