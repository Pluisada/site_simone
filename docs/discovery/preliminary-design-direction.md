# Preliminary Design Direction

**Date:** 2026-08-15
**Status:** RECOMMENDATION — principles only, per CLAUDE.md restriction against final CSS/visual design during Discovery. No color codes, typefaces, or component specs are finalized here; this establishes direction to guide the Design System phase.

Desired positioning per CLAUDE.md: **Premium + Human + Professional + Contemporary.** Avoid generic AI-generated or WordPress-template aesthetics, excessive gradients/glassmorphism/shadows/animation, generic stock photography, excessive cards, and visual clutter.

---

## 1. Positioning

- RECOMMENDATION: position the new site as a **calm, credible clinical presence with a human center** — not a marketing-heavy "conversion machine" (a risk if the Ebel benchmark's density and repetition were copied wholesale) and not a bare digital business card (the current site's main weakness per [[ux-audit]]).
- RECOMMENDATION: let the breadth of Simone's real scope of practice (children, adults, idosos, and professional/oratória communication — [[content-inventory]] §3–4) be a visible asset, not something flattened into a single narrow niche narrative like the Ebel benchmark's TPAC focus.

## 2. Visual personality

- RECOMMENDATION: warm-professional — closer to a well-designed independent clinical practice than a hospital-corporate site or a startup-SaaS landing page. Should read as **one real person's practice**, not an institution or an agency template.
- AVOID (per CLAUDE.md and observed anti-patterns): excessive gradients (the current site's background already uses a soft gradient wash — reasonable in moderation, but should not become the dominant device), glassmorphism, heavy drop shadows, or animated flourishes that don't serve comprehension.
- RECOMMENDATION: restraint should be a design value, not just a content value — mirroring the honesty already present in Simone's current content (no invented claims).

## 3. Typography direction

- RECOMMENDATION: a typeface pairing that reads as contemporary-professional rather than generic-corporate or decorative — avoid script/handwritten display faces (seen on the Juliana Mori benchmark) or ultra-generic system-font-only setups. Exact typeface selection belongs to the Design System phase, not Discovery.
- RECOMMENDATION: type scale should support the content-hierarchy principles from [[proposed-information-architecture]] — a real, distinct heading hierarchy (a fix to the current site's style-driven, structure-poor heading usage noted in [[seo-technical-audit]] §4).

## 4. Image direction

- RECOMMENDATION: real photography of Simone and, if available/appropriate and consented, her consultório — not generic stock photography (explicitly to avoid per CLAUDE.md). The current site already has a real, usable portrait photo ([[current-site-audit]] §5).
- RECOMMENDATION: avoid clinical/sterile stock imagery (exam rooms, generic "doctor with stethoscope" type photos) — none of the benchmarks reviewed relied on generic clinical stock photography; the strongest examples (Portland Speech Clinic, Ebel) used real, specific photos of the practitioner at work.
- FLAG: the current site's uploads folder contains at least one unrelated image (a real-estate listing photo, [[current-site-audit]] §5) — the new site's asset library should be curated fresh, not inherited wholesale.
- [VALIDATE WITH CLIENT]: availability of additional real photography (consultório space, Simone in session) beyond the single existing portrait.

## 5. Spacing philosophy

- RECOMMENDATION: generous whitespace and clear section separation to support the scannability goals in [[proposed-information-architecture]] — content blocks (condition list, credentials, FAQ) need visual breathing room so they read as distinct, not as one undifferentiated wall of text (the core issue flagged in [[ux-audit]] §7).
- AVOID: dense, cramped layouts and excessive card-in-card nesting (an explicit anti-pattern per CLAUDE.md).

## 6. Layout philosophy

- RECOMMENDATION: a clear single-column reading path on mobile (already functional on the current site per [[ux-audit]] §9) with deliberate multi-column use on desktop only where it aids comparison or scanning (e.g., the "Crianças vs. Adultos" type grouping proposed in the IA), not decoratively.
- RECOMMENDATION: keep the single-CTA discipline visually reinforced — one consistently styled CTA treatment throughout, not multiple button styles competing for attention.
- AVOID: heavy card-grid overuse — several benchmarks (Psico Vila Olímpia, Chatterboxes) use large team/specialty card grids appropriate to multi-professional practices; this pattern is not applicable to Tavolaro as a solo practitioner and should not be imported by default.

## 7. Color strategy

- RECOMMENDATION: a restrained palette rooted in trust and calm (per the "premium + human" brief) — exact colors belong to the Design System phase. The current logo already uses a warm coral-to-orange gradient mark with a dark teal wordmark ([[current-site-audit]] — visible in `homepage-desktop-current.jpg`); the new palette should be evaluated for compatibility with or evolution of this existing mark, subject to client input on whether the current logo is being kept. [VALIDATE WITH CLIENT]
- AVOID: adopting Simone Ebel's specific orange/teal accent-color system directly — even if a similar warm/cool pairing is independently chosen, it should be developed as its own system, not a copy (per CLAUDE.md's explicit prohibition on copying benchmark branding).

## 8. Interaction / animation principles

- RECOMMENDATION: motion should be purposeful and minimal — e.g., subtle reveal-on-scroll or hover feedback on interactive elements only, never decorative animation for its own sake (explicit CLAUDE.md anti-pattern: "excessive animations").
- RECOMMENDATION: the FAQ accordion pattern (seen in Ebel and Psico Vila Olímpia benchmarks) is a reasonable, low-risk interaction pattern to adopt structurally for the proposed FAQ section — functional, not decorative.
- RECOMMENDATION: any persistent/sticky CTA element (e.g., a floating WhatsApp affordance, seen in 4 of 6 benchmarks) should be evaluated in the Design System phase for whether it fits the "premium, non-cluttered" brief, or whether a more restrained header CTA better serves the desired positioning. [Decision deferred — not resolved here.]

## 9. What to explicitly avoid (consolidated from CLAUDE.md)

- Generic AI-generated appearance
- Generic WordPress-template appearance
- Excessive gradients, glassmorphism, shadows, animations
- Generic stock photography
- Excessive cards / visual clutter
- Any visual identity element copied from Simone Ebel or the additional benchmark sites

These principles are directional inputs for the Design System phase — no typefaces, color values, or component designs are finalized in this Discovery document.
