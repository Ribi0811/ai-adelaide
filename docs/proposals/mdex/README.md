# MDEX client proposal

## Current deliverable and agreed offer

Superseded by `../../../output/pdf/MDEX-Website-Discovery.pdf` on 6 September 2026. Ivan confirmed he has already offered the redesign free. Hosting, ongoing SEO and other continuing services are separate. The earlier Word proposal and its open build-price wording are historical and should not be sent.

The current PDF is an AI Adelaide branded three-page discovery questionnaire with 11 interactive response fields. It asks about preferred projects, service area, enquiries, quoting, software, social posting, photography permissions, editing preferences, existing providers/costs, design and contact/timing. No fixed ongoing price, mandatory care subscription, review exchange or link condition is introduced.

`build_discovery.py` is the reproducible ReportLab source. All three blank pages were rendered and visually inspected. All 11 fields passed save/read-back checks through the PDF field tree and page widgets; populated appearance streams were checked and a filled page visually inspected. The delivered copy remains blank. Not sent and no live website work performed.

Suggested message for this version:

> Hey, as discussed, I’m happy to do the website redesign for free. I’ve put together a short questionnaire so I can understand how you handle enquiries, post your work and manage the current site before we start. Short answers are fine, or we can talk it through. Hosting and any ongoing services will be separate, and we’ll agree those costs first.

## Historical proposal

Prepared 6 September 2026 for Ivan's review. Not sent. The client-facing Word document describes the redesign, fair platform comparison, social updates, migration protection, care scope and discovery questions. No price, free build, discount amount, timeline, review exchange or external commitment has been promised.

Suggested accompanying message:

> Hey, I’ve put together a few ideas for refreshing the MDEX website and showing off your work. It covers keeping your existing links, social updates, and the options for looking after the site. Have a read when you get a chance. The main thing is whether you’d like to make updates yourself or have us handle them. If you can also let me know what your current hosting and maintenance include, I can put together a sensible scope and price.

Evidence: ../../MDEX-REVIEW-2026-09-06.md and the public-site review in this task. Platform and integration limitations were checked against the primary references listed there. Current Redbax fees remain unknown; no competitor price claim is included.

Authoring source: build_proposal.py. Uses the bundled Codex Python runtime and python-docx. The document was rendered with the bundled documents renderer and all three final page images inspected. OOXML parsing and three-page PDF metadata checks passed. QA images/PDF remain temporary intermediates; final deliverable is MDEX-Website-Proposal.docx.
