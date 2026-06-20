import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Hairdressers Adelaide | Salon Website Design",
  description:
    "Professional salon websites for Adelaide hairdressers. Online booking, service menus, galleries, Google reviews. Built fast, mobile-first, Google-ready. From $699.",
  alternates: {
    canonical: "/websites-for-hairdressers-adelaide",
  },
};

const buildItems = [
  {
    title: "Online booking integration",
    body:
      "Let clients book appointments directly from your website. We integrate with your existing booking system (Fresha, Timely, Booksy, Square) or set one up from scratch. No more phone tag during busy hours.",
  },
  {
    title: "Service menu display",
    body:
      "Showcase your cuts, colours, treatments, and pricing in a clean, browsable format. Clients know exactly what you offer before they walk in — no awkward 'how much for a balayage?' moments.",
  },
  {
    title: "Gallery & portfolio",
    body:
      "A visual portfolio of your best work — transformations, colour jobs, styling. Hairdressing is visual. Your website should be too. We set it up so you can add new photos easily.",
  },
  {
    title: "Mobile-first design",
    body:
      "Most of your clients are searching on their phones. Your site loads fast, looks stunning on mobile, and makes booking effortless on any screen. Tap-to-call for walk-in enquiries.",
  },
  {
    title: "Google reviews integrated",
    body:
      "Show off your Google reviews right on the homepage. New clients trust social proof — your site displays your best recent reviews and makes it easy for happy clients to leave one.",
  },
  {
    title: "Google-ready local SEO",
    body:
      "Optimised for &lsquo;hairdresser [suburb]&rsquo; searches so locals find you first. Local schema markup, fast load times, suburb pages, and Google Business Profile integration — all built in.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your salon, your services, your style, and your ideal clients. That's all we need to get started.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, source the imagery, design the layout, and build the full site. You don't write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tell us what to change — tweak the wording, swap a photo, adjust a price. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live on your domain, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Hair salons with no website, or one that hasn't been updated in years",
  "Barbers looking to attract a younger, online-first clientele",
  "Beauty salons that want online booking without paying for a big agency build",
  "Stylists going solo who need a professional online presence fast",
  "Salons using Instagram as their only web presence (it's not enough anymore)",
  "Established salons wanting to rank above franchise competitors on Google",
];

const localAdelaide = [
  "Unley & Hyde Park — premium salon strip, design matters most",
  "Burnside & Glen Osmond — established clientele, trust + reviews drive bookings",
  "Norwood & The Parade — high foot traffic, mobile-first is critical",
  "Mitcham & Cumberland Park — family-friendly suburbs, Google reviews win",
  "Magill & Rostrevor — competitive local market, SEO is the differentiator",
];

const faqs = [
  {
    question: "Can you integrate my existing booking system?",
    answer:
      "Yes. We work with popular booking platforms like Fresha, Timely, Booksy, Square Appointments, and Styleseat. If you don't have one, we'll set one up and connect it to your site — usually free for solo or small salons.",
  },
  {
    question: "Do you include a photo gallery for my work?",
    answer:
      "Absolutely. We build a dedicated gallery section where you can showcase transformations, colour work, and styling. You can add new photos yourself, or send them to us and we'll add them same-day.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete, custom-built salon site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month if you want to rank above the franchise competitors.",
  },
  {
    question: "Can I update prices and services myself?",
    answer:
      "Yes. For basic updates like price changes and new services, you can edit directly. For bigger changes like a full rebrand, most clients just ask us — it's done same day at no extra cost.",
  },
  {
    question: "Will it rank on Google for hairdressers in my suburb?",
    answer:
      "We build every site with local SEO in mind — suburb targeting pages, Google Business Profile integration, and proper schema markup. Your site is set up to rank for &lsquo;hairdresser [your suburb]&rsquo; from day one. For competitive suburbs like Norwood, we recommend adding the SEO retainer.",
  },
  {
    question: "Do I need to provide photos?",
    answer:
      "Ideally yes — your own salon shots and your best work convert far better than stock photos. If you don't have professional photos yet, we can launch with curated stock and swap in yours later. Same-day.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Your site is live in 48 hours. Google ranking depends on competition — niche suburbs can show movement in 2-4 weeks, competitive areas take 2-3 months. We'll give you an honest assessment before we start.",
  },
  {
    question: "Can I add AI automation later?",
    answer:
      "Absolutely. The site is built to connect with our AI receptionist and missed call text-back whenever you're ready. Most salons add automation in month 2-3 once the website is generating consistent bookings.",
  },
];

export default function WebsitesForHairdressersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Hairdressers Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Hairdressers</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Salon Website That Books Clients While You Work
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Your clients are on their phones, scrolling, deciding where to book their next appointment. If your salon doesn&apos;t have a fast, beautiful, mobile-first website with online booking, you&apos;re losing them to the salon down the road that does. We build websites for Adelaide hairdressers — designed to showcase your work and fill your chair. From $699, live in 48 hours.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in 48 Hours</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{step.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local Adelaide references */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Suburbs we build salon websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build hairdresser and salon websites right across Adelaide. These are the suburbs we work in most:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        industry="hairdresser"
        count={2}
        heading="What Adelaide salon owners say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Fills Your Chair?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your salon site, show you examples, and give you a quote on the spot. Most Adelaide salons have a site live within 48 hours of saying yes.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
