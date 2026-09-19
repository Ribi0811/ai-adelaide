# Audit and calculator channel review — 9 September 2026

Ivan approved the bounded proposal below on 9 September. The map records the pre-correction state; implementation and release evidence are tracked in [calculator-release.md](calculator-release.md).

## Verified map

| Journey | Visitor action | Current handling | Included in Contact register? |
|---|---|---|---|
| /audit → quiz → results | Ten self-assessment answers | Browser-local answers and scoring | No |
| Audit results → Save My Results | Optional email for PDF prefill | Browser-local email only | No |
| Audit results → report | Generate PDF | Client-side jsPDF download | No |
| AI-readiness calculator | Nine answers, score, optional request form | POST /api/leads: Telegram notification and best-effort local JSON | No |
| Contact / Tradie SEO | Submit enquiry | Existing Contact notification and Google Sheet adapter | Yes |

Source: app/audit/quiz/page.tsx:22; app/audit/results/page.tsx:100; app/audit/report/page.tsx:25; app/tools/ai-readiness-calculator/page.tsx:88; app/api/leads/route.ts:158; docs/LEAD-TRACKING-2026-09-06.md. A separate server audit-report route exists but is not wired into the reviewed UI flow.

The calculator success copy at page.tsx:378 says a detailed report has been emailed. Its API does not send an email or generate that report. Telegram acceptance is not report delivery. The register therefore cannot be used to count calculator requests or self-serve audit completions. Audit email-prefill wording is explicit and does not itself promise email delivery.

## Browser verification

On the canonical domain, the coordinator completed a synthetic ten-question audit through results to the report screen without entering contact details: sample 40/100, PDF download button available. The nine-question calculator reached a sample 20/100 result and its request form. No request form was submitted; no report download or recipient delivery was verified. Source routing, not an HTTP success, establishes the path distinctions above. Samples are not business measurements.

One Luna medium subagent independently inspected the source while the coordinator checked health, mail and browser journeys. Coordinator rejected its suggested calculator 9/10 question mismatch: source has nine actual questions and the live UI agrees. This review does not claim measured token savings.

## Proposed bounded follow-up

1. Correct calculator completion copy to “Your request has been received. AI Adelaide can follow up using the details you provided.” Remove the unsupported claim that a report was emailed; do not add an automated-email service merely to satisfy old copy.
2. With scoped approval for the collection change, save only submitted calculator requests into the existing Restricted enquiry Sheet using the existing adapter. Map name, business, email, optional phone, source=ai-readiness-calculator, score/tier summary and existing attribution; assign New, leave quote/win/cash blank. Do not store raw answers in the Sheet, create a new destination, or treat anonymous quiz completion as a lead. Review the actual form disclosure/privacy wording before release.
3. Preserve self-serve audit download. Make any human-help handoff an explicit Contact request with service=audit; do not silently turn its email prefill into outreach consent or server-side collection.

Acceptance: desktop/mobile request and retry/error states; one labelled test creates exactly one identifiable Sheet row; notification failures cannot falsely claim report delivery; rollback target recorded; no raw answers/customer data committed. Test against controlled local dependencies first, then one approved live integration check. The approved extension is limited to submitted calculator requests and the existing Restricted register.

Secondary observations for a later bounded content pass: audit fallback mentions 15 questions while actual quiz has ten; calculator shows a 50+ trust count that needs evidence; audit results use strong payback language. These were observed, not newly introduced, and were not changed in this mapping task.
