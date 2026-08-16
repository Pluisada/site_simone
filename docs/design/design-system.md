# Design System — Landpage Simone

**Date:** 2026-08-15
**Phase:** DESIGN SYSTEM (post Design Direction — approved as project baseline)
**Status:** Implementable visual specification. No components, no production CSS, no framework, no package installed, no source code modified.

**Source of authority:** [[design-direction]] (approved). This document does not re-argue decisions already made there — it resolves the specific items Design Direction left open (CTA color, final typeface pairing, exact values) and translates every recommendation into fixed, numbered tokens a developer can implement without guessing. Where Design Direction said "recommendation, pending Design System," this document is where that pending resolves.

**Scope note:** the color/type/motion system below governs the **production website**, a single, consistently warm, light visual world — it is not a dual-theme (light/dark) product. (This is a different deliverable from the Design Direction executive-summary artifact, which used a light/dark toggle because Artifacts render in the viewer's own theme; the website itself has no dark mode in scope.)

---

## 1. How to read this document

Every value below is a **decision**, not a suggestion — implementation should treat this file the way it would treat a locked style guide. Section 35 (Implementation Handoff) states explicitly what is fixed, what is flexible, and what needs new approval before it can change. Two decisions Design Direction explicitly deferred are resolved first, since every token below depends on them: the CTA color (§2) and the final typeface pairing (§3).

---

## 2. CTA Color Decision — Teal vs. WhatsApp Green

Design Direction flagged this as unresolved and required a comparison, not an arbitrary pick. Both candidates were evaluated against the same five criteria, with contrast computed using the WCAG relative-luminance formula (sRGB-linearized channels).

| Criterion | Deep teal `#1F3E3B` | WhatsApp green `#25D366` |
|---|---|---|
| **Brand cohesion** | Reinforces this is *Simone's* action color — ties the CTA directly to the primary palette, nowhere else on the web. | Instantly recognizable as "WhatsApp," but that recognition is shared with every other business using it — including Simone Ebel and Psico Vila Olímpia, two of this project's own benchmarks. Adopting it makes the CTA less distinctive, not more. |
| **Contrast — white label/icon** | **11.6 : 1** against white — comfortably exceeds AAA (7:1) for any text size. | **1.98 : 1** against white — fails AA (4.5:1) outright, even fails the 3:1 floor for large text/UI. A white WhatsApp glyph or label on this green is a genuine accessibility defect, not a style note. |
| **Contrast — dark label/icon** | Not needed; white-on-teal already passes. | **7.55 : 1** against warm-charcoal `#2B2621` — passes, but *only* with dark text, which reads as a secondary/outline button convention, not a confident filled primary CTA. |
| **Visual sophistication** | Deep, desaturated, calm — matches the "premium, non-corporate" brief directly. | Bright and saturated by design (it's an app-icon color, built to stand out in a phone's app grid) — works against the calm/premium register this project is built around. |
| **Recognition of action ("this opens WhatsApp")** | Not carried by color alone. | Carried by color alone — the one real point in its favor. |

**Final recommendation: deep teal (`#1F3E3B`) is the CTA color**, used identically at all three placements (Hero, after Áreas de Atuação, footer). The "recognition of action" gap is closed the same way Design Direction already proposed: every CTA button carries a WhatsApp glyph icon alongside the label, so the *icon* signals the destination and the *color* signals the brand — the button doesn't have to choose one job over the other. WhatsApp green is rejected primarily on the contrast finding in row 2, which is a measured accessibility failure at the button's most likely execution (a solid fill with a white label), not a stylistic preference.

---

## 3. Typography Family Decision — Final Pairing

**Selected: Fraunces (display/headings) + Inter (body, UI, navigation, buttons, credential numbers).**

| Criterion | Finding |
|---|---|
| Portuguese readability | Both ship a "latin" subset (U+0000–00FF) covering every accented character the site's Portuguese content needs (ã, õ, ç, á, é, í, ó, ú, â, ê, ô) — confirmed by direct inspection of the Google Fonts latin-subset files. Neither face requires a "latin-ext" fallback for this project's content. |
| Editorial character | Fraunces' soft, high-contrast serif shapes are what carry the "premium, editorial, human" register — the one deliberate point of visual differentiation from both Simone Ebel and TinyEYE, which are sans-only systems end to end. |
| Premium/human quality | A serif headline over a clean sans body is a considered pairing, not a default — it reads as designed rather than templated, directly serving the brief's "non-corporate, non-institutional" requirement. |
| Mobile readability | Inter was purpose-built for UI legibility at small sizes and ships extensive hinting; confined to body/UI/nav (never headlines), it avoids the "generic SaaS" association a geometric sans picks up when it's used for everything on the page. |
| Performance | Both are variable fonts — one file per family covers the full weight range this system needs (§7), keeping total type payload to two font files, not a family-per-weight download. |
| Availability/licensing | Both are SIL Open Font License, free for commercial use, self-hostable, no CDN dependency or ongoing fee. |

**Work Sans was evaluated and set aside**, not because it's unsuitable, but because Inter's specific optimization for small-size UI legibility is a slightly better fit for a system that reuses the same sans face for body copy, nav labels, button labels, *and* tabular credential numbers — one face doing four jobs benefits from the face most rigorously tested at small sizes. No decorative or script face was considered; the two-family limit is fixed (§35).

---

## 4. Color Tokens

All neutrals are warm-biased on purpose — a pure grey would read as unconsidered against a teal-and-terracotta system built for warmth. Contrast ratios below are computed against the specific pairing named in "Usage," not against every possible combination.

| Token | HEX | Usage | Contrast notes |
|---|---|---|---|
| `color.primary` | `#1F3E3B` | Headings, nav wordmark, primary structural ink, primary CTA fill | vs. white text: **11.6 : 1** (AAA) |
| `color.primary-dark` | `#142B28` | Hover/active state on teal elements (incl. CTA hover) | vs. white text: **14.9 : 1** (AAA) |
| `color.primary-light` | `#6B928C` | Secondary icon strokes, subtle borders on dark surfaces, decorative teal tints | Not intended for small text on light backgrounds — too washed out; text/UI use limited to large elements or dark-surface contexts |
| `color.terracotta` | `#B8613C` | Oratória module accent, nav active-state rule, restrained "attention" marker | vs. `color.cream`: **3.9 : 1** — passes for large text (≥24px regular/≥19px bold) and non-text UI, **fails for small body text**. Use for labels/rules/large text only, never body copy. |
| `color.terracotta-light` | `#F0DCC9` | Oratória module background tint, badge/tag fill | Hosts `color.warm-charcoal` text at **11.3 : 1** — safe for body text set on this tint |
| `color.cream` | `#F7F2E9` | Primary page background | Hosts `color.warm-charcoal` text at **13.4 : 1** (AAA) |
| `color.warm-sand` | `#EDE4D3` | Alternating section background, footer background | Hosts `color.warm-charcoal` text at **11.9 : 1** (AAA) |
| `color.white` | `#FFFFFF` | Elevated surfaces only — FAQ panel, header bar | Hosts `color.warm-charcoal` text at **15.8 : 1** (AAA) |
| `color.warm-charcoal` | `#2B2621` | Primary body and heading text | See pairings above; never pure black |
| `color.muted-text` | `#6B6259` | Secondary/caption text, field labels, credential numbers | vs. `color.cream`: **5.35 : 1** (AA) |
| `color.border` | `#DDD3C0` | Hairline dividers, FAQ panel border, nav-item separators | Decorative/structural, not text-bearing — not contrast-critical under WCAG's non-text exemption for pure decoration |
| `color.cta` | `#1F3E3B` | Primary WhatsApp CTA fill — identical to `color.primary` by design (§2) | vs. white label: **11.6 : 1** |
| `color.cta-hover` | `#142B28` | CTA hover/active — identical to `color.primary-dark` | vs. white label: **14.9 : 1** |
| `color.focus` | `#2F6E64` | Focus ring on every interactive element | **5.32 : 1** non-text contrast vs. `color.cream` — clears WCAG 2.4.11's 3:1 floor with margin |

No gradient token exists in this system, and none should be added — the current site's gradient-wash backgrounds are explicitly retired (Design Direction §1, §4).

---

## 5. Typography Tokens

| Token | Value |
|---|---|
| `type.family-display` | Fraunces (variable, weight range 300–700 loaded) |
| `type.family-body` | Inter (variable, weight range 300–700 loaded) |
| `type.feature-numeric` | `font-variant-numeric: tabular-nums` — applied wherever digits must align (credential numbers, timeline step markers) |

No third family and no monospace family are used — tabular figures are achieved via Inter's own `tabular-nums` OpenType feature, not a separate mono font, keeping the system inside the two-family limit (§35).

---

## 6. Type Scale

Desktop values apply at `breakpoint.desktop` (≥1024px) and up; mobile values apply below `breakpoint.tablet` (768px). Tablet (768–1023px) interpolates or uses the desktop value at implementer discretion (§35, flexible).

| Role | Family | Desktop size / line-height | Mobile size / line-height | Weight | Letter-spacing |
|---|---|---|---|---|---|
| H1 (hero headline) | Fraunces | 3.25rem (52px) / 1.08 | 2.25rem (36px) / 1.12 | 600 | −0.01em |
| H2 (section heading) | Fraunces | 2rem (32px) / 1.18 | 1.5rem (24px) / 1.22 | 600 | −0.005em |
| H3 (block/question/tier heading) | Fraunces | 1.375rem (22px) / 1.3 | 1.25rem (20px) / 1.32 | 600 | 0 |
| Body | Inter | 1.0625rem (17px) / 1.65 | 1rem (16px) / 1.6 | 400 | 0 |
| Small / caption | Inter | 0.875rem (14px) / 1.5 | 0.8125rem (13px) / 1.5 | 500 | 0.01em |
| Eyebrow / field label | Inter | 0.75rem (12px) / 1.4, uppercase | same | 600 | 0.08em |
| Navigation (desktop bar) | Inter | 0.9375rem (15px) / 1.4 | — | 500 | 0.01em |
| Navigation (mobile panel) | Inter | — | 1.0625rem (17px) / 1.4 | 500 | 0 |
| Button / CTA label | Inter | 1rem (16px) / 1.2 | 0.9375rem (15px) / 1.2 — mobile bar variant | 600 | 0.01em |
| Credential numbers (e.g. "n. 9940/24") | Inter, `tabular-nums` | 0.9375rem (15px) / 1.4 | same | 500 | 0.01em, color `muted-text` |

No token below 13px exists anywhere in the system (§30).

---

## 7. Font Weights

| Token | Value | Usage |
|---|---|---|
| `type.weight.regular` | 400 | Body copy, FAQ answers |
| `type.weight.medium` | 500 | Nav, small/caption text, credential numbers, secondary links |
| `type.weight.semibold` | 600 | All headings (H1–H3), button labels, eyebrow labels |
| `type.weight.bold` | 700 | Reserved, not used by default — no component in this system calls for it; available only if a future, approved exception needs it (§35) |

---

## 8. Line Heights

| Token | Value | Usage |
|---|---|---|
| `type.leading.tight` | 1.08–1.18 | H1/H2 |
| `type.leading.snug` | 1.3 | H3 |
| `type.leading.normal` | 1.6–1.65 | Body copy |
| `type.leading.relaxed` | 1.7 | Long-form FAQ answers where body copy runs past ~3 lines |

---

## 9. Spacing Scale

Base unit 4px. All margins/padding/gaps must use a scale token — no arbitrary pixel values in implementation.

| Token | Value |
|---|---|
| `space.3xs` | 4px |
| `space.2xs` | 8px |
| `space.xs` | 12px |
| `space.sm` | 16px |
| `space.md` | 24px |
| `space.lg` | 32px |
| `space.xl` | 48px |
| `space.2xl` | 64px |
| `space.3xl` | 96px |
| `space.4xl` | 128px |

**Applied rhythm:** section vertical padding — `space.3xl`–`space.4xl` desktop, `space.xl`–`space.2xl` mobile. Component internal padding (FAQ panel, credential block) — `space.sm`–`space.md`. Gap between stacked hero text elements — `space.sm`. Gap between Áreas de Atuação blocks — `space.lg`.

---

## 10. Container Widths

| Token | Value |
|---|---|
| `layout.container.max` | 1200px |
| `layout.container.text` | 640px — measure cap for body-copy blocks (FAQ answers, area descriptions), independent of the outer container |
| `layout.container.padding.desktop` | 32px horizontal gutter |
| `layout.container.padding.mobile` | 20px horizontal gutter |

---

## 11. Grid

- `layout.grid.columns`: 12 (conceptual — used for proportion and asymmetry, not a literal rigid CSS grid everywhere)
- `layout.grid.gutter.desktop`: 24px
- `layout.grid.gutter.mobile`: 16px
- Hero split (desktop): text column ≈ 7/12 (58%), image column ≈ 5/12 (42%) — lands inside the approved 40–45% image-width range
- Credentials split (desktop): image column ≈ 4–5/12 (35–40%), text column ≈ 7–8/12 (60–65%)
- Alignment: left-aligned body text throughout; centered treatment reserved for short, emphatic single lines only (never full sections)

---

## 12. Breakpoints

Mobile-first. Four explicit breakpoints — no undocumented intermediate states.

| Token | Range | Behavior |
|---|---|---|
| `breakpoint.mobile` | 0–767px | Default/base styles — single column throughout |
| `breakpoint.tablet` | 768–1023px | Same composition as mobile for Hero and Credentials (see §32); Áreas de Atuação and Timeline may widen slightly but stay single-column/vertical |
| `breakpoint.desktop` | 1024–1279px | Full desktop composition activates — asymmetric Hero, horizontal Timeline, two-column Credentials |
| `breakpoint.wide` | ≥1280px | Content stays capped at `layout.container.max`; extra viewport width becomes margin, not new layout |

---

## 13. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius.sm` | 6px | Buttons, small tags/labels, focus-ring corner match |
| `radius.md` | 10px | FAQ panel, oratória module panel |
| `radius.lg` | 16px | Portrait image container (hero, credentials) |

No `radius.full` / pill token exists in this system — full-pill buttons and badges are explicitly excluded (approved decision §1, §12).

---

## 14. Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow.sm` | `0 1px 2px rgba(23,48,46,0.06)` | FAQ panel only, and only when the panel's fill would otherwise sit flush against an identically-colored section background |

No other shadow token exists. Buttons carry **no shadow** at any state — color change alone communicates hover/active (§15).

---

## 15. Buttons

**Primary CTA (WhatsApp) — the only primary-emphasis button in the system:**

| Property | Value |
|---|---|
| Background | `color.cta` |
| Label color | white |
| Label | `type.family-body`, `weight.semibold`, `button` scale (§6) |
| Icon | WhatsApp glyph, 20px, left of label, `space.2xs` gap |
| Padding | 14px 28px desktop, 14px 22px mobile bottom-bar variant |
| Radius | `radius.sm` |
| Min height | 48px (clears the 44px touch-target floor with margin) |
| Hover | background → `color.cta-hover`, `motion.duration.fast`, no shadow/scale change |
| Active/pressed | same as hover, no translateY bounce |
| Focus | `color.focus` ring, 2px solid, 3px offset |

This exact treatment is used at all three placements (Hero, after Áreas de Atuação, footer) and the mobile CTA bar (§23) — never restyled per-context.

**Secondary / ghost (e.g. the Google Reviews link, "ver mais" style actions):**

| Property | Value |
|---|---|
| Background | transparent |
| Text color | `color.primary`, `weight.medium` |
| Underline | on hover only (body-copy inline links keep a persistent, muted underline — see §16) |
| Border | none by default |
| Focus | `color.focus` ring, same as primary |

No third button style exists. There is no outline/bordered button variant unless a future approved need arises (§35).

---

## 16. Links

- Inline body-copy links: `color.primary`, underlined by default (thin underline, `color.primary-light`) so affordance doesn't rely on color alone.
- Nav links (desktop bar): no underline at rest; **current-page state** = `weight.semibold` + a 2px bottom rule in `color.terracotta` — the one small, functional use of terracotta as a state indicator rather than decoration, consistent with "restrained accent."
- Hover state (all links): color shifts to `color.primary-dark` — **not** terracotta, keeping terracotta reserved for the oratória module and the nav active-state rule only, per the "restrained accent" requirement.
- Focus: `color.focus` ring on every link, including inline body links.

---

## 17. Header

| Property | Value |
|---|---|
| Height | 72px desktop, 60px mobile |
| Background | `color.cream`, solid — no transparency, no blur (glassmorphism is explicitly excluded) |
| Position | `position: sticky; top: 0;` |
| Resting state | no border, no shadow |
| Scrolled state (>40px scroll) | `1px solid color.border` bottom border + `shadow.sm` — a subtle "settled" cue, not a hide-on-scroll behavior |
| Contents | wordmark/logo (left, ~28–32px height) · nav (§18, center-right) · CTA button (§15, far right) |
| Announcement bar | **does not exist as a component** — no token, no slot for one. Adding one requires a new Design System decision, not an implementation choice. |

---

## 18. Navigation

**Desktop (≥1024px):**
- Horizontal list: Início · Áreas de Atuação · Sobre · Contato — 4 items, `space.lg` gap
- Style per §6/§16; current-page indicated by weight + terracotta rule, never a background pill
- FAQ has no nav entry — it lives as a homepage section (per [[content-positioning-brief]] §4)

**Mobile (<1024px):**
- Hamburger icon (24px, 3-line, `color.primary`) opens a nav panel
- Panel background `color.cream`, items stacked, `navigation.mobile` type token, min 48px tap height per item
- **The panel covers only the upper portion of the viewport, not the full screen** — this keeps the persistent bottom CTA bar (§23) visible and usable even while the menu is open, so the sole contact channel is never fully obscured
- No CTA duplicated inside the panel — the bottom bar is the mobile CTA surface (approved decision §12/§13)

---

## 19. Hero

**Desktop (≥1024px):**
- Two-column grid: text column ≈58%, image column ≈42% (§11), `space.xl` gap minimum
- DOM/visual order in the text column: `[HEADLINE]` → `[SUPPORTING_MESSAGE]` → `[AUDIENCE_CUE]` → `[CREDIBILITY_CUE]` → CTA button
- Portrait: 4:5 crop, `radius.lg`, no overlay, positioned with a slight vertical/asymmetric offset (not perfectly centered) against the text column
- Target: entire hero (both columns) fits within ~100vh minus header height on a 1280×800 reference viewport — the CTA must not require scrolling on common laptop screens

**Tablet (768–1023px) and mobile (<768px) — identical composition, single column:**
- Order: `[HEADLINE]` → `[SUPPORTING_MESSAGE]` → `[AUDIENCE_CUE]` → `[CREDIBILITY_CUE]` → CTA → portrait (message-first, portrait second — a fixed rule, §35)
- Portrait: same 4:5 crop family, capped at 320px / 80vw max-width, centered, `space.xl` margin above separating it from the CTA
- **The two-column asymmetric split is desktop-only.** Below 1024px, the mobile message-first order applies without exception — this removes an ambiguous "half-split" tablet state.

**Content placeholders (no final copy):** `[HERO_HEADLINE]`, `[HERO_SUPPORTING_MESSAGE]`, `[AUDIENCE_CUE]` (e.g. "Crianças e adolescentes · Adultos"), `[CREDIBILITY_CUE]`, `[CTA_LABEL]`.

---

## 20. Editorial Practice Blocks (Áreas de Atuação)

**Structure — not cards.** Each of the six areas is a row with two parts: a narrow label column (area name, H3 + optional audience tag) and a wider description column (body copy, capped at `layout.container.text`). Desktop: label and description sit side by side (≈3/12 + ≈9/12). Mobile: label stacks above description.

- **Order (fixed):** atraso de linguagem, trocas na fala, distúrbios da fluência, motricidade orofacial, oratória, afasia — inquiry-volume ordering only, per [[content-positioning-brief]] §5.
- **Divider:** `1px solid color.border` between rows, `space.lg` vertical rhythm.
- **Audience tag:** small caption text (§6) with a `2px` left border in `color.border` — **not** a pill/badge shape.
- **Oratória distinction:** background fill `color.terracotta-light`, `radius.md`, internal padding added on all sides so it reads as its own module rather than a plain row — the one approved use of terracotta as a background.
- **Afasia:** identical row structure, identical type scale, identical spacing to the four other clinical areas — no reduced treatment, no different position in the visual hierarchy (fixed rule, §35).
- **Icons:** none by default. If a scanning-value icon is added later (e.g., a small age-range glyph), it must be single-stroke-weight, non-clinical, and approved before use — not a current part of this system (§35, needs approval).

**Mobile:** same six rows, full width, oratória's tint and radius preserved at full width so the distinction survives the stack.

---

## 21. Credentials Block ("Quem é Simone")

- **Layout:** two-column desktop (portrait ≈35–40%, text ≈60–65%), single column mobile (portrait above text)
- **Tier 1 — CFFa specialist registrations (most prominent):** eyebrow "Especialista CFFa," each registration as one line — title + registration number in the `credential-number` token (§6), understated and tabular, never accent-colored
- **Tier 2 — Formação:** eyebrow "Formação," one line — PUC-SP, `space.md` below Tier 1
- **Tier 3 — Pós-graduações:** eyebrow "Pós-graduações," the five specializations rendered as **one wrapped text line separated by a middle dot (·)**, in `small`/`muted-text` styling — explicitly not five bulleted lines. This is the specific mechanism that prevents the "résumé wall" the brief warns against.
- **Portrait:** same 4:5 crop family as the hero, `radius.lg`, no overlay, positioned directly adjacent to the text (one visual unit, not two sections)
- **CFFa verification link (optional, pending URL):** secondary/ghost link style (§15), placed beneath Tier 1

---

## 22. Timeline (Como Funciona)

- **Desktop (≥1024px):** horizontal — a thin connecting line (`color.border`) runs through 4 circular numbered markers (30px diameter, `color.primary` fill, white numeral, `weight.semibold`, `tabular-nums`), each with a short label (H3-scale, smaller) and one line of detail beneath
- **Mobile/tablet (<1024px):** vertical — same markers connected by a vertical rule on the left, label + detail to the right, `space.md` between steps
- **Steps (fixed order):** 1. WhatsApp → 2. Consulta inicial / Entrevista → 3. Avaliação → 4. Processo terapêutico
- **Online mechanics:** presented as a smaller inline note attached directly beneath step 2 only — smaller text size, a `1px` left border in `color.border`, **not** a separate card and **not** a second parallel timeline. A second, fully-online timeline is out of scope unless real copy length later requires it (§35, flexible only under that condition)

---

## 23. Google Reviews Module

- A single compact inline element: a small Google mark or unfilled star-outline icon (16–18px) + link text `[REVIEWS_LINK_LABEL]`, styled as a secondary/ghost link (§15)
- No background panel, no border, no card — content-hugging width, not a full-width block
- Positioned adjacent to the Credentials block (§21), not as its own major section
- **Forbidden content:** star ratings, review counts, quoted excerpts, or any other implied testimonial data — the module contains only the icon and the link

---

## 24. FAQ

- Pattern: native `<details>/<summary>` **or** a button + `aria-expanded`/`aria-controls` pair — either is acceptable (§35, flexible); both must meet the requirements below
- Each question is a real, focusable control — never a `<div>` with a click handler
- Min height 44px on the trigger row, full-width tap target
- Expand/collapse transition: `motion.duration.base` (200ms), height/opacity only — instant under `prefers-reduced-motion: reduce`
- Chevron/plus icon rotates on open; instant swap (no rotation transition) under reduced motion
- Visual: `color.white` panel, `1px solid color.border`, `radius.md`, `space.md` internal padding — `shadow.sm` only if the surrounding section background is the same white/cream tone the panel needs to separate from
- One item open at a time by default (§35, flexible if a stronger reason emerges)
- This is one of the **two approved uses of a card-like surface** in the entire system (§33)

---

## 25. Footer

- **Background:** `color.warm-sand` — deliberately *not* `color.primary` (full-teal), because the CTA button is also teal (§2) and a teal-on-teal footer would force an inverted button variant, which the "same visual treatment everywhere" requirement (§12) explicitly forbids. Warm-sand keeps the footer visually distinct from the cream body sections without breaking CTA consistency.
- **Top border:** `1px solid color.border` separating it from the section above
- **Structure, top to bottom:** final CTA (3rd repetition, §15, unchanged styling) → NAP grid (address + embedded map, hours, payment note, repeated nav links) → minimal legal/meta line
- **Layout:** multi-column grid desktop, stacked single column mobile

---

## 26. Mobile CTA Bar

- Appears only on `breakpoint.mobile`/`tablet` (<1024px), and only after the visitor scrolls past the Hero — not present at initial load
- Fixed to the viewport bottom, full width, `color.cta` background, white label + WhatsApp icon — same button token as §15's primary CTA, just full-width and fixed-position, never a differently-styled variant
- Min height 48px, safe-area-aware bottom padding on iOS
- **No desktop equivalent** — desktop relies on the three in-page CTA instances plus the header CTA (§17); no floating element is added at that breakpoint (approved decision §12)
- No pulsing, bouncing, or badge-notification animation — it appears once via a simple opacity fade (`motion.duration.base`) and then holds still

---

## 27. Image Treatment

> **AMENDED 2026-08-15 (approved).** This section previously assumed a *single*
> primary photographic asset. An audit of the current website established that
> **four** legitimate real photographs exist, two of which had never been
> published visually. The single-asset assumption is obsolete and is replaced
> by the curated set below. The per-asset register (provenance, dimensions,
> status) lives in `src/data/assets.ts` — the single source of truth; it is not
> duplicated here.
>
> **Approved curated set:**
> | Role | Source | Status |
> |---|---|---|
> | Hero — primary portrait | `photo-2025-08-20-09-41-26_orig.jpg` (734×800) → 640×800 4:5 crop | approved, in use |
> | Quem é Simone — contextual portrait | `photo-2025-08-20-10-23-55_orig.jpg` (1280×720) → 576×720 4:5 crop | approved, in use |
> | Como Funciona — therapy room | `img-5154_orig.jpeg` (1067×800) | recommended, not yet placed |
> | Reception | `img-5152_orig.jpeg` (1067×800) | optional, placement undecided |
>
> **Rule that follows from this:** the Hero and Quem é Simone must use
> *different* photographs. Repeating one image across both is a regression.
>
> **Rejected on audit:** the WhatsApp screenshot; the building exterior (its
> signage matches the validated address, but the filename shows it came from a
> third-party real-estate listing, so ownership cannot be established); and the
> current logo JPEG as a design asset.

- **Primary crop:** ≈4:5, portrait orientation — hero, credentials block, Sobre page
- **Secondary crop:** 1:1 — reserved for space-constrained future placements; not currently used anywhere in this spec
- **Radius:** `radius.lg` on every image container
- **Treatment:** natural background as captured, **no color overlay, no gradient overlay, no duotone** — this is a direct, permanent reversal of the current site's gradient-wash pattern
- **Excluded assets (must not enter the new asset library):**
  - The unrelated real-estate listing photo (`sala-comercial-...webp`) currently leaking into the site's Open Graph metadata
  - The WhatsApp "business card" screenshot currently embedded as literal page content on Contato
- **Alt text:** descriptive and name/role-based (e.g., "Simone Tavolaro, fonoaudióloga"), never generic ("Picture," "Imagem")

---

## 28. Iconography

- **Style:** single-stroke-weight line icons only, 1.5px stroke, no fill, rounded joins — if used at all
- **Approved uses:** WhatsApp glyph (CTA), chevron/plus (FAQ), hamburger/close (mobile nav), Google mark or star-outline (Reviews module)
- **Explicitly excluded:** any icon-per-card treatment across the six Áreas de Atuação by default; any stethoscope/brain/speech-bubble-clipart style medical iconography anywhere on the site
- **Size:** 16–20px inline with text, 20–24px standalone (nav toggle, CTA icon)

---

## 29. Focus States

- `2px solid color.focus`, `3px` offset, border-radius matched to the focused element's own radius token +1–2px
- Applied via `:focus-visible` (keyboard/assistive-tech focus), not `:focus` (avoids mouse-click outline noise) — every browser in this project's realistic support matrix implements `:focus-visible`
- **Never removed without a replacement** — a hard rule, not a preference (§35)

---

## 30. Accessibility Tokens

| Token | Value |
|---|---|
| `a11y.text.min-size` | 16px mobile / 17px desktop body; **13px is the absolute floor** for any text token in the system (§6) |
| `a11y.contrast.body-min` | 4.5 : 1 |
| `a11y.contrast.large-min` | 3 : 1 (≥24px regular or ≥19px bold, and non-text UI components) |
| `a11y.target.min` | 44×44px; 48px preferred where space allows (CTA buttons, mobile nav toggle, FAQ triggers) |
| `a11y.motion.reduced` | All transform/opacity entrance and reveal animation disabled under `prefers-reduced-motion: reduce`; FAQ transitions become instant; hover color-changes may remain (no transform/scale hover exists anywhere in this system to begin with) |
| `a11y.heading.structure` | One `H1` per page (hero headline); one `H2` per major section; `H3` for sub-items (area names, FAQ questions, credential tier labels) |

---

## 31. Motion Tokens

| Token | Value | Usage |
|---|---|---|
| `motion.duration.fast` | 120ms | Hover color changes, focus-ring appearance |
| `motion.duration.base` | 200ms | FAQ expand/collapse, small UI transitions |
| `motion.duration.slow` | 400ms | Section/entrance reveal — deliberately short, not a cinematic reveal |
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | All transitions — calm, not bouncy |
| `motion.distance.reveal` | 12px max `translateY` | Entrance/section-reveal animation — small, not a dramatic slide |

**Explicitly excluded, with no token provided for any of them:** parallax scrolling, scroll-hijacking, staggered/cascade reveal delays, count-up numbers, pulsing or bouncing chat-bubble animation. Every motion token above is gated behind `@media (prefers-reduced-motion: no-preference)`.

---

## 32. Responsive Behavior

Explicit per-section behavior — not "responsive" as a blanket statement:

| Section | Mobile (<768px) | Tablet (768–1023px) | Desktop (≥1024px) |
|---|---|---|---|
| **Hero** | Single column, message-first order, portrait capped 320px/80vw, centered below CTA | Same as mobile — the asymmetric split is desktop-only (§19) | Two-column asymmetric grid, 58/42 split, both columns in first viewport |
| **Áreas de Atuação** | Full-width stacked rows, label above description, oratória tint preserved | Same row structure as mobile; label/description may move to side-by-side once width allows without cramping | Label/description side by side within each row (§20) |
| **About/Credentials** | Single column, portrait above text, Tier 3 still one wrapped line | Same as mobile | Two-column, portrait beside text (§21) |
| **How It Works** | Vertical connected timeline, one step per screen-height roughly | Same vertical timeline as mobile | Horizontal connected timeline (§22) |
| **FAQ** | Full-width accordion, same interaction pattern | Same as mobile, width may narrow to `layout.container.text` | Same interaction pattern, constrained to `layout.container.text` within the section |
| **CTA** | 3 in-page instances + bottom bar after Hero scroll | Same as mobile | 3 in-page instances + header CTA, no bottom bar, no floating element |
| **Navigation** | Hamburger, upper-viewport panel, bottom bar stays visible | Same as mobile below 1024px | Full horizontal nav + header CTA, sticky (§18) |

---

## 33. Component Principles

**Cards are allowed in exactly two places — nowhere else:**
1. FAQ panels (§24)
2. The oratória distinction module within Áreas de Atuação (§20) — and only because it needs a background fill to read as "different in kind," not because it's a card for card's sake

**Editorial blocks are the default for Áreas de Atuação** — a row-based, label+description structure (§20), never a grid of uniform boxes.

**Additional rules, stated explicitly:**
- No badge/pill shapes anywhere in the system — audience tags use a text label + hairline border, not a pill (§20)
- No gradient fills anywhere — the current site's gradient washes are permanently retired
- No box-shadow on any button, at any state — color change alone communicates interaction
- No icon-per-item treatment on Áreas de Atuação by default — icons are opt-in and require approval (§20, §35)
- No second, differently-styled button competing with the primary CTA — the only other interactive style is the single secondary/ghost link (§15)
- No floating chat-bubble component exists in this system, on any breakpoint (§26)
- No announcement bar component exists in this system (§17)

---

## 34. Design Token Hierarchy

```
color.
  primary, primary-dark, primary-light
  terracotta, terracotta-light
  cream, warm-sand, white, warm-charcoal, muted-text
  border
  cta, cta-hover
  focus

type.
  family-display, family-body, feature-numeric
  weight.regular, weight.medium, weight.semibold, weight.bold
  leading.tight, leading.snug, leading.normal, leading.relaxed
  scale.h1 / h2 / h3 / body / small / eyebrow / nav-desktop / nav-mobile / button / credential-number
    (each with .size-desktop, .size-mobile, .weight, .letter-spacing)

space.
  3xs, 2xs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl

radius.
  sm, md, lg

shadow.
  sm

motion.
  duration.fast, duration.base, duration.slow
  easing.standard
  distance.reveal

layout.
  container.max, container.text, container.padding-desktop, container.padding-mobile
  grid.columns, grid.gutter-desktop, grid.gutter-mobile

breakpoint.
  mobile, tablet, desktop, wide

a11y.
  text.min-size, contrast.body-min, contrast.large-min, target.min, motion.reduced, heading.structure
```

Every token above is named for what it *means*, not where it happens to be used first — e.g. `color.cta` is a semantic alias that currently resolves to the same value as `color.primary` (§2), kept as a separate token specifically so the CTA color can be revisited later (§35) without touching every heading and nav-ink usage of `color.primary` at the same time.

---

## 35. IMPLEMENTATION HANDOFF

**FIXED — implement exactly as specified, no independent visual decisions:**
- Every HEX value in §4, including the CTA-color decision (teal, not WhatsApp green) and its rationale in §2
- The two-typeface limit and role assignment: Fraunces for display/headings only, Inter for everything else — no third family, no swapping roles
- The full type scale, weights, and line-heights in §6–§8
- The spacing, container, grid, and breakpoint values in §9–§12
- No pill/full border-radius anywhere; the exact three radius tokens in §13
- No box-shadow beyond the single `shadow.sm` token, and never on a button
- CTA button: identical visual treatment at all three in-page placements and the mobile bar — no per-context restyling
- Áreas de Atuação as editorial blocks, never a uniform card grid; afasia carries identical visual weight to the other five areas
- No cliché medical iconography, no gradients, no glassmorphism, no announcement bar, no desktop floating chat bubble
- The excluded image assets in §27 must not enter the new asset library
- Every accessibility floor in §30 — these are minimums, not targets to trade off against visual polish

**FLEXIBLE — implementer may decide within the stated constraints:**
- Exactly which spacing-scale step applies at a given micro-location, as long as it's a token from §9, not an arbitrary value
- The precise internal arrangement of an Áreas de Atuação row (label-left vs. label-right, etc.), as long as it stays card-free and preserves ordering, the oratória distinction, and afasia's parity
- `<details>/<summary>` vs. button+ARIA for the FAQ pattern — either satisfies §24's requirements
- Exact easing/duration choices within the ranges given in §31
- Placeholder/scaffolding copy used during build (never final copy)

**MUST NOT CHANGE WITHOUT NEW APPROVAL — these require a documented reason and client sign-off, not an implementer's preference:**
- Reopening the CTA-color decision (§2)
- Adding icons to Áreas de Atuação blocks — currently icon-free by design (§20, §28)
- Whether the Como Funciona online-mechanics note stays inline or becomes an expandable disclosure, and whether a second online-specific timeline is ever introduced (§22)
- Final mobile hero photo placement was fixed in this document (§19: directly under the CTA, message-first) — resolving the ambiguity Design Direction left open. Changing it again requires approval, not a build-time guess.
- Any new color, font, spacing value, radius, shadow, or component pattern not already present in this document — propose it here first; never introduce it ad hoc in code
- The two still-open content gaps carried from [[content-positioning-brief]] §13 (the CFFa verification URL, exact opening/closing hours) — these block final footer/credentials **copy**, not layout; flag to the content owner, do not invent placeholder values that could be mistaken for real ones

---

**DESIGN SYSTEM APPROVAL REQUIRED.** Implementation should not begin until this document has been reviewed and approved, per the DISCOVERY → UX STRATEGY → INFORMATION ARCHITECTURE → DESIGN SYSTEM → **IMPLEMENTATION** workflow defined in CLAUDE.md.
