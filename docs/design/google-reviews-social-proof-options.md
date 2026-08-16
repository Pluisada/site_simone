# Google Reviews / Social Proof — Design Exploration

**Status:** DESIGN EXPLORATION ONLY. No code has been written or modified for this
document. Nothing here is approved for implementation until a direction is chosen.

**Trigger:** New client strategic input — Google Reviews are reported to be the
**main trust/conversion driver and a major local-market differentiator**. The
current treatment (a single inline link inside "Quem é Simone") under-represents
that weight.

**Hard constraints carried through every option below** (restated from the brief,
because they gate every visual choice that follows):

- No Google API integration, no dynamic review feed, no third-party widget.
- No review excerpts, no patient names, no dates.
- No fabricated rating, review count, or star graphic. Any numeric value is a
  `[PLACEHOLDER]` until the client supplies and validates it — see §8.
- No new design tokens. Colors, type, spacing, radius, CTA style all come from
  the approved Design System (cited by section below).
- No card, no badge/pill, no shadow, no gradient — none of those exist in the
  approved system outside the two named exceptions (§33), and this module is
  not one of them unless explicitly proposed as a change (flagged where relevant).
- No continuously moving marquee or auto-scrolling reviews. Static by default.

---

## 1. Strategic rationale for elevating Google Reviews

This isn't a new idea introduced from nowhere — it's a known, already-validated
signal that this phase raises in priority:

- **[[client-validation]] H1** (Discovery): *"tenho vários depoimentos da minha
  empresa no Google e seria interessante chamar a atenção para isso e
  eventualmente redirecionar para essa página das avaliações."* The client asked
  for exactly this — visible attention on Google Reviews, redirecting out to the
  real listing — before this phase even started.
- **[[content-positioning-brief]] §5 / §16**: reviews were scoped as a
  **"link/badge to existing Google reviews"**, explicitly *not* a full
  testimonials section, because no on-site-consented testimonial text exists.
  That constraint hasn't changed. What changed is how much visual weight the
  link/badge is allowed to carry.
- **[[benchmark-simone-ebel]] §8–9**: the strongest competing benchmark reviewed
  uses numeric trust stats and four attributed testimonials in-page — content
  Tavolaro cannot replicate (no consented testimonials, no validated numbers).
  The lesson that *is* transferable is placement and prominence: credibility
  signal shown early, before the visitor has to dig for it — not the fabricated
  content itself.
- **CLAUDE.md**: no rating, count, excerpt, or name may be invented under any
  circumstance. This is non-negotiable and shapes every alternative below —
  the entire design problem is "how do we make an *unquantified* trust signal
  feel weighty," not "how do we design a rating widget."

So the brief is precise: **elevate placement and visual confidence, not
content.** All three alternatives compete only on how much *structural* and
*typographic* weight they give an honest, numberless statement — never on
what that statement claims.

---

## 2. Alternative A — Social Proof Highlight

**Concept:** *"Uma prova social clara antes das Áreas de Atuação."* A compact,
self-contained section directly below the Hero. Eyebrow → Fraunces heading →
one-line credibility statement with the Google mark → link out.

```
┌─────────────────────────────────────────────┐
│  AVALIAÇÕES                                  │  ← eyebrow (existing token)
│                                               │
│  O que dizem sobre o atendimento             │  ← Fraunces h2, ~ same scale
│                                               │     as other section headings
│  G  Avaliações reais de pacientes no Google  │  ← Google mark (existing
│                                               │     unfilled-star treatment,
│  Ver avaliações no Google →                  │     §23) + one restrained
│                                               │     sentence, no numbers
└─────────────────────────────────────────────┘
```

1. **Visual concept** — reads as a small, full section in its own right (eyebrow
   + heading + body + link), the same anatomy as Áreas de Atuação or Como
   Funciona, just much shorter. It is the first section-level acknowledgment
   the page gives to reviews.
2. **Approximate vertical size** — desktop: comparable to the Hero's credibility
   line block, roughly a third to half of a standard section (`--space-2xl`
   to `--space-3xl` top/bottom padding, no image, no grid). Mobile: shorter
   still, single column, 3–4 short lines of content.
3. **Relationship to Hero** — sits immediately after it, before any content
   section starts. Reads as an extension of the Hero's trust-building, not yet
   "content" — a bridge, but a *named* one (it has its own eyebrow and heading,
   unlike a band).
4. **Relationship to Áreas de Atuação** — a clean, full section boundary; Áreas
   starts fresh afterward exactly as it does today after the Hero. No visual
   competition, because A has no image and a different background rhythm slot.
5. **Typography treatment** — identical to every other section: eyebrow
   (`--font-size-eyebrow`, uppercase, `--color-text-muted`), heading in
   Fraunces at the standard section h2 scale used by Áreas/Sobre/Como
   Funciona/FAQ, body copy in Inter at `--font-size-body`.
6. **Color/background** — `--color-bg` (cream), continuing directly off the
   Hero's cream, OR `--color-bg-alt` (sand) if you want it to read as a
   distinct beat before Áreas resumes cream. Either fits the existing
   alternation without adding a token.
7. **Use of terracotta** — none required. Could optionally reuse the same
   `border-inline-start: 2px solid var(--color-terracotta)` treatment already
   used for the Hero's credibility line and the online-mechanics note in Como
   Funciona — consistent, not novel.
8. **Google visual treatment** — the existing icon from §23 (18px unfilled
   star-outline or a small "G" mark), same restrained sizing, just set at
   heading-adjacent scale rather than tucked into a paragraph.
9. **CTA/link treatment** — secondary/ghost link per §15, identical style to
   the current "Veja as avaliações no Google" link — larger context, same
   visual weight (no new button style, no primary-CTA color on it — that stays
   reserved for WhatsApp per §33's "no second competing button" rule).
10. **Desktop behavior** — single centered or left-aligned column, matching the
    Container width used elsewhere (`--container-max` / `--container-text` for
    the body line), no grid needed since there's no image.
11. **Mobile behavior** — stacks naturally since there's no multi-column
    composition to begin with; identical treatment top to bottom.
12. **Advantages** — cheapest to build (reuses every existing token and the
    existing link style, no new visual language); unambiguous, honest; doesn't
    risk overstating unvalidated content; fast to implement if approved as-is.
13. **Disadvantages** — for a signal the client now says is a **major
    differentiator**, a heading + one sentence + a link may still read as
    modest — not far in weight from the current inline treatment, just moved
    to its own section. Risks under-delivering on the new strategic ask.
14. **Risk of looking generic** — low. It's just section anatomy the page
    already uses elsewhere, applied to a new topic — nothing template-like
    about it.
15. **Conversion/trust value** — moderate. Visible and dedicated, but no
    stronger a signal type than what's already proven to work in "Quem é
    Simone" — same sentence, more room around it.
16. **Suitability for Simone** — safe, low-risk, but arguably too conservative
    given the client's own framing ("main trust/conversion driver").

**Classification: SHOULD HAVE** — a legitimate, low-risk option; likely the
right *fallback* if B is judged too rich, but on its own may not fully answer
the brief's ambition.

---

## 3. Alternative B — Review Snapshot

**Concept:** A richer editorial module — still text-only, still no fabricated
numbers — that gives the Google signal enough visual mass to justify being
called a differentiator, while leaving clean slots for real numbers once
validated.

```
┌───────────────────────────────────────────────────────────┐
│  CONFIANÇA                                                 │  eyebrow
│                                                              │
│  Google              Avaliações reais, de pacientes reais  │  Fraunces h2,
│  (icon)                                                     │  larger than A
│                                                              │
│  [RATING, IF VALIDATED]   [REVIEW COUNT, IF VALIDATED]      │  optional,
│  ────────────────────────────────────────────────────────  │  placeholder-
│  "Simone é reconhecida por pacientes que recomendam seu     │  gated row
│  atendimento no Google — veja as avaliações completas."     │  credibility
│                                                              │  statement
│  Ver todas as avaliações no Google →                        │  link
└───────────────────────────────────────────────────────────┘
```

1. **Visual concept** — a genuine editorial "module": eyebrow, a two-part
   heading zone (Google reference set beside/above a short positioning
   statement), an optional data row that is entirely absent when unvalidated,
   a one- to two-sentence credibility statement (never a quote — a statement
   *about* the reviews, not one lifted *from* them), and the link. The data
   row is the only element that changes shape once real numbers exist —
   everything else is stable, final-quality copy today.
2. **Approximate vertical size** — closer to a normal section (comparable to
   Como Funciona's header block), but still with no photography and no grid,
   so meaningfully shorter than Áreas or Sobre. Desktop: one clear section
   band. Mobile: 5–7 short lines plus the link.
3. **Relationship to Hero** — a stronger beat than A: it reads as the second
   thing the visitor is told about Simone, right after "who she is and what
   she treats," giving trust equal early billing with the value proposition.
4. **Relationship to Áreas de Atuação** — still a clean section break (own
   background band, own padding), but because B carries more visual mass than
   A, the transition into Áreas needs the alternating background to do real
   work here — recommend `--color-bg-alt` for B specifically, so Hero
   (cream) → B (sand) → Áreas (cream) reads as three distinct beats, not a
   single long cream stretch broken only by a heading.
5. **Typography treatment** — eyebrow + Fraunces heading as in A, but the
   optional rating/count row (when populated) should use the same restrained
   `tabular` numeral treatment already established for credential numbers
   (§21's `.cffa__number` pattern: small, muted, tabular, **never** styled as
   an accent-colored statistic callout — that rule exists precisely so a
   number here doesn't suddenly look like a marketing stat).
6. **Color/background** — `--color-bg-alt` (sand), as above, for contrast
   against the Hero and to visually separate this module from Áreas which
   resumes cream.
7. **Use of terracotta** — a legitimate, narrow use case: the Google mark or
   the data-row divider could carry a small terracotta accent (`border-color:
   var(--color-terracotta)`, matching the existing postgrad-separator dot
   treatment in §21), signaling "this is worth noticing" without introducing a
   filled terracotta panel (Oratória remains the *only* tinted module per §20).
8. **Google visual treatment** — same icon family as §23, but sized and
   positioned as a heading-adjacent mark (next to "Google", not buried in a
   sentence) — still never a full multi-color "G" logo lockup, still a single
   restrained glyph, consistent with the rest of the system's icon economy
   (chevron, WhatsApp glyph, star-outline — always one color, always small).
9. **CTA/link treatment** — same secondary/ghost link as A and as today's
   existing module, just set at a more prominent type size appropriate to a
   section-level module. Still explicitly *not* the primary WhatsApp button —
   this must never compete with or dilute the single primary CTA (§15, §33).
10. **Desktop behavior** — two-zone layout is plausible (Google mark +
    heading on one side, the optional data row + statement on the other) using
    the same asymmetric column language already established (7fr/5fr or
    similar), but a single-column centered treatment works equally well and
    is lower-risk. Both stay within existing grid tokens.
11. **Mobile behavior** — single column, data row (if present) stacks as two
    small labeled values side by side (small width, no wrapping issue since
    each is a short number), everything else stacks normally.
12. **Advantages** — visually answers the brief ("major differentiator")
    without inventing content; the placeholder-gated data row means this
    module doesn't need a second design pass when real numbers arrive — it
    upgrades in place; reuses more of the credential-number visual language
    than A, keeping it in-family rather than novel.
13. **Disadvantages** — more surface area to get wrong (an empty data-row slot
    needs a deliberate "omit entirely, don't leave a gap" rule, not just a
    blank space); slightly more implementation and copywriting effort than A;
    if the eventual rating/count never gets validated, the module needs to
    still read as complete without them (must be designed to look intentional
    both with and without the data row — this is solvable, but is a real
    constraint the layout must honor from day one).
14. **Risk of looking generic** — low-to-moderate. The main risk is the data
    row: if built carelessly it can drift toward a generic "★ 4.9 (120)"
    SaaS-review-widget look. Mitigated directly by using the credential-number
    typographic treatment (muted, tabular, no accent color, no star glyph
    filled-in) instead of a rating-widget aesthetic — the brief for the
    module becomes "editorial data mention," not "review badge."
15. **Conversion/trust value** — high. Matches the client's own framing of the
    signal's importance, without overclaiming.
16. **Suitability for Simone** — strong. Premium and editorial in tone, room to
    grow into real numbers later, nothing to walk back if validation is slow.

**Classification: MUST HAVE** — this is the option that actually matches the
weight the client just assigned to the signal; the other two are its
conservative (A) and minimal (C) siblings.

---

## 4. Alternative C — Editorial Trust Band

**Concept:** A very thin horizontal bridge — closer to a "credential strip"
than a section — between Hero and Áreas.

```
┌──────────────────────────────────────────────────────────┐
│   G   Avaliações reais no Google — veja o que dizem  →   │
└──────────────────────────────────────────────────────────┘
```

1. **Visual concept** — one line (icon + statement + link, or icon + link),
   set inside a hairline-bordered band, no eyebrow, no heading — the least
   "section-like" of the three.
2. **Approximate vertical size** — smallest by a wide margin: comparable to a
   single table row or the Contact section's `.details__item` height —
   roughly `--space-lg` to `--space-xl` total block height, nowhere close to
   a full section.
3. **Relationship to Hero** — reads as a coda to the Hero rather than a new
   topic — closer to how the credibility line already sits inside the Hero
   itself, just promoted one level to span full container width.
4. **Relationship to Áreas de Atuação** — minimal transition cost; Áreas
   effectively starts almost immediately, since the band consumes so little
   vertical space.
5. **Typography treatment** — a single line at `--font-size-body` or
   `--font-size-small`, `--font-weight-medium`, no separate heading scale
   needed.
6. **Color/background** — could sit directly on cream with only a
   `border-block` hairline top and bottom (`--color-border`), no separate
   background band at all — the lightest-touch option of the three.
7. **Use of terracotta** — optional single accent dot or short rule, same
   restrained pattern as elsewhere; easy to omit entirely without loss.
8. **Google visual treatment** — the existing §23 icon at its current small
   scale, unchanged from today's module.
9. **CTA/link treatment** — the entire band could be one clickable region (a
   full-width link), or just the trailing arrow/text — either keeps the
   secondary/ghost link style, never a button.
10. **Desktop behavior** — full container width, single row, content
    horizontally centered or left-aligned with the same gutter as every
    other section.
11. **Mobile behavior** — same content, same one-to-two-line treatment;
    trivially responsive since there's no layout to break.
12. **Advantages** — the most restrained, least risk of ever reading as
    "salesy" or SaaS-like; cheapest to build; easiest to keep accessible
    (one link, one line, nothing to trip a screen reader on).
13. **Disadvantages** — directly in tension with the brief's premise. The
    client said this signal is a *major differentiator* and the *current*
    treatment (small inline link) is *already* "too discreet." A thin band is
    structurally the same idea as today's module, only relocated and
    slightly widened — it does not meaningfully answer "make this more
    prominent."
14. **Risk of looking generic** — very low, but for the wrong reason: it's
    restrained to the point of being easy to miss, not distinctive.
15. **Conversion/trust value** — low-to-moderate. Better placement (earlier,
    full-width) than today, but not enough added visual weight to function as
    a genuine differentiator statement.
16. **Suitability for Simone** — a safe minimum, not a real answer to the
    strategic input. Better suited as a *secondary* echo elsewhere on the
    page (see §7) than as the primary elevation this phase asked for.

**Classification: OPTIONAL** — worth keeping in the toolkit (e.g., as the
lighter-weight verification echo near Sobre/Credenciais, §7), but on its own
it does not satisfy the brief.

---

## 5. Comparison table

| | A — Social Proof Highlight | B — Review Snapshot | C — Editorial Trust Band |
|---|---|---|---|
| Vertical weight | Medium-small | Medium | Minimal |
| Structural status | Own section | Own section | Sub-section bridge |
| Data-row for future rating/count | No | Yes (placeholder-gated) | No |
| Terracotta use | Optional, minor | Optional, small accent | Optional, minor |
| Background | cream or sand | sand (recommended) | cream, hairline only |
| New visual language required | None | Reuses credential-number treatment | None |
| Risk of looking generic | Low | Low–moderate (mitigated) | Very low |
| Answers "major differentiator" brief | Partially | Yes | No |
| Build effort | Lowest | Moderate | Lowest |
| Classification | SHOULD HAVE | **MUST HAVE** | OPTIONAL |

---

## 6. Recommended alternative

**Alternative B — Review Snapshot**, placed directly after the Hero (before
Áreas de Atuação), on `--color-bg-alt` to create a clear three-beat opening
(Hero cream → Social Proof sand → Áreas cream).

Reasoning: the client didn't just ask for more visibility — she characterized
this signal as her *main* trust driver. Alternative A is a safe, cheap
upgrade, but it is only a relocation of what already exists, not a change in
weight. Alternative C is honestly a regression against the brief's own
framing ("too discreet" was said about something structurally similar to C).
B is the only option that gives the signal genuine section-level standing
*and* is built to absorb real numbers later without a second design pass —
the placeholder-gated data row means today's version (no numbers) and a
future validated version (real rating/count) are the same design, not two
different ones.

If stakeholder appetite turns out to be lower than this document assumes, A
is the correct fallback — not C, which under-delivers on the stated brief
regardless of budget.

---

## 7. Recommendation on the existing About/Credentials Google link

Of the three options offered in the brief (replace / coexist / absorb-with-
lighter-echo), the recommendation is:

**C — absorb its function into the new module, but keep a lighter verification
link in About/Credentials.**

Rationale:
- A visitor who reaches "Quem é Simone" after already seeing the new Social
  Proof module earlier in the page doesn't need the full module repeated —
  but removing all trace of it there breaks a pattern this page uses
  everywhere else: **every trust signal introduced early is echoed, lightly,
  near the credentials block** (the CFFa verification link follows the same
  logic, §21).
- Practically: keep the existing §23 treatment *exactly as it is today*
  (icon + "Veja as avaliações no Google" link, no panel, no card, content-
  hugging) inside About/Credentials. It costs nothing, stays consistent with
  §23 as written, and gives a second, low-friction exit point for visitors
  who scroll straight past the top of the page.
- Do **not** duplicate the new module's heading/statement copy inside About —
  that would read as repetitive rather than reinforcing. The About instance
  stays exactly what it is now: a quiet, secondary link.

This is a "coexist, but rebalance emphasis" outcome — not a straight A/B/C
pick from the brief's menu, because the honest answer is a hybrid of B
("coexist") and C ("absorb the *emphasis*, not the *presence*").

---

## 8. Required data still needing validation

None of the following may be added to any alternative until the client
supplies and confirms them (per CLAUDE.md and content-positioning-brief §16):

- Star rating (e.g., 4.9) — currently unknown, unvalidated.
- Review count (e.g., "120 avaliações") — currently unknown, unvalidated.
- Any quoted review text — never permitted without explicit written patient/
  reviewer consent, which does not currently exist for anyone.
- Patient or reviewer names — same constraint as above.
- Review dates or recency claims ("avaliações recentes") — would need a
  live/refreshed data source to stay honest, which is explicitly out of scope
  for this phase (no API, no dynamic feed).
- The exact Google Reviews / Business Profile URL to link to — confirm it is
  the same `contact.mapsUrl` already validated in `client-validation H1` and
  currently used in `src/data/site.ts`, or whether a more direct
  reviews-specific URL exists and is preferred.

Until validated, Alternative B's data row is simply not rendered — its layout
must look complete and intentional without it (see §3, point 13).

---

## 9. Desktop / mobile considerations

- All three alternatives use only breakpoints and grid ratios already
  established elsewhere on the page (single-column mobile/tablet below
  1024px per §32, optional two-zone asymmetric grid at desktop) — no new
  breakpoint behavior is introduced.
- The recommended Alternative B's optional data row, if populated later,
  should stack as two short labeled values on mobile rather than wrap — same
  pattern as any two-item inline list elsewhere in the system.
- None of the alternatives introduce a new touch target, animation trigger,
  or interactive state beyond the existing secondary/ghost link pattern —
  accessibility posture (focus ring, 44px+ target, no color-only state) is
  inherited for free from §15/§30.
- Per the brief, no alternative proposes motion. If a future iteration wants
  a subtle entrance reveal, it must follow the existing pattern used
  elsewhere (`@media (prefers-reduced-motion: no-preference)`-gated, one-time
  entrance only, never a loop) — not introduced here.

---

## 10. Implementation implications (for a future phase — not this one)

Flagged only so the eventual build phase isn't surprised:

- A new component would be needed (e.g., `SocialProof.astro`), inserted in
  `index.astro` between `<Hero />` and `<PracticeAreas />` — no such file
  exists yet and none was created for this exploration.
- A new data file (e.g., `src/data/social-proof.ts`) would hold the
  credibility statement text and the optional rating/count fields as
  `null`-until-validated, following the exact pattern already used for
  `contact.hoursSpec` and `credentials.verificationUrl` in `src/data/site.ts`
  — nullable, never a plausible-looking placeholder.
- `src/lib/schema.ts` is explicitly **not** touched by this — no
  `aggregateRating` or `review` structured data, matching the file's existing
  hard prohibition, regardless of which alternative is chosen.
- The existing About/Credentials Google link (§23) requires no code change
  under the §7 recommendation — it stays as-is.

---

## Executive summary

Three alternatives were explored for elevating Google Reviews from a small
inline link to a more prominent early-page trust signal, without inventing
any rating, count, review text, or name, and without building any live
integration:

- **A — Social Proof Highlight**: a compact, honest section reusing existing
  patterns exactly. Safe, cheap, but likely under-delivers against the
  client's "major differentiator" framing. **SHOULD HAVE.**
- **B — Review Snapshot**: a fuller editorial module with a placeholder-gated
  slot for a real rating/count once validated, an honest credibility
  statement (never a quote), and a link out — sized to actually match the
  weight the client now assigns this signal, while staying static, card-free,
  and within every existing token. **MUST HAVE — recommended.**
- **C — Editorial Trust Band**: the thinnest possible bridge between Hero and
  Áreas. Elegant and low-risk, but structurally too close to what the client
  already called "too discreet" — better suited as a secondary pattern than
  the primary answer. **OPTIONAL.**

The existing small Google link inside "Quem é Simone" should stay in place
as a lighter secondary echo, not be duplicated or removed — a hybrid of the
brief's "coexist" and "absorb" options.

Nothing has been built. This document is a decision aid only.

---

RECOMMENDED SOCIAL PROOF DIRECTION

**Alternative B — Review Snapshot**, placed between Hero and Áreas de
Atuação on `--color-bg-alt`, with a placeholder-gated (currently hidden)
rating/count row, an honest non-quoted credibility statement, and a link to
the client's validated Google listing — because it is the only option sized
to match the client's own characterization of Google Reviews as her main
trust driver, while inventing zero content and requiring no redesign when
real numbers are eventually validated. The existing About/Credentials link
stays in place as a lighter, secondary echo.
