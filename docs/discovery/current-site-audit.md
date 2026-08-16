# Current Website Audit — fono-simonetavolaro.com

**Date of audit:** 2026-08-15
**Method:** Browser inspection (Claude in Chrome) + command-line inspection (`curl`)
**Source:** http://www.fono-simonetavolaro.com/

---

## 1. Site overview

| Item | Finding | Type |
|---|---|---|
| Platform | Weebly (assets served from `cdn11.editmysite.com`, `cdn2.editmysite.com`; response headers show `X-Host: *.sf2p.intern.weebly.net`) | FACT |
| CDN/Proxy | Cloudflare (`Server: cloudflare`, `CF-Ray` headers present) | FACT |
| Protocol | HTTP only was tested (`http://www.fono-simonetavolaro.com/`); HTTPS availability was not verified in this pass | [VALIDATE WITH CLIENT] |
| Pages discovered | 3 — Home (`/` = `index.html`), Sobre (`/sobre.html`), Contato (`/contato.html`) | FACT (per `sitemap.xml` and in-page nav) |
| Site "name" in browser/tab title | **"MENU"** — every page title is formatted `"<Page> - MENU"` (Home shows `"MENU - Home"`) | FACT |

The "MENU" title is very likely an unedited Weebly default (the site navigation label, not a chosen brand name) — see [[seo-technical-audit]] and [[ux-audit]] for impact.

---

## 2. Navigation structure

- Primary nav (all 3 pages): **HOME · SOBRE · CONTATO**, preceded by a "MENU" label.
- Internal links found: `/`, `/sobre.html`, `/contato.html` — all reachable from every page's nav.
- No secondary navigation, no footer navigation, no breadcrumbs.
- No blog, no services sub-pages, no FAQ page, no testimonials page.

## 3. Internal / external links inventory

| Link | Target | Found on | Type |
|---|---|---|---|
| `https://wa.me/message/MSJ3LJQRGJI5F1` | WhatsApp deep link (primary CTA "MARQUE SUA CONSULTA") | Home | FACT |
| `https://maps.app.goo.gl/HJSm3338bdM1qP9d8?g_st=iwb` | Google Maps listing | Home (used both as address link and as "VEJA AVALIAÇÕES NO GOOGLE" review link) and Sobre | FACT |

Observations:
- The **same Google Maps URL is reused for two different intents** — "see location" and "see Google reviews." It likely opens the Google Business Profile card, where reviews are visible, but this is an inference — the actual destination behavior was not click-tested. [VALIDATE WITH CLIENT] whether a direct reviews deep-link exists.
- **No social media links** (Instagram, Facebook, LinkedIn, TikTok, YouTube) were found in the HTML of any of the 3 pages. FACT (based on `href` inventory via curl + DOM read).
- **No outbound links to credential-verifying bodies** (e.g., Conselho Federal de Fonoaudiologia lookup) despite two CFFa registration numbers being cited.
- **Contato page has no external links and no form** — contact is exclusively via the WhatsApp number/QR code shown as an image.

## 4. Forms

- **No HTML `<form>` element exists on any of the 3 pages** (confirmed via `curl` + grep on raw HTML). FACT.
- All "contact" affordances are: a WhatsApp deep link, a phone number as plain text, and a QR-code image linking to the same WhatsApp business account.
- No newsletter signup, no lead-capture form, no appointment-request form.

## 5. Images

| Page | `<img>` count (HTML) | Alt text quality | Notes |
|---|---|---|---|
| Home | 5 tags in HTML (2 clearly meaningful: logo + portrait) | Generic (`alt="Picture"`) | `og:image` meta tags reference 5 uploaded images, including one named `sala-comercial-venda-42m-no-green-valley-alphaville-barueri.webp` — a real-estate listing photo unrelated to the practice, left over in the uploads folder and picked up by Open Graph. FACT (see raw `og:image` tags) |
| Sobre | 1 tag | Generic (`alt="Picture"`) | Portrait photo only |
| Contato | 1 tag | Generic (`alt="Imagem"`) | WhatsApp QR-code/business-card image |

No downloadable files (PDFs, brochures) were found on any page.

## 6. Favicon

- No `<link rel="icon">` / `rel="shortcut icon"` / `rel="apple-touch-icon"` tag was found in the HTML `<head>` of any page (via `curl` + grep). FACT, scoped to page source only — the browser tab may still render a Weebly platform default; this was not separately verified against the rendered favicon. [VALIDATE WITH CLIENT]

## 7. robots.txt

```
Sitemap: http://www.fono-simonetavolaro.com/sitemap.xml

User-agent: NerdyBot
Disallow: /

User-agent: dotbot
Crawl-delay: 10

User-agent: *
Disallow: /ajax/
Disallow: /apps/
```
FACT — retrieved via `curl` on 2026-08-15. This is Weebly's platform-default `robots.txt`; nothing indicates custom site-specific rules were added.

## 8. sitemap.xml

```xml
<url><loc>http://www.fono-simonetavolaro.com/contato.html</loc><lastmod>2026-04-26T13:53:39+00:00</lastmod></url>
<url><loc>http://www.fono-simonetavolaro.com/index.html</loc><lastmod>2026-04-26T13:53:39+00:00</lastmod></url>
<url><loc>http://www.fono-simonetavolaro.com/sobre.html</loc><lastmod>2026-04-26T13:53:39+00:00</lastmod></url>
```
FACT — all 3 URLs share the identical `lastmod` timestamp, which is typical of an auto-generated Weebly sitemap rather than a hand-maintained one.

## 9. Structured data / schema.org

- No `application/ld+json` blocks and no visible Microdata/RDFa attributes were found on any page. FACT. No `LocalBusiness`, `MedicalBusiness`, or `Person` structured data exists.

## 10. Analytics / tracking present (found in `<head>`, Home page)

- Google Tag Manager: `GTM-T7KD698`
- Google Analytics 4: `G-12PC9DN757`
- Google Ads conversion tag: `AW-974108854`
- **Legacy Universal Analytics tag**: `UA-191526794-1` — UA was deprecated/stopped processing data by Google in July 2023; this tag is dead weight loading an unnecessary script. FACT (technical debt note for [[seo-technical-audit]]).

## 11. Screenshots captured

Stored under `docs/references/screenshots/`:
- `homepage-desktop-current.jpg`
- `homepage-mobile-current.jpg` (390×844 viewport)
- `sobre-desktop-current.jpg`
- `contato-desktop-current.jpg`

## 12. Not verified in this pass

- HTTPS/SSL configuration and redirect behavior
- Actual rendered favicon in browser tab
- Real page-load performance (Lighthouse/Core Web Vitals) — see [[seo-technical-audit]] for baseline notes and limits
- Whether `wa.me` link opens with a pre-filled message
- Content of the QR code image (assumed, not decoded, to point to the same WhatsApp business account referenced in visible text)

All items above are candidates for [VALIDATE WITH CLIENT] or a follow-up technical pass before implementation.
