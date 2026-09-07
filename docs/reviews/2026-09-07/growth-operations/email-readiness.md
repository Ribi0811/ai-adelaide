# Email readiness and prospect-history check — 7 September 2026

**Status: sender DNS is configured; actual outbound authentication remains unverified from retained mail. Neither researched prospect has an established consent basis. No email was sent.** The check occurred after the programme's 09:00–16:00 Adelaide sending window, using read-only DNS queries and IMAP selections with `BODY.PEEK` fetches.

## Sender and authentication

| Check | Current evidence | Result and limit |
|---|---|---|
| Account identity/access | Existing protected credential identifies `hello@aiadelaide.com.au`; TLS IMAP login succeeded | Correct account and readable mailbox verified. No SMTP send/login test performed |
| SPF | One SPF record: `v=spf1 ip4:185.184.155.62 ~all` | Configured SMTP host `cp-wc46.per01.ds.network` currently resolves to the authorised IPv4 address. Actual outbound envelope/egress and receiving-server SPF pass unverified |
| DKIM DNS | `default._domainkey.aiadelaide.com.au` publishes a non-empty RSA key; OpenSSL parses it as 2048 bits | Public key is valid. Selector use and message signing by the live sender remain unverified |
| DMARC DNS | `_dmarc.aiadelaide.com.au`: `v=DMARC1; p=quarantine` | Enforcement policy exists. Receiving-server alignment/pass unverified |
| Existing message headers | Retained Sent messages and the current draft have no DKIM-Signature, Authentication-Results or Received-SPF evidence; no own-domain DKIM sample found in retained Inbox/Sent/Trash headers | Sent/draft copies commonly precede receiving checks; absence is **not** evidence of failure. No new delivery/authentication claim can be made |
| Signature | `docs/AI-ADELAIDE-EMAIL-SIGNATURE.html` identifies AI Adelaide Team, the correct email and canonical website | Source is consistent with the programme. Outlook's default signature is documented as configured; SMTP templates do not inherit it automatically |

No DNS, mail configuration, Outlook setting, mailbox flag or folder placement was changed. No links or commands in received messages were followed. No credentials or private keys were included in this report.

## First two prospects: mailbox history

All seven available folders were searched: Inbox, Sent, Archive, spam, Junk, Trash and Drafts. Search terms covered both business names and known domain/address aliases. The earlier local-file check also covered normalised public phone variants.

| Prospect | Current mailbox search | Prior-contact completeness | Consent and send eligibility |
|---|---|---|---|
| JJ Electrical Specialists | No matching message in the inspected folders | Unknown: only two messages remain in Sent, so this mailbox does not establish complete historic sending/suppression coverage | No express or evidenced applicable inferred consent found; **held** |
| Tailored Plumbing Solutions | No matching message in the inspected folders | Unknown for the same reason | No express or evidenced applicable inferred consent found; **held** |

This improves the previous local-only check but does not prove either business has never been contacted or opted out. The current private outreach ledger contains no contacts, suppressions or attempts. Empty programme records are not proof that older history is clear. Ivan's standing sending authority is established; the unresolved issue is recipient eligibility, not another request for permission from Ivan.

## Recent programme replies, objections and delivery failures

Checked received message headers since 1 September, including the recent messages already in Trash. Five received messages were available in that period: an incoming directory-placement solicitation, three incoming marketing-service pitches and a cloud-storage alert-like message. None was identified as a customer enquiry, reply to this outreach programme, recipient opt-out or delivery-status report. No response draft or new customer row is warranted from this batch. One additional recent item is the recipient-free Outlook signature draft, which remains unsent.

This is a bounded mailbox observation. It does not establish zero replies or bounces across deleted mail, other accounts, other hosts or an unretained SMTP send history. The separate general inbox monitor remains responsible for broader inbox housekeeping.

## Next operating action

1. Keep these two prospects held while seeking a documented valid contact basis or permission-backed introduction. Do not send a marketing email merely to ask for consent, and do not interpret absent search matches as eligibility.
2. Before the first eligible send, use an existing recipient-side received copy with authentication headers if one becomes available to verify actual SPF/DKIM/DMARC results. Current DNS checks are complete; there is no evidence justifying a DNS change.
3. Ensure the programme's sending template explicitly includes the approved AI Adelaide identity/contact details and working reply-to-unsubscribe instruction, and records attempts before sending. Outlook signature settings alone do not configure the SMTP workflow.
4. Continue independent website, proof and enquiry work. No additional per-message authority request is needed within the standing brief once eligibility, timing and readiness requirements are satisfied.

Private evidence: ignored `data/growth-ops/email-readiness-private-2026-09-07.json` (directory 0700, file 0600) contains mailbox references and narrowly scoped header/body evidence. It must not be committed or published. No private customer/contact records are reproduced here.
