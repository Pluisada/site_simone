# Proposed Information Architecture

**Date:** 2026-08-15
**Status:** RECOMMENDATION — proposal only, not implemented. Based on [[content-inventory]], [[ux-audit]], [[benchmark-simone-ebel]], [[additional-benchmarks]], and [[user-journeys]]. To be reviewed and approved before Design System / Implementation phases begin.

---

## Guiding constraints (from CLAUDE.md and Discovery findings)

- One primary CTA only — no competing CTAs.
- No invented facts — every section below marks what content it needs and flags what's unvalidated.
- Do not copy Simone Ebel's or any additional benchmark's content or visual identity — only structural patterns.
- Journey shape to follow: Problem/Need → Understanding → Professional → Services → Credibility → Trust → CTA (per CLAUDE.md).

## Format decision (open question)

Two structural options emerged from the benchmarks:

- **Option A — single scrolling page** (Ebel's pattern): all sections on one URL, anchor-nav, CTA repeated throughout.
- **Option B — small multi-page site** (current site's pattern, and Portland Speech Clinic's lighter variant): Home + a few short dedicated pages (e.g., Sobre, Áreas de Atuação, Contato).

RECOMMENDATION: given Tavolaro's broader, multi-condition scope of practice (vs. Ebel's single-diagnosis focus, see [[benchmark-simone-ebel]] "Opportunities"), a **hybrid** is proposed: a content-rich single homepage covering the full journey (Option A's persuasive flow), with 1–2 short dedicated pages (Sobre, Contato) kept as fast, low-friction destinations for visitors already in Journey 5 ([[user-journeys]]). **This is a proposal for discussion, not a final decision** — to be confirmed in the UX Strategy phase.

---

## Primary navigation (proposed)

```
Início · Áreas de Atuação · Sobre · Perguntas Frequentes · Contato
```

- "Áreas de Atuação" replaces the current implicit bullet list with a named nav entry — addresses the readability/scanning issue in [[ux-audit]] §3, §7.
- "Perguntas Frequentes" is a new page/section — content must be drafted from real, client-validated Q&A (see [[content-inventory]] gaps and [[seo-technical-audit]] "Preliminary SEO/GEO strategy").
- "Contato" stays fast and minimal, preserving the strength noted in [[user-journeys]] Journey 5.

## Homepage section sequence (proposed)

| # | Section | User need it serves | Business/communication objective | Content required | Evidence basis |
|---|---|---|---|---|---|
| 1 | **Hero** | Immediate answer: who is this, who do they help, what's the next step? | Establish clear value proposition, reduce bounce | A plain-language headline naming audience + scope (built from validated content only — no invented stats); single primary CTA | Addresses [[ux-audit]] §1–2, "MENU" title/OG issue in [[seo-technical-audit]] §10; structural pattern from all 6 benchmarks in [[additional-benchmarks]] |
| 2 | **Quem sou eu / About** (short form) | "Can I trust this person?" — brief credential + human warmth | Establish credibility early without a wall of text | 2–3 sentence bio + top 1–2 credentials, photo | [[additional-benchmarks]] §3 (Portland Speech Clinic bio-first pattern); full bio detail deferred to Sobre page |
| 3 | **Áreas de Atuação (condition blocks)** | "Does this apply to me?" — fast self-identification | Present the 5 stated areas as distinct, scannable entries, not a flat bullet list | Content from [[content-inventory]] §3, rewritten as short, plain-language blocks (with the professional/oratória entry visually distinguished per [[user-journeys]] Journey 3) | [[ux-audit]] §3; [[additional-benchmarks]] §4 (NYCSLP condition-block pattern) |
| 4 | **Para quem** (audience note) | Confirms age-group coverage (children, adults, idosos) and online-session scope | Prevents wasted contact from ineligible audiences (esp. online-only-for-adults nuance) | Content from [[content-inventory]] §4 — **must reflect current, validated online-session scope** | [[user-journeys]] Journey 4; [[ux-audit]] §4 |
| 5 | **Credenciais / Formação** (full detail) | Deeper trust-building for visitors who want it | Present full credential list without cluttering the hero | Full list from [[content-inventory]] §2 | Structural pattern from Psico Vila Olímpia (credential-next-to-name display, [[additional-benchmarks]] §2) |
| 6 | **Avaliações / Google Reviews link** | Third-party trust signal | Point to existing Google reviews (already live) | Existing link from [[current-site-audit]] §3 — no fabricated testimonials | CLAUDE.md testimonial rule; preserves current site's honest approach ([[ux-audit]] §5) |
| 7 | **Como funciona / What to expect** | Reduces anxiety about first contact | Explicit, numbered steps from first message to first session | New content — must be defined with client, cannot be invented | [[additional-benchmarks]] §4 (NYCSLP 3-step pattern) directly addresses friction flagged in [[ux-audit]] §11 |
| 8 | **FAQ** | Answers practical/logistics questions before they become a support burden | Reduce pre-contact hesitation; strong SEO/GEO value | New content — payment/insurance, session format, online eligibility, etc. — all [VALIDATE WITH CLIENT], see [[content-inventory]] §10 | [[seo-technical-audit]] "Preliminary SEO/GEO strategy"; pattern present in 4/6 benchmarks |
| 9 | **CTA / Contato** | Final, low-friction conversion | Single clear action | WhatsApp (existing), consider secondary channel per [[additional-benchmarks]] §5 if client wants one — still not a second *primary* CTA | [[ux-audit]] §10 |
| — | **Footer** | Findability of all contact info at any scroll depth | Consolidate NAP + links | Address, WhatsApp, (optional) email, map | [[seo-technical-audit]] §12; benchmark pattern in all 6 reviewed sites |

## Secondary pages (proposed)

- **Sobre** — full personal narrative/biography (subject to client input — do not invent, see [[content-inventory]] §9), full academic/professional history, possibly a longer-form photo.
- **Contato** — kept minimal and fast per Journey 5: WhatsApp, address with embedded map (current site has no map, see [[current-site-audit]] §3), opening hours (once validated).
- **Perguntas Frequentes** — could live as a homepage section (#8 above) and/or a dedicated page depending on content volume once drafted; decision deferred to UX Strategy phase.

## CTA strategy (proposed)

- Single CTA type: **WhatsApp contact**, consistent with the current site and both the Ebel and additional benchmarks' dominant pattern.
- Repeat the same CTA at the end of sections 1, 7, 8, and 9 (not as separate competing actions — same destination, contextual microcopy), addressing the "single below-the-fold CTA" friction in [[ux-audit]] §10.
- [VALIDATE WITH CLIENT]: whether a secondary lightweight contact form is desired (per [[additional-benchmarks]] §5) — if added, it must not compete with WhatsApp as an equally weighted primary action.

## Content hierarchy principles (proposed)

1. Value proposition and CTA visible without scrolling (addresses [[ux-audit]] §10).
2. Condition/service content organized as distinct blocks, not flat lists (addresses [[ux-audit]] §3, §7).
3. Formal credentials supported by, not replacing, a brief human/warm introduction (per [[additional-benchmarks]] §3).
4. No numeric claims, testimonials, or outcome statements beyond what is validated and sourced (per CLAUDE.md and [[content-inventory]] §8).
5. Every page/section carries consistent NAP information in the footer (addresses [[seo-technical-audit]] §12).

## Open decisions requiring client/team approval before implementation

- Single-page vs. hybrid multi-page structure (see "Format decision" above).
- Whether to add a secondary contact form.
- Whether FAQ becomes its own page or a homepage section.
- Final scope/wording of the "Para quem" online-session eligibility statement.
- Whether the oratória/professional-communication service is presented as equal-weight to the clinical areas, or as a distinctly framed offering (per [[user-journeys]] Journey 3).

These decisions are also summarized in [[discovery-summary]] §16.
