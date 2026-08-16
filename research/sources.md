# Research Sources Log

**Date:** 2026-08-15
**Purpose:** Record of all external sources consulted during Discovery, per CLAUDE.md's research-documentation requirement.

Reliability scale: **Primary** (the subject's own current site/data), **Secondary** (independent benchmark/reference), **Contextual** (background/directory, not deeply analyzed).

---

## Primary source

| Source | URL | Info obtained | Reliability | Usable in final site? |
|---|---|---|---|---|
| Current official website | http://www.fono-simonetavolaro.com/ (Home, /sobre.html, /contato.html), plus /robots.txt, /sitemap.xml | Full content inventory, technical/SEO baseline, screenshots | Primary — official source | Yes, as the primary factual basis (per CLAUDE.md source hierarchy §2), subject to client validation of stale details |

## Benchmark (UX/IA/conversion structure only — never content or visual identity)

| Source | URL | Info obtained | Reliability | Usable in final site? |
|---|---|---|---|---|
| Simone Ebel — PAC | https://www.pac.fonosimoneebel.com.br/ | Full IA, section sequence, CTA strategy, FAQ pattern | Secondary — designated project benchmark | Structure/pattern only, per CLAUDE.md — no content/visuals |
| Juliana Mori — Fonoaudióloga | https://www.julianamori.com.br/ | IA, audience segmentation (patients vs. professionals), social presence | Secondary | Structure/pattern only |
| Psico Vila Olímpia | https://psicovilaolimpia.com.br/ | IA, credential-display pattern, FAQ depth, team-grid pattern (not applicable to solo practice) | Secondary | Structure/pattern only |
| Portland Speech Clinic | https://portland.speech.clinic/ | Bio-first sequencing, FAQ terminology-explainer pattern | Secondary | Structure/pattern only |
| NYCSLP Speech Language Pathology | https://www.nycslp.com/ | 3-step "how it works" pattern, condition-block service presentation | Secondary | Structure/pattern only |
| Chatterboxes Speech-Language & Occupational Therapy | https://www.teamchatterboxes.com/ | Form-first CTA pattern, team-grid pattern (not applicable), values statement | Secondary | Structure/pattern only |
| TinyEYE Therapy Services | https://tinyeye.com/ and https://tinyeye.com/for-families/ | Multi-audience nav split, online-therapy process/pricing transparency, "how it works" 3-step flow, FAQ addressing remote-session mechanics | Secondary — added at user's request specifically for online/teletherapy UX; large-scale org, not a comparable solo practice, so only online-delivery UX patterns are relevant | Structure/pattern only |

## Contextual (surfaced via search, not deep-inspected — local SEO/discoverability landscape only)

| Source | URL | Note |
|---|---|---|
| Doctoralia — Fonoaudiólogos em São Paulo | https://www.doctoralia.com.br/fonoaudiologo/sao-paulo | Professional directory; relevant to local SEO/discoverability landscape, not a UX benchmark |
| GPS Pró-Fono | https://gps.profono.com.br/ | Professional locator directory; contextual only |
| Conselho Regional de Fonoaudiologia de São Paulo (FonoSP) | https://www.fonosp.org.br/ | Regulatory body; relevant if credential verification/links are added later — not inspected in depth this pass |
| Hospital Leforte — Fonoaudiologia | https://www.leforte.com.br/especialidades/fonoaudiologia/ | Surfaced in search; institutional context, not a comparable solo-practice benchmark |
| BR Terapeutas | https://www.brterapeutas.com.br/profissao/sp/sao-paulo/Fonoaudiologia | Directory/marketplace; contextual only |
| Fonoaudiologia São Paulo | https://www.fonoaudiologiasp.com.br/ | Surfaced in search; not inspected |
| Healthie — therapy website design guide | https://www.gethealthie.com/blog/therapy-website-design | General best-practice guidance for therapy-practice websites; used as background context for [[../docs/discovery/additional-benchmarks]], not a specific site benchmark |
| Various SLP practice examples (search aggregation) | via WebSearch query "pediatric speech language pathologist private practice website example" | Used to identify the 3 US SLP benchmark candidates listed above |

## Methodology notes

- Site inspection used the Claude in Chrome browser extension (DOM/accessibility-tree reads, screenshots at desktop ~1200px and mobile ~390px viewports) plus `curl` for raw HTML, HTTP headers, `robots.txt`, and `sitemap.xml` on the primary source.
- No keyword-volume or paid SEO-tool research was performed in this Discovery pass — the only keyword-intent signal documented is the current site's own `meta keywords` tag content (see [[../docs/discovery/seo-technical-audit]] §3), which is a historical artifact, not new research.
- No login-gated, paywalled, or private content was accessed on any source.
- Consent/cookie banners encountered on third-party sites (e.g., Juliana Mori) were not interacted with — inspection relied on DOM reads rather than requiring banner dismissal.
