# UX Strategy — Landpage Simone

**Date:** 2026-08-15
**Phase:** UX STRATEGY (second-stage analysis, post-Discovery)
**Status:** Strategic recommendation only. No implementation, no final copy, no UI components, no framework selection.

This document synthesizes [[current-site-audit]], [[content-inventory]], [[seo-technical-audit]], [[ux-audit]], [[benchmark-simone-ebel]], [[additional-benchmarks]] (incl. TinyEYE), [[user-journeys]], [[proposed-information-architecture]], and [[preliminary-design-direction]]. It does not introduce new research — it argues from the evidence already gathered to a defensible recommendation.

Every substantive claim below is labeled:
- **FACT** — directly observed on Simone's current site or a benchmark
- **EVIDENCE FROM BENCHMARK** — an observed pattern on a benchmark site, cited by name
- **INFERENCE** — a reasoned conclusion drawn from FACT/benchmark evidence, not itself confirmed
- **RECOMMENDATION** — a strategic proposal
- **VALIDATION REQUIRED** — cannot proceed without client input

No information about Simone is invented anywhere in this document.

---

## 1. Strategic positioning hypothesis

**INFERENCE / RECOMMENDATION:** Simone Tavolaro should be positioned as a **trusted, broad-scope fonoaudióloga who serves the whole family across life stages** (children, adults, idosos) and additionally offers a distinct professional-communication service (oratória) — rather than as a single-diagnosis specialist (the Ebel model) or a matching-platform brand (the TinyEYE model).

- FACT: her stated scope of practice spans 5 distinct areas across 3 age brackets ([[content-inventory]] §3–4) — this is structurally different from Ebel's single-diagnosis (TPAC) focus and TinyEYE's org-scale multi-service marketplace.
- EVIDENCE FROM BENCHMARK: Ebel's narrow positioning ("Pare de rodar de fono em fono sem resultado," a TPAC-specific funnel) is highly persuasive precisely *because* it is narrow — that persuasive power does not transfer cleanly to a broad-scope practice without either (a) diluting the message to fit everyone, or (b) artificially narrowing Tavolaro's real scope, which CLAUDE.md prohibits (no invented specialization).
- **VALIDATION REQUIRED:** confirm with the client whether "broad-scope generalist specialist" is how she wants to be perceived, or whether she considers one area (e.g., language/fluency, or oratória) her primary identity going forward.

## 2. Primary visitor problem we should solve

**RECOMMENDATION:** the primary problem is not a single symptom (unlike Ebel's TPAC framing) — it is **"I or someone I care about has a communication difficulty, and I need to quickly find out whether this practice is relevant to my specific situation, and whether I can trust the person behind it."**

- INFERENCE: this reframes the homepage's core job from "convince about one diagnosis" (Ebel's model) to "help the visitor self-identify quickly across several possible needs, then build trust" — a triage-and-trust problem, not a single-funnel problem.
- This directly follows from the audience/journey breadth documented in [[user-journeys]] and the UX weaknesses (no value proposition, no self-identification aid) documented in [[ux-audit]] §2–3.

## 3. Primary conversion objective

**RECOMMENDATION (carried forward from Discovery, not new):** a single primary conversion action — **initiate contact via WhatsApp** — consistent with the current site (FACT, [[current-site-audit]] §3) and every benchmark reviewed except TinyEYE, whose "For Families" flow uses a structured booking form (EVIDENCE FROM BENCHMARK, [[additional-benchmarks]] §6). TinyEYE's booking-flow model assumes a multi-therapist matching backend and is not applicable to a solo practitioner (INFERENCE).

- **VALIDATION REQUIRED:** confirm the WhatsApp number/deep link is still current and that WhatsApp remains Simone's preferred channel.

## 4. Secondary conversion objectives

**RECOMMENDATION**, ranked by evidence strength:

1. **Google reviews click-through** — already exists (FACT, [[current-site-audit]] §3); low-effort, real, honest trust signal. Keep as a lightweight secondary action, not a primary CTA.
2. **FAQ self-service resolution** — not a "conversion" in the transactional sense, but reduces low-quality/premature WhatsApp contacts by answering logistics questions first (INFERENCE, supported by EVIDENCE FROM BENCHMARK across Ebel, Psico Vila Olímpia, Portland Speech Clinic, NYCSLP, TinyEYE — 5 of 7 benchmarks reviewed carry a substantial FAQ).
3. **Sobre page visit** (deeper trust-building for hesitant visitors) — secondary, not required for conversion.

**RECOMMENDATION:** do not add a lead-capture form, newsletter signup, or second messaging channel as a co-equal CTA — this would violate CLAUDE.md's single-primary-CTA rule. A secondary *form* (not a second primary CTA) remains an open option only if the client explicitly wants one (**VALIDATION REQUIRED**, carried from [[proposed-information-architecture]]).

## 5. Audience/journey prioritization

**INFERENCE — no analytics or referral data exists to confirm actual visitor mix; this ranking is reasoned from the strength and specificity of evidence in [[content-inventory]] and [[user-journeys]], not from real demand data:**

| Rank | Journey | Basis |
|---|---|---|
| 1 | Parent seeking help for a child ([[user-journeys]] J1) | Best-evidenced: 3 of 5 stated conditions are pediatric-typical (atraso de linguagem, trocas na fala, fluência) |
| 2 | Adult seeking help for themselves (J2) | Well-evidenced (afasia, fluência are adult/cross-age conditions); explicitly named as a served audience |
| 3 | Visitor seeking online consultation (J4) | Cross-cutting rather than a distinct audience — applies *within* J1/J2 for visitors who cannot attend in person; currently scoped to adults only on-site |
| 4 | Professional seeking oratória coaching (J3) | Smallest evidence footprint (one line of content) but the clearest **differentiation opportunity** vs. every benchmark reviewed, none of which address this audience |
| 5 | Returning visitor who already knows Simone (J5) | Not a persuasion journey — a speed/findability requirement, not a design-priority driver |

**VALIDATION REQUIRED:** this ranking should be checked against Simone's actual, lived experience of who contacts her most — if her real inquiry mix differs materially, the homepage's self-identification order (§7 below) should be revisited.

## 6. Recommended information architecture

Carried forward from [[proposed-information-architecture]], re-affirmed here after this second-stage analysis:

```
Início · Áreas de Atuação · Sobre · Perguntas Frequentes · Contato
```

**RECOMMENDATION:** a hybrid format — one content-rich homepage carrying the full persuasive journey, plus two short, fast destination pages (Sobre for deep biography, Contato for minimal fast contact/address) — rather than a pure single-scroll page (Ebel's model) or a pure thin multi-page site (the current site's model). Rationale in §9–10 below.

## 7. Recommended homepage section sequence

**RECOMMENDED STRATEGY structure (full rationale in §8–10; final statement in the closing section):**

1. Hero — broad value proposition + lightweight audience/problem cues + lightweight credential cue + primary CTA
2. Áreas de Atuação — condition/service blocks, audience-segmented, oratória visually distinguished, online-consultation noted where relevant
3. Quem é Simone — merged bio + full credential detail as one cohesive trust block
4. Como Funciona — explicit process steps, covering both in-person and online paths
5. Avaliações — lightweight trust link/badge (Google reviews), not a heavy testimonial section, until real testimonials exist
6. FAQ — objection-handling, logistics, online-session mechanics
7. CTA / Contato footer — final repeated CTA + full NAP

CTA is **repeated**, not confined to a single closing section: after the hero, after Áreas de Atuação, and in the footer.

## 8. Alternative section sequences considered

**Alternative 1 — Ebel-style pure problem-first funnel:** Hero (single-symptom problem framing) → empathy/pain narrative → audience segmentation → testimonials → method → results → how it works → diagnostic detail → bio → FAQ → contact.
*(EVIDENCE FROM BENCHMARK: [[benchmark-simone-ebel]])*

**Alternative 2 — TinyEYE-style pure audience-first split:** Hero with parallel "doors" (e.g., For Families / For Professionals) → separate landing content per door.
*(EVIDENCE FROM BENCHMARK: [[additional-benchmarks]] §6)*

**Alternative 3 — Current-site-style credentials-first:** Credentials and formal identity stated immediately, minimal framing, single CTA at the very bottom.
*(FACT: this is the status quo, [[current-site-audit]], [[ux-audit]])*

**Alternative 4 — the structure proposed for evaluation in this request:**
`Hero → Audience/problem recognition → Areas of practice → About/positioning → Credentials → How it works → Reviews → FAQ → CTA`

All four are evaluated against the evidence base in §9.

## 9. Rationale for rejecting the alternatives

**Alternative 1 (Ebel-style problem-first funnel) — rejected as a direct template.**
INFERENCE: this structure derives its persuasive power from committing early to *one* specific diagnosis narrative. Tavolaro's real scope of practice spans multiple distinct conditions and age groups ([[content-inventory]] §3–4); forcing a single-symptom hero would either (a) require inventing a narrower specialization than is documented — prohibited by CLAUDE.md — or (b) alienate visitors whose need doesn't match the one symptom chosen. The *structural* elements of this funnel (FAQ placement, repeated CTA, audience segmentation) are retained; the single-symptom framing is not.

**Alternative 2 (TinyEYE-style audience-first split) — rejected as a primary structure, partially retained as a technique.**
INFERENCE: TinyEYE's 3-way split (For Therapists / For Schools / For Families) solves a B2B2C problem — routing categorically different stakeholders (an org, a school, a family) to entirely different value propositions and pricing models. Tavolaro's audiences (a parent, an adult patient, an idoso, a professional seeking oratória) are all the *same kind* of relationship (a prospective patient/client of one practitioner) — the difference is condition and life stage, not stakeholder type. A hard multi-door split before any value proposition would add a decision step for first-time visitors with no context yet (INFERENCE), and risks the visual clutter and multiple-competing-CTA pattern CLAUDE.md explicitly warns against. **However**, the *narrower* insight — that the oratória audience is different enough in tone to deserve visual separation — is retained within Áreas de Atuação (§11), just not elevated to a full pre-value-proposition navigation split.

**Alternative 3 (credentials-first, status quo) — rejected; already diagnosed as the core weakness.**
FACT: this is literally the current site's structure, and [[ux-audit]] §1–2 already identifies it as the primary cause of weak first impression and unclear value proposition. Carrying it forward would not act on Discovery's own findings. Retained only as a *supporting element*: a lightweight credential cue belongs in the hero (see §13), just not as the opening statement.

**Alternative 4 (the proposed structure) — accepted as a strong starting point, but challenged and modified. Not adopted as-is.**

Specific issues identified:

1. **"Hero" and "Audience/problem recognition" as two separate sequential sections is likely redundant.** EVIDENCE FROM BENCHMARK: in all 7 benchmark sites reviewed, the hero itself *already carries* a compressed problem/audience statement (Ebel's problem-question headline; NYCSLP's audience-scoped headline; TinyEYE's audience-door buttons inside the hero). Splitting these into two full, sequential sections risks a slow, repetitive opening — the visitor reads a problem statement, then reads a whole separate section re-stating who it's for, before reaching any real content. **RECOMMENDATION:** fold audience/problem recognition into the hero itself as a compressed cue (e.g., short life-stage tags or a sub-headline), not a separate full section.

2. **Separating "About/positioning" from "Credentials" by an intervening "Areas of practice" section breaks a pattern the evidence favors.** EVIDENCE FROM BENCHMARK: Portland Speech Clinic pairs a warm personal bio immediately with formal credentials as one adjacent unit ([[additional-benchmarks]] §3); Ebel's "Quem sou eu" section similarly merges narrative and formal credentials in one place. Splitting them into two non-adjacent beats risks diluting the trust-building cohesion of "here is who this person is, both humanly and formally." **RECOMMENDATION:** merge "About/positioning" and "Credentials" into a single "Quem é Simone" block.

3. **"Reviews" as a full, dedicated section overstates what content currently exists.** FACT: Tavolaro's site has **zero on-site testimonials** today — only a link out to Google reviews ([[content-inventory]] §7, [[current-site-audit]] §3). Structuring a full homepage section titled "Reviews" implies a content richness (multiple testimonials, ratings) that does not exist and must not be fabricated (CLAUDE.md). **RECOMMENDATION:** treat this as a lightweight trust link/badge near the credentials block, upgradeable to a full section later only if real, consented testimonials become available ([VALIDATION REQUIRED]).

4. **The proposed structure implies a single CTA occurrence at the very end**, which is exactly the friction point [[ux-audit]] §10 identifies as a current weakness (CTA appears once, below the fold). **RECOMMENDATION:** the same CTA action must repeat at 3 points (hero, after Áreas de Atuação, footer), not once at the end — consistent with 6 of 7 benchmarks reviewed.

5. **Online consultation has no explicit place in the proposed structure.** EVIDENCE FROM BENCHMARK: TinyEYE shows that a remote-delivery option needs *more*, not less, explicit process/mechanics content than an in-person option, because it lacks physical trust cues ([[additional-benchmarks]] §6). Omitting it risks under-serving Journey 4. **RECOMMENDATION:** address explicitly within Áreas de Atuação (eligibility note) and Como Funciona (mechanics), not as a silent gap.

Net conclusion: Alternative 4 is directionally right (problem-aware, not credentials-first; includes practice areas, how-it-works, FAQ) but needs the five adjustments above. The result is the structure in §7 and restated in the closing "RECOMMENDED STRATEGY" section.

---

## Evaluating A) Professional/credentials-first vs. B) Problem/need-first vs. C) Audience-segmentation-first vs. D) Hybrid

| Approach | Strength | Weakness (for Tavolaro specifically) |
|---|---|---|
| **A) Credentials first** | Fast credibility for visitors already predisposed to trust formal titles (e.g., a referring physician); minimal effort to build (already the current site's approach — FACT) | Diagnosed as the current site's core weakness ([[ux-audit]] §1–2) — delays value-proposition understanding, assumes domain knowledge (what does "n. 9940/24" mean to a parent?), and is the *least* differentiated approach relative to what visitors actually need first |
| **B) Problem/need first** | Highly persuasive when the problem is narrow and specific — EVIDENCE FROM BENCHMARK: Ebel's single-diagnosis funnel is the strongest single execution of this reviewed | Tavolaro's real scope is multi-condition; a single-problem hero would either dilute to vagueness or misrepresent her scope as narrower than it is (INFERENCE) |
| **C) Audience segmentation first** | Matches genuinely multi-audience practices well — EVIDENCE FROM BENCHMARK: TinyEYE's 3-door model, Ebel's Crianças/Adultos split | A hard segmentation *before* any value proposition adds a decision step for visitors with zero context yet (INFERENCE); TinyEYE's version specifically solves a stakeholder-type problem (org vs. family) that doesn't apply to Tavolaro's single-practitioner, single-relationship-type context |
| **D) Hybrid (RECOMMENDED)** | Combines a broad-but-clear value statement (addressing B's strength without its narrowing risk) with lightweight, low-cost self-identification cues (addressing C's strength without its cognitive-load cost), while relegating formal credentials to a supporting, not opening, role (avoiding A's weakness while keeping its trust value) | Requires more careful copywriting discipline than any single pure approach — a genuine cost, not free |

**RECOMMENDATION: Option D (Hybrid).** This is not a compromise for its own sake — it is the option best supported by convergent benchmark evidence: even Ebel and NYCSLP, which read as "problem-first" or "audience-first" at a glance, in fact *combine* a value statement with an audience cue within the same hero unit, and defer full credentials to a later, dedicated section. Pure A, B, or C each match only part of what the strongest benchmarks actually do.

**VALIDATION REQUIRED:** the exact wording of the broad value statement (what "broad-but-clear" means in practice) cannot be finalized without client input on positioning (§1) and without the content gaps in [[content-inventory]] §10 being resolved.

---

## 10. Recommended CTA strategy

- **RECOMMENDATION:** one CTA action (WhatsApp), repeated at 3 points: end of hero, after Áreas de Atuação, and in the footer/Contato block. No competing CTA type.
- EVIDENCE FROM BENCHMARK: repetition-of-one-action (not multiple different actions) is the dominant pattern across Ebel (~6 repetitions) and TinyEYE (header + inline + floating chat, though TinyEYE's chat widget is a secondary support channel, not a competing primary CTA).
- **RECOMMENDATION:** microcopy may vary contextually (e.g., "Tirar dúvidas," "Agendar avaliação") as long as the destination and action are the same — mirrors Ebel's approach of varied wording for one functional action.
- A secondary contact form remains **optional and unresolved** — VALIDATION REQUIRED per §4.

## 11. Recommended treatment of "Áreas de Atuação"

- **RECOMMENDATION:** present the 5 stated conditions/services ([[content-inventory]] §3) as distinct, scannable blocks — not a flat bullet list (the current site's approach, diagnosed as a weakness in [[ux-audit]] §3).
- **RECOMMENDATION:** group by life stage/audience (children, adults, idosos) where a condition clearly applies to a specific group, consistent with the audience-prioritization in §5, but keep the grouping light (labels/tags, not a hard navigational split) — avoiding Alternative 2's rejected pattern.
- **RECOMMENDATION:** visually distinguish the oratória/professional-communication service from the clinical conditions — it has a different tone, audience, and likely different framing (coaching vs. treatment) — this is Tavolaro's clearest point of differentiation from every benchmark reviewed, none of which address this audience.
- **VALIDATION REQUIRED:** plain-language descriptions for each condition need Simone's clinical sign-off to avoid misrepresenting scope or implying claims not authorized by her (per CLAUDE.md's no-invented-claims rule).

## 12. Recommended treatment of online consultations

- FACT: the current site scopes online availability to adults only ([[content-inventory]] §4) — this must not be silently expanded.
- EVIDENCE FROM BENCHMARK: TinyEYE shows that remote-delivery options need explicit "how it works" mechanics content precisely because they lack the physical trust cues of a visitable office ([[additional-benchmarks]] §6).
- **RECOMMENDATION:** do not give online consultation a full, equal-weight dedicated homepage section (it is one modality note within a broader in-person-centered practice, not a parallel service) — instead, (a) note eligibility clearly within Áreas de Atuação/Para quem, and (b) explain the mechanics (what's needed, how a session is conducted) within Como Funciona and/or a dedicated FAQ entry.
- **VALIDATION REQUIRED:** whether the adults-only scope is still accurate, and what the actual online-session mechanics are (platform, requirements) — none of this is documented anywhere in Discovery and must not be invented.

## 13. Recommended use of credentials

- **RECOMMENDATION (split treatment):** a lightweight credential cue (e.g., "Especialista pelo Conselho Federal de Fonoaudiologia") in the hero as a brief trust signal, with the **full** credential list (both specialist registrations, PUC-SP degree, all 5 post-graduate qualifications — [[content-inventory]] §2) presented in the merged "Quem é Simone" section, not the opening statement.
- **RECOMMENDATION:** no years-of-experience or patient-count figures anywhere unless the client confirms real numbers (CLAUDE.md; currently no such figures exist in the content inventory, unlike both Ebel's and TinyEYE's prominent stat callouts, which must not be imitated without real data).
- **RECOMMENDATION (new opportunity, not previously actioned):** consider linking the CFFa registration numbers to a public verification source, if one exists — strengthens credibility beyond what any benchmark reviewed does. **VALIDATION REQUIRED:** does CFFa provide a public professional-lookup tool, and does the client want this linked?

## 14. Recommended use of reviews/social proof

- **RECOMMENDATION:** preserve the current, honest approach — a link out to real Google reviews — as the default, presented as a lightweight trust badge near credentials, not a heavy dedicated section (per the challenge in §9, point 3).
- **RECOMMENDATION:** do not fabricate on-site testimonials under any circumstance (CLAUDE.md hard rule; also flagged in [[content-inventory]] §7 and [[ux-audit]] §5).
- **RECOMMENDATION (conditional, for later):** if and when real, consented testimonials become available, consider a lighter-weight attribution pattern (e.g., "Mãe de paciente, 8 anos" rather than full name) as seen in TinyEYE — potentially easier to obtain consent for than full-name attribution (Ebel, Chatterboxes' pattern). **VALIDATION REQUIRED:** client's willingness/process to gather real testimonials with proper consent.

## 15. Recommended FAQ strategy

- **RECOMMENDATION:** build a validated FAQ (5–8 questions) placed near the end of the homepage, before the final CTA — consistent with 5 of 7 benchmarks reviewed.
- **RECOMMENDATION — priority topics**, based on the specific gaps identified in Discovery: payment/insurance handling ([[content-inventory]] §5 gap), what a first contact/session looks like, online-session mechanics and eligibility (§12 above), what the credential titles mean in plain language (addressing the readability gap in [[ux-audit]] §8), and age-group coverage.
- **RECOMMENDATION:** accordion interaction pattern — functional, low-clutter, consistent with [[preliminary-design-direction]] §8.
- **VALIDATION REQUIRED:** actual answers to every question above — none exist in current Discovery content and none may be invented.

## 16. Recommended "How it works" strategy

- **RECOMMENDATION:** an explicit, numbered process (3–4 steps), modeled structurally on NYCSLP's and TinyEYE's step-based patterns ([[additional-benchmarks]] §4, §6) — e.g., first contact → initial conversation/triagem → evaluation/first session → ongoing plan (exact steps to be confirmed with the client, not invented here).
- **RECOMMENDATION:** must explicitly address both in-person and online paths, since the online path needs more explanation, not less, per §12.
- This directly resolves the "visitor doesn't know what happens after messaging on WhatsApp" friction identified in [[ux-audit]] §11.
- **VALIDATION REQUIRED:** Simone's actual intake/first-session process — not documented anywhere in Discovery.

## 17. Role of the Sobre page

- **RECOMMENDATION:** the homepage's "Quem é Simone" block is a *short* trust-building unit; the Sobre page is where a visitor who wants the full-length version goes — full personal narrative (subject to [[content-inventory]] §9 validation), complete academic/professional history, and possibly additional photography.
- **RECOMMENDATION:** avoid wholesale duplication — Sobre expands on, rather than repeats, the homepage summary.
- Primarily serves Journeys 1 and 2 visitors who want deeper reassurance before contacting, and any professional referrers who want fuller credential detail.

## 18. Role of the Contato page

- **RECOMMENDATION:** keep it minimal and fast, preserving the current site's one genuine strength for Journey 5 visitors ([[user-journeys]] J5, [[ux-audit]] conclusion) — WhatsApp link, address with an embedded map (a gap on the current site — see [[current-site-audit]] §3), and hours once validated.
- **RECOMMENDATION:** this page is a fallback/reference destination, not the primary conversion funnel — the homepage's repeated CTA (§10) carries that job. Contato should not be where the *only* CTA lives, unlike the current site's structure.

## 19. SEO/GEO implications

- **RECOMMENDATION (carried from [[seo-technical-audit]], reaffirmed here as strategy, not new research):** fix the title-tag/Open Graph "MENU" leak as a first priority regardless of which structural option is chosen — this is independent of homepage sequencing and should not wait for full IA finalization.
- **RECOMMENDATION:** heading hierarchy should map directly onto the section sequence in §7 — H1 = hero value statement, H2 per major section (Áreas de Atuação, Quem é Simone, Como Funciona, FAQ) — resolving the style-driven, structure-poor heading usage found in [[seo-technical-audit]] §4.
- **RECOMMENDATION:** once a validated FAQ exists, add `FAQPage` structured data alongside `LocalBusiness`/`Person` schema — directly serves both traditional SEO and AI/answer-engine (GEO) readability, an identified gap ([[seo-technical-audit]] §11, §14).
- **INFERENCE:** the condition-block content in Áreas de Atuação and the explicit Como Funciona content both meaningfully increase indexable, entity-relevant text versus the current 3-page site's thin content — a direct SEO/GEO benefit, though no keyword-volume research has been performed to quantify it (per methodology note in `research/sources.md`).
- **INFERENCE:** explicit online-consultation content also serves a distinct search intent ("fonoaudióloga online," "fono atendimento online") not currently addressed anywhere on the site.

## 20. Content requirements (before implementation can begin)

The following must be drafted/gathered — none may be invented:

1. Short hero value statement + short "Quem é Simone" bio, and a longer Sobre-page version
2. Plain-language descriptions for each of the 5 areas of practice, clinically reviewed by Simone
3. Explicit "Como Funciona" process steps (actual intake/session flow)
4. FAQ question set with real answers (payment, logistics, online mechanics, age coverage, credential meaning)
5. Online-session mechanics description and confirmed eligibility scope
6. Full, current credential list with institutions/years where missing ([[content-inventory]] §2)
7. Confirmed payment/hours/logistics information
8. Optional: real, consented testimonials

## 21. Items requiring client validation

Consolidated from [[discovery-summary]] §13 plus items newly surfaced in this strategy pass:

1. Positioning self-perception (§1) — broad generalist vs. one primary identity
2. Actual visitor/inquiry mix, to check the journey prioritization in §5
3. WhatsApp number/channel currency (§3)
4. Whether a secondary contact form is wanted (§4, §10)
5. Plain-language sign-off on each area of practice (§11)
6. Current accuracy of the adults-only online-session scope (§12)
7. Online-session mechanics — platform/requirements (§12, §16)
8. Whether CFFa offers public credential verification, and whether to link it (§13)
9. Willingness/process to gather real, consented testimonials (§14)
10. FAQ answers — payment/insurance, logistics, credential meaning (§15)
11. Actual intake/first-session process (§16)
12. Full Sobre-page narrative content (§17)
13. Address/hours currency for the Contato page (§18)
14. Whether the current logo/visual identity is retained (carried from [[preliminary-design-direction]] §7)

## 22. Strategic risks

1. **Dilution risk:** a broad-scope hero, if not written carefully, could read as generically vague rather than clearly multi-capable — the hybrid approach (§9) mitigates but does not eliminate this; copywriting discipline is required.
2. **Template-copying risk:** any of the 4 alternatives in §8, taken literally rather than adapted, would either misrepresent Tavolaro's scope (Alt 1), introduce inapplicable multi-stakeholder complexity (Alt 2), or perpetuate the diagnosed core weakness (Alt 3) — the recommended structure requires disciplined adaptation, not template application.
3. **Validation bottleneck risk:** §20's content requirements and §21's 14 validation items are hard blockers for FAQ, Como Funciona, online-consultation content, and parts of Áreas de Atuação — implementation cannot proceed on these sections until resolved.
4. **CTA-dilution risk:** if a secondary contact form is added without discipline, it risks becoming a second competing primary CTA, contradicting CLAUDE.md.
5. **Overstatement risk:** presenting "Avaliações" as a full section before real testimonials exist would overstate current content richness (§9, point 3; §14).
6. **Compliance/ethics risk:** any credential, claim, or testimonial must remain strictly sourced and validated — healthcare-communication misstatements carry real professional and ethical consequences (CLAUDE.md).
7. **Migration risk:** implementing SEO fixes (title/OG, canonical, structured data) during a platform migration off Weebly must preserve existing indexed URLs/redirects to avoid losing current search visibility — a technical risk to flag for the Implementation phase, not resolved here.

## 23. Design principles that should guide the next phase

Carried forward from [[preliminary-design-direction]], sharpened by this strategy's structural conclusions:

1. Visual hierarchy must reflect the section sequence in §7 — the hero's value statement should be the most visually dominant element on first paint, not the credentials.
2. One consistent CTA treatment (styling, placement pattern) reused at all 3 repetition points (§10) — never a second, differently-styled competing action.
3. Áreas de Atuação should read as distinct, scannable blocks with light visual grouping by life stage — without becoming a dense card grid (CLAUDE.md's anti-clutter principle) or a hard multi-door navigation split (rejected in §9, Alternative 2).
4. The oratória/professional service should be visually distinguishable in tone from the clinical condition blocks, without being demoted to an afterthought — it is a differentiation asset (§5, §11).
5. "Quem é Simone" should read as one cohesive, warm-but-credentialed unit — not a bio fragment and a separate formal credentials list in two disconnected places (§9, point 2).
6. Reviews/social proof should be visually proportionate to what actually exists today (a link, not a testimonial wall) — restraint here is honesty, not a design deficiency (§9, point 3; §14).
7. FAQ should use a low-clutter accordion pattern, not a wall of open text.
8. Motion/interaction should remain purposeful and minimal, per CLAUDE.md's explicit prohibition on excessive animation.
9. Real photography only — no generic stock imagery, especially for any new "Como Funciona" or online-consultation visuals.

---

## RECOMMENDED STRATEGY

**Homepage prioritization: Option D — Hybrid** (broad value proposition + lightweight self-identification cues in the hero, formal credentials deferred to a supporting trust section). Rejected: A (credentials-first, the diagnosed status quo weakness), B (problem-first funnel, too narrow for Tavolaro's real scope), and C (audience-first split, solves a stakeholder problem Tavolaro doesn't have).

**Proposed homepage structure:**

```
1. Hero
   — broad value statement + compressed audience/life-stage cue + lightweight credential mention
   — primary CTA (WhatsApp)

2. Áreas de Atuação
   — 5 conditions/services as distinct scannable blocks, loosely grouped by life stage
   — oratória visually distinguished as a different-toned offering
   — online-consultation eligibility noted here
   — CTA repeated

3. Quem é Simone
   — short personal narrative merged with full formal credential list (one cohesive block)
   — link out to full biography on the Sobre page

4. Como Funciona
   — explicit numbered process, covering both in-person and online paths
   — online mechanics explained in more detail than in-person (per TinyEYE evidence)

5. Avaliações
   — lightweight trust link to existing Google reviews
   — not a full testimonial section until real, consented testimonials exist

6. FAQ
   — accordion, prioritizing payment/logistics, online-session mechanics, credential meaning, age coverage

7. CTA / Contato footer
   — final repeated CTA + full NAP (address, WhatsApp, map)
```

**Why this structure and not the one proposed for evaluation:** the originally proposed sequence (`Hero → Audience/problem recognition → Areas of practice → About/positioning → Credentials → How it works → Reviews → FAQ → CTA`) was directionally sound — it correctly rejects credentials-first and correctly includes practice areas, process explanation, and FAQ — but as evaluated in §9 it (1) risked redundancy by splitting the hero from a separate audience-recognition section when every benchmark reviewed folds these together; (2) fractured trust-building by separating "About/positioning" from "Credentials" into non-adjacent sections, against the pattern strongest benchmarks use; (3) implied a fully-built testimonial section ("Reviews") that overstates Tavolaro's current, honest content reality; (4) confined the CTA to a single closing occurrence, reproducing the current site's diagnosed core weakness; and (5) left the online-consultation option — a documented, TinyEYE-evidenced need for explicit treatment — with no defined place in the structure. The recommended structure above preserves everything defensible in the original proposal while correcting these five points.

This structure, and every content requirement it depends on, remains **subject to the 14 client-validation items in §21** before implementation can begin.
