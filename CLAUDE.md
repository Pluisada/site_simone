CLAUDE.md

Project

Project name: Landpage Simone

Purpose: Complete redesign of the website/landing page for speech-language pathologist Simone Tavolaro.

Current website:
http://www.fono-simonetavolaro.com/

Primary benchmarks are:
https://www.pac.fonosimoneebel.com.br/
https://tinyeye.com

Both websites are a benchmark for UX, information architecture, user journey and conversion structure only.

They are NOT a source of content.

Do not copy its:

* text;
* images;
* testimonials;
* claims;
* numbers;
* branding;
* visual identity.

⸻

Current Project Phase

The project is currently in:

IMPLEMENTATION — PHASE 1 COMPLETE (technical foundation + design system)

Completed and approved: Discovery · UX Strategy · Client Validation · Content & Positioning · Design Direction · Design System · Technical Architecture.

Phase 2 (homepage sections) requires explicit approval before it begins.

Current workflow:

DISCOVERY ✅
→ UX STRATEGY ✅
→ INFORMATION ARCHITECTURE ✅
→ DESIGN SYSTEM ✅
→ IMPLEMENTATION ◀ current (Phase 1 done)
→ VISUAL QA
→ SEO/GEO
→ PERFORMANCE
→ FINAL QA
→ DEPLOYMENT

⸻

Critical Rules

1. Never invent factual information

Do not invent:

* professional credentials;
* degrees;
* certifications;
* specialties;
* years of experience;
* patients;
* testimonials;
* clinical results;
* statistics;
* addresses;
* phone numbers;
* opening hours;
* medical claims;
* treatment outcomes.

If information cannot be verified, mark it:

[VALIDATE WITH CLIENT]

⸻

2. Source hierarchy

When information conflicts, prioritize sources in this order:

1. Current official website
2. Official professional sources
3. Official social/professional profiles
4. Reliable public professional databases
5. Other public sources

Never silently replace information from the official website with information from a third-party source.

Conflicts must be documented.

⸻

3. Distinguish information types

When performing research, clearly distinguish:

FACT
Information directly supported by a reliable source.

INFERENCE
A reasonable conclusion based on available information.

RECOMMENDATION
A strategic or design suggestion.

VALIDATE
Information requiring confirmation.

Never present an inference or recommendation as a fact.

⸻

Design Philosophy

The final website should communicate:

* professionalism;
* credibility;
* expertise;
* trust;
* human connection;
* sophistication;
* clarity;
* contemporary design.

Desired visual positioning:

Premium + Human + Professional + Contemporary

Avoid:

* generic AI-generated appearance;
* generic WordPress-template appearance;
* excessive gradients;
* excessive glassmorphism;
* excessive shadows;
* excessive animations;
* generic stock photography;
* excessive cards;
* visual clutter.

⸻

UX Principles

Prioritize:

1. Clarity
2. Trust
3. User experience
4. Conversion
5. Performance
6. SEO/GEO
7. Visual aesthetics

Every section must have a clear purpose.

The visitor should quickly understand:

* who Simone is;
* what she does;
* who she helps;
* what services she provides;
* why she should be trusted;
* what the next step is.

⸻

Conversion

Define a clear primary CTA during the Discovery phase.

Do not create multiple competing primary CTAs.

The final website should have a clear user journey:

Problem / Need
→ Understanding
→ Professional
→ Services
→ Credibility
→ Trust
→ CTA

⸻

Healthcare Communication

Because this is a healthcare-related professional website:

Avoid unsupported or exaggerated claims such as:

* guaranteed results;
* cure;
* fastest treatment;
* 100% effective;
* best professional;
* number-one professional.

Do not create clinical claims without reliable supporting information.

⸻

Simone Ebel Benchmark

Use the Simone Ebel website as a benchmark for:

* information architecture;
* navigation;
* section sequencing;
* user journey;
* CTA positioning;
* credibility presentation;
* FAQ structure;
* conversion principles.

Do not copy its content or visual identity.

⸻

Technical Principles

When implementation begins:

* prefer clean and maintainable architecture;
* use reusable components;
* minimize unnecessary dependencies;
* prioritize performance;
* prioritize accessibility;
* prioritize responsive design;
* use semantic HTML;
* optimize images;
* avoid unnecessary JavaScript;
* validate the final result in a real browser.

Do not select a framework merely because it is popular.

Choose technology based on:

performance + simplicity + maintainability + quality.

⸻

Frontend Verification

When frontend implementation begins, use an iterative verification loop:

1. Build
2. Run development server
3. Open in browser
4. Inspect visually
5. Check console/errors
6. Check responsive behavior
7. Correct issues
8. Re-test

Do not consider a frontend task complete merely because the code compiles.

⸻

Browser Verification

When browser integration is available, use it for:

* visual inspection;
* responsive inspection;
* DOM inspection;
* console errors;
* network errors;
* interaction testing.

Screenshots should be used when they improve visual validation.

⸻

Research

Research should be documented.

Whenever external sources are used, record:

* source;
* URL;
* information obtained;
* reliability;
* whether it can be used in the final website.

⸻

Project Documentation

Discovery documentation should be stored under:

docs/discovery/

Research should be stored under:

research/

Reference screenshots should be stored under:

docs/references/screenshots/

Do not mix temporary research files with application source code.

⸻

Git

Use Git throughout the project.

Create commits at meaningful milestones:

* Discovery complete
* UX architecture approved
* Design system approved
* Initial implementation
* Responsive implementation
* Visual QA complete
* SEO/GEO complete
* Final release

Do not make huge unrelated commits.

⸻

Current Phase Restriction

During DISCOVERY:

DO:

* inspect;
* research;
* analyze;
* document;
* benchmark;
* propose;
* create discovery documentation.

DO NOT:

* build the final website;
* create final UI components;
* install the production framework;
* create final CSS;
* create final animations;
* create final forms.

The Discovery phase must end with:

docs/discovery/discovery-summary.md

Only after Discovery has been reviewed should implementation begin.

⸻

Technical Implementation

Added at the end of IMPLEMENTATION Phase 1. Everything below describes the actual, built project — it does not replace any of the phase documentation above.

Stack (approved — see docs/architecture/technical-architecture.md)

* Framework: Astro 7 (`output: 'static'`) — no SSR, no adapter
* Styling: native CSS with custom properties; Astro's per-component scoped styles
* Component library: none
* Animation: CSS + minimal vanilla JS
* Images: `astro:assets` (build-time, Sharp)
* Fonts: self-hosted Fraunces + Inter (variable, Latin subset)
* Deployment target: Cloudflare Pages (nothing deployed yet)
* Analytics: none

Commands

* `npm run dev` — dev server
* `npm run build` — static production build to `dist/`
* `npm run preview` — serve the production build locally
* `npm run check` — TypeScript/Astro diagnostics (must stay at 0 errors)
* `npm run lint` — ESLint + Stylelint
* `npm run lint:js` — ESLint only (TypeScript/Astro + jsx-a11y rules)
* `npm run lint:css` — Stylelint only (invalid CSS + design-token enforcement)

Linting enforces the token rule automatically: any literal color outside
`src/styles/tokens.css` fails `lint:css`. Cosmetic/formatting rules are
deliberately disabled — see the comments in `stylelint.config.js`.

Local development environment

This project's working copy lives inside iCloud Drive (`~/Library/Mobile
Documents/com~apple~CloudDocs/...`). iCloud actively syncs whatever sits in
`node_modules` (hundreds of packages, thousands of small files), and that
sync competing with Node/Vite/Astro reading the same files causes `npm run
dev`, `npm run check` and `npm run build` to hang indefinitely — confirmed
with `sample` on the stuck process: the main thread sits in a blocking
`read()` syscall that never returns, waiting on a file iCloud hasn't
finished materializing locally. `iCloud sync being "caught up"` per `brctl
status` does NOT guarantee this won't happen — individual files can still
stall on first read.

**Fix (already applied on this machine, 2026-08-24):** `node_modules`,
`.astro` and `dist` are symlinks to `~/.node-modules-local/landpage-simone/`
— a local, non-iCloud path — instead of real directories inside the
project folder. All three are already gitignored, so this changes nothing
that's tracked.

**Known gotcha:** running `npm install` again (e.g. after adding a
dependency) makes npm delete the `node_modules` symlink and recreate a real
directory in its place inside iCloud — npm does not preserve a symlinked
`node_modules` root through `reify`. When that happens, redo the move:

```bash
STORE="$HOME/.node-modules-local/landpage-simone"
rm -rf "$STORE/node_modules"
mv node_modules "$STORE/node_modules"
ln -s "$STORE/node_modules" node_modules
```

(`.astro` and `.dist` are written by Astro/Vite directly, not npm, so their
symlinks survive normal `dev`/`build`/`check` runs without this.)

Also: `astro check`/`astro dev` prompt interactively for telemetry consent
on first run in a given environment, which hangs forever with no TTY
attached (e.g. a non-interactive shell). Run `npx astro telemetry disable`
once per machine to avoid this.

Project structure

```
src/
├── assets/     fonts + source images (processed by astro:assets)
├── components/ Container, Section, Button, Header, SEO
├── data/       site.ts, practice-areas.ts, faq.ts — validated content only
├── layouts/    BaseLayout.astro
├── lib/        (empty — reserved for JSON-LD builders in Phase 2)
├── pages/      index.astro (Phase 1 foundation page)
└── styles/     tokens.css, fonts.css, global.css
public/         robots.txt
```

Implementation constraints

* `src/styles/tokens.css` is the single source of design values. Never hardcode a hex color, font size, spacing value, radius or duration in a component — always use a token.
* Do not add a token, color, font or component pattern that is not already in docs/design/design-system.md. Propose it there first.
* No pill/full border-radius. No box-shadow on buttons. No gradients. No announcement bar. No desktop floating chat bubble.
* The WhatsApp number lives only in `src/data/site.ts`. Never duplicate it in a component.
* The primary CTA must look identical at every placement.
* Áreas de Atuação are editorial blocks, never a uniform card grid. Afasia gets the same visual weight as the other five areas.
* Practice-area descriptions in `src/data/practice-areas.ts` are the client's own clinical wording — do not reword them without her re-validation.
* Never invent business data. Unvalidated fields are `null` with a TODO; do not replace them with plausible-looking placeholders.
* FAQ must use native `<details name="faq">` — no accordion library.
* All motion sits behind `prefers-reduced-motion: no-preference`.
* Excluded image assets: the real-estate photo and the WhatsApp business-card screenshot from the old site.

Phase 2 scope (needs approval)

Hero, Áreas de Atuação, Quem é Simone, Como Funciona, Avaliações, FAQ UI, CTA/Contato, Footer, mobile CTA bar, mobile navigation, JSON-LD structured data, sitemap.