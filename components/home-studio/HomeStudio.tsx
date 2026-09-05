import Image from "next/image";
import Link from "next/link";
import { PRICING, testimonials } from "@/lib/constants";
import { selectedWork } from "@/lib/portfolio";
import ServicePicker from "./ServicePicker";
import styles from "./studio.module.css";

const faqs = [
  { q: "What does a website cost?", a: `Starter websites are ${PRICING.website.tiers[0].price}, Business websites ${PRICING.website.tiers[1].price} and Growth websites ${PRICING.website.tiers[2].price} one-off. Domain registration and hosting are separate on one-off builds. A managed monthly website is ${PRICING.website.monthly.label}. We'll confirm your scope and total before work starts.`, href: "/website-pricing", label: "Compare website plans" },
  { q: "Do I need all three services?", a: "No. Start with the problem that matters most. That might be a clearer website, better local visibility or a single automation. If your existing setup can do the job, we'll work with it.", href: "/services", label: "Explore the services" },
  { q: "How quickly can we get started?", a: "A ready-to-start Starter website can be built in 48 hours once the brief, required content and access are confirmed. Business builds usually take 5–7 days and Growth builds 10–14 days. Your review, approvals and any integration requirements are included in the agreed schedule.", href: "/website-design-adelaide", label: "How website builds work" },
  { q: "Do I own my website?", a: "With a one-off build, you own the finished website once it is paid in full. On the monthly plan, AI Adelaide owns the website until you buy it out. If you cancel without a buy-out, hosting ends and the site goes offline. Your domain and content you supply remain yours.", href: "/website-pricing", label: "Ownership and monthly-plan details" },
  { q: "Can you guarantee more enquiries from SEO?", a: `No one can guarantee a ranking or a number of enquiries. Our local SEO starts at ${PRICING.seo.from}. We agree a scope, establish a baseline and report on the work, relevant search visibility and enquiries you can track.`, href: "/local-seo-adelaide", label: "Our approach to local SEO" },
];

const quotes = [testimonials[3], testimonials[2]];

export default function HomeStudio() {
  return (
    <div className={styles.studio}>
      <section className={`${styles.container} ${styles.hero}`} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Adelaide websites, SEO &amp; AI automation</p>
          <h1 id="home-title">Websites that<br /><span>mean business.</span></h1>
          <p className={styles.heroDescription}>Look the part. Get found locally. Make the everyday work easier. Practical digital help for your small business.</p>
          <div className={styles.heroActions}>
            <Link href="/contact#send-message" className={styles.primaryButton} data-track="quote_hero">Get a fixed quote <span aria-hidden>↗</span></Link>
            <a href="#selected-work" className={styles.textLink} data-track="home_view_work">See our work <span aria-hidden>↓</span></a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCanvas}>
            <div className={styles.canvasGrid} aria-hidden />
            <div className={styles.canvasWord} aria-hidden>Made<br />to work.</div>
            <a href="#selected-work" className={styles.heroProject} aria-label="Explore our work on CarHire.global" data-track="home_featured_work">
              <div className={styles.browserBar}><span aria-hidden>↗</span><span>carhire.global</span><span>Selected work</span></div>
              <Image src={selectedWork[0].screenshotSrc} alt={selectedWork[0].screenshotAlt} width={1440} height={900} priority sizes="(max-width: 760px) 90vw, 50vw" />
            </a>
          </div>
            <div className={styles.projectCaption}><span>Real work. Live on the web.</span><a href={selectedWork[0].url} target="_blank" rel="noopener noreferrer" aria-label="Visit CarHire.global in a new tab">Visit the site ↗</a></div>
        </div>
      </section>

      <div className={`${styles.container} ${styles.priceStrip}`} aria-label="Starting prices">
        <Link href="/website-pricing"><span>Website design</span><strong>From {PRICING.website.from}<small> one-off</small></strong><span aria-hidden>↗</span></Link>
        <Link href="/local-seo-adelaide"><span>Local SEO</span><strong>From {PRICING.seo.from}</strong><span aria-hidden>↗</span></Link>
        <Link href="/ai-automation-adelaide"><span>Practical automation</span><strong>From {PRICING.automation.from}</strong><span aria-hidden>↗</span></Link>
      </div>

      <section id="services" className={`${styles.container} ${styles.services}`} aria-labelledby="services-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>A useful place to start</p><h2 id="services-title">What would make<br />business easier?</h2><p>Pick the thing you need most. We&apos;ll help you take it from there.</p></div>
        <ServicePicker />
        <div className={styles.serviceFallbackLinks}><span>Explore:</span><Link href="/website-design-adelaide">Website design</Link><Link href="/seo">SEO services</Link><Link href="/local-seo-adelaide">Local SEO</Link><Link href="/ai-automation-adelaide">AI automation</Link></div>
      </section>

      <section id="selected-work" className={styles.workSection} aria-labelledby="work-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">Open the sites.<br />See the detail.</h2><p>Two live platforms we&apos;ve worked on. A look at the design, content and customer journeys behind the screens.</p></div>
          <div className={styles.workGrid}>
            {selectedWork.map((work, index) => <article key={work.name} className={styles.workItem}>
              <a href={work.url} target="_blank" rel="noopener noreferrer" className={`${styles.workImage} ${index === 1 ? styles.workImageSecondary : ""}`} aria-label={`Visit ${work.name} in a new tab`} data-track="home_portfolio_visit">
                <Image src={work.screenshotSrc} alt={work.screenshotAlt} width={1440} height={900} sizes="(max-width: 760px) 90vw, 50vw" />
                <span className={styles.workArrow} aria-hidden>↗</span>
              </a>
              <div className={styles.workDescription}><div><h3>{work.name}</h3><p>{work.scope}</p></div><span>{work.platform}</span></div>
              <p className={styles.workBody}>{work.description}</p>
            </article>)}
          </div>
          <p className={styles.workContext}>These examples show our work across different platforms. Your project starts with your customers, your services and your goals.</p>
        </div>
      </section>

      <section className={`${styles.container} ${styles.testimonialSection}`} aria-labelledby="feedback-title">
        <div><p className={styles.eyebrow}>Customer feedback</p><h2 id="feedback-title">The part that<br />matters.</h2><p className={styles.quoteDisclosure}>Genuine customer comments.<br />Names shortened for privacy.<br />Individual results vary.</p></div>
        <div className={styles.quoteGrid}>{quotes.map((quote, index) => <figure key={quote.name} className={styles.quote}><span className={styles.quoteService}>{index === 0 ? "Website design" : "Practical automation"}</span><blockquote>&ldquo;{quote.quote}&rdquo;</blockquote><figcaption><span className={styles.quoteInitial} aria-hidden>{quote.name.charAt(0)}</span><span><strong>{quote.name}</strong><small>{quote.role}</small></span></figcaption></figure>)}</div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={`${styles.container} ${styles.processGrid}`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Clear from the first conversation</p><h2 id="process-title">Small start.<br />Proper follow-through.</h2><p>You bring the business knowledge. We handle the digital work, with a clear scope and a real person to talk to.</p><a href="https://cal.com/aiadelaide/15min" className={styles.textLink} data-track="home_book_call" target="_blank" rel="noopener noreferrer">Book a free 15-minute call <span aria-hidden>↗</span></a></div>
          <ol className={styles.processSteps}>
            <li><span>01</span><div><h3>A conversation, then a clear quote.</h3><p>Tell us what&apos;s working and what isn&apos;t. We recommend a starting point and agree the work, price and timing.</p></div></li>
            <li><span>02</span><div><h3>You see it before it goes live.</h3><p>Review the design or workflow. We refine it together and test the steps your customers will actually use.</p></div></li>
            <li><span>03</span><div><h3>A handover you can use.</h3><p>Know what you own, how it works and who to contact. Ongoing work comes with an agreed scope and reporting.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="faq-title">
        <div className={styles.sectionHeading}><h2 id="faq-title">Good questions.<br />Straight answers.</h2><p>Scope, pricing and what happens next.</p><Link href="/website-pricing" className={styles.textLink}>See the full pricing <span aria-hidden>→</span></Link></div>
        <div className={styles.faqList}>{faqs.map(faq => <details key={faq.q}><summary data-track="faq_open">{faq.q}<span aria-hidden>+</span></summary><div><p>{faq.a}</p><Link href={faq.href}>{faq.label} <span aria-hidden>→</span></Link></div></details>)}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      </section>

      <section className={`${styles.container} ${styles.founderSection}`} aria-labelledby="founder-title">
        <div className={styles.founderIdentity}><span className={styles.founderMonogram} aria-hidden>IR</span><div><strong>Ivan Ribicic</strong><span>Your contact at AI Adelaide</span><Link href="/about">A little about us ↗</Link></div></div>
        <div><h2 id="founder-title">Local knowledge.<br />A direct conversation.</h2><p>Tell me about your business and what you want to improve. We&apos;ll work out a practical starting point, with a clear scope before you commit.</p></div>
      </section>

      <section className={styles.closingSection} aria-labelledby="closing-title">
        <div className={styles.container}><p className={styles.eyebrow}>Your next step</p><h2 id="closing-title">Let&apos;s make<br /><span>something useful.</span></h2><p>A better website. More local visibility. Less admin.<br />Tell us what would make a difference to your business.</p><Link href="/contact#send-message" className={styles.primaryButton} data-track="personal_closer_click">Get a fixed quote <span aria-hidden>↗</span></Link><span className={styles.closingNote}>Free first conversation. Clear scope. Your decision.</span></div>
      </section>

      <div className={`${styles.container} ${styles.localLinks}`}><span>Adelaide, and your part of it.</span><Link href="/marion">Marion</Link><Link href="/henley-beach">Henley Beach</Link><Link href="/morphett-vale">Morphett Vale</Link><Link href="/reynella">Reynella</Link><Link href="/seaford">Seaford</Link><Link href="/locations">All service areas ↗</Link></div>
    </div>
  );
}
