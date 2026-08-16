# SEO / Technical Baseline Audit — Current Website

**Source:** http://www.fono-simonetavolaro.com/
**Method:** `curl` (headers, HTML source, robots.txt, sitemap.xml) + browser DOM inspection
**Date:** 2026-08-15

This document establishes the **baseline only**. No fixes were applied — per the DISCOVERY phase restriction in CLAUDE.md.

---

## 1. Title tags

| Page | `<title>` | Assessment |
|---|---|---|
| Home | `MENU - Home` | INFERENCE: "MENU" is very likely the unedited default Weebly site-name field, not an intentional brand name. Contains no keyword, no practitioner name, no location. |
| Sobre | `Sobre - MENU` | Same issue. |
| Contato | `Contato - MENU` | Same issue. |

**FACT:** none of the 3 titles contain "Simone Tavolaro," "fonoaudióloga," or "Alphaville" — all high-value local/branded search terms are absent from the single most important on-page SEO element.

## 2. Meta descriptions

| Page | Meta description | Assessment |
|---|---|---|
| Home | "Fonoaudióloga Simone Tavolaro" | Present but minimal — no service, location, or CTA. |
| Sobre | **None found** | FACT — no `<meta name="description">` tag exists on this page. |
| Contato | **None found** | FACT — same. |

## 3. Meta keywords (Home only)

```
fonoaudióloga, fonoaudiologa, fonoaudiologia, simone tavolaro, fono alphaville,
fonoaudiologia alphaville, fonoaudióloga alphaville, fonoaudiólogo, fonoaudiologo, fono simone
```
FACT. The `keywords` meta tag has had no ranking influence on Google since the early 2010s, but its content is a useful signal of the site owner's/agency's intended keyword targets at the time it was set (local + name-based terms, including misspellings). Worth preserving as directional input for [[preliminary-design-direction]]/SEO strategy, not as something to keep functionally.

## 4. Heading hierarchy (H1–H3)

- **No dedicated, clearly-scoped `<h1>` was identified as a page title/value proposition on Home** — heading tags on Home wrap bullet/contact content (e.g., the "Atendimento a adultos, crianças e idosos" line and the address block), not a clear page headline.
- On Sobre, heading tags are applied very broadly — most of the body copy (profession explainer, credentials, full "Formação" list) appears wrapped in `h1`–`h3` tags rather than paragraphs/lists. INFERENCE: this looks like Weebly's rich-text "heading" style being used for visual emphasis rather than real document structure — a common no-code-builder pattern, not necessarily a deliberate SEO structure.
- On Contato, the WhatsApp instructions block is wrapped in a heading.

**Assessment (INFERENCE):** heading tags are used inconsistently and appear driven by visual styling rather than information hierarchy. This dilutes their SEO/semantic value and makes the true page structure unclear to screen readers and search engines. A full DOM-level heading audit (beyond the h1–h3 grep done here) is recommended before implementation. [VALIDATE WITH CLIENT / recommend deeper technical pass]

## 5. Image alt attributes

| Page | Images | Alt text found |
|---|---|---|
| Home | Logo, portrait photo (+ 3 more referenced via `og:image`) | `alt="Picture"` (generic, non-descriptive) |
| Sobre | Portrait photo | `alt="Picture"` |
| Contato | WhatsApp QR/card image | `alt="Imagem"` |

FACT: no alt text on the current site describes actual image content (e.g., "Simone Tavolaro, fonoaudióloga, em seu consultório"). This is both an accessibility gap and a missed image-search SEO opportunity.

## 6. URL structure

- `/`, `/sobre.html`, `/contato.html` — flat, `.html`-suffixed, Weebly-default pattern. FACT.
- No trailing-slash/canonical inconsistency was tested for redirect behavior.
- No nested paths, no service-specific URLs (e.g., no `/gagueira`, `/afasia`), consistent with the site currently having no dedicated service pages.

## 7. Canonical tags

**None found on any page.** FACT (grep against raw HTML `<head>` for all 3 pages). On a 3-page site this is low-risk today, but should be added by default in the rebuild as good practice, especially once any URL parameters, query strings, or `www`/non-`www` variants exist.

## 8. Robots directives

- No page-level `<meta name="robots">` tag was found (i.e., nothing is blocking indexing at the page level). FACT.
- Site-level `robots.txt` is Weebly's platform default (see [[current-site-audit]] §7) — disallows `/ajax/` and `/apps/` (Weebly internal paths, irrelevant to content pages) and fully blocks "NerdyBot." Nothing custom was added for this site.

## 9. Sitemap

- `sitemap.xml` exists, auto-generated, lists all 3 pages with an identical `lastmod` timestamp (see [[current-site-audit]] §8). FACT. Adequate for a 3-page site; will need to be regenerated/maintained as pages are added.

## 10. Open Graph / social sharing

- `og:site_name` and `og:title` both read **"MENU"** — meaning any link to this site shared on Facebook/WhatsApp/LinkedIn currently displays "MENU" as the title. FACT — this is a materially negative finding since WhatsApp is the site's own primary contact channel; a shared link preview undermines trust at the exact moment a prospective patient is deciding whether to click.
- `og:description` = "Fonoaudióloga Simone Tavolaro" (reasonable).
- 5 `og:image` URLs are declared, one of which (`sala-comercial-venda-42m-no-green-valley-alphaville-barueri.webp`) is an unrelated real-estate listing photo left in the uploads directory — FACT, see [[current-site-audit]] §5. This creates a real risk that an **unrelated commercial listing photo** could be selected as the preview image on some platforms.
- No Twitter/X Card meta tags (`twitter:card`, etc.) were found.

## 11. Structured data / schema.org

**None found** — no `LocalBusiness`, `MedicalBusiness`, `Person`, `FAQPage`, or `BreadcrumbList` JSON-LD or microdata on any page. FACT. This is a significant gap for local SEO and AI/answer-engine readability (see §14 below).

## 12. Local SEO signals

| Signal | Status |
|---|---|
| NAP (Name, Address, Phone) consistency on-site | Present but only on Home/Sobre (address) and Home/Contato (phone) — never all three together on one page. FACT. |
| Google Business Profile | Referenced indirectly via a Maps link ("VEJA AVALIAÇÕES NO GOOGLE"); profile was not separately audited in this pass. [VALIDATE WITH CLIENT / recommend a dedicated GBP audit] |
| Local keywords in title/meta | Present in `meta keywords` only (no ranking effect) — **absent from `<title>`**, the tag that matters most. FACT. |
| `LocalBusiness` structured data | Absent. FACT. |
| Embedded map | Not found on Contato page (only a WhatsApp QR/card image was present). FACT. |

## 13. Accessibility basics (surface-level only — not a full WCAG audit)

- Generic alt text throughout (§5).
- Heading structure appears style-driven rather than semantic (§4), which can confuse screen-reader navigation.
- No `<form>` exists, so form-accessibility (labels, error states) is not currently applicable — but will need attention when/if a contact form is introduced.
- Color contrast, focus states, and keyboard navigation were **not tested** in this pass. [Recommend a dedicated accessibility pass during Design System / Implementation phases.]

## 14. AI / answer-engine (GEO) readability

- No structured data means AI assistants and answer engines have to infer entity facts (who Simone is, what she treats, where she's located) purely from unstructured prose — and the prose itself is thin (Home + Sobre together are a few short paragraphs).
- No FAQ content exists anywhere on-site — FAQ blocks are one of the most GEO-friendly formats (direct question → direct answer), and this benchmark's absence is worth acting on (see [[preliminary-design-direction]] and [[discovery-summary]] §11).

## 15. Performance

- No Lighthouse/Core Web Vitals trace was run in this pass (out of scope for a documentation-only Discovery step, and CLAUDE.md restricts implementation work at this stage). Response headers show `Cache-Control: max-age=30, private, no-store` alongside a separate `cdn-cache-control: max-age=30, public` — a somewhat unusual/conflicting pairing worth a closer look during Performance phase, but not diagnosed further here. [VALIDATE / recommend a Lighthouse pass once real implementation begins]

## 16. Obvious technical issues — summary

1. Browser tab / shared-link title reads "MENU" instead of the practitioner's name (title tag + Open Graph).
2. Meta description missing on 2 of 3 pages.
3. No canonical tags anywhere.
4. No structured data (`LocalBusiness`/`Person`/`FAQPage`) anywhere.
5. Generic, non-descriptive image alt text throughout.
6. Heading tags appear used for visual styling rather than document structure.
7. A stray, unrelated real-estate photo is exposed via Open Graph metadata.
8. Legacy Universal Analytics tag (`UA-191526794-1`) still loading, dead since GA sunset in 2023.
9. No contact form; all conversion funnels through a single WhatsApp link with no fallback channel and no embedded map.

---

## Preliminary SEO / GEO strategy notes (Phase 12 — recommendations only, not implementation)

These are **RECOMMENDATIONS** for the next phases, not changes made now:

- **Local SEO:** rebuild title tags around the pattern `{Service/Name} | Fonoaudióloga em Alphaville — Simone Tavolaro` (exact final copy to be defined in IA/copy phase); add `LocalBusiness`/`MedicalBusiness` + `Person` JSON-LD with NAP, and confirm/complete the Google Business Profile once details are validated with the client.
- **Semantic structure:** rebuild heading hierarchy so `<h1>` carries the true page value proposition and `<h2>`/`<h3>` reflect real content sections, not stylistic emphasis.
- **Entity understanding:** consolidate NAP (name, address, phone) consistently across every page, not split across different pages as today.
- **FAQ opportunities:** the current site has zero FAQ content — a validated FAQ section (built from real, client-approved Q&A, following the healthcare-claims rules in CLAUDE.md) would materially help both traditional SEO and GEO/AI-answer-engine readability. See the FAQ pattern noted in [[benchmark-simone-ebel]] and [[additional-benchmarks]] as a **structural** (not content) pattern worth adapting.
- **Structured data:** add `LocalBusiness`/`MedicalBusiness`, `Person`, and (once a validated FAQ exists) `FAQPage` schema.
- **Content discoverability:** the current 3-page structure under-represents the breadth of services listed in the content inventory (5 distinct conditions/areas addressed). Dedicated service content (not necessarily separate URLs at launch) would give search engines and AI answer engines more surface area to match real search intent.
- No keyword-volume research was performed in this pass; the `meta keywords` tag content in §3 is the only documented signal of prior intended targeting. Any future keyword research should record its source and methodology per CLAUDE.md.
