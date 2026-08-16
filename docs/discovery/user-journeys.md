# User Journeys — Hypotheses

**Date:** 2026-08-15
**Status:** These are **journey hypotheses**, built from the validated scope of practice in [[content-inventory]] and structural patterns observed in [[benchmark-simone-ebel]] and [[additional-benchmarks]]. They are **not** demographic facts about Simone Tavolaro's actual patient base — no claim is made about how many visitors fall into each journey, or which is most common. All demographic/volume assumptions are explicitly flagged.

---

## Journey 1 — Parent looking for help for a child

**Trigger (ASSUMPTION):** a parent notices a child struggling with speech sounds, language delay, or fluency (stuttering), possibly prompted by a teacher, pediatrician, or family observation.

1. Arrives via search ("fonoaudióloga infantil Alphaville") or a referral link.
2. Needs to quickly confirm: does this practice see children? Which specific issue (fala, atraso de linguagem, gagueira) does she treat?
3. Looks for credibility signals appropriate to trusting someone with their child (credentials, experience, warmth/approachability).
4. Wants to know what a first session/evaluation looks like before committing (RECOMMENDATION, informed by [[additional-benchmarks]] §3–4 FAQ patterns).
5. Converts via WhatsApp to ask questions before booking.

**Evidence basis:** "Atraso de Linguagem," "Trocas na Fala," "Fluência da Fala (ex. gagueira)" and "Atendimento a adultos, crianças e idosos" are stated in [[content-inventory]] §3–4. The rest of the journey (trigger, information needs, sequencing) is INFERENCE drawn from general patterns observed in the benchmarks, not confirmed data about Simone's actual patients.

## Journey 2 — Adult looking for help for themselves

**Trigger (ASSUMPTION):** an adult experiences difficulty with speech, word-finding/comprehension (possibly post-stroke or neurological, per "afasia"), or persistent fluency issues.

1. Arrives via search or referral (possibly from a neurologist, given the "afasia" scope).
2. Needs reassurance this is a normal, treatable, non-stigmatized condition — INFERENCE, adult self-referral for communication difficulty may carry more hesitation/embarrassment than a parent seeking help for a child.
3. Looks for evidence the practitioner treats adults specifically, not just children (a common assumption about "fono" being pediatric-only — INFERENCE).
4. Wants privacy/discretion in how contact is initiated.
5. Converts via WhatsApp or explores online-session availability if travel to Alphaville is difficult.

**Evidence basis:** "Compreensão ou expressão (afasia)" and "atendimento a adultos... idosos" from [[content-inventory]] §3–4. Note: the current site scopes "online" availability explicitly to adults only ([[content-inventory]] §4) — this journey's online-session step depends on that being validated as still accurate.

## Journey 3 — Professional looking for help with communication/oratory

**Trigger (ASSUMPTION):** a working professional wants to improve public speaking, workplace communication, or oratory skills — not addressing a clinical "problem" so much as a professional-development goal.

1. Arrives via search ("fonoaudióloga oratória" / "comunicação corporativa") or word-of-mouth referral.
2. Needs to understand this is a distinct service from clinical/pediatric therapy — different tone, different framing expected (INFERENCE).
3. Wants clarity on format: individual coaching vs. group/corporate training, session structure, and outcomes framing — none of which is currently stated on-site ([[content-inventory]] §3, marked for validation).
4. Credibility signals sought may differ from Journeys 1–2 (e.g., prior corporate clients, communication-coaching-specific credentials) — not established in current content.
5. Converts via WhatsApp, but likely wants a business-oriented first contact.

**Evidence basis:** "Comunicação no ambiente de trabalho (oratória)" is stated in [[content-inventory]] §3. Everything else about the journey is an untested INFERENCE. This journey is explicitly called out as a **differentiation opportunity vs. the Simone Ebel benchmark**, which does not address this audience (see [[benchmark-simone-ebel]], "Opportunities" section).

## Journey 4 — Visitor looking for online consultation

**Trigger (ASSUMPTION):** a visitor who cannot travel to Alphaville (geographic distance, mobility, schedule) searches specifically for online/remote fonoaudiologia services.

1. Needs to find, ideally in the hero or early in the page, whether online sessions are offered.
2. Needs to know which audience(s) online sessions apply to — the current site states online availability for adults only ([[content-inventory]] §4); if this scope is accurate, it should be stated plainly to avoid a child's parent wasting time before finding out it doesn't apply.
3. Wants to understand how an online session works logistically (platform, what's needed) — not currently addressed anywhere on-site.
4. Converts via WhatsApp to confirm eligibility and logistics.

**Evidence basis:** "Possibilidade de atendimento on-line para adultos" from [[content-inventory]] §4. The scope restriction to adults-only is a **direct citation from the current site** and should be explicitly [VALIDATE WITH CLIENT] — is this still accurate, or has it changed?

**Benchmark input (TinyEYE, [[additional-benchmarks]] §6):** because online therapy lacks the physical trust cues of an in-person consultório, this journey likely needs more explicit content than the others — a plain explanation of how a session works mechanically (platform, what's needed), and clear next-step/process transparency — to compensate. This reinforces step 3 above as a priority, not an optional nice-to-have.

## Journey 5 — Visitor who already knows Simone and wants to book

**Trigger (ASSUMPTION):** an existing patient, a referral from someone who already knows her work, or a returning visitor who has already decided to book.

1. Arrives directly (typed URL, saved bookmark, WhatsApp contact re-share) — INFERENCE, not confirmed by analytics (none were reviewed in this Discovery pass).
2. Does **not** need to be convinced — needs the fastest possible path to contact/booking.
3. Wants the phone number/WhatsApp link and address (for in-person visits) to be immediately findable without reading persuasive content.
4. Converts almost immediately via WhatsApp or by looking up the address.

**Evidence basis:** structurally supported by the existence of the current Contato page as a minimal, fast, WhatsApp/QR-focused page ([[current-site-audit]] §3, Contato screenshot) — this journey is largely already served by the current site's simplicity. INFERENCE that this journey exists at meaningful volume; not confirmed by any analytics data reviewed in this Discovery.

---

## Cross-journey observations

- **RECOMMENDATION:** Journeys 1, 2, and 4 share a need to self-identify quickly ("does this practice serve someone like me?") — supporting the audience/condition-segmentation pattern noted in [[benchmark-simone-ebel]] §7 and [[additional-benchmarks]] (NYCSLP's condition-blocks pattern).
- **RECOMMENDATION:** Journey 3 (oratória) is different enough in tone and intent from Journeys 1/2/4 that it may deserve its own clearly labeled entry point in the IA, rather than being buried in the same list as clinical conditions — see [[proposed-information-architecture]].
- **RECOMMENDATION:** Journey 5 confirms the value of keeping the Contato page (or contact information generally) extremely fast and low-friction — this should not be sacrificed for the sake of adding persuasive content elsewhere.
- All five journeys converge on the same single CTA mechanism (WhatsApp) consistent with CLAUDE.md's single-primary-CTA principle — no journey in this hypothesis set requires a second competing CTA type.
