# Additional Benchmark Research

**Method:** Web search (`WebSearch`) to identify candidates, followed by direct browser inspection of 5 selected sites.
**Date:** 2026-08-15
**Usage restriction (per CLAUDE.md):** benchmarks for UX/IA/positioning/conversion patterns only. No text, images, or visual identity from any site below may be copied into the new Simone Tavolaro site.

---

## Selection

Search queries used:
- "melhor site fonoaudióloga consultório particular landing page profissional saúde São Paulo"
- "best healthcare private practice website design examples speech therapist psychologist landing page"
- "psicóloga clínica São Paulo site institucional premium landing page CTA agendamento"
- "pediatric speech language pathologist private practice website example"

From the results, 5 sites were selected for direct inspection — a mix of a direct discipline match in Brazil, a premium-positioned adjacent-discipline clinic in Brazil, and 3 solo/small-team speech-language-pathology practices in the US (chosen because the discipline match is exact, even though the market differs). A 6th site, TinyEYE, was added afterward at the user's request as a benchmark specifically for online/teletherapy delivery UX:

| # | Site | Type | URL |
|---|---|---|---|
| 1 | Juliana Mori — Fonoaudióloga | Solo fonoaudióloga, São Paulo, Brazil | https://www.julianamori.com.br/ |
| 2 | Psico Vila Olímpia | Multi-professional psychology/psychiatry clinic, São Paulo, Brazil | https://psicovilaolimpia.com.br/ |
| 3 | Portland Speech Clinic | Solo/small-team pediatric SLP practice, Portland OR, USA | https://portland.speech.clinic/ |
| 4 | NYCSLP Speech Language Pathology | Solo pediatric SLP practice, New York City, USA | https://www.nycslp.com/ |
| 5 | Chatterboxes Speech-Language & Occupational Therapy | Multi-therapist pediatric SLP/OT practice, MA/RI/CT, USA | https://www.teamchatterboxes.com/ |
| 6 | TinyEYE Therapy Services | Large-scale online/teletherapy provider (SLP, OT, mental health), global, school-district-focused with a direct-to-family offering | https://tinyeye.com/ |

Other sources surfaced but not deep-inspected (directory/listing sites, not single-practice benchmarks): Doctoralia (doctoralia.com.br), GPS Pró-Fono (gps.profono.com.br), FonoSP (fonosp.org.br) — logged in [[../../research/sources]] for local-SEO/discoverability context, not as UX benchmarks.

---

## 1. Juliana Mori — Fonoaudióloga (Brazil, direct discipline match)

- FACT: Single-page site with anchor nav (home, para pacientes, outros serviços, sobre, Blog, contato). Has a real blog (separate URL), a cookie-consent banner, and links to Facebook, Instagram, and LinkedIn — the only benchmark reviewed with a maintained blog and full social presence.
- FACT: Hero headline is her name/title ("Fonoaudióloga Juliana Mori") plus a plain-language service line ("Atendimento clínico para pacientes de todas as idades. Supervisão clínica para fonoaudiólogos e outros profissionais.") — segments general public and fellow professionals (supervision/CE) as two distinct audiences.
- FACT: WhatsApp CTA present both as a floating button and inline; email link also present.
- INFERENCE: The presence of a content blog and multi-network social linking suggests an ongoing content-marketing strategy beyond the site itself — a heavier investment than Tavolaro's current site.
- **Pattern worth adopting**: segmenting "for patients" vs. "for professionals" (supervision) as two distinct value propositions on one page, if Tavolaro ever offers services to peers — otherwise not directly applicable today. [VALIDATE WITH CLIENT] whether peer supervision/training is a service Simone offers.

## 2. Psico Vila Olímpia (Brazil, adjacent discipline, premium multi-professional clinic)

- FACT: Hero pairs a benefit headline ("A melhor sessão presencial, também online!") with a lifestyle photo; an insurance-policy disclaimer band appears near the top ("Não atendemos por convênio médico"), similar in placement/function to the Ebel benchmark's announcement bar.
- FACT: Content structure: specialties grid (6 specialties as clickable cards) → team grid (8 professionals, each with credential number — CRP/CRM — and a short bio) → locations → testimonials section (label present, content not fully inspected) → "How can a psychologist help" explainer → 10-question FAQ → contact/footer with address, email, Instagram.
- INFERENCE: Because this is a multi-professional clinic, its IA (specialty grid + team grid) solves a different problem (helping visitors choose among several professionals) than Tavolaro's single-practitioner site needs to solve — **not directly transferable**, but the *specialty-as-entry-point* card pattern is relevant if Tavolaro's own multiple conditions/services are presented as distinct entry points.
- **Pattern worth adopting**: displaying the professional registration number (CRP/CRM equivalent — for Tavolaro, CFFa) directly next to each named credential in a scannable way, reinforcing legitimacy without a wall of text.
- **Pattern worth adopting**: a substantial FAQ (10 questions) as one of the last sections before contact.

## 3. Portland Speech Clinic (USA, exact discipline match, solo/small team)

- FACT: Simple icon-card sub-navigation on the homepage itself (About / Meet Danielle / Services / FAQs / Contact) rather than a long single-scroll page — a lighter-weight IA than Ebel's.
- FACT: "About" section leads with a warm, first-person, informal bio ("My name is Danielle, but you can call me Dani...") before formal credentials (graduate degree, professional association memberships, licensure states) — bio-first, then formal credentials second.
- FACT: FAQ section is service-and-logistics oriented (what is a screening vs. an evaluation, what payment/insurance is accepted, how to know if a child needs services) — practical, reduces pre-contact anxiety.
- INFERENCE: Leading with an informal, personal voice before formal credentials is a different sequencing choice than Ebel's (credentials/stats-first) or Tavolaro's current site (credentials-first) — suggests personal warmth can be established even in a page that also carries several formal certifications.
- **Pattern worth adopting**: pairing a warm, personal "get to know the practitioner" bio with — not instead of — formal credentials, and explaining basic service terminology (e.g., what a "screening" vs. "evaluation" is) for visitors unfamiliar with the field, addressing the readability gap noted in [[ux-audit]] §8.

## 4. NYCSLP Speech Language Pathology (USA, exact discipline match, solo practice)

- FACT: Clear "3-step" process section near the bottom of the page (Step One: free consultation → Step Two: screening/evaluation → Step Three: begin sessions) — makes the entire journey from first contact to first session explicit and low-anxiety.
- FACT: Services are presented as distinct condition-focused blocks (early intervention for late talkers; receptive/expressive language & auditory processing; articulation & speech sound disorders) each with a short explanation of what therapy looks like for that condition — closer in spirit to Tavolaro's multi-condition scope than Ebel's single-diagnosis focus.
- FACT: Insurance/billing handled transparently in a dedicated closing section (not in-network, but "superbills" provided for out-of-network reimbursement) — mirrors the reimbursement transparency seen in both Ebel and Psico Vila Olímpia.
- **Pattern worth adopting**: an explicit, numbered "what happens when you contact us" sequence — directly addresses the "conversion journey" friction noted in [[ux-audit]] §11 (visitors currently have no idea what happens after they message on WhatsApp).
- **Pattern worth adopting**: presenting each condition/service as its own short, self-contained block rather than a single flat bullet list — directly relevant to Tavolaro, whose 5 stated areas of practice ([[content-inventory]] §3) are currently a single undifferentiated bullet list.

## 5. Chatterboxes Speech-Language & Occupational Therapy (USA, exact discipline match, multi-therapist team)

- FACT: Homepage opens with a lead-capture form prompt ("Tell Us About Your Child — Start Here") rather than a WhatsApp link — the only benchmark reviewed whose primary CTA is a form, not a messaging app.
- FACT: A large "Meet Your Clinician" team grid lists every therapist with degree and university info — appropriate for a multi-therapist practice, not directly relevant to Tavolaro as a solo practitioner.
- FACT: Testimonials are short, informal, attributed to first+last name (no age/context), placed near the bottom just before the final contact section.
- FACT: A "neurodiversity affirming" values statement/blog-style section is included, signaling a specific care philosophy.
- INFERENCE: A form-first CTA (vs. WhatsApp-first) may suit practices with intake staff to process submissions; for a solo practitioner like Tavolaro, a WhatsApp-first CTA (already in use) likely remains lower-friction and more appropriate. [VALIDATE WITH CLIENT] whether a lightweight contact form would still be a useful secondary option alongside WhatsApp, without competing as a second *primary* CTA.

## 6. TinyEYE Therapy Services (global, large-scale teletherapy provider — different scale, useful for online-delivery UX)

**Important scope note:** TinyEYE is a multinational teletherapy company serving school districts, with a separate direct-to-family offering — not a comparable solo private practice. It is included specifically because Simone's site states an online-session option ([[content-inventory]] §4), and TinyEYE is the strongest observed example of online-therapy-specific UX among all benchmarks reviewed. Its organizational scale, staffing model, and pricing structure are **not** transferable to a solo practitioner; only the online-delivery UX patterns below are relevant.

- FACT: The homepage immediately segments visitors into 3 distinct audiences via top-level nav and hero buttons — "For Therapists," "For Schools," "For Families" — each leading to a differently-framed landing page.
- FACT: A dedicated **"For Families"** page (`/for-families/`) exists, headlined "Find and book the right therapist for your child in minutes," with its own hero, trust stats ("20 years of experience," "1,000,000+ successful therapy sessions delivered"), a 3-reason "Why Families Choose" block (Smart Matching, Engaging Sessions, Flexible Scheduling), an explicit 3-step "How It Works" (answer questions → choose a time → book first session), an 8-question FAQ, and testimonials with parent-role attribution (e.g., "Parent of a 7-year-old").
- FACT: Pricing is stated explicitly and plainly on the Families page: "Pricing starts at $99 for 30-minute sessions," alongside a direct explanation of why private-pay is used instead of insurance (addressed as its own FAQ question).
- FACT: A persistent live-chat widget ("Need Help? Click here and start chatting with us!") is present on the Families page in addition to the primary "Get Started" CTA.
- INFERENCE: Because online therapy removes the physical/geographic trust cues of an in-person consultório (an address you can visit), TinyEYE compensates with unusually explicit process transparency (the 3-step flow), unusually explicit pricing, and a dedicated FAQ addressing the online format itself ("How do online therapy sessions work?"). This is a **structural signal relevant to Journey 4** ([[user-journeys]]) — if Tavolaro's online-session option is to be presented well, it likely needs more explicit "how does an online session work" and "what does it cost" content than an in-person option does, precisely because the physical trust cues are absent.
- **Pattern worth adopting**: explicitly explaining the mechanics of an online session as its own FAQ/content item, not assuming visitors already understand what "atendimento on-line" involves.
- **Pattern worth adopting (structurally, not the specific 3-question split)**: segmenting distinct visitor types via clearly separated navigation/entry points — relevant to Tavolaro only if the "professional/oratória" audience (Journey 3) is judged different enough from clinical patients to warrant its own distinct entry point, as already flagged in [[proposed-information-architecture]].
- **Must NOT be copied**: TinyEYE's trust-stat numbers, its testimonials, its live-chat tool, its pricing figures, its "smart matching" therapist-marketplace framing (Tavolaro is a single named practitioner, not a matching platform), and its visual identity/branding.
- INFERENCE: TinyEYE's testimonials are attributed generically ("Parent of a 13-year-old," "Sarah L., Parent in California") rather than full names in most cases — a lighter-weight consent/attribution pattern than Ebel's or Chatterboxes' named testimonials, worth noting as an option **if and when** real, consented testimonials become available for Tavolaro ([VALIDATE WITH CLIENT], per [[content-inventory]] §7).

---

## Cross-benchmark synthesis (6 additional sites + Ebel, 7 total)

Structural patterns that recur across most or all reviewed sites (worth treating as reasonably safe, evidence-backed defaults for the new IA — content and visuals still to be built fresh):

1. A clear, plain-language hero statement of who the practitioner is and who they help, before formal credentials.
2. Conditions/services presented as distinct, scannable blocks rather than a single flat list (5 of 6 sites).
3. A dedicated, personal bio section separate from the formal credentials list (5 of 6 sites).
4. An FAQ section addressing practical/logistics questions, placed near the end of the page (5 of 6 sites).
5. Reimbursement/insurance/pricing transparency stated explicitly and early (5 of 6 sites) — relevant since Tavolaro's site currently states nothing about payment ([[content-inventory]] §5).
6. A single, consistent primary contact mechanism, reinforced in the footer with 1–2 backup channels (all 6 sites, though the primary mechanism varies: WhatsApp for 4, form/booking flow for 2).
7. Multi-professional or multi-audience sites (Psico Vila Olímpia, Chatterboxes, TinyEYE) add a team/specialty grid or multi-audience nav split that is **not directly applicable** to Tavolaro as a solo practitioner and should not be adopted wholesale — though TinyEYE's audience-split *structure* is worth considering narrowly for separating clinical vs. professional/oratória visitors (see [[proposed-information-architecture]]).
8. **Online-delivery-specific transparency** (TinyEYE only, but directly relevant to Tavolaro's stated online-session option): when a service is offered remotely, visitors need explicit process and mechanics explanation that in-person services can otherwise leave implicit — feeds directly into Journey 4 in [[user-journeys]].

These synthesized patterns feed directly into [[proposed-information-architecture]] and [[user-journeys]].
