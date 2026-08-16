# UX Audit — Current Website

**Source:** http://www.fono-simonetavolaro.com/
**Method:** First-time-visitor walkthrough (desktop + mobile viewport), Home → Sobre → Contato
**Date:** 2026-08-15
**Screenshots:** `docs/references/screenshots/homepage-desktop-current.jpg`, `homepage-mobile-current.jpg`, `sobre-desktop-current.jpg`, `contato-desktop-current.jpg`

Every line below is labeled **FACT**, **INFERENCE**, or **RECOMMENDATION** per CLAUDE.md.

---

## 1. First impression (Home, above the fold)

- FACT: The page opens with the word "MENU" as a large heading, followed by a horizontal nav (HOME / SOBRE / CONTATO), then a logo image and a portrait photo side by side, then two credential lines.
- INFERENCE: A first-time visitor's very first readable content is a navigation label ("MENU"), not the practitioner's name or a value proposition. This likely delays the moment a visitor understands "whose site is this and what do they do."
- INFERENCE: Leading with two formal specialist-registration credentials ("Especialista em Linguagem... n. 9940/24") before any plain-language explanation of who Simone helps or with what may read as credible but is not immediately meaningful to a parent or patient who doesn't know what those credentials mean.

## 2. Value proposition clarity

- FACT: No headline states a problem, audience, or benefit (e.g., nothing equivalent to "help for speech and language difficulties in children and adults").
- INFERENCE: The visitor has to read the "Área de atuação" bullet list further down to infer what problems are treated. This requires more effort than a benchmark hero statement (see [[benchmark-simone-ebel]]).
- RECOMMENDATION: A clear, honest opening statement of who Simone helps and with what (grounded only in the validated content inventory, not invented) would reduce the effort needed to understand the page.

## 3. Understanding of services / conditions addressed

- FACT: Services/conditions are presented as a flat bullet list with no grouping, icons, or visual hierarchy: Trocas na Fala, Atraso de Linguagem, Fluência da Fala, Compreensão ou expressão, Comunicação no ambiente de trabalho.
- INFERENCE: Because the list mixes child-typical conditions (atraso de linguagem), adult/older-adult conditions (afasia), and a professional-development service (oratória) without differentiation, a visitor may not immediately see "this applies to me" — they must read the whole list to self-identify.
- RECOMMENDATION: Segmenting content by audience or life-stage (a pattern also seen in [[benchmark-simone-ebel]] and several [[additional-benchmarks]]) could shorten the visitor's path to relevance — to be designed in the IA phase, using only Simone's real scope of practice.

## 4. Understanding of target audience

- FACT: "Atendimento a adultos, crianças e idosos" appears once, in a small bullet under the credentials, easy to miss.
- INFERENCE: A visitor scanning quickly might not register that the practice serves all age groups, since this line has no visual emphasis relative to the credential text above it.

## 5. Credibility / trust signals

- FACT: Present — two specialist registrations with CFFa numbers, a PUC-SP degree (stated on Sobre), a link to Google reviews, a real consultório address, a portrait photo.
- FACT: Absent — no testimonial text on-site, no years-of-experience statement, no patient-count statement, no case outcomes.
- INFERENCE: The absence of numeric/outcome claims is not a defect — per CLAUDE.md's healthcare-communication guidance, unverified claims like "+30 anos" or "+2.000 pacientes" (seen in [[benchmark-simone-ebel]]) should not be invented for Simone's site. The current site's restraint here is a **strength worth preserving**, not a gap to copy over from the benchmark.
- RECOMMENDATION: Any future trust-building addition (numbers, testimonials, outcomes) must be sourced from real, client-validated information — never fabricated, per CLAUDE.md.

## 6. Navigation

- FACT: 3-item nav, consistent across all pages, no dead ends, no broken links found.
- INFERENCE: The nav is simple to the point of being under-informative — "SOBRE" and "CONTATO" are generic labels that don't hint at what's inside (e.g., no "Serviços" or "Áreas de Atuação" entry point), though for a 3-page site this may be adequate.

## 7. Information hierarchy

- FACT: On Home, heading tags (per [[seo-technical-audit]] §4) appear to wrap bullet/contact content rather than a clear headline — so the page's visual hierarchy (what's biggest/boldest) does not obviously correspond to what's most important for a visitor's decision-making.
- INFERENCE: Because credentials, scope of practice, a review link, and contact/location info all appear in a single vertical scroll of roughly similar visual weight, the visitor has no strong cue for "read this first."

## 8. Readability

- FACT: Content is in Portuguese, professional register, moderate technical vocabulary ("habilitação e reabilitação das funções", "afasia", "motricidade orofacial" on Sobre).
- INFERENCE: Some terms (e.g., "afasia," "motricidade orofacial") assume the reader already has some familiarity with speech-language pathology terminology; a first-time visitor unfamiliar with the field may not immediately grasp what condition is being described without a plain-language gloss.

## 9. Mobile usability

- FACT: At a 390×844 mobile viewport, the page reflows to a single column; logo and portrait stack vertically; nav collapses into a hamburger icon (see `homepage-mobile-current.jpg`).
- FACT: The layout does not appear to break (no obvious horizontal overflow or overlapping elements were observed at this viewport).
- INFERENCE: Because most content is short text blocks, the mobile experience is likely functional, though the same hierarchy issues noted in §7 carry over to mobile, where scanning long, undifferentiated text is comparatively more costly.

## 10. CTA visibility & clarity

- FACT: The only clear CTA on Home is "MARQUE SUA CONSULTA," placed at the very bottom of the page, below the fold on both desktop and mobile screenshots captured.
- INFERENCE: A visitor who doesn't scroll all the way down may not encounter a call to action at all — there is no repeated or sticky CTA.
- FACT: There is exactly **one** primary CTA type (book via WhatsApp) — no competing CTAs were found. This aligns with CLAUDE.md's instruction to avoid multiple competing primary CTAs, and is a **strength to preserve**.
- RECOMMENDATION: Consider surfacing the CTA earlier and/or persistently (e.g., a sticky WhatsApp affordance), without introducing a second, competing CTA — a structural pattern also observed in [[benchmark-simone-ebel]] and multiple [[additional-benchmarks]].

## 11. Conversion journey

- FACT: The only conversion path is: read content → scroll to bottom → tap "MARQUE SUA CONSULTA" or the WhatsApp/QR code on the Contato page. There is no form, no phone-call CTA beyond the number as text, no email.
- INFERENCE: For visitors who prefer not to use WhatsApp, there is currently no alternative conversion path — a potential friction point for some segments (e.g., older adults/idosos, who are an explicitly stated audience, may be less comfortable with WhatsApp-first flows). [VALIDATE WITH CLIENT] whether this has been a problem in practice.

## 12. Friction points identified

1. Value proposition and audience are not stated clearly up front (§2).
2. Primary CTA appears only once, below the fold (§10).
3. Undifferentiated content blocks require full reading rather than scanning (§3, §7).
4. Single contact channel (WhatsApp) with no stated alternative (§11).
5. "MENU" branding leak in the browser tab/shared-link title reduces confidence at exactly the moment a link is shared or reopened (see [[seo-technical-audit]] §10 — a technical finding with direct UX consequences).

## 13. Missing information (from a first-time visitor's perspective)

- No opening hours
- No pricing or payment/insurance-reimbursement guidance
- No personal narrative/bio beyond a generic profession description (see [[content-inventory]] §9)
- No FAQ addressing common first-time-visitor questions (what to expect, how sessions work, whether convênio is accepted)

## 14. Overall assessment

- INFERENCE: The current site functions as a minimal, credible-but-thin digital business card. Its main strengths are restraint (no invented claims, one clear CTA) and a real, verifiable credential set. Its main weaknesses are a weak first impression (branding leak, no value proposition), a single below-the-fold CTA, and undifferentiated content that asks more effort of the visitor than necessary.
- RECOMMENDATION: The redesign should preserve the site's honesty and single-CTA discipline while improving first-impression clarity, information hierarchy, and CTA visibility — informed by, but not copied from, the patterns catalogued in [[benchmark-simone-ebel]] and [[additional-benchmarks]].
