# Design Direction — Landpage Simone

**Date:** 2026-08-15
**Phase:** DESIGN DIRECTION (post Discovery → UX Strategy → Client Validation → Content & Positioning)
**Status:** Design strategy specification only. No components, no production CSS, no framework, no package installed, no source code modified.

**Sources:** [[content-positioning-brief]] (primary — all content/positioning facts below trace back to it), [[discovery-summary]], [[preliminary-design-direction]], [[current-site-audit]], [[additional-benchmarks]], [[benchmark-simone-ebel]], and fresh visual research performed for this phase (§1).

**Labeling convention (carried from [[content-positioning-brief]]):** FACT / CLIENT VALIDATION / INFERENCE / RECOMMENDATION. Design choices in this document are RECOMMENDATIONs unless otherwise labeled — they are directional, not final production specs (no hex codes, typefaces, or component code are being installed or committed at this stage).

---

## 1. VISUAL RESEARCH

**Method:** Direct visual inspection of primary screenshots captured via Chrome during Discovery (`docs/references/screenshots/`, same day, same project), supplemented by the written FACT-level observations already recorded in [[additional-benchmarks]] and [[benchmark-simone-ebel]] for the five additional benchmarks (Juliana Mori, Psico Vila Olímpia, Portland Speech Clinic, NYCSLP, Chatterboxes), none of which required new screenshots since their design-relevant patterns are structural/textual, not pixel-level. Fresh inspection focused on the three sites named explicitly in this request: the current Tavolaro site, Simone Ebel, and TinyEYE.

**Current site (fono-simonetavolaro.com) — visual FACTs observed:**
- Logo: a coral-to-orange gradient swirl mark paired with a dark teal/navy wordmark ("Simone Tavolaro") and a small-caps tagline ("FONOAUDIÓLOGA"). This is a reasonable, human-feeling mark — warm accent + a calm dark anchor color — undermined by dated execution elsewhere, not by the color choice itself.
- Background: a soft lavender-to-slate-blue gradient wash on Home and Sobre; an unrelated, harsher black-to-gray gradient on Contato. The two are visually inconsistent with each other — the site reads as three loosely related pages, not one system.
- Photography: a real, usable portrait of Simone (white blazer, warm expression, softly blurred office background with a framed print) — genuinely good raw material, let down by a thin gray box-frame treatment that makes it look like an inserted attachment rather than a designed hero image.
- Typography: a thin-tracked all-caps sans for navigation/the "MENU" label, an italic serif-style display face for section headings, and a plain system sans for body copy — an unintentional three-way pairing that reads as an unedited page-builder default, not a chosen system.
- Contrast: light gray/white italic text is set directly on the light lavender gradient in the hero — a real accessibility and legibility problem, not just a style preference.
- The WhatsApp contact "card" on Contato is a literal screenshot of a phone-app graphic embedded as page content, rather than a designed on-page element.

**Simone Ebel (pac.fonosimoneebel.com.br) — visual FACTs observed:**
- A persistent red/orange top announcement bar ("NÃO ACEITAMOS CONVÊNIOS...") and a sticky header with a teal circular ear-icon mark, text nav, and a solid green pill-shaped "WhatsApp" button.
- Hero: a heavy-weight sans headline in dark navy, an orange-highlighted sub-phrase, a bulleted stat list in bold orange numerals (+30 anos, +2.000 pacientes, results in 3 months), a green CTA button, and a portrait photo set inside a rounded-square frame with a thick teal border accent.
- "Método" section: light-gray section background, an orange accent rule above the H2, and a 3×2 grid of white cards, each with a circular teal icon badge, a bold navy card title, and gray body text.
- A persistent floating chat bubble (dark teal circle, bottom-right) throughout the page.
- Overall impression: confident, stat-forward, high-contrast conversion design. Effective for its own narrow-diagnosis, results-driven positioning — and explicitly **not** the tone this project should adopt (see §3), since Tavolaro has no comparable stat claims to make (and CLAUDE.md prohibits inventing them) and the brief calls for calm, not alert-driven urgency.

**TinyEYE (tinyeye.com) — visual FACTs observed:**
- A bright yellow top announcement bar, a multi-item dropdown mega-nav ("For Therapists / For Schools / For Families / About"), an outlined "Login" button and a solid blue pill "Contact Us" button.
- Hero: a very large, heavy geometric sans headline in bright blue, a yellow pill secondary CTA, and cutout/silhouette child photography floating without a background frame directly over the page.
- A persistent blue chat-bubble widget bottom-right ("Need Help?").
- Overall impression: bright, playful, marketplace-scale, multi-audience branding appropriate to a global teletherapy company — confirms [[ux-strategy]] §9's conclusion that TinyEYE's *visual* language, not just its structural multi-door nav, is inapplicable to a solo boutique practice.

**Additional benchmarks (structural patterns only, per [[additional-benchmarks]], no new screenshots taken since none of their visual identity is eligible for reuse and their value is entirely structural):** Portland Speech Clinic's informal-bio-before-formal-credentials sequencing; NYCSLP's numbered 3-step process and condition-block service presentation; Psico Vila Olímpia's credential-number-next-to-name pattern and substantial FAQ; Juliana Mori's audience segmentation. None of these were visually distinctive enough, per the earlier Discovery notes, to warrant new screenshots for a *visual* design pass — their contribution is entirely to IA/content, already reflected in [[content-positioning-brief]].

**Nothing from any benchmark's color system, typography, iconography, photography, or component styling is reused below.** Every recommendation in §3–§20 is built fresh, using only structural *lessons* (e.g., "repeated CTA works," "icon-card grids can feel busy") — never copied assets or values.

---

## 2. DESIGN OBJECTIVE

The site must translate the validated positioning — a language-and-communication specialist serving children, adolescents, and adults, described in her own plain language rather than marketing superlatives (per [[content-positioning-brief]] §1, §15) — into a visual experience that feels **premium, human, professional, contemporary, calm, trustworthy, warm, non-corporate, and non-institutional.**

**RECOMMENDATION — how these qualities resolve in practice:** the current site already has the right *instinct* (a real photo, restrained honest content, a single CTA) but the wrong *execution* (inconsistent gradients, boxy frames, poor contrast, an accidental three-typeface mix). Ebel shows the opposite failure mode for this brief: an accomplished, high-conversion *system*, but one built for stat-driven urgency, not calm trust — its red alert bar, orange stat-callouts, and busy icon-card grid are the visual equivalent of the "excessive" patterns CLAUDE.md already warns against. The design direction below is neither a polish pass on the current site nor an adaptation of Ebel's system — it is a new, calmer system that keeps the current site's honesty and Simone's real photography, while raising execution to a premium standard.

---

## 3. BRAND / VISUAL DIRECTION

- **Overall visual personality — RECOMMENDATION:** "a well-designed independent practice," not a hospital, not a health-tech startup, not a wellness-influencer brand. The visual language should feel like it belongs to one specific, real practitioner — quietly confident, not loud.
- **Visual tone — RECOMMENDATION:** warm-professional. Structured and clear (professional), but rendered in warm neutral tones and real photography (human) rather than clinical whites/blues or bright primary colors (institutional).
- **Emotional response from parents — RECOMMENDATION:** reassurance and competence. A parent arriving worried about a child's language development should feel "this person clearly knows what she's doing, and I can talk to her" — calm clarity, not urgency or alarm (explicitly the opposite of Ebel's red-banner, stat-heavy urgency, which is inappropriate for a visitor who is often already anxious).
- **Emotional response from adult patients** (speech performance, oratória) — RECOMMENDATION: confidence and capability. This audience is closer to a coaching/self-improvement mindset than a clinical-anxiety one; the oratória content in particular should feel a shade more energetic/confident within the same restrained system (see §10), without breaking the overall calm register.
- **Balance between credibility and warmth — RECOMMENDATION:** warmth leads, credibility supports. Per [[content-positioning-brief]] §7, Simone has no personal narrative to share (client declined, F2) — so warmth must come from *design* (real photography, plain language, generous space, a human voice in copy) rather than from a life story. Formal credentials (§11) are real and substantial and should be fully present, but positioned as *supporting* trust, never as the opening statement (carried from [[ux-strategy]] §13).
- **Level of visual sophistication — RECOMMENDATION:** high but understated. Sophistication here means disciplined typography, real photography, consistent spacing, and restraint — not visual richness (heavy color, motion, or ornamentation). A visitor should sense quality without being able to point to any single flashy element.
- **What to explicitly avoid — carried from CLAUDE.md, [[preliminary-design-direction]], and this phase's benchmark research:** generic AI-generated or WordPress-template aesthetics; excessive gradients, glassmorphism, drop shadows, or animation; generic stock photography; excessive cards/visual clutter; alert-style announcement bars (Ebel, TinyEYE); stat-callout hero bullets (Ebel — inapplicable regardless, since no such stats are validated); floating chat-bubble widgets styled as a generic SaaS pattern (Ebel, TinyEYE); bright primary-color, child-brand playfulness (TinyEYE); multi-door mega-navigation (TinyEYE); any visual identity element copied from a benchmark.

---

## 4. COLOR STRATEGY

**Starting point — analysis of the current logo:** the existing mark pairs a coral-to-orange gradient swirl with a dark teal/navy wordmark. This is a defensible, warm-plus-calm pairing in concept — the *problem* observed in §1 is execution (gradient-wash backgrounds, low-contrast text, inconsistent page-to-page treatment), not the underlying color instinct. The client is open to a new direction (I1, [[client-validation]]) but has not asked to discard the existing mark outright.

**RECOMMENDATION — evolve, don't replace, and define the system conceptually before any hex values:**

- **Primary color direction:** a deep, desaturated teal (calmer and darker than Ebel's brighter teal, and nothing like TinyEYE's bright blue) — used as the dominant heading/text-anchor color and the primary structural color (nav, headings, key UI). Deep teal reads as professional and calm without being cold or clinical.
- **Secondary color direction:** a muted terracotta/warm clay — a desaturated, quieter descendant of the current logo's coral-orange, used sparingly as an accent (small highlights, dividers, the oratória module's distinguishing treatment in §10) rather than as a dominant hero color. Muting it deliberately separates it from Ebel's saturated alert-orange.
- **Neutral/background palette:** a warm off-white/cream base (not stark white, not the current site's cool lavender-gray gradient), with a slightly deeper warm sand/beige for alternating section backgrounds — replaces the gradient-wash approach with flat, consistent, warm neutrals that read as premium rather than templated.
- **CTA color:** one single, dedicated color used only for the primary WhatsApp CTA, applied consistently at all three repetition points (§15). **RECOMMENDATION:** use the primary deep teal (not literal WhatsApp green) so the button reads as *this brand's* action color rather than a generic messaging-app green matching every other benchmark reviewed — the WhatsApp affordance is instead carried by a small WhatsApp glyph inside the button. This is a judgment call, not a hard rule; teal-as-CTA is recommended for brand cohesion, but WhatsApp-green-as-CTA remains a reasonable, lower-risk alternative if user-testing later favors the more universally recognized color.
- **Text colors:** a warm near-black charcoal (not pure black, not the current site's low-contrast white-on-lavender) for body text on light backgrounds — chosen specifically to correct the accessibility problem flagged in §1.
- **Accent colors:** the muted terracotta only — deliberately a *single* accent color, not the three-to-four-color accent system Ebel uses (orange + green + teal + red), which reads as busy against this brief's calm/premium objective.
- **Contrast/accessibility considerations:** all text/background pairings must meet WCAG AA (4.5:1 body, 3:1 large text/UI elements) — a hard requirement carried into §19, directly correcting the current site's low-contrast hero text.

No hex values are finalized here. If illustrative values are useful for the next phase, they should be selected and contrast-checked against the neutral palette during Design System build-out, not locked in this strategy document.

---

## 5. TYPOGRAPHY

**RECOMMENDATION — a serif/sans pairing, not a sans-only system:** both Ebel and TinyEYE use bold sans-only type systems; a restrained serif for headlines is a deliberate way to differentiate this project from both benchmarks while directly serving the "premium + human + editorial, not corporate" objective. A serif headline reads as considered and warm in a way a heavy geometric sans (the current default for "modern healthcare" sites) does not.

- **Primary typeface (headings/display):** a contemporary, warm serif with good weight range and Portuguese-diacritic support — e.g. **Fraunces** (Google Fonts, free, variable font with adjustable optical size/softness, avoids both a decorative/script feel and a stiff, overly formal "classic serif" feel). Reasoning: free and well-supported; its variable-axis "softness" can be tuned toward a warmer or crisper register during the Design System phase; it reads as editorial/premium without tipping into the script-display anti-pattern flagged in [[preliminary-design-direction]] (seen on the Juliana Mori benchmark).
- **Secondary typeface (body/UI/nav):** a clean humanist sans with excellent legibility and full Portuguese accented-character coverage — e.g. **Inter** or **Work Sans** (both free, widely supported, variable). Reasoning: high legibility at small sizes, extensive weight range, avoids the "generic AI/SaaS" association some geometric sans faces carry when used for *everything* — here it is deliberately confined to body/UI, not headlines, which is what prevents the generic-SaaS read.
- **Heading personality — RECOMMENDATION:** confident but understated; moderate weight (not the heaviest available cut), sentence case rather than the current site's tracked-out all-caps "MENU" styling or Ebel's heavy-weight all-bold headlines. Italic serif reserved for occasional emphasis, not a default heading style (correcting the current site's over-use of italics).
- **Body text personality — RECOMMENDATION:** generous line-height (~1.6), comfortable measure (~60–75 characters per line), regular/medium weight only — never a thin weight at body size (an accessibility concern, §19).
- **Numerical/credential styling — RECOMMENDATION:** CFFa registration numbers and any other numeric/credential detail styled smaller than body text, in a slightly condensed or tabular-figure treatment, understated in color (neutral, not accent-colored) — deliberately *not* styled as bold accent-colored callouts the way Ebel treats its stat numbers, since Tavolaro's credentials are verifiable facts to note quietly, not persuasive statistics to shout.
- **Mobile readability — RECOMMENDATION:** minimum 16px body size, headline sizes scaled down proportionally with a defined mobile type scale (not just a linear shrink of desktop sizes), sufficient weight retained at small sizes for legibility.
- **Avoid:** decorative/script display faces; an all-geometric-sans system with no serif counterpoint (would read closer to Ebel/TinyEYE); more than two font families; heavy tracked-out all-caps as a primary heading style.

Fonts are recommended for evaluation in the Design System phase — **nothing is installed at this stage.**

---

## 6. PHOTOGRAPHY

**RECOMMENDATION — the existing portrait is the primary and, for now, only usable photographic asset**, per [[content-positioning-brief]] §7/§10 (CLIENT VALIDATION I2: reuse existing photos). Analysis, from the captured screenshots (§1):

- **Hero image treatment — RECOMMENDATION:** the existing portrait (warm, natural office backdrop, soft smile) should anchor the hero as a *meaningful supporting element*, not a full-bleed background nor a small afterthought thumbnail — see the recommended hero direction in §9(C). Remove the current thin gray box-frame; treat the photo with a soft, moderate-radius crop (consistent with §7's radius philosophy) instead.
- **Portrait treatment — RECOMMENDATION:** keep the natural, softly blurred office background as-is (real, not synthetic) — do not add color overlays, duotones, or gradient washes on top of the photo, which is exactly the current site's dated pattern (§1).
- **Crop behavior — RECOMMENDATION:** a consistent crop logic across every appearance of the portrait — e.g., a taller portrait-oriented crop (roughly 4:5) for the hero and "Quem é Simone," a tighter square crop only where space is constrained (e.g., a small credential-adjacent thumbnail, if ever needed). Avoid re-cropping inconsistently per placement, which fragments the sense of a single coherent photograph across the site.
- **Image aspect ratios — RECOMMENDATION:** standardize on 2–3 defined ratios (e.g., 4:5 primary, 1:1 secondary) rather than ad hoc per-section cropping.
- **Image positioning — RECOMMENDATION:** asymmetric placement (offset within its column, generous surrounding whitespace) rather than centered-in-a-box — supports the "editorial, not template" objective in §3.
- **Background treatment — RECOMMENDATION:** flat warm-neutral section backgrounds (§4) behind the photo; no gradient wash.
- **Mobile behavior — RECOMMENDATION:** the portrait stacks above or below the headline/CTA block, re-cropped tighter if necessary to preserve facial framing (never simply scaled down from the desktop crop, which risks awkward head/shoulder cropping on narrow viewports).

**Assets that should NOT be reused — FACT, carried from [[current-site-audit]] §5 / [[preliminary-design-direction]] §4:**
- The unrelated real-estate listing photo (`sala-comercial-...webp`) currently leaking into Open Graph metadata — must be purged from the new asset library entirely.
- The WhatsApp "business card" screenshot currently used as literal page content on Contato (§1) — this should become a native, designed contact element (§15), not a re-embedded screenshot.
- Any generic stock photography — none should be introduced; if additional real photography (e.g., of the consultório) becomes available later, that is a welcome addition, but it is **not currently confirmed** (per [[content-positioning-brief]] §13) and must not be assumed or substituted with stock in the meantime.

---

## 7. LAYOUT / GRID

- **Maximum content width — RECOMMENDATION:** approximately 1200px for full-width sections, with text-heavy content (body paragraphs, FAQ answers) constrained further to a comfortable reading measure within that container.
- **Desktop grid philosophy — RECOMMENDATION:** a flexible 12-column conceptual grid used for **asymmetric** compositions (hero, "Quem é Simone," Áreas de Atuação) rather than uniform centered blocks — asymmetry is one of the clearest ways to avoid the "generic template" read called out in CLAUDE.md.
- **Mobile grid philosophy — RECOMMENDATION:** single column, generous vertical rhythm, no forced two-up layouts below a comfortable breakpoint (see §18 — this is not simply "stack the desktop columns").
- **Section spacing — RECOMMENDATION:** generous vertical section padding, deliberately more generous than the current site's cramped Weebly stacking and Ebel's tighter card-grid rhythm — whitespace is treated as a trust signal (see below), not empty space to be minimized.
- **Content density — RECOMMENDATION:** low-to-moderate; one clear idea per section, avoiding the current site's undifferentiated wall-of-content pattern ([[ux-audit]] §7) and Ebel's dense multi-card, multi-stat sections.
- **Card usage — RECOMMENDATION:** sparing and deliberate — reserved for the FAQ accordion and the oratória distinguishing module (§10); the six areas of practice as a set should read as an editorial list, not a uniform card grid (see §10 for the reasoning).
- **Border/radius philosophy — RECOMMENDATION:** one consistent, moderate radius value applied across images, buttons, and the few cards that exist — softer than the current site's sharp box-frames, but not the full-pill rounding both Ebel and TinyEYE use for buttons (a deliberate point of visual differentiation).
- **Alignment principles — RECOMMENDATION:** left-aligned for body/paragraph content (readability), with occasional centered treatment reserved for short, emphatic statements (e.g., a hero sub-line or a section's opening sentence) — not centered-everything, which is the current site's default and reads as template-driven.
- **Whitespace philosophy — RECOMMENDATION:** generous, deliberate whitespace is a direct expression of "premium" and "calm" — a page that visibly has room to breathe signals a practice that isn't straining to fit everything in, which reinforces trust more than density does.

---

## 8. HOMEPAGE VISUAL HIERARCHY

Mapping the approved content architecture ([[content-positioning-brief]] §4, §16) to visual hierarchy:

**1. Hero**
- Visual purpose: establish the practice's identity, scope, and next step within the first viewport.
- Hierarchy: headline (largest, serif) > supporting message (sans, medium) > audience/credibility cues (small) > CTA (visually solid, unmissable but not shouting).
- Layout pattern: asymmetric two-zone composition (see §9, recommended direction C).
- Image usage: the existing portrait, treated per §6.
- CTA placement: end of the hero text block, first of the three repetitions (§15).
- Interaction requirements: none beyond a standard hover/focus state on the CTA; no entrance animation beyond a subtle, optional fade-in (§17).
- Desktop behavior: side-by-side asymmetric split (text column + photo column, unequal widths).
- Mobile behavior: single column — headline, supporting message, audience/credibility cues, CTA, then photo (or photo directly under the headline — a specific ordering decision for the Design System phase; either preserves message-first reading order).

**2. Áreas de Atuação**
- Visual purpose: fast self-recognition across six validated areas.
- Hierarchy: section intro (short) > ordered list of area blocks (per [[content-positioning-brief]] §5 ordering) > distinguished oratória module > repeated CTA.
- Layout pattern: editorial block list, not a uniform card grid (§10 detail).
- Image usage: none required; if icons are used at all, minimal and non-cliché (§10).
- CTA placement: after the full set of six areas — second of the three repetitions.
- Interaction requirements: optional subtle reveal-on-scroll per block; no accordion/collapse needed here (all six should be scannable at once, per the self-recognition purpose).
- Desktop behavior: a loose multi-column or staggered editorial layout, not six equal boxes.
- Mobile behavior: full-width stacked list; oratória's distinguishing tint/treatment preserved at full width (not lost in the stack).

**3. Quem é Simone**
- Visual purpose: establish trust through one cohesive warmth + credentials block.
- Hierarchy: short professional statement (no personal narrative, per F2) > CFFa specialist registrations (most prominent credential) > Formação (PUC-SP) > Pós-Graduações (smallest, listed) — full reasoning in §11.
- Layout pattern: photo directly adjacent to text, one unit, not two separate sub-sections.
- Image usage: existing portrait, reused (a second instance/crop, consistent with §6).
- CTA placement: none required here — this section's job is trust-building, not conversion; the next CTA occurs at the footer (§4 architecture already places only 3 CTA instances).
- Interaction requirements: none.
- Desktop behavior: asymmetric two-column (photo + text).
- Mobile behavior: photo above text, single column.

**4. Como Funciona**
- Visual purpose: remove first-contact anxiety with an explicit, numbered process.
- Hierarchy: section intro > 4 numbered steps > online-specific mechanics attached to relevant step(s).
- Layout pattern: horizontal numbered timeline (desktop) / vertical numbered timeline (mobile) — full reasoning in §12.
- Image usage: none needed.
- CTA placement: none required mid-section; the process naturally concludes toward the CTA/Contato footer.
- Interaction requirements: minimal — if online-specific detail is presented as an expandable note rather than always-visible text, it needs the same accessible disclosure pattern as the FAQ (§14).
- Desktop behavior: horizontal connected-dot timeline.
- Mobile behavior: vertical connected-line timeline, one step per screen-height roughly.

**5. Google Reviews**
- Visual purpose: honest, proportionate third-party trust signal.
- Hierarchy: minimal — a small badge/link, not a headline-led section.
- Layout pattern: compact inline module, not a full section with its own heavy padding.
- Image usage: a small Google mark/icon only; no fabricated star or count graphics.
- CTA placement: the link itself is the action (secondary, not competing with the primary WhatsApp CTA).
- Interaction requirements: standard link hover/focus state.
- Desktop/mobile behavior: same compact treatment at both sizes — this section should never be the dominant element on any viewport.

**6. FAQ**
- Visual purpose: resolve logistics questions before they become friction.
- Hierarchy: section intro > accordion list (§14).
- Layout pattern: single-column accordion, full content width but text constrained to a readable measure.
- Image usage: none.
- CTA placement: none inside the accordion; the section leads naturally into the final CTA/Contato footer.
- Interaction requirements: accessible expand/collapse (§14, §19).
- Desktop/mobile behavior: same accordion pattern at both sizes; full width on mobile.

**7. CTA / Contato footer**
- Visual purpose: final, low-friction conversion plus full NAP findability.
- Hierarchy: CTA (third repetition) > address/map > hours > payment note > footer nav/legal.
- Layout pattern: a clear final CTA block above a conventional footer grid (address/map, hours, nav).
- Image usage: an embedded map (a genuine gap on the current site, per [[proposed-information-architecture]]) — not a photo.
- CTA placement: prominent, at the top of this section.
- Interaction requirements: none beyond standard link/button states.
- Desktop behavior: multi-column footer grid.
- Mobile behavior: stacked single column; this is also where the persistent mobile CTA bar (§15) effectively "lands" the visitor if they tap it earlier in the scroll.

---

## 9. HERO DESIGN

The hero is the most consequential design decision on the page. Three directions were explored.

### A. Portrait-led

**Layout:** the existing portrait dominates (60–70% of the viewport width on desktop), with headline/CTA compressed into a smaller adjacent or overlapping text zone.

**Hierarchy:** photo first, message second.

**Strengths:** maximum immediate human warmth and trust; leverages the one strong asset (real photo) most directly; closest to what a first-time visitor expects from a "meet your practitioner" page.

**Weaknesses:** compresses the positioning message (which needs to communicate a defined, multi-area scope — [[content-positioning-brief]] §1 — not a single sentence) into too little space; risks reading as a generic "doctor headshot site" if not composed with real care; leaves little room for the audience/credibility cues §6 of the content brief calls for.

**Mobile behavior:** photo consumes most of the first viewport, pushing the value proposition and CTA below the fold — directly reproduces the current site's diagnosed core weakness ([[ux-audit]] §1–2, §10).

**Suitability for Simone:** weak. The content requirements (a multi-part positioning message, audience tags, a credibility cue, and a CTA — [[content-positioning-brief]] §6) need more room than a photo-dominant hero comfortably gives them.

### B. Editorial / typography-led

**Layout:** a large serif headline dominates, generous whitespace, no hero photo (or only a small circular inset portrait), a subtle warm-neutral background field.

**Hierarchy:** message first, photo minimal or absent.

**Strengths:** feels premium, editorial, and distinctive — neither Ebel nor TinyEYE attempt a typography-led hero, so this is the strongest option for visual differentiation; gives the positioning statement maximum room to be precise rather than compressed.

**Weaknesses:** loses the immediate warmth of a human face at the most important first-impression moment; for an anxious parent, "who is this person" may matter as much as "what does she offer" — a photo-light hero risks feeling less personal, working against the "human" and "warm" objectives in §2.

**Mobile behavior:** straightforward (text stacks naturally), but compounds the same warmth trade-off on the smallest, most personal screen.

**Suitability for Simone:** partially strong (distinctiveness, room for the positioning message) but weak on warmth, which is a named, non-negotiable qualities in §2.

### C. Hybrid portrait + positioning (RECOMMENDED)

**Layout:** an asymmetric two-zone hero — a clear text column (headline, supporting message, audience/credibility cues, CTA) alongside a meaningfully sized but not dominant photo column (roughly 40–45% width on desktop), generous whitespace around both.

**Hierarchy:** message and photo are co-equal at a glance; headline still reads first due to type scale, but the photo is immediately visible, not a footnote.

**Strengths:** the only option that comfortably fits every content requirement from [[content-positioning-brief]] §6 (positioning message, audience cue, credibility cue, CTA) *and* keeps the real photo prominent enough to carry warmth; directly addresses the current site's "CTA below the fold" weakness by keeping everything in one first viewport; avoids both Ebel's stat-dense clutter and TinyEYE's cutout-photo playfulness.

**Weaknesses:** the hardest of the three to execute well — a generic, undisciplined version of "text-left-photo-right" is a real risk if the asymmetry, crop, and spacing aren't deliberately composed (this is a genuine cost, not a free win — it demands real design craft in the next phase).

**Mobile behavior:** headline and supporting message first, audience/credibility cues and CTA next, photo either directly following the headline or closing the block — message-first ordering is preserved either way, correcting the current site's mobile hero weakness.

**Suitability for Simone:** strong — it is the only direction that serves the full content requirement set without sacrificing either warmth or message clarity.

**RECOMMENDATION: Direction C (Hybrid).** It is the only option that satisfies the full hero content brief (§6 of [[content-positioning-brief]]) without trading away either the human-warmth objective or the positioning-clarity objective central to §2 of this document.

**Placeholder content structure for Direction C (not final copy):**

```
[POSITIONING HEADLINE]
[SUPPORTING MESSAGE]
[AUDIENCE CUE — e.g. "Crianças e adolescentes · Adultos"]
[CREDIBILITY CUE — short credential mention]
[PRIMARY CTA — WhatsApp]

                                    [PORTRAIT PHOTO]
```

---

## 10. ÁREAS DE ATUAÇÃO

**RECOMMENDATION — reject a uniform six-card grid.** Six identical cards (icon + title + one line) is the single most predictable, template-feeling pattern available here, and CLAUDE.md explicitly warns against excessive/generic card usage. It would also flatten the very distinction [[content-positioning-brief]] §5 asks for between clinical/therapeutic areas and the coaching-style oratória offering.

**Alternatives considered:**
- **Editorial blocks (RECOMMENDED):** each area presented as a short, self-contained text block (label + the client's own plain-language description, per [[content-positioning-brief]] §3/§5 + a light audience tag), laid out in a loose, slightly asymmetric sequence rather than boxed cards — closer to a well-set list than a grid of tiles.
- **Asymmetric cards:** a middle ground — lightweight card-like containers but varied in size/weight rather than uniform; a reasonable fallback if pure editorial blocks feel too unstructured once real copy is in place.
- **Grouped cards (by audience):** rejected as primary structure — per [[content-positioning-brief]] §5, a hard audience-based grouping risks implying age boundaries per condition that haven't been validated.
- **Typography-led modules:** strong for the differentiation goal but risks under-serving fast scanning for six distinct items — better suited to distinguishing *one* item (oratória) than structuring all six.
- **Icon-assisted modules:** only worth using if the icon adds real scanning value (e.g., a small age-range or "online available" glyph) — **avoid** one generic icon per area purely for visual rhythm, and explicitly avoid cliché medical iconography (stethoscopes, brains, generic speech-bubble clip art), per this request's own instruction.

**RECOMMENDATION — the six areas as ordered, per [[content-positioning-brief]] §5:** atraso de linguagem, trocas na fala, distúrbios da fluência, motricidade orofacial, oratória, afasia — presented as editorial blocks in that scan order (inquiry-volume-based ordering only, per the client's explicit instruction that afasia must not read as lower-priority — same block size and treatment as the other five).

**Distinguishing oratória:** a distinct background tint (the muted terracotta accent from §4, used at low opacity) and/or a distinct typographic treatment (e.g., set as its own short module rather than blending into the clinical list's rhythm) — signals "related but different in kind" (coaching vs. treatment) without visually demoting it or pulling it into a separate navigational door (rejected in [[ux-strategy]] §9, Alternative 2).

**Mobile behavior:** full-width stacked blocks; oratória's tint/treatment must survive the stack — i.e., it should still visually read as distinct even as a single full-width block, not only when compared side-by-side with the others.

---

## 11. ABOUT / CREDENTIALS

Per [[content-positioning-brief]] §7/§10 (fully resolved by client validation), the complete credential set to present is: PUC-SP graduation; five postgraduate (Lato Sensu) specializations; two CFFa specialist registrations (Linguagem n. 9940/24; Fonoaudiologia Educacional n. 9144/23).

**RECOMMENDATION — avoid a dense résumé wall by establishing a clear three-tier hierarchy, not a flat bullet list of eight items:**

1. **CFFa Especialista registrations** — most prominent tier. These are the two *verifiable* (per F3, a public CFFa lookup exists), currently-registered specialist credentials, and the closest thing to a headline qualification. Set slightly larger/bolder than the other credential tiers, near the top of the block, with the registration numbers styled per §5 (understated, not accent-colored).
2. **Formação (PUC-SP)** — second tier. A single, clear line stating the degree and institution.
3. **Pós-Graduações (5 items)** — third, most compact tier. Presented as a tight list or a wrapped tag/label cluster (smaller type, lighter weight) rather than five equally bold bullet lines — this is what prevents the section from reading as a dense CV. No institution/year is required for these (confirmed not needed, per [[content-positioning-brief]] update).

**Combining photo + credentials:** the portrait sits directly adjacent to this three-tier credential block, with a short professional statement above it (no personal narrative, per F2) — one cohesive unit, not a bio paragraph followed by a separate formal list in a different visual register (directly implementing [[ux-strategy]] §9's "merge, don't separate" conclusion).

**Optional element:** a small, unobtrusive link out to the CFFa public verification source (once the specific URL is obtained, per [[content-positioning-brief]] §13) — placed near the two specialist registrations, styled as a quiet secondary link, not a button competing with the primary CTA.

---

## 12. HOW IT WORKS

Validated process ([[content-positioning-brief]] §8): WhatsApp → Consulta inicial/Entrevista → Avaliação → Processo terapêutico, with online-specific mechanics (Google Meet, link ~10 min before, registration form + commitment term) layered in where relevant.

**RECOMMENDATION — a numbered timeline, not cards.** Cards-per-step (Ebel's pattern for its method section, and a plausible default) would introduce a 4th distinct card-grid pattern on the page on top of Áreas de Atuação, FAQ, and the oratória module — too much of the same component. A connected-line numbered timeline reads as a *sequence* more legibly than a grid of boxes does, which matters specifically because the whole point of this section is to communicate "these steps happen in this order."

- **Desktop:** a horizontal timeline — four connected numbered points left to right, short label + one line of detail under each.
- **Mobile:** a vertical timeline — the same four points top to bottom, connected by a vertical line — **not** a horizontally-scrolling carousel, which is a known mobile UX anti-pattern (easy to miss steps, no clear affordance that more content exists off-screen).
- **Online mechanics placement:** attached as a compact, clearly-labeled note on the relevant step(s) (primarily "Consulta inicial") rather than duplicated as a fully parallel second 4-step track — keeps the section from doubling in length while still giving the online path the explicit detail [[content-positioning-brief]] §9 calls for. If the amount of online-specific detail proves too long for an inline note once real copy is drafted, a short expandable disclosure (same accessible pattern as the FAQ, §14) is the fallback — not a second timeline.
- **Visual weight:** minimal color, generous label text, small numbered dots/markers rather than large icon badges — keeps this section calm relative to Ebel's more decorated process-adjacent sections.

---

## 13. GOOGLE REVIEWS

Per [[content-positioning-brief]] §10 (CLIENT VALIDATION H1/H2): no consented on-site testimonials exist; a link to real Google reviews does.

**RECOMMENDATION — a small, honest badge/link module, not a testimonial-shaped section:**
- A compact inline element: a Google "G" mark or a simple, unfilled star-outline icon (never a filled/rated star graphic, which would visually imply a specific rating that hasn't been sourced) paired with link text (placeholder: `[Ver avaliações no Google]`).
- No star-rating graphic, no review count, no quoted excerpt — none of these exist as validated, sourceable data, and fabricating any of them (even a plausible-looking placeholder that could get treated as real) is explicitly prohibited (CLAUDE.md, [[content-positioning-brief]] §10).
- Visual weight proportionate to what exists: this should occupy noticeably less space and visual emphasis than Como Funciona or Áreas de Atuação — a single line or small module, not a full section with matching heavy padding.
- Placement: adjacent to or just after the credentials block (§11), reinforcing trust in the same visual "beat" rather than as its own major page section — consistent with [[ux-strategy]] §9's conclusion that this should be a lightweight trust signal, not a dedicated Reviews section.

---

## 14. FAQ

**RECOMMENDATION — accordion, single interaction pattern, accessible by default:**
- Standard accordion: question as a clickable/tappable header, answer collapsed by default, expand/collapse on click/tap.
- **Open/closed behavior:** allow only one item open at a time (cleaner visual state, avoids a long, unpredictable page length if several are opened at once) — a reasonable default, not a hard requirement.
- **Keyboard accessibility:** each question must be a real focusable, keyboard-operable control (native `<button>` or `<details>/<summary>`, not a `<div>` with a click handler) — Enter/Space toggles, visible focus state (§19).
- **Mobile usability:** full-width tap targets, minimum 44px touch height per question header, smooth (not abrupt) expand/collapse under ~200ms.
- **SEO/GEO implications:** each question marked up as a real heading (or otherwise semantically associated with its answer) so the content is crawlable even collapsed; paired with `FAQPage` structured data, per [[content-positioning-brief]] §14 — this is a content/technical implementation detail to carry into the Implementation phase, not something built here.
- **Motion:** a simple height/opacity transition only, no bounce or elaborate reveal — consistent with the restrained motion philosophy in §17.

---

## 15. CTA / WHATSAPP

WhatsApp is confirmed as the sole primary channel ([[content-positioning-brief]] §11, CLIENT VALIDATION E2) — one consistent visual treatment, used at all three repetition points (hero, after Áreas de Atuação, footer/Contato).

- **Button shape:** moderate rounded corners — softer than the current site's sharp edges, but deliberately **not** the full pill shape both Ebel and TinyEYE use, which helps this project's CTA read as its own brand rather than "another healthcare-site green pill button."
- **Size:** generously sized for a comfortable tap target on mobile (minimum 44×44px, per §19), with clear internal padding — never a cramped, text-only link pretending to be the primary action.
- **Icon usage:** a small WhatsApp glyph inside the button, paired with short label text — the icon carries the "this opens WhatsApp" affordance so the button color itself doesn't need to be literal WhatsApp green (§4).
- **Hover behavior:** a subtle fill-darken or elevation change only — no bounce, pulse, or scale gimmick.
- **Mobile behavior:** same visual treatment as desktop, full width or near-full-width within its container for easy tapping.
- **Sticky/floating mobile CTA — explicit analysis required by this brief:**
  - *In favor:* WhatsApp is confirmed as the *only* contact channel (no fallback if a visitor scrolls past all three in-page CTAs without tapping one); mobile is plausibly where most anxious-parent searches happen; a persistently reachable CTA reduces the real risk of a lost conversion on a long single-page homepage.
  - *Against:* a floating circular chat-bubble is exactly the visual pattern both Ebel and TinyEYE use — adopting it risks looking like a generic healthcare/SaaS template, works against the "premium, non-cluttered" objective in §2, and risks obscuring content on a small viewport.
  - **RECOMMENDATION:** use a restrained persistent element on **mobile only** — a slim bottom bar (not a circular floating bubble) with the same button styling as the in-page CTAs, icon + short label, appearing after the visitor scrolls past the hero. This captures the reachability benefit of a sticky CTA without adopting the chat-bubble convention explicitly being avoided. On **desktop**, do not add a floating element at all — rely on the three in-page CTA instances plus a CTA button in the sticky header nav (§16), which is sufficient reach on a larger viewport where scrolling past all four opportunities without noticing any of them is far less likely.

---

## 16. NAVIGATION

Recommended nav: **Início · Áreas de Atuação · Sobre · Contato** (per this request's scope). Note: FAQ is confirmed as a homepage section rather than a dedicated page ([[content-positioning-brief]] §4/§16), so it does not need its own top-level nav item — an in-page anchor link from the header (or simply reaching it via scroll) is sufficient, keeping the nav at a clean 4 items rather than reintroducing "Perguntas Frequentes" as a 5th item as earlier-phase documents had tentatively proposed.

- **Desktop navigation — RECOMMENDATION:** a slim horizontal header — logo/wordmark left, nav links center or right-of-center, a single CTA button at the far right, styled identically to the in-page CTA instances (§15).
- **Mobile navigation — RECOMMENDATION:** a hamburger/menu icon opening a simple full-screen or slide-in list of the 4 nav items; the CTA itself lives in the persistent bottom bar (§15), not inside the hamburger menu, so it's never more than one tap away regardless of menu state.
- **Sticky vs. non-sticky — RECOMMENDATION:** sticky header, but slim and minimal — explicitly **without** a bright announcement bar above it (rejecting both Ebel's red alert bar and TinyEYE's yellow bar, per §3 — there is no urgent, alert-worthy content that would justify one here).
- **CTA placement:** header CTA present at all times on desktop; on mobile, the bottom sticky bar (§15) serves this role instead of duplicating a header CTA in a cramped mobile header.
- **Scroll behavior — RECOMMENDATION:** the header may reduce its padding slightly on scroll for a subtle "settled" state, but should not hide-on-scroll-down — keeping the CTA/nav reachable at all times outweighs the minor space savings of an auto-hiding header.

---

## 17. MOTION / INTERACTION

**RECOMMENDATION — motion is used only where it aids comprehension, never for decoration:**
- **Page entrance:** a subtle, brief fade/slight-upward reveal (small translate distance, short duration) is acceptable for the hero on first load — optional, not required.
- **Section reveal on scroll:** the same subtle fade/slight-upward reveal per section as it enters the viewport — short duration, small distance, no staggered "cascade" effects, no parallax.
- **FAQ:** smooth height/opacity transition on expand/collapse only (§14) — no bounce.
- **Hover states:** subtle color or elevation change on interactive elements (buttons, links, accordion headers) — no scale/bounce/pulse animation anywhere on the page.
- **CTA feedback:** a simple, immediate visual state change on press/tap — no loading spinners or elaborate confirmation animation (WhatsApp opens externally; no in-page state to animate).
- **Navigation transitions:** instant — this is expected to be a single-page homepage with anchor links plus two short destination pages (Sobre, Contato), so no elaborate page-transition system is needed.
- **Explicitly avoid:** parallax scrolling, auto-playing carousels or sliders, scroll-jacking, gimmicky reveal effects (staggered letter animations, count-up numbers — doubly inappropriate here since there are no validated stats to count up to), and the floating pulsing chat-bubble pattern seen on both Ebel and TinyEYE.
- **Performance/accessibility:** every motion effect must be genuinely optional and must respect `prefers-reduced-motion` (§19) — reveal animations degrade gracefully to an instant, static state with no loss of content or function.

---

## 18. RESPONSIVE DESIGN

Responsive behavior is treated as **recomposition**, not simple stacking/shrinking, per this request's explicit instruction.

- **Desktop (~1200px+):** asymmetric multi-column hero (§9); editorial (not grid) Áreas de Atuação layout; horizontal timeline for Como Funciona; two-column About/Credentials; multi-column footer.
- **Tablet (~768–1024px):** the hero's asymmetric split may narrow but should remain side-by-side as long as both zones stay legible — if not, recompose to photo-above-text rather than shrinking both columns proportionally; Áreas de Atuação may move to a narrower single- or two-column editorial flow depending on how long the real copy turns out to be; the Como Funciana timeline may switch to vertical earlier than the mobile breakpoint if horizontal space becomes too tight for four labeled steps to stay legible.
- **Mobile (<768px):** full single-column stack throughout; hero recomposed message-first (§9); Áreas de Atuação as full-width editorial blocks with oratória's distinct treatment preserved (§10); Credentials reflow to a single column with the three-tier hierarchy preserved through type size/weight, never truncated or dropped (§11); Como Funciona as a vertical connected timeline, never a horizontal scroller (§12); FAQ as the same accordion pattern, full width (§14); CTA gains the persistent bottom bar (§15).
- **Explicit non-goal:** none of the above sections should read as "the desktop layout, shrunk." Each has a defined mobile-specific composition above, not a generic breakpoint-driven reflow.

---

## 19. ACCESSIBILITY

- **Contrast:** WCAG AA minimum across the board — 4.5:1 for body text, 3:1 for large text and meaningful UI elements — a direct, explicit fix to the current site's low-contrast hero text (§1).
- **Typography:** minimum 16px body text, relative (rem-based) sizing so text scales with user/browser settings, no body-weight text below regular (400) weight at small sizes.
- **Focus states:** a visible focus indicator on every interactive element (links, buttons, accordion headers, nav items) — never removed without a replacement, a common and serious accessibility regression to guard against explicitly during Implementation.
- **Keyboard navigation:** the entire site must be operable by keyboard alone — logical tab order, accordion and mobile menu both fully keyboard-testable (open/close/activate without a mouse).
- **Touch targets:** minimum 44×44px for every tappable element (CTA buttons, nav items, accordion headers, the mobile menu toggle).
- **Motion reduction:** all scroll-reveal and hover-adjacent motion must honor `prefers-reduced-motion`, degrading to instant, static states with zero loss of content.
- **Semantic hierarchy:** a single H1 (the hero headline), one H2 per major homepage section (Áreas de Atuação, Quem é Simone, Como Funciona, FAQ, etc.), H3 for sub-items (each area-of-practice block title, each FAQ question) — directly resolving the current site's style-driven, structure-poor heading usage flagged in [[seo-technical-audit]] §4.
- **Screen-reader considerations:** descriptive alt text for the portrait photo (e.g., "Simone Tavolaro, fonoaudióloga" rather than the current site's generic "Picture"/"Imagem" — FACT, [[current-site-audit]] §5); full ARIA attributes on the accordion (`aria-expanded`, `aria-controls`); the WhatsApp CTA labeled with its actual purpose (e.g., "Conversar no WhatsApp com Simone Tavolaro"), not a bare "Clique aqui."

---

## 20. DESIGN SYSTEM FOUNDATION

Preliminary tokens/concepts only — **no code, no values committed as final.**

- **Colors:** primary (deep teal), secondary/accent (muted terracotta, single accent — §4), a warm neutral scale (roughly 6–8 steps from warm off-white to warm charcoal), one dedicated CTA color, one focus-ring color (likely the primary teal at full saturation for visibility).
- **Typography:** a two-family system (serif display + sans body/UI, §5), a defined type scale (small credential/caption text up through a large hero display size), no more than 3 weights used per family (avoiding the current site's accidental three-typeface sprawl).
- **Spacing:** a consistent base-unit spacing scale (e.g., a small set of steps such as 8/16/24/32/48/64/96/128, conceptually) applied to all padding/margin/section-rhythm decisions — replacing ad hoc, inconsistent spacing.
- **Border radius:** one primary "soft" radius value used consistently across buttons, images, and any cards; a slightly larger radius reserved for large imagery (the hero portrait).
- **Shadows:** minimal — at most one subtle, low-opacity elevation level for the FAQ/card surfaces; no shadow on buttons (avoiding the "excessive shadows" anti-pattern named directly in CLAUDE.md).
- **Buttons:** one primary style (solid CTA fill, §15) and one secondary/ghost style (outline or text-link, for lower-emphasis actions like the Google Reviews link) — consistent padding, radius, and icon spacing across both.
- **Cards:** reserved for the FAQ accordion and the oratória module (§10) — consistent padding, radius, and a subtle tint/border, no heavy shadow.
- **Section containers:** a consistent max-width + horizontal padding token, a consistent large vertical padding token per section, alternating warm-neutral background tints (§4/§7) rather than the current site's gradient washes.
- **Icon style:** if used at all, a single minimal line-icon style with one consistent stroke weight — never a mixed set of icon styles, and never generic clip-art-style medical iconography.
- **Form/input style (speculative, not currently needed):** no forms are planned per [[content-positioning-brief]] (WhatsApp remains the sole channel, E2) — but if any future input is ever added, it should inherit the same warm-neutral background, soft radius, and teal focus-ring system defined above for consistency.

---

## 21. BENCHMARK LEARNINGS

| Benchmark | Pattern observed | Useful for Simone? | Why | What NOT to copy |
|---|---|---|---|---|
| Simone Ebel | Repeated single-CTA (WhatsApp) at multiple points; sticky header with CTA | Yes | Directly supports the confirmed 3-repetition CTA strategy ([[content-positioning-brief]] §11) | The literal green pill button, the exact repetition cadence/placement pixels |
| Simone Ebel | Bold stat-callout hero bullets (+30 anos, +2.000 pacientes) | No | No comparable validated stats exist for Simone; inventing any would violate CLAUDE.md outright | The stat-callout pattern itself, and its bold-orange numeral styling |
| Simone Ebel | Red/orange top announcement bar | No | Alert-styled banners create urgency/alarm, contrary to the "calm" objective (§2, §3); no content here is alert-worthy | The banner pattern, its color, its persistent-dismiss UI |
| Simone Ebel | 3×2 icon-card grid for method/services | Partially | Confirms icon-cards *can* work for service presentation, but risks the "generic cliché" outcome this brief explicitly wants to avoid for six areas that need differentiated treatment | The specific card styling, icon set, and uniform-grid treatment for all 6 areas |
| Simone Ebel | Floating chat bubble | No | Reads as a generic SaaS/chat-widget cliché; works against "premium, non-cluttered" | The circular floating bubble pattern itself |
| TinyEYE | Explicit numbered "How It Works" step flow | Yes (structurally) | Directly supports the recommended Como Funciona timeline (§12) | TinyEYE's bright color system, cutout child photography, and multi-audience visual branding |
| TinyEYE | Explicit, detailed online-session mechanics content | Yes (structurally) | Confirms that remote-delivery content benefits from more explicit detail, supporting §9/§12's online-mechanics treatment | The pricing-forward framing and marketplace "smart matching" language (not applicable to a solo practitioner) |
| TinyEYE | Multi-door audience-first navigation (For Families/Schools/Therapists) | No | Solves a multi-stakeholder B2B2C problem Simone doesn't have (already rejected in [[ux-strategy]] §9) | The mega-nav dropdown pattern and audience-door hero buttons |
| TinyEYE | Persistent chat widget | No | Same "SaaS-cliché, non-premium" concern as Ebel's chat bubble | The chat-bubble UI pattern |
| Portland Speech Clinic | Warm, first-person bio before formal credentials | Partially | Confirms warmth-before-formality sequencing is a real, evidence-backed pattern — but Simone has explicitly declined a personal narrative (F2) | The first-person informal voice itself (not available here); do not invent a substitute narrative |
| Portland Speech Clinic | Plain-language explanation of service terminology alongside clinical terms | Yes | Directly supports the plain-language-first content principle already validated ([[content-positioning-brief]] §15) | Nothing — this is a content pattern, safely adaptable |
| NYCSLP | Condition-focused service blocks (not a flat bullet list) | Yes | Directly supports the recommended Áreas de Atuação editorial-block treatment (§10) | The specific visual styling of NYCSLP's blocks |
| NYCSLP | Numbered 3-step "what happens when you contact us" | Yes (structurally) | Directly supports Como Funciona's numbered-step approach (§12) | NYCSLP's specific visual treatment/iconography |
| Psico Vila Olímpia | Credential/registration number displayed next to practitioner name | Yes | Directly supports the CFFa registration display recommended in §11 | The multi-professional team-grid pattern (not applicable — Simone is a solo practitioner) |
| Psico Vila Olímpia | Substantial FAQ (10 questions) near the end of the page | Yes (structurally) | Supports the recommended FAQ section placement and depth (§14, [[content-positioning-brief]] §12) | The specific question set and visual card treatment |
| Juliana Mori | Segmenting "for patients" vs. "for professionals" value propositions | Not currently applicable | No peer-supervision/professional-training service has been validated for Simone | N/A — no visual pattern to avoid; simply not relevant content-wise |
| Chatterboxes | Form-first primary CTA (instead of WhatsApp) | No | Simone has explicitly confirmed WhatsApp alone as the sole channel (E2); a form-first CTA would contradict validated client direction | The lead-capture-form-as-primary-CTA pattern entirely |
| Current Tavolaro site | Real photography, single CTA, no fabricated claims | Yes (already the foundation) | These are genuine strengths to preserve, not benchmark patterns to import — see [[discovery-summary]] §3 | The execution: gradient-wash backgrounds, box-framed images, inconsistent typography, low-contrast text |

---

## 22. FINAL RECOMMENDATION

### RECOMMENDED DESIGN DIRECTION

- **Visual concept:** a calm, premium, editorial-leaning practice site — warmer and quieter than Ebel's conversion-optimized urgency, more restrained and adult than TinyEYE's playful marketplace branding, and a substantial execution upgrade on the current site's good instincts (real photo, honest content, single CTA) without discarding any of them.
- **Hero direction:** Direction C, Hybrid portrait + positioning (§9) — an asymmetric composition giving equal visual weight to the positioning message and the real portrait, avoiding both a photo-dominant "headshot site" and a photo-light "editorial only" hero.
- **Color strategy:** evolve, don't replace, the existing logo's warm-coral + deep-teal instinct — deep desaturated teal as primary, muted terracotta as a single restrained accent, warm neutral backgrounds replacing the current gradient washes, one dedicated CTA color, full WCAG AA contrast throughout (§4).
- **Typography strategy:** a serif (e.g., Fraunces) + sans (e.g., Inter/Work Sans) pairing — warm, editorial headlines over clean, highly legible body/UI type — deliberately differentiated from both benchmarks' sans-only systems (§5).
- **Photography strategy:** the existing portrait as the sole, consistently-cropped hero and trust-building image, treated with soft framing and no color overlays; the stray real-estate photo and the WhatsApp screenshot-as-content both retired (§6).
- **Layout philosophy:** asymmetric, editorial, generously spaced — a ~1200px max content width, sparing card usage, one consistent moderate border-radius, whitespace treated as a trust signal (§7).
- **Component philosophy:** one CTA style used everywhere it appears; editorial blocks (not a uniform grid) for Áreas de Atuação, with oratória visually distinguished; a numbered timeline (not cards) for Como Funciona; an honest, small badge (not a section) for Google Reviews; an accessible accordion for FAQ (§10–§15, §20).
- **Motion philosophy:** subtle, optional, purposeful only — short reveal-on-scroll, simple hover feedback, an accessible accordion transition, and nothing else; full respect for reduced-motion preferences (§17).
- **Mobile philosophy:** genuine recomposition per section (not shrunk desktop layouts), message-first hero ordering, a vertical process timeline, and a restrained bottom CTA bar (not a floating chat bubble) to preserve reachability of the sole contact channel without adopting a cliché pattern (§9, §12, §15, §18).

---

## 23. IMPLEMENTATION GATE

**DESIGN DIRECTION APPROVAL REQUIRED**

Implementation must **not** begin until this Design Direction document has been reviewed and explicitly approved by the client. No framework, package, component, or production CSS has been created in this phase, and none should be created until that approval is given, per the DISCOVERY → UX STRATEGY → INFORMATION ARCHITECTURE → **DESIGN SYSTEM** → IMPLEMENTATION workflow defined in CLAUDE.md.
