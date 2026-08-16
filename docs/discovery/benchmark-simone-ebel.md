# Benchmark — Fono Simone Ebel (pac.fonosimoneebel.com.br)

**Source:** https://www.pac.fonosimoneebel.com.br/
**Method:** Browser inspection (desktop 1200px + mobile 390px viewports), DOM/accessibility-tree read
**Date:** 2026-08-15
**Screenshots:** `docs/references/screenshots/benchmark-ebel-hero-desktop.jpg`, `benchmark-ebel-metodo-desktop.jpg`, `benchmark-ebel-testimonials-desktop.jpg`, `benchmark-ebel-hero-mobile.jpg`

**Usage restriction (per CLAUDE.md):** this site is a benchmark for UX/IA/conversion structure only. Its text, images, testimonials, claims, method name, and visual identity must **not** be copied. Nothing in this document should be pasted into the new Simone Tavolaro site verbatim.

---

## 1. Information architecture (single-page, anchor-nav structure)

FACT — the site is a single long scrolling page with a sticky header whose nav items are anchor-scroll buttons, not separate URLs:

1. Announcement bar (dismissible): insurance policy disclaimer
2. Header: logo, anchor nav, WhatsApp CTA button
3. Hero: problem-framed headline, sub-headline, practitioner intro line, trust-stat bullet list, primary CTA, disclaimer, image
4. Empathy/problem section: "you've tried everything" narrative bridging into the method
5. Audience segmentation: "Para quem é" — separate symptom lists for Crianças vs. Adultos
6. Testimonials (4, with name/context)
7. Method section: named program + 6 feature cards
8. Expected results: split by Crianças vs. Adultos
9. "How it works" 4-step process
10. Diagnostic explainer (3 assessment components)
11. "Quem sou eu" personal bio section
12. FAQ (accordion, 6 questions)
13. Footer: contact channels (WhatsApp, phone, email), map link, copyright
14. Persistent floating WhatsApp button (visible at all scroll depths)

## 2. Navigation

- FACT: 8 anchor-nav items (Para quem é, Depoimentos, Método, Resultados, Como funciona, Quem sou eu, FAQ, Contato) plus a distinct WhatsApp button in the header — meaning the header carries both wayfinding and a CTA.
- INFERENCE: Because it's a single page, "navigation" here functions more like a table of contents / trust-building sequence than a way to reach different content — every click still leads to the same conversion action.

## 3. Hero structure

- FACT: Headline poses a problem as a question ("Você ou seu filho tem dificuldades de atenção, escuta ou aprendizado?"), followed by a sub-headline naming the emotional stakes ("Pare de rodar de fono em fono sem resultado"), then a one-line practitioner intro, then 4 bulleted trust stats (years of experience, patient count, location, results timeframe), then the primary CTA button, then an insurance disclaimer, then a supporting image.
- INFERENCE: The hero is built to do five jobs at once — hook, position the practitioner, build trust, state a differentiator, and convert — before the visitor scrolls at all.

## 4. Value proposition

- FACT: Stated explicitly and early: specialist in Processamento Auditivo Central (TPAC), positioned against a backdrop of prior unsuccessful attempts elsewhere ("Pare de rodar de fono em fono sem resultado").
- INFERENCE: The value proposition is narrow and specific (one diagnosis, one method), which likely makes it very easy to self-identify for the exact audience it targets, at the cost of relevance for anyone outside that specific symptom profile.

## 5. Section sequence (why it's ordered this way — INFERENCE)

Problem → empathy/differentiation → "is this you?" audience segmentation → social proof (testimonials) → method/how it works → expected results → diagnostic detail → practitioner bio → objection-handling (FAQ) → contact. This sequence delays the practitioner's own bio until *after* trust has already been built through problem framing, testimonials, and method explanation — bio functions as reinforcement, not introduction.

## 6. Service presentation

- FACT: One method, one named program ("Escuta com Atenção" — proprietary name, not to be reused), explained via 6 feature cards with icons and short captions, then reinforced by a 4-step "how it works" and a 3-part diagnostic explainer.
- INFERENCE: Presenting a single method very thoroughly (rather than a broad service list) suits a single-specialty practice; Simone Tavolaro's stated scope (from [[content-inventory]]) spans multiple distinct conditions, which is a structurally different problem the new IA needs to solve for (see [[proposed-information-architecture]]).

## 7. Audience segmentation

- FACT: Explicit "Crianças" vs. "Adultos" tabs/lists with concrete, relatable symptom language for each, immediately followed by a bridge line connecting those symptoms to the diagnosis and a CTA.
- **Pattern (structure) worth adapting**, not the specific symptom content, which is proprietary to Ebel's TPAC focus and not necessarily accurate for Tavolaro's distinct scope of practice.

## 8. Credibility signals

- FACT: Numeric trust stats in the hero (+30 anos, +2.000 pacientes, resultados em até 3 meses), a dedicated bio section citing a Master's degree (UNIFESP) and a CFFa specialist title, and 4 testimonials with first names/context.
- **Must NOT be copied**: the specific numbers and outcome/timeframe claims are Ebel's own (and, per CLAUDE.md, any numbers used for Tavolaro must be real and client-validated — currently none exist in the content inventory).

## 9. Testimonials / reviews

- FACT: 4 written testimonials, each attributed to a first name (+ age for 2 of them), covering both a child case and an adult/older-adult case.
- **Must NOT be copied** — fabricating testimonials for Tavolaro is explicitly prohibited by CLAUDE.md. The *pattern* (real, consented, age/context-labeled testimonials placed after the audience-segmentation section) is transferable; the content is not.

## 10. FAQ

- FACT: 6-question accordion, focused heavily on practical/logistic objections (convênio/insurance, what "Escuta com Atenção" is, who it's for, how diagnosis is confirmed, what exams are involved).
- **Pattern worth adopting**: FAQ as objection-handling placed near the end of the page, just before final contact. Content must be written fresh for Tavolaro's real practice.

## 11. CTA strategy

- FACT: One consistent CTA action (WhatsApp with a pre-filled message) repeated with different microcopy at ~6 points down the page ("Marcar avaliação com especialista," "Marcar avaliação particular," "Quero marcar uma avaliação para entender se é TPAC," etc.), plus a header button and a persistent floating WhatsApp icon.
- INFERENCE: Despite varied wording, this is functionally a **single primary CTA** repeated at high frequency — consistent with CLAUDE.md's "no competing CTAs" principle, just applied with much higher repetition/persistence than Tavolaro's current single below-the-fold CTA.

## 12. Contact flow

- FACT: WhatsApp deep links carry a pre-filled message tailored to context (e.g., referencing TPAC specifically when clicked from a TPAC-focused section). Footer also lists a landline phone number and an email address, plus a map link — more contact-channel redundancy than Tavolaro's current single-WhatsApp-channel site.

## 13. Mobile UX

- FACT (from `benchmark-ebel-hero-mobile.jpg`, 390×844 viewport): header collapses to logo + hamburger menu; hero stacks image above headline; CTA button remains full-width and prominent; the insurance announcement bar persists at the very top, consuming noticeable vertical space before any content is visible.
- INFERENCE: The persistent announcement bar plus sticky header may compress the visible hero content significantly on shorter mobile screens — a trade-off between message priority (insurance policy) and immediate value-proposition visibility.

## 14. Visual hierarchy

- FACT: Consistent color-coded emphasis (orange/teal accents on key phrases like method name, diagnosis name, numeric stats) used throughout body copy to guide scanning without requiring full reading.
- **Pattern worth adapting** (the technique of using accent color/weight on key scannable phrases), not Ebel's specific palette, which is proprietary visual identity per CLAUDE.md.

## 15. Conversion journey (full funnel)

Problem recognition → self-identification (audience segmentation) → social proof → method understanding → expected outcome → process transparency → practitioner trust → objection handling → contact, with the same CTA reachable at every stage. This matches the CLAUDE.md-referenced conversion journey shape (Problem/Need → Understanding → Professional → Services → Credibility → Trust → CTA) closely, just executed as a single long page rather than distinct sections/pages.

---

## Comparison — Current Simone Tavolaro vs. Simone Ebel Benchmark

| Dimension | Simone Tavolaro (current) | Simone Ebel (benchmark) |
|---|---|---|
| Structure | 3 separate pages, minimal content each | 1 long single page, content-rich |
| Value proposition | Absent/implicit | Explicit, in the first headline |
| Audience segmentation | None | Explicit (Crianças / Adultos) |
| Trust stats | None (no invented numbers) | Prominent (+30 anos, +2.000 pacientes) |
| Testimonials | None on-site (link out to Google) | 4 on-site, named |
| FAQ | None | 6-question accordion |
| CTA count/placement | 1 CTA, below the fold, single occurrence | 1 CTA type, repeated ~6× incl. sticky/floating |
| Bio/personal narrative | Generic profession description only | Personal story + credentials, mid-late page |
| Contact channels | WhatsApp only | WhatsApp + phone + email + map |
| Claims discipline | No outcome/result claims made | Explicit outcome/timeframe claims made |

## Patterns worth adopting (structure, not content)

1. A single, clear value-proposition headline near the top of the page.
2. Repeating the same primary CTA at multiple, natural scroll points (not multiple *different* CTAs).
3. A dedicated FAQ section for objection-handling.
4. Multiple contact channels surfaced together in one footer block.
5. Using accent styling to make key scannable phrases stand out in body copy.

## Patterns worth adapting (technique yes, specific content no)

1. Audience/segment-based content grouping — Tavolaro's real segments (children, adults, idosos, and a distinct professional/oratória audience) differ from Ebel's Crianças/Adultos TPAC framing and must be built from Tavolaro's actual scope of practice.
2. A dedicated bio section placed to reinforce trust — content must be Tavolaro's own real narrative (subject to client validation, see [[content-inventory]] §9), not adapted from Ebel's text.
3. Numeric trust stats — only usable if and when real, client-confirmed numbers exist; must remain absent otherwise.

## Patterns that must NOT be copied

1. Ebel's proprietary method name ("Escuta com Atenção") and any invented equivalent for Tavolaro.
2. Ebel's specific outcome/timeframe claims ("resultados em até 3 meses") — Tavolaro's site currently makes no such claims and none should be added without validated clinical basis.
3. Ebel's testimonial text/names.
4. Ebel's visual identity (color palette, logo, imagery).
5. Ebel's exact TPAC-specific symptom checklists — not necessarily applicable to Tavolaro's stated conditions.

## Opportunities for Simone Tavolaro to be better/different

1. Tavolaro's stated scope of practice is **broader** than Ebel's single-diagnosis focus (fala, linguagem, fluência, afasia, and workplace communication/oratória) — the new IA can present this breadth clearly rather than force-fitting a single-method narrative (see [[proposed-information-architecture]]).
2. Tavolaro already serves idosos and addresses professional/oratória needs — an audience segment Ebel's page does not address — which is a natural point of differentiation (see [[user-journeys]] journey #3).
3. Tavolaro's site currently has *zero* forms and a single WhatsApp channel; a modest increase in contact-channel redundancy (following Ebel's footer pattern structurally) could reduce friction for visitors less comfortable with WhatsApp-first flows, without introducing competing CTAs.
