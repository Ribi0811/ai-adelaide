"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PRICING } from "@/lib/constants";
import { track } from "@/lib/track";
import styles from "./world.module.css";

const businesses = {
  trades: { label: "Trades", name: "Your Electrical Business", search: "electrician in Adelaide", photo: "electrician", headline: "Good work.\nFrom the first call.", detail: "Electrical work for your home and business.", services: ["Lighting", "Switchboards", "EV charging"], request: "I'd like to talk about an electrical job." },
  hospitality: { label: "Cafés & hospitality", name: "Your Café", search: "café in Adelaide", photo: "cafe", headline: "Your new\nfavourite corner.", detail: "Coffee, good food and a reason to stay a little longer.", services: ["The menu", "The space", "Private events"], request: "I'd like to ask about a group booking." },
  services: { label: "Local services", name: "Your Studio", search: "hair studio in Adelaide", photo: "salon", headline: "A little time.\nJust for you.", detail: "A welcoming space for your next cut, colour or restyle.", services: ["Cuts & styling", "Colour", "Appointments"], request: "I'd like to ask about an appointment." },
} as const;
type Kind = keyof typeof businesses;

const chapters = [
  { label: "Get found", title: "A search becomes\na possibility.", description: "Show up for the services you offer and the places you actually work. Useful pages and a clear local presence give the right people a way to find you.", service: "seo", price: PRICING.seo.from, href: "/local-seo-adelaide", link: "Explore local SEO", cta: "Talk about local SEO" },
  { label: "Make an impression", title: "Now give them\na reason to choose you.", description: "A website that feels like your business. Clear services, thoughtful design and an obvious next step, on a phone or a bigger screen.", service: "website", price: PRICING.website.from, href: "/website-design-adelaide", link: "Explore website design", cta: "Get a website quote" },
  { label: "Keep it moving", title: "Make the next step\nfeel effortless.", description: "Route an enquiry to the right place. Acknowledge it, remind yourself and follow up with care. Start with one useful automation and a human in control.", service: "automation", price: PRICING.automation.from, href: "/ai-automation-adelaide", link: "Explore automation", cta: "Discuss an automation" },
] as const;

export default function BusinessWorld({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<Kind>("trades");
  const [name, setName] = useState("");
  const [chapter, setChapter] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [followup, setFollowup] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const business = businesses[kind];
  const businessName = name.trim() || business.name;

  function stop() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPlaying(false);
  }

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function chooseChapter(index: number) {
    stop();
    setChapter(index);
    setFollowup(false);
    track("home_journey_step", { step: index, trade: kind });
  }

  function chooseBusiness(next: Kind) {
    stop();
    setKind(next);
    setChapter(1);
    setFollowup(false);
    track("preview_website", { trade: next });
  }

  function play() {
    if (playing) { stop(); return; }
    setFollowup(false);
    setChapter(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPlaying(true);
    timers.current = [
      setTimeout(() => setChapter(1), 2600),
      setTimeout(() => setChapter(2), 5800),
      setTimeout(() => setFollowup(true), 7900),
      setTimeout(() => setPlaying(false), 9500),
    ];
    track("home_journey_play", { trade: kind });
  }

  return <>
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroIntro}>
        <p className={styles.kicker}>Adelaide websites, SEO &amp; AI automation</p>
        <h1 id="home-title">Small business.<br /><span>Big presence.</span></h1>
        <p className={styles.heroCopy}>You do the work worth finding.<br />Website design, local SEO and automation for Adelaide small businesses.</p>
        <div className={styles.heroActions}>
          <a href="#your-business" className={styles.mainButton} data-track="home_try_business">See it for your business <span aria-hidden>↗</span></a>
          <Link href="/contact#send-message" className={styles.quietLink} data-track="quote_hero">Get a fixed quote <span aria-hidden>→</span></Link>
        </div>
      </div>
      <div className={styles.world}>
        <Image src="/images/small-business-world.jpg" alt="An imagined miniature Adelaide-style business street with a café, trades workshop and local shop" width={1300} height={867} priority sizes="(max-width: 760px) 125vw, 1100px" />
        <div className={styles.worldLinks} aria-label="Explore an example for your business">
          <a href="#your-business" onClick={() => chooseBusiness("hospitality")} className={styles.cafePin}><span aria-hidden>+</span> Cafés &amp; hospitality</a>
          <a href="#your-business" onClick={() => chooseBusiness("trades")} className={styles.tradePin}><span aria-hidden>+</span> Trades</a>
          <a href="#your-business" onClick={() => chooseBusiness("services")} className={styles.servicePin}><span aria-hidden>+</span> Local services</a>
        </div>
      </div>
      <div className={styles.heroFoot}><span>A local business deserves a proper digital presence.</span><a href="#selected-work" data-track="home_view_work">See our real work ↗</a></div>
    </section>

    {children}

    <section id="your-business" className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.experienceIntro}>
        <p className={styles.kicker}>Put yourself in the picture</p>
        <h2 id="experience-title">Your next customer.<br /><span>Through their eyes.</span></h2>
        <p>Make this little example yours. Then follow the journey.</p>
        <div className={styles.personalise}>
          <label><span>Your business name</span><input value={name} onChange={event => { stop(); setName(event.target.value); }} maxLength={40} placeholder="Your business name" autoComplete="organization" /></label>
          <div className={styles.businessKinds} aria-label="Choose an example business type">
            {(Object.keys(businesses) as Kind[]).map(key => <button type="button" key={key} aria-pressed={kind === key} onClick={() => chooseBusiness(key)}>{businesses[key].label}</button>)}
          </div>
        </div>
      </div>

      <div className={styles.journey}>
        <div className={styles.chapterTabs} aria-label="Explore the customer journey">
          {chapters.map((item, index) => <button type="button" key={item.label} onClick={() => chooseChapter(index)} aria-pressed={chapter === index} aria-controls="customer-scene"><span>{String(index + 1).padStart(2, "0")}</span>{item.label}<span aria-hidden>↗</span></button>)}
        </div>
        <div className={styles.journeyLayout}>
          <div className={styles.chapterCopy} aria-live="polite">
            {chapters.map((item, index) => <div key={item.service} hidden={chapter !== index}>
              <span className={styles.chapterNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
              <p>{item.description}</p>
              <Link href={item.href} className={styles.chapterLink}>{item.link} <span aria-hidden>↗</span></Link>
              <p className={styles.chapterPrice}>From <strong>{item.price}</strong>{index === 1 ? " one-off" : index === 2 ? "; setup scoped separately" : "; agreed monthly scope"}</p>
              <Link className={styles.chapterQuote} href={`/contact?business=${encodeURIComponent(businessName)}&service=${item.service}#send-message`} onClick={() => track("personal_closer_click", { trade: kind, service: item.service })}>{item.cta} <span aria-hidden>↗</span></Link>
            </div>)}
            <button type="button" className={styles.playButton} onClick={play} aria-pressed={playing}><span aria-hidden>{playing ? "Ⅱ" : "▷"}</span>{playing ? "Pause the journey" : "Play the customer journey"}</button>
          </div>

          <div className={styles.sceneWrap}>
            <div className={styles.sceneTop}><span>Interactive example</span><span>{businessName}</span></div>
            <div id="customer-scene" className={styles.scene} aria-live="polite">
              <div hidden={chapter !== 0} className={styles.searchScene}>
                <p className={styles.searchPrompt}>It starts with a need.</p>
                <div className={styles.searchField}><span aria-hidden>⌕</span>{business.search}<span className={styles.searchCursor} aria-hidden /></div>
                <div className={styles.searchResult}>
                  <div className={styles.resultIdentity}><span aria-hidden>{businessName.charAt(0).toUpperCase()}</span><div><strong>{businessName}</strong><small>yourbusiness.com.au</small></div></div>
                  <button type="button" onClick={() => chooseChapter(1)}>{businessName} · Adelaide <span aria-hidden>↗</span></button>
                  <p>{business.detail} Explore our services and get in touch.</p>
                  <div className={styles.resultTags}>{business.services.map(service => <span key={service}>{service}</span>)}</div>
                </div>
                <p className={styles.sceneNote}>Example listing. Search placement and rankings are not guaranteed.</p>
              </div>

              <div hidden={chapter !== 1} className={styles.websiteScene}>
                <div className={styles.miniNav}><strong>{businessName}</strong><span>Adelaide, SA</span><button type="button" onClick={() => chooseChapter(2)}>Get in touch ↗</button></div>
                <div className={styles.miniHero} key={kind}>
                  <Image src={`/mockups/${business.photo}.jpg`} alt={`Illustrative ${business.label.toLowerCase()} website concept photography`} width={800} height={600} sizes="(max-width: 760px) 90vw, 650px" />
                  <div className={styles.miniHeroCopy}><span>{business.label} · Adelaide</span><h4>{business.headline.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h4><p>{business.detail}</p><button type="button" onClick={() => chooseChapter(2)}>Let&apos;s talk <span aria-hidden>↗</span></button></div>
                </div>
                <div className={styles.miniServices}>{business.services.map((service, i) => <button type="button" key={service} onClick={() => chooseChapter(2)}><small>0{i + 1}</small><span>{service}</span><span aria-hidden>↗</span></button>)}</div>
              </div>

              <div hidden={chapter !== 2} className={styles.enquiryScene}>
                <div className={styles.enquiryCard}><span className={styles.enquiryIcon} aria-hidden>↙</span><p>Website enquiry</p><h4>A conversation<br />worth following up.</h4><div className={styles.message}><small>Example customer message</small><p>{business.request}</p></div><button type="button" onClick={() => { stop(); setFollowup(!followup); }}>{followup ? "Reset the example" : "See a possible follow-up"}<span aria-hidden>↗</span></button></div>
                <div className={styles.followup} hidden={!followup}><span aria-hidden>✓</span><div><strong>Acknowledged. Ready for you.</strong><p>“Thanks for contacting {businessName}. We&apos;ve received your enquiry and will be in touch.”</p><small>Example acknowledgement. Your rules, wording and response times are agreed before setup.</small></div></div>
              </div>
            </div>
            <p className={styles.demoDisclosure}>An illustrative design and workflow. No search, booking or message is sent.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}
