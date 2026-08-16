# Discovery Summary — Landpage Simone

**Date:** 2026-08-15
**Phase:** DISCOVERY (complete, pending review)
**Project:** Redesign of the website/landing page for speech-language pathologist Simone Tavolaro

This document synthesizes [[current-site-audit]], [[content-inventory]], [[seo-technical-audit]], [[ux-audit]], [[benchmark-simone-ebel]], [[additional-benchmarks]], [[user-journeys]], [[proposed-information-architecture]], and [[preliminary-design-direction]]. See `research/sources.md` for the full source log.

---

## 1. Executive summary

Simone Tavolaro's current website is a minimal, honest, 3-page Weebly site (Home, Sobre, Contato) that correctly avoids fabricated claims but under-communicates her value: no explicit value proposition, a below-the-fold single CTA, undifferentiated content blocks, and a technical branding leak (the browser tab and shared-link title read "MENU" instead of her name). Benchmarking against the designated UX reference (Simone Ebel) and 5 additional comparable practices surfaced consistent, structurally transferable patterns — clear hero value propositions, audience/condition segmentation, FAQ sections, explicit "what happens next" process explainers, and repeated (not competing) CTAs — none of which require inventing facts or copying content. The recommended next phase is UX Strategy, working from the proposed IA and design direction in this Discovery, with a defined client-validation pass to close the content gaps identified below.

## 2. Current website assessment

- Platform: Weebly, behind Cloudflare, 3 pages, no forms, single WhatsApp contact channel.
- Content is factually restrained (no invented stats, no testimonials, no outcome claims) but thin and undifferentiated.
- Technical SEO baseline is weak: no canonical tags, no structured data, missing meta descriptions on 2/3 pages, and a site title/Open Graph title of "MENU" instead of the practitioner's name.
- Full detail: [[current-site-audit]], [[seo-technical-audit]].

## 3. Key strengths (to preserve)

1. No fabricated claims, numbers, or testimonials anywhere on the current site — aligned with CLAUDE.md's healthcare-communication rules.
2. Exactly one primary CTA type (WhatsApp), no competing CTAs.
3. Real, verifiable credentials (2 CFFa specialist registrations, PUC-SP degree, 5 post-graduate qualifications).
4. Functional, non-broken mobile layout.
5. Existing link-out to Google reviews rather than fabricated on-site testimonials.

## 4. Key weaknesses

1. No stated value proposition — visitor must infer who Simone helps and with what.
2. "MENU" appears as the page title and Open Graph title on every page — undermines trust in shared links.
3. Primary CTA appears once, below the fold, with no repetition.
4. Services/conditions presented as one flat, undifferentiated bullet list.
5. No FAQ, no "what to expect" process explanation, no pricing/hours/insurance information.
6. No structured data, no canonical tags, generic image alt text, heading tags used for styling rather than structure.
7. Single contact channel (WhatsApp) with no stated alternative.
8. A stray, unrelated real-estate photo is exposed via the site's Open Graph metadata.

Full detail: [[ux-audit]], [[seo-technical-audit]].

## 5. Main UX opportunities

- Lead with a clear, honest value-proposition headline (Section 1 of [[proposed-information-architecture]]).
- Segment conditions/services into distinct, scannable blocks instead of a flat list.
- Add a "how it works" process explainer to reduce first-contact anxiety (pattern from NYCSLP, [[additional-benchmarks]] §4).
- Add an FAQ section addressing logistics/payment/online-eligibility questions.
- Repeat the single CTA at natural points down the page rather than once at the bottom.

## 6. Main conversion opportunities

- Make the CTA visible without scrolling.
- Reinforce the CTA consistently at 3–4 points on the page (not multiple different CTAs).
- Reduce ambiguity about online-session eligibility (currently stated as adults-only — [VALIDATE]).
- Consider a secondary, lightweight contact option alongside WhatsApp, without diluting the primary CTA ([VALIDATE WITH CLIENT]).

## 7. Benchmark findings

- Simone Ebel (designated benchmark): a persuasive, single-diagnosis-focused, single-scrolling-page structure with a strong FAQ, testimonials, and repeated CTA — structurally instructive but not directly transferable given Tavolaro's broader, multi-condition scope. Full comparison table in [[benchmark-simone-ebel]].
- 6 additional benchmarks (1 Brazilian direct-discipline match, 1 Brazilian adjacent-discipline premium clinic, 3 US solo/small-team speech-language-pathology practices, and 1 large-scale global teletherapy provider added specifically for online-delivery UX) converged on: plain-language hero before formal credentials, condition-block service presentation, a personal bio section distinct from the credentials list, an FAQ near the page end, and reimbursement/pricing transparency. The teletherapy benchmark (TinyEYE) additionally shows that an online-session option needs more explicit "how it works" and mechanics content than an in-person option, since it lacks physical trust cues — directly relevant to Tavolaro's stated online-session offering. Full detail in [[additional-benchmarks]].
- Nothing from any benchmark's text, imagery, testimonials, claims, branding, or visual identity is to be reused — only structural patterns, as required by CLAUDE.md.

## 8. Recommended information architecture

Proposed primary nav: **Início · Áreas de Atuação · Sobre · Perguntas Frequentes · Contato**, with a proposed hybrid format (content-rich homepage + 2 short dedicated pages). Full section-by-section rationale, evidence basis, and open decisions in [[proposed-information-architecture]].

## 9. Recommended user journeys

Five journey hypotheses were proposed: (1) parent seeking help for a child, (2) adult seeking help for themselves, (3) professional seeking oratória/communication coaching, (4) visitor seeking online consultation, (5) visitor who already knows Simone and wants to book directly. All are explicitly labeled as hypotheses, not confirmed demographic data — see [[user-journeys]] for evidence basis per journey and required validations (esp. the adults-only online-session scope in Journey 4).

## 10. Preliminary design direction

Positioning: **Premium + Human + Professional + Contemporary**, avoiding generic AI/template aesthetics, excessive gradients/glassmorphism/shadows/animation, stock photography, and card-clutter. Direction defined for positioning, visual personality, typography, imagery, spacing, layout, color, and interaction — principles only, no final visual decisions. Full detail in [[preliminary-design-direction]].

## 11. SEO/GEO opportunities

- Rebuild title tags and Open Graph metadata around Simone's actual name and service (fixing the "MENU" leak).
- Add `LocalBusiness`/`MedicalBusiness` and `Person` structured data with consistent NAP.
- Fix heading hierarchy to reflect real content structure, not visual styling.
- Add descriptive image alt text.
- Build a validated FAQ section — high value for both SEO and AI/answer-engine (GEO) readability.
- Full baseline and strategy notes in [[seo-technical-audit]].

## 12. Content gaps

Years of experience, patient counts, opening hours, pricing/insurance handling, online-session eligibility scope, institutions/years for post-graduate qualifications, a personal biography/career narrative, real testimonials with consent, and an email address are all currently absent and must not be invented. Full list with page/source references in [[content-inventory]] §10.

## 13. Items requiring client validation

1. Whether HTTPS is properly configured and whether the address/phone/credentials are still current.
2. Whether online sessions are available only to adults, or also to children/idosos.
3. Institution and year for each of the 5 post-graduate qualifications.
4. Years of clinical experience and any patient-count figures (only if real and confirmable).
5. Opening hours and pricing/payment/insurance-reimbursement policy.
6. Whether a personal biography/career narrative can be shared, and its content.
7. Availability of real, consented testimonials.
8. Whether an email address and/or any social media presence should be added.
9. Whether the professional/oratória service is individual coaching, group workshops, or corporate training.
10. Whether the current logo/visual identity is being kept or evolved.
11. Whether a secondary contact form is desired alongside WhatsApp.
12. Format decision: single long homepage vs. hybrid multi-page structure ([[proposed-information-architecture]] "Format decision").

## 14. Risks and assumptions

- **Risk:** without client validation of the items in §13, the IA/copywriting phase cannot proceed on several sections (FAQ, "how it works," pricing/hours) without inventing content, which CLAUDE.md prohibits.
- **Risk:** the "MENU" title/Open Graph issue may already be affecting how the site appears when shared or found — this should be prioritized early in implementation.
- **Assumption:** the current WhatsApp number and address are still active and correct — not independently re-verified beyond what the current site states.
- **Assumption (flagged throughout [[user-journeys]]):** journey hypotheses are structurally reasonable given the stated scope of practice, but are not based on real analytics or client-confirmed patient-mix data.

## 15. Recommended next phase

Per the project workflow (DISCOVERY → **UX STRATEGY** → Information Architecture → Design System → Implementation → …), the recommended next step is **UX Strategy**: resolve the open decisions in §13/§16 with the client, confirm the primary CTA definition, and finalize the information architecture proposed here before any design-system or implementation work begins.

## 16. Decisions requiring approval before implementation

1. Approve (or revise) the proposed primary navigation and homepage section sequence in [[proposed-information-architecture]].
2. Decide: single-scrolling-page vs. hybrid multi-page structure.
3. Confirm the single primary CTA definition (WhatsApp) and whether a secondary contact form is added.
4. Resolve all 12 client-validation items in §13 — the copywriting and FAQ content cannot be finalized without this.
5. Approve the preliminary design direction in [[preliminary-design-direction]] as the brief for the Design System phase.
6. Confirm whether the current logo/visual identity is retained, evolved, or replaced.
