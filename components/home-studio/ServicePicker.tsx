"use client";

import Link from "next/link";
import { useState } from "react";
import { PRICING } from "@/lib/constants";
import styles from "./studio.module.css";

const options = [
  {
    id: "website", label: "A better website", prompt: "Look the part. Make it easy to enquire.",
    heading: "A proper home for your business.",
    description: "A clear, fast website that explains what you do and helps the right people take the next step. Copy, design and the technical setup, handled for you.",
    price: PRICING.website.from, frequency: "one-off", href: "/website-design-adelaide",
    points: ["Design and copy built around your business", "A simple mobile call and enquiry journey", "Search foundations and a proper handover"],
    steps: ["Your business", "A clear website", "An easy enquiry"],
    note: "Already have a website? We can improve it when a rebuild isn't needed.",
    cta: "Get a website quote",
  },
  {
    id: "seo", label: "More local visibility", prompt: "Help nearby customers find you.",
    heading: "Show up for the work you want.",
    description: "Practical local SEO for your services and the areas you actually cover. We work on your pages, Google Business Profile and local presence, then report what changed.",
    price: PRICING.seo.from, frequency: "month to month", href: "/local-seo-adelaide",
    points: ["Your services and real service areas", "Google Business Profile and useful content", "Search and enquiry reporting in plain English"],
    steps: ["A local search", "A useful service page", "A reason to get in touch"],
    note: "Rankings aren't guaranteed. We agree the priorities and make the work visible.",
    cta: "Talk about local SEO",
  },
  {
    id: "automation", label: "Less repetitive admin", prompt: "Give the busywork a better process.",
    heading: "One less thing on your list.",
    description: "Quote follow-ups, enquiry routing and appointment reminders. Start with one useful workflow, connected to the tools you already use where the integration supports it.",
    price: PRICING.automation.from, frequency: "setup scoped separately", href: "/ai-automation-adelaide",
    points: ["One clear workflow and a starting baseline", "Your rules, approval points and handover", "Testing, monitoring and a human fallback"],
    steps: ["A quote is sent", "A follow-up is scheduled", "The reply comes to you"],
    note: "We'll check your software and scope before recommending a system.",
    cta: "Discuss an automation",
  },
] as const;

export default function ServicePicker() {
  const [active, setActive] = useState(0);
  const selected = options[active];
  return (
    <div className={styles.servicePicker}>
      <div className={styles.serviceChoices} aria-label="Choose what your business needs">
        {options.map((option, index) => (
          <button key={option.id} type="button" aria-pressed={active === index}
            aria-controls="service-detail" onClick={() => setActive(index)}
            data-track={`home_service_${option.id}`}
            className={`${styles.serviceChoice} ${active === index ? styles.choiceActive : ""}`}>
            <span><strong>{option.label}</strong><small>{option.prompt}</small></span>
            <span className={styles.choiceArrow} aria-hidden>↗</span>
          </button>
        ))}
      </div>
      <div id="service-detail" className={styles.serviceDetail} aria-live="polite" aria-atomic="true">
        <div key={selected.id} className={styles.detailEntrance}>
          <div className={styles.servicePrice}><span>From <strong>{selected.price}</strong></span><small>{selected.frequency}</small></div>
          <h3>{selected.heading}</h3>
          <p>{selected.description}</p>
          <ul className={styles.checklist}>{selected.points.map(point => <li key={point}><span aria-hidden>✓</span>{point}</li>)}</ul>
          <div className={styles.workflow} aria-label="Example customer journey">
            {selected.steps.map((step, i) => <div key={step}><span className={styles.workflowNumber}>{i + 1}</span><span>{step}</span>{i < 2 && <span className={styles.workflowArrow} aria-hidden>→</span>}</div>)}
          </div>
          <p className={styles.serviceNote}>{selected.note}</p>
          <div className={styles.detailActions}>
            <Link href={`/contact?service=${selected.id}#send-message`} className={styles.primaryButton} data-track={`home_quote_${selected.id}`}>{selected.cta}<span aria-hidden>↗</span></Link>
            <Link href={selected.href} className={styles.textLink}>See what&apos;s included <span aria-hidden>→</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
