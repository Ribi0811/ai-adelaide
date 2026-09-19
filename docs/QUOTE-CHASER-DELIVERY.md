# Quote Chaser — Delivery Playbook

**Internal doc — not published.** How we actually deliver the Quote Chaser
capability sold on `/quote-chaser-adelaide` and bundled in Automation Starter
($199/mo). Written 2026-07-17 so the first sale is a checklist, not an improv.

> **What we're promising the customer:** every quote they send gets up to three
> polite, well-timed follow-up messages, automatically, and the sequence stops
> the instant the customer replies or accepts. Nothing more, nothing magic.

---

## 1. The core mechanic (same for every client)

Three moving parts:

1. **A START trigger** — "a quote just went out." Fires the sequence.
2. **A STOP trigger** — "the customer replied / accepted / paid." Kills it.
3. **The messages** — 3 SMS (or email) templates, timed Day 1 / Day 3 / Day 7,
   written in the client's voice, approved by them before go-live.

The engine that runs it: **Twilio** for SMS (same account already powering
missed-call text-back — no new vendor) + a workflow tool (**Make.com** is the
default; n8n if we want it self-hosted) holding the timing logic and the
per-client on/off state. One Make scenario per client, cloned from a template.

The only thing that changes between clients is **how the START and STOP
triggers are wired** — because that depends on what software they use.

---

## 2. Three delivery tiers by client setup

### Tier A — client uses job software with webhooks (best case)
ServiceM8, Tradify, simPRO, Jobber, AroFlo. All expose quote/estimate events.

- **START:** webhook on "quote sent" / "estimate sent" → Make scenario →
  schedule the 3 messages.
- **STOP:** webhook on "quote accepted" or "invoice raised", **plus** inbound
  SMS to their Twilio number → cancel remaining scheduled messages.
- **Effort:** ~2-3 hrs setup. Rock solid once live.
- Most serious tradies are here. Push clients toward this.

### Tier B — client uses a CRM/calendar but no quote webhook
HubSpot, Google Workspace, spreadsheet-based.

- **START:** client BCCs a dedicated address (e.g. `quotes+clientname@…`) when
  they email a quote, OR moves a deal to a "Quote Sent" stage → Make watches it.
- **STOP:** inbound SMS reply, or client moves the deal to "Won"/"Lost".
- **Effort:** ~2-3 hrs. Depends on the client remembering the BCC — build the
  habit during onboarding, and add a weekly "quotes with no reply" digest so
  nothing silently falls through.

### Tier C — client has nothing (low-tech tradie)
Quotes go out as a text or a PDF from their phone, no system.

- **START:** they forward the quote (or a one-word "sent + customer number") to
  a magic number/email; a Make scenario parses it and starts the timer. Or we
  give them a dead-simple form/*shortcut* on their phone: name, number, amount → go.
- **STOP:** inbound SMS reply to their Twilio number.
- **Effort:** ~2 hrs. Crudest, but still delivers the promise. Set expectations:
  it chases whatever they tell it about; it can't see quotes it never hears of.

---

## 3. Onboarding checklist (per client)

1. **Discovery (part of the 30-60 min automation-audit call):** which software
   do they quote from? → sets Tier A/B/C. Confirm their Twilio number (reuse the
   missed-call one if they're already a text-back client).
2. **Write the 3 templates WITH them.** Their words, their tone. Keep them short
   and human ("Hey {first}, just checking you got the quote for {job} — happy to
   answer anything or lock in a date."). Get written approval — this is the
   `HUMAN INPUT NEEDED` moment; never ship templates they haven't seen.
3. **Set timing.** Default Day 1 / Day 3 / Day 7. Adjust per trade (emergency
   trades → tighter; big renos → longer).
4. **Wire START + STOP** for their tier.
5. **Test end-to-end** with a fake quote to your own phone: fire START, watch
   messages schedule, reply, confirm STOP cancels the rest.
6. **Compliance pass** (see §5) — opt-out line, sender ID, hours.
7. **Handover:** one-page "how it works + how to pause it" + the weekly digest.

---

## 4. Does the price work? ($199/mo bundle — yes)

Cost to us, per client, per month:
- Twilio AU SMS ≈ **$0.05 each**. A busy tradie sends ~40 quotes/mo × up to 3
  messages = ~120 SMS = **~$6/mo**. Even heavy users rarely top $15.
- Make.com: one paid plan (~$15-30/mo total) covers *many* clients' scenarios —
  cents per client.
- Our labour: front-loaded (2-3 hrs setup once), near-zero ongoing.

So on a $199/mo plan that **also** includes missed-call text-back + reminders,
Quote Chaser's marginal cost is single-digit dollars. The margin is healthy and
the price is right — **and this is exactly why we didn't price it standalone at
$99.** Standalone, the SMS + Make + support overhead against one thin product is
a worse deal for us and a weaker offer for them. Bundled, it's a no-brainer.

## 5. Compliance (Australia — do not skip)

Quote follow-up to someone who **asked for a quote** is generally a legitimate
business communication (they're an existing/prospective customer who initiated
contact), but the Spam Act 2003 still applies to commercial SMS:

- **Consent:** requesting a quote is inferred consent to reply about *that
  quote*. Fine. Don't repurpose the number for unrelated marketing.
- **Identify the sender:** messages must make clear it's from {client business}.
- **Unsubscribe:** include a simple opt-out ("reply STOP to opt out") and honour
  it — Make must drop the number on STOP. This is a legal requirement, not a nicety.
- **Hours/frequency:** keep to reasonable hours, cap at 3 touchpoints. No
  midnight sends.
- Same Privacy Act footing as the rest of our automation — the customer's number
  is used only to service their enquiry.

## 6. When NOT to sell it / edge cases

- Client who quotes 200 jobs/day → volume/SMS cost conversation first.
- Highly regulated trades (some health/finance) → check their own comms rules.
- If a client can't/won't do any START trigger (Tier C forwarding included),
  it can't chase what it never hears about — be honest, don't oversell.

---

## 7. Build status

The **customer-facing page and demo exist** (`/quote-chaser-adelaide`). The
**per-client delivery** above is a manual setup we run on first sale — the Make
template scenario is the one asset still to build (do it during/just before the
first onboarding so it's real, not speculative). Nothing here needs new vendors
beyond what missed-call text-back already uses.
