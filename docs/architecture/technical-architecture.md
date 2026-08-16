# Technical Architecture — Landpage Simone

**Date:** 2026-08-15
**Phase:** TECHNICAL ARCHITECTURE (post Design System — approved as implementation baseline)
**Status:** Architecture analysis only. No packages installed, no framework initialized, no application code created, no source structure modified beyond this document.

**Source of authority:** [[design-system]] (approved), [[content-positioning-brief]], [[discovery-summary]]. This document does not re-argue visual decisions — it recommends the technical means to implement them faithfully, at the lowest complexity the project's actual requirements justify.

---

## 1. How this analysis is scoped

The project is, technically, a **3-page static brochure site** with no login, no database, no CMS requirement, no e-commerce, no user accounts, no backend, and no contact form — WhatsApp is the sole, external conversion channel. Every recommendation below is weighed against that reality first. Popularity, ecosystem size, and "what's normally used" are explicitly **not** decision criteria on their own — CLAUDE.md already states this project should choose technology based on performance + simplicity + maintainability + quality, and the brief for this document repeats it.

---

## 2. Framework Evaluation

### A. Astro

| Criterion | Finding |
|---|---|
| Performance | Ships **zero JavaScript by default**; only explicitly-marked interactive "islands" hydrate. For a page that's ~95% static content (hero, areas of practice, credentials, timeline, footer) and ~5% interactive (FAQ, mobile nav), this is the best possible starting point. |
| Core Web Vitals | Typically the strongest of the three for LCP/TBT/CLS on content sites, precisely because there's no framework runtime tax paid for pages that don't need one. |
| SEO | Full static HTML at build time; complete control over `<head>`, canonical tags, structured data — nothing is deferred to client-side rendering. |
| Static generation | Native and default (`output: 'static'`) — not a mode bolted onto a server-first framework. |
| Accessibility | Framework-agnostic in outcome — depends on markup discipline either way; Astro's plain-HTML-first authoring model makes it easy to reach for semantic elements instead of `<div>` soup. |
| Responsive implementation | Framework-agnostic; plain CSS works without friction. |
| Image optimization | Built-in (`astro:assets`), Sharp-based, build-time — automatic responsive `srcset`, format negotiation (AVIF/WebP), no runtime image server required, works identically on any static host. |
| Animation capability | No built-in library; supports CSS and vanilla JS/Web Animations API without restriction — exactly what a "restrained motion" brief needs. |
| Developer experience | Component syntax is approachable (HTML-plus-frontmatter); mature, stable (v5), well documented; can drop in a React/Vue/Svelte island later if a genuinely complex widget is ever needed, without a rewrite. |
| Project complexity | Matches the project's actual complexity almost exactly — pages are files, content is data, most of the site needs no client runtime at all. |
| Maintainability | High — small mental model, few moving parts, content isolated from markup via content collections (§13). |
| Deployment simplicity | Static output deploys identically to any static host or CDN — no server, no vendor-specific runtime required. |
| Future extensibility | Server endpoints/SSR adapters and CMS integrations exist if ever needed later, without re-platforming. |
| Suitability for this project | **This is Astro's flagship use case** — marketing/brochure/content sites with a handful of interactive elements. |

### B. Next.js

| Criterion | Finding |
|---|---|
| Performance | Can be very good, but ships React + hydration by default even for static routes; reaching Astro's zero-JS baseline requires deliberate discipline around Server/Client Component boundaries that this project would otherwise not need to think about at all. |
| Core Web Vitals | Achievable, but starts from a higher JS-payload floor than Astro for the same static content. |
| SEO | Excellent and mature (`generateMetadata`, sitemap/robots helpers) — but on par with, not better than, Astro for a fully static site; Next's SEO tooling doesn't out-perform Astro's here, it just duplicates it. |
| Static generation | Supported (`output: 'export'`, or ISR on Vercel) but is not Next's core design center — Next's real strength (SSR, dynamic routes, request-time data fetching, API routes) solves problems this project doesn't have. |
| Image optimization | `next/image` is excellent **on Vercel**; static export disables the automatic optimization server unless a custom loader is configured — adds friction the project doesn't need to accept. |
| Developer experience | Excellent, largest ecosystem, most job-market-familiar — explicitly not a valid deciding factor per this document's brief. |
| Project complexity | Higher conceptual surface (App Router conventions, Server vs. Client Components, hydration boundaries) than a 3-page static site justifies. |
| Deployment simplicity | Best on Vercel specifically; deploying elsewhere works but forfeits some Vercel-only optimizations — a soft platform pull this project has no reason to accept. |
| Future extensibility | Valuable if the site were to grow into an authenticated app with a database — that is not a validated requirement anywhere in this project's approved scope. |
| Suitability for this project | Overkill — solves data-fetching and server-rendering problems that don't exist here. |

### C. Vite + React (client-rendered SPA)

| Criterion | Finding |
|---|---|
| Performance | Weakest of the three by default — initial HTML is nearly empty; the full React runtime and app bundle must download, parse, and execute before any content paints. |
| Core Web Vitals | Poor out of the box for LCP/FCP; would require bolting on a prerendering plugin to reach parity with what Astro or Next give natively — at which point the project is reinventing one of the other two options with extra steps. |
| SEO | Weak by default — crawlers and social-preview scrapers see a near-empty shell unless prerendering is added; a real risk for a local-SEO-dependent healthcare practice. |
| Static generation | Not native; requires added tooling to approximate. |
| Image optimization | No built-in story; needs a manual pipeline or third-party plugin. |
| Developer experience | Good for building genuinely interactive applications — this project has almost no app-like interactivity (a FAQ accordion and a nav toggle). |
| Project complexity | Deceptively simple to start, but ends up **more** complex than Astro once prerendering, meta-tag management, and sitemap generation are bolted on to compensate for what an SPA doesn't do natively. |
| Suitability for this project | Poor fit — this tool optimizes for interactivity-heavy applications, and this project is explicitly not one. |

### D. Another option — considered, not recommended

**Eleventy (11ty)** was considered as an even more minimal static-site generator. It would produce comparable zero-JS output to Astro, but lacks Astro's built-in image pipeline and component-scoped styling, requiring extra plugins to reach parity with what Astro provides natively. There is no project-specific reason strong enough to introduce a fourth framework option over Astro.

### Recommendation

**Astro, with static output (`output: 'static'`).** It is the only option whose default behavior — zero shipped JS, build-time image optimization, native static HTML, no server — matches the project's actual requirements without either under-delivering (Vite+React) or over-provisioning (Next.js) for problems this scope does not have.

---

## 3. Styling Approach

**Design System context:** the approved [[design-system]] already defines a complete, closed set of tokens (color, type, spacing, radius, shadow, breakpoints) and a small, fixed component vocabulary (hero, editorial blocks, credentials block, timeline, FAQ, header, footer, buttons — roughly a dozen distinct pieces total, most used once per page, not composed repeatedly across many screens).

| Approach | Fit for this project |
|---|---|
| **Tailwind CSS** | Excels when a design is built from many small, repeatedly-composed utility combinations across many screens (dashboards, apps). This project is the opposite shape — a dozen bespoke, mostly-unique components across 3 pages. Adopting Tailwind would require maintaining a parallel JS theme-config translation of every token already defined in the Design System doc, and risks "utility soup" drifting away from the document's exact token values over time. Rejected — not because Tailwind is bad, but because it solves a composition problem this project doesn't have. |
| **CSS Modules** | A reasonable, scoped-styling option — but its main benefit (avoiding global-scope collisions) is **already free** in Astro, whose `.astro` components scope `<style>` blocks automatically with no extra convention or build step. Adding CSS Modules on top would be a redundant layer. |
| **Plain modern CSS** (native custom properties + Astro's built-in scoped styles) | **Recommended.** The Design System document is already written in token language (`color.primary`, `space.md`, `radius.sm` …) that maps almost verbatim onto CSS custom properties. A single `tokens.css` file defines every token from [[design-system]] §4–§14 as a `:root` custom property; each Astro component's scoped `<style>` block consumes those tokens via `var(--color-primary)` etc. This is the most direct possible path from "the approved document" to "the shipped CSS," with zero translation layer and zero added build dependency. |

**Recommendation: plain modern CSS — a shared token stylesheet (custom properties) + Astro's native per-component scoped styles.** Modern CSS (nesting, `:has()`, container queries, `color-mix()`) covers everything this design system needs without a preprocessor. If a future phase swaps the framework away from Astro, CSS Modules is the direct equivalent fallback recommendation.

---

## 4. Component Library

**Evaluated:** shadcn/ui, Radix primitives, and UI libraries generally.

- **shadcn/ui** is a React-component system built on Tailwind + Radix. Adopting it would pull in both React and Tailwind as dependencies this architecture has already decided against, for a static-first Astro site — a poor fit regardless of the library's own quality.
- **Radix primitives** earn their place when a project needs genuinely complex accessible widgets — comboboxes, multi-step dialogs, command palettes. This project's most complex interactive element is a **FAQ accordion**, which HTML now solves natively.
- **Native `<details>`/`<summary>` with the shared `name` attribute** (modern browser support) gives an *exclusive* accordion group — only one panel open at a time — with **zero JavaScript** for the core open/close behavior, directly satisfying [[design-system]] §24's "one item open at a time" default. A small (~30-line) progressive-enhancement script is still worth adding only for the smooth height transition (native `<details>` toggles instantly, not smoothly) and to respect `prefers-reduced-motion` by skipping that enhancement entirely when the user has asked for less motion.
- Mobile nav toggle: a checkbox-driven CSS pattern or ~10 lines of vanilla JS — no library.
- Scroll-reveal (hero/section entrance): native `IntersectionObserver`, ~20 lines, gated behind `@media (prefers-reduced-motion: no-preference)`.

**Recommendation: no component library.** Custom components built on native HTML elements and accessible-by-default browser primitives, with minimal, targeted vanilla JS only where native HTML doesn't fully cover the Design System's interaction requirements. This is a project-specific conclusion, not a default anti-library stance — Radix would be the right call if this project had a data table, a combobox, or a multi-step form; it doesn't.

---

## 5. Animation

**Design System requirement ([[design-system]] §31):** subtle entrance/reveal, hover feedback, FAQ transitions — explicitly *not* parallax, scroll-hijacking, staggered cascades, count-up numbers, or pulsing elements.

| Option | Verdict |
|---|---|
| CSS transitions/animations | **Sufficient for nearly everything specified** — hover color changes, FAQ height/opacity transitions, simple fade/translate entrance effects are all native CSS capabilities. |
| Native Web Animations API / `IntersectionObserver` | Needed only to *trigger* a CSS class on scroll-into-view (the entrance/reveal effect) — a small, dependency-free amount of JS. |
| Motion / Framer Motion | **Not needed.** These libraries solve orchestrated sequences, gesture handling, spring physics, and shared-layout transitions — none of which this project's approved motion scope calls for. Adding one would mean shipping tens of kilobytes of JavaScript (and, for Framer Motion specifically, a React dependency) for effects achievable in a few hundred bytes of CSS. |

**Recommendation: CSS transitions/animations, plus a small vanilla-JS `IntersectionObserver` helper for scroll-reveal.** Every motion token in [[design-system]] §31 is achievable this way; `prefers-reduced-motion` is respected by wrapping the relevant CSS in `@media (prefers-reduced-motion: no-preference)` so no separate JS-side check is needed for the CSS-driven effects.

---

## 6. Images

- **Format:** AVIF with WebP fallback, JPEG as the final fallback — generated automatically by Astro's `astro:assets` pipeline (Sharp-based) at build time, so the browser negotiates the best format it supports without any manual export work.
- **Responsive images:** `srcset`/`sizes` generated by the same pipeline, at widths matched to the two approved crops ([[design-system]] §27): 4:5 primary crop at roughly 480w/768w/1200w; 1:1 secondary crop sized to its (currently unused) placement if one is added later.
- **Lazy loading:** default (`loading="lazy"`) for every image below the fold.
- **Hero image priority:** the hero portrait is likely part of the LCP element — it must be **eager-loaded** (`loading="eager"`) with `fetchpriority="high"`, the opposite of the default, to protect the Core Web Vitals LCP score this project explicitly prioritizes.
- **Dimensions/aspect ratios:** explicit `width`/`height` (or CSS `aspect-ratio`) on every image matching the 4:5/1:1 tokens exactly, preventing layout shift (CLS) as the image loads.
- **Optimization strategy:** all optimization happens at `astro build` time via the built-in Sharp pipeline — no runtime image-optimization server is required, which is also why this architecture deploys cleanly to any static host (§10) without a Vercel/Next-style image service dependency.
- **Excluded assets** ([[design-system]] §27, carried forward as a hard requirement): the unrelated real-estate photo and the WhatsApp business-card screenshot must not enter the new asset pipeline at all.

---

## 7. Fonts — Fraunces + Inter

- **Self-host, do not use the Google Fonts CDN.** Three concrete reasons: (1) **Performance** — self-hosting removes a DNS lookup + connection round-trip to `fonts.googleapis.com`/`fonts.gstatic.com`; (2) **Privacy/LGPD** — the Google Fonts CDN receives every visitor's IP address on every page load; self-hosting avoids sending visitor data to a third party for a resource that carries no functional need to be third-party-hosted, which is directly relevant given this project's LGPD-conscious stance (§16); (3) **Control** — full control over caching headers and `font-display` without depending on Google's CDN configuration.
- **Subset:** the Latin subset (U+0000–00FF) fully covers Portuguese diacritics (ã, õ, ç, á, é, í, ó, ú, â, ê, ô) — confirmed by direct inspection during the Design Direction phase. No Latin-Extended subset is needed for this project's content.
- **Weights shipped:** only what [[design-system]] §7 actually specifies — regular (400), medium (500), semibold (600). Weight 700 is reserved but unused, so it is **not shipped**, saving payload. Because both faces are variable fonts, one file per family (covering the needed 400–600 range) is lighter and requires fewer HTTP requests than three separate static instances per family.
- **`font-display: swap`** on every `@font-face` — prioritizes immediate text legibility (a trust-building healthcare site should never show invisible text while a font loads) over a brief flash of the fallback face.
- **Layout shift mitigation:** a defined fallback stack per family (e.g., `Georgia, serif` behind Fraunces; `system-ui, sans-serif` behind Inter) with optional `size-adjust`/`ascent-override` metric tuning — a worthwhile refinement for implementation to apply, not a launch blocker.
- **Preload:** `<link rel="preload" as="font">` for the above-the-fold critical instances (Inter regular for body copy, Fraunces semibold for the H1) so the hero's text doesn't wait on a non-preloaded font discovery.

---

## 8. SEO / GEO Architecture

- **Metadata:** a shared `BaseLayout.astro` accepts `title`, `description`, and `canonical` as props per page — `<title>`, `<meta name="description">`, `<link rel="canonical">` generated consistently across all 3 pages. This directly fixes the current site's "MENU" title-tag defect ([[current-site-audit]] §1).
- **Open Graph:** `og:title`, `og:description`, `og:image` (the real portrait — this also fixes the current site's leaked real-estate-photo `og:image` bug), `og:type`, `og:locale=pt_BR`, `og:url`.
- **Twitter/X card:** `summary_large_image`, reusing the same OG image — low-effort to include even without a confirmed X presence.
- **Sitemap:** `@astrojs/sitemap` integration, generated automatically at build time from the static routes — zero ongoing maintenance.
- **robots.txt:** a static file in `public/`, allowing all crawlers and referencing the sitemap — replaces the current site's inherited Weebly-default file.
- **Structured data (JSON-LD), built from the same content-collection data that drives the visible UI — never duplicated by hand:**
  - `Person` — Simone's name, `jobTitle` ("Fonoaudióloga"), credentials via `hasCredential` → `EducationalOccupationalCredential` entries for the two CFFa specialist registrations.
  - `MedicalBusiness` (schema.org's most specific applicable type) or `ProfessionalService`/`LocalBusiness` as a fallback if `MedicalBusiness`'s implied semantics prove too clinical for a self-employed practitioner — **this specific type choice should be validated, not assumed**, since schema.org has no exact "fonoaudiologia"/speech-language-pathology `medicalSpecialty` enum value; best-effort mapping only, never an invented specialty term.
    > **RESOLVED 2026-08-16 (client-approved): `MedicalBusiness`.** Implemented in `src/lib/schema.ts`. `medicalSpecialty` remains omitted — no schema.org enum term maps to fonoaudiologia with certainty, and the property is optional, so guessing one would be an invented claim.
  - `FAQPage` — generated directly from the same FAQ content collection that renders the visible accordion (§13), so the structured data and the visible content can never drift apart.
  - NAP fields — name, address, phone are already client-validated (client-validation G1) and safe to use; **opening hours are not yet in a machine-readable format** — "terças a quintas, manhã e tarde" (G2) is not a valid `openingHoursSpecification` value (which requires explicit day/time ranges) and **must not be converted into invented specific hours**. This is a concrete, named client-validation gap blocking that one field.
  - **Explicitly forbidden:** `aggregateRating`/`review` structured data must not be populated — no consented ratings or testimonials exist ([[content-positioning-brief]] §10), and adding a plausible-looking placeholder here would be indistinguishable from a fabricated review to a search engine or an AI answer engine. This prohibition is stated here specifically so a future implementer doesn't add it "because the schema type supports it."
- **Semantic HTML:** one `<h1>` per page, one `<h2>` per major section, `<h3>` for sub-items — matches [[design-system]] §30 exactly; `<nav>`, `<main>`, `<footer>`, `<address>` used for their intended purpose rather than generic `<div>`s.
- **Image alt text:** descriptive, name/role-based (never "Picture"/"Imagem") — the shared `Image` component wrapper should treat `alt` as a required prop, failing the build or emitting a lint warning if it's missing, turning an easy-to-forget content task into an enforced one.

**Schema/content fields requiring client validation before they can be finalized (do not invent any of these):**
1. Exact, machine-readable opening hours (currently only "terças a quintas, manhã e tarde" is validated).
2. The production canonical domain — needed before canonical tags, the sitemap, and `og:url` can be finalized.
3. Whether the specific office suite number should appear in structured data or only the general area (a privacy judgment call for the client, not a technical one).
4. The CFFa public-verification URL for the `hasCredential.url` field (already flagged as an open item in [[design-system]] §35).

---

## 9. Analytics

- **Recommendation: launch without analytics**, or — if the client wants visit/engagement visibility from day one — use a **cookieless, privacy-first tool** (Cloudflare Web Analytics or Plausible) rather than Google Analytics/GTM.
- **Why not Google Analytics/GTM:** the current site already carries GA4, a *dead* legacy Universal Analytics tag, and a Google Ads conversion tag as unnecessary technical debt ([[current-site-audit]] §10) — repeating that pattern on the new site would be a regression, not an improvement. GA also requires a cookie-consent mechanism under LGPD, adding legal and UX surface area to a project whose brief explicitly values calm and simplicity.
- **LGPD considerations:** any tool that sets persistent identifying cookies or processes IP-linked personal data triggers LGPD consent-notice obligations. Cookieless, aggregate-only tools (Cloudflare Web Analytics, Plausible) generally avoid this by design, since they don't use persistent identifiers — this is the concrete reason they're recommended over GA if any analytics is wanted at all.
- **Implementation complexity:** trivial either way technically (a single script tag); the complexity that actually matters here is legal/UX (a consent banner), not integration effort.
- **Whether it's necessary at launch:** genuinely no — the site's one conversion action (a WhatsApp click) doesn't require a full analytics suite to know whether it's being used; even a simple outbound-link event count is optional, not required, for launch.
- **This document recommends nothing be installed now.** Defer the decision to a post-launch conversation with the client; if adopted later, Cloudflare Web Analytics or Plausible are the two frontrunners for the reasons above.

---

## 10. Deployment

Because the recommended architecture is **static Astro output**, Vercel, Netlify, and Cloudflare Pages all serve it essentially identically well — a rare case where the platform choice is genuinely low-stakes.

| Criterion | Vercel | Netlify | Cloudflare Pages |
|---|---|---|---|
| Cost | Free tier sufficient at this traffic scale | Same | Same |
| Simplicity | Git-push-to-deploy | Same | Same |
| Performance | Global CDN | Global CDN | Widely considered the most extensive edge network of the three; marginal difference at this scale |
| Custom domain + HTTPS | Automatic, free | Automatic, free | Automatic, free |
| CDN | Built-in | Built-in | Built-in |
| Deployment workflow | Git-based CI | Git-based CI | Git-based CI |
| Maintenance | Minimal (no server) | Minimal | Minimal |
| Notable synergy | Its `next/image` optimization advantage doesn't apply here, since this architecture recommends Astro's own build-time pipeline instead | Historically excellent DX for exactly this static-site shape (this project doesn't need Netlify Forms, since WhatsApp is the sole channel) | Pairs naturally with Cloudflare Web Analytics (§9) and Cloudflare DNS if the domain ever moves there |

**Recommendation: Cloudflare Pages as the default**, for the privacy-analytics synergy and strong free tier — **but this is explicitly a low-stakes choice.** Static output is portable across all three with zero code changes, so Netlify or Vercel remain equally valid if the client has an existing account or preference. Nothing should be deployed as part of this document.

---

## 11. Project Structure

```
src/
  components/
    Header.astro
    Nav.astro
    MobileNav.astro
    Hero.astro
    AreasOfPractice.astro
    CredentialsBlock.astro
    Timeline.astro
    ReviewsBadge.astro
    FAQAccordion.astro
    CTAButton.astro
    MobileCTABar.astro
    Footer.astro
  layouts/
    BaseLayout.astro        (head/meta/OG/canonical/JSON-LD wiring — shared by every page)
  pages/
    index.astro              (Homepage)
    sobre.astro
    contato.astro
  content/
    areas-of-practice.json   (6 entries, Zod-validated — see §12)
    faq.yaml                 (question/answer pairs — single source for UI + FAQPage schema)
    credentials.yaml         (3-tier structure per design-system §21)
    timeline.yaml            (4 steps + the online-mechanics note)
  styles/
    tokens.css               (every design-system token as a CSS custom property)
    global.css                (resets, base element styles)
  assets/
    simone-portrait-4x5.jpg  (processed via astro:assets — not public/, so it's build-time optimized)
  lib/
    schema.ts                 (JSON-LD builders for Person/MedicalBusiness/FAQPage)
public/
  robots.txt
  favicon.svg
astro.config.mjs
```

This structure is Astro-specific (content collections, `astro:assets`, per-component scoped styles) — it is not a generic template applied without regard to the framework decision in §2.

---

## 12. Content Architecture

**Evaluated:** hardcoded content, structured local data, Markdown/MDX, a CMS.

- **Structured local data (Astro Content Collections with a Zod schema) is recommended** for every repeatable, list-shaped piece of content: the six areas of practice, the FAQ question/answer set, the four timeline steps, the three-tier credential list. Each becomes a typed collection entry rather than text hand-written inline in markup.
- **Why this over hardcoding:** a single source of truth is reused for *both* the visible UI and the `FAQPage`/`hasCredential` structured data (§8) — eliminating the risk of the visible FAQ and the JSON-LD FAQ silently drifting apart over time, a real and common defect class in hand-maintained sites.
- **Why this over Markdown/MDX:** MDX earns its place for long-form, prose-heavy content with embedded components (a blog, articles) — this project has no such content. Areas of practice, FAQ entries, and credentials are short, structured, repeatable records; a typed JSON/YAML collection is a better-fitting shape than a directory of Markdown files for data that isn't prose.
- **Prose-heavy unique content** (the hero headline, the About narrative paragraph) can live as simple frontmatter/props on the page itself — it doesn't repeat, so it doesn't need its own collection.
- **CMS — explicitly evaluated and rejected for now.** No validated requirement exists anywhere in this project's approved scope for the client to edit content herself without developer involvement; content (credentials, areas of practice, FAQ) is stable and not expected to change often. Introducing a headless CMS now would add hosting, authentication, and integration complexity disproportionate to a 3-page site. **This is a deliberate deferral, not a permanent rejection:** because content already lives in isolated, typed collection files rather than scattered through markup, a lightweight CMS (e.g., a git-based option like Decap CMS) could be layered on later, if the client ever wants to self-edit hours or add a consented testimonial, without restructuring the site.

---

## 13. Security

A static site with no database, no user input, and no server-side code execution has a **minimal attack surface by construction** — most classic web vulnerability classes (SQL injection, auth bypass, session hijacking, remote code execution) simply don't apply because there is no server-side logic or persistent data store for them to target.

**What is still worth doing, proportionally:**
1. **Dependency hygiene** — keep the (small) npm dependency tree current; run `npm audit` periodically.
2. **HTTPS** — enforced automatically by the hosting platform (§10) at no extra effort.
3. **Security headers**, cheap to configure at the hosting-platform level even without dynamic content: a restrictive `Content-Security-Policy` (there is no third-party script beyond an optional future analytics tag and self-hosted fonts), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a `Permissions-Policy` disabling unused browser features (camera, microphone, geolocation, etc.).
4. **WhatsApp link integrity** — the CTA's `wa.me`/`api.whatsapp.com` deep link should be validated as pointing to the real business number at build/review time, since it is the site's sole conversion path and any future edit that silently breaks or redirects it would be a real, if low-tech, risk.
5. **Re-evaluate CSP/third-party trust** only if and when an analytics script or CMS is actually added later — not before.

**Explicitly not warranted at this scope:** a WAF, rate-limiting, CAPTCHA, or authentication hardening — none of these problems exist on a static brochure site with no login and no form input, and adding them would itself be the kind of over-engineering this document was asked to avoid.

---

## 14. Testing

Testing investment is weighted toward this project's two **named** priorities — accessibility and Core Web Vitals — rather than toward business-logic coverage, since there is very little business logic here to break.

| Type | Recommendation |
|---|---|
| Type checking | `astro check` (built-in) — catches content-collection schema mismatches and prop-typing errors at build time. |
| Linting | ESLint (`eslint-plugin-astro`) + an accessibility-focused ruleset + Stylelint for CSS, including a rule discouraging hardcoded hex values outside `tokens.css` — directly enforcing "always use a token" from [[design-system]] §35. |
| Unit tests | Minimal, proportional need — there's little logic to unit-test beyond perhaps the JSON-LD builder functions (§11 `lib/schema.ts`); a handful of Vitest tests for those is reasonable, a large test suite is not. |
| Component/accessibility testing | Automated `axe-core` checks against the built pages — catches contrast, missing-alt, and ARIA issues automatically, turning the WCAG AA requirement ([[design-system]] §30) into a build-time gate rather than a manual-only check. |
| Browser testing | Manual smoke test across Chrome/Safari/Firefox desktop + iOS Safari/Chrome Android before each release; a small Playwright smoke suite (pages load, nav works, FAQ expands, CTA links resolve correctly) is a reasonable, proportional CI addition given how few interactions exist. |
| Responsive testing | Manual check at the four breakpoint tokens ([[design-system]] §12) plus a couple of in-between widths, via browser DevTools — no paid device-testing service needed at this scale. |
| Lighthouse | Run in CI on every deploy preview (e.g., `lighthouse-ci`), with hard minimum thresholds tied to this project's stated CWV priority — for example, Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95 — as a build gate, not a spot-check. |
| SEO validation | Manual validation of structured data via Google's Rich Results Test / schema.org validator before launch, plus the Lighthouse SEO category as an ongoing gate. |

---

## 15. Git / Development Workflow

- **Branch strategy:** trunk-based, short-lived feature branches (e.g. `feature/hero`, `feature/faq-accordion`) merged to `main` via PR — matches CLAUDE.md's existing guidance ("create commits at meaningful milestones… do not make huge unrelated commits") without the overhead of a heavier gitflow this project's size doesn't need.
- **Commit conventions:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`) — lightweight and human-readable; no enforcement tooling (e.g. commitlint) required at this scale unless the team wants it.
- **Development/build commands** (Astro defaults): `npm run dev` (local dev server), `npm run build` (static production build), `npm run preview` (serve the production build locally), `npm run check` (type checking), `npm run lint` (ESLint/Stylelint).
- **Environment variables:** expected to be minimal-to-none — there is no server-side API key usage anywhere in this architecture. If a privacy-first analytics ID is added later (§9), that is the only realistic candidate (e.g. `PUBLIC_ANALYTICS_ID`), injected at build time.
- **Production build validation:** `npm run build && npm run preview` locally, plus the Lighthouse CI gate (§14), before every deploy — verifying no broken links, no missing alt text (via the axe check), and that sitemap/robots/canonical/OG all reflect the actual production domain before promotion.

---

## 16. RECOMMENDED TECHNICAL STACK

```
Framework:    Astro (static output)
Styling:      Plain modern CSS — shared token stylesheet (custom properties) +
              Astro's native per-component scoped styles
Components:   None (no UI library) — native HTML/ARIA primitives,
              exclusive <details name="…"> for the FAQ accordion
Animation:    CSS transitions/animations + a small vanilla-JS
              IntersectionObserver helper for scroll-reveal
Images:       astro:assets (Sharp) — AVIF/WebP with JPEG fallback,
              build-time optimization, no runtime image server
Fonts:        Fraunces + Inter, self-hosted, Latin-subset, variable,
              font-display: swap, preloaded above-the-fold weights
SEO:          Astro-native metadata + @astrojs/sitemap +
              hand-built JSON-LD (Person, MedicalBusiness/ProfessionalService,
              FAQPage) sourced from the same content collections as the UI
Analytics:    None at launch; Cloudflare Web Analytics or Plausible
              if/when the client wants visit visibility post-launch
Testing:      astro check, ESLint/Stylelint, axe-core accessibility checks,
              Lighthouse CI thresholds, a small Playwright smoke suite
Deployment:   Cloudflare Pages (default recommendation) — Netlify or
              Vercel remain equally valid; static output is portable
              across all three with zero code changes
```

**Why this stack fits this specific project:** every piece of it was chosen against the site's actual, validated shape — 3 pages, no backend, one external conversion channel, a small closed set of bespoke components, and named, explicit priorities on Core Web Vitals, SEO/GEO, and WCAG AA. Astro's zero-JS-by-default model, paired with build-time image and font optimization and hand-written structured data sourced from typed content collections, gets this project to "fast, accessible, crawlable static HTML" with the fewest moving parts capable of doing the job — not the fewest moving parts in the abstract, but specifically the fewest this project's own requirements allow.

---

## 17. WHAT WE ARE DELIBERATELY NOT USING

- **Next.js / a full React SPA runtime** — unnecessary framework overhead for a static 3-page site with no server-rendering or data-fetching requirement.
- **A component library** (shadcn/ui, Radix, MUI, etc.) — the visual language is small and bespoke; native HTML/ARIA covers every interactive need this project actually has.
- **Tailwind CSS** — the design system is a small, fixed component vocabulary, not a utility-composition system built from many repeated small pieces.
- **Framer Motion / Motion or any animation-orchestration library** — every approved motion requirement is achievable in CSS plus a few dozen lines of vanilla JS.
- **A CMS, headless or otherwise** — no validated non-technical-editing requirement exists; content is stable, small, and already isolated in typed data files for an easy future upgrade path if that ever changes.
- **A database** — no data-persistence need exists anywhere in the approved scope.
- **User authentication / accounts** — not part of the approved scope.
- **A contact form or form backend** — WhatsApp is the sole validated contact channel ([[content-positioning-brief]] §11).
- **Google Analytics / Google Tag Manager** — unnecessary complexity plus an LGPD consent-banner burden for a 3-page site; the current site already carries this exact debt (including a dead legacy Universal Analytics tag) as a documented problem to fix, not repeat.
- **A dedicated image-optimization service** (Vercel/Next's image server, Cloudinary, etc.) — Astro's built-in, build-time pipeline covers every stated requirement without a runtime dependency.
- **Server-side rendering or an application server of any kind** — nothing in the approved scope requires per-request computation.

---

## TECHNICAL ARCHITECTURE APPROVAL REQUIRED

Implementation must **not** begin until this technical architecture has been reviewed and explicitly approved by the client. No package has been installed, no framework has been initialized, and no application or source code has been created in this phase — per the DISCOVERY → UX STRATEGY → INFORMATION ARCHITECTURE → DESIGN SYSTEM → **TECHNICAL ARCHITECTURE** → IMPLEMENTATION workflow.
