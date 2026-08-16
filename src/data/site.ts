/**
 * Site-wide configuration and validated business data.
 *
 * SOURCE OF TRUTH RULES (CLAUDE.md + docs/discovery/content-positioning-brief.md):
 *  - Every factual value here traces to a client-validated answer in
 *    docs/discovery/client-validation.md, cited by question ID.
 *  - Nothing may be invented. Unvalidated values are typed as `null` and
 *    carry a TODO referencing the open item — they must not be replaced with
 *    plausible-looking placeholders that could be mistaken for real data.
 */

/** Production domain — still an open client-validation item
 *  (technical-architecture.md §8). Overridden via the SITE_URL env var. */
export const SITE_URL = import.meta.env.SITE ?? 'https://example.invalid';

export const site = {
  name: 'Simone Tavolaro',
  role: 'Fonoaudióloga',
  locale: 'pt-BR',
  /** Not final copy — Phase 2+ deliverable. */
  defaultTitle: '[SITE_TITLE]',
  defaultDescription: '[SITE_DESCRIPTION]',
} as const;

/**
 * WhatsApp — the sole primary contact channel (client-validation E2).
 * Centralized here so the number is never duplicated across components
 * (Phase 1 requirement §13).
 */
export const whatsapp = {
  /** Display form — client-validation G1 (confirmed current). */
  displayNumber: '(11) 97671-4748',
  /** E.164, digits only, for wa.me deep links. */
  e164: '5511976714748',
  /** Existing deep link found on the current site (current-site-audit §3). */
  deepLink: 'https://wa.me/message/MSJ3LJQRGJI5F1',
  /**
   * Canonical CTA href. Prefer the phone-number form over the legacy
   * short link so the destination is verifiable from the number itself.
   */
  href: 'https://wa.me/5511976714748',
} as const;

/** Contact / NAP — all fields confirmed in client-validation G1–G3. */
export const contact = {
  addressStreet: 'Av. Andrômeda, 885, sala 1721',
  addressBuilding: 'Edifício Brascan Century Plaza',
  addressDistrict: 'Alphaville',
  addressLocality: 'Barueri',
  addressRegion: 'SP',
  addressCountry: 'BR',
  /** Google Maps listing — doubles as the reviews destination (H1). */
  mapsUrl: 'https://maps.app.goo.gl/HJSm3338bdM1qP9d8?g_st=iwb',

  /** Human-readable hours — client-validation G2, verbatim. */
  hoursHuman: 'De terças a quintas, manhã e tarde',
  /**
   * TODO [BLOCKED — client validation]: machine-readable hours for
   * schema.org openingHoursSpecification. "manhã e tarde" cannot be converted
   * to explicit time ranges without inventing them
   * (technical-architecture.md §8). Leave null until the client provides
   * exact opening/closing times.
   */
  hoursSpec: null,

  /** Payment policy — client-validation G3. */
  paymentNote: 'Atendimento particular. Emite recibo para reembolso pelo plano de saúde.',

  /** No email address is published anywhere — content-positioning-brief §13. */
  email: null,
} as const;

/** Professional credentials — all confirmed in client-validation F1 + the
 *  final credential validation round (content-positioning-brief, UPDATE). */
export const credentials = {
  /** Tier 1 — most prominent (design-system.md §21). */
  cffaSpecializations: [
    {
      title: 'Especialista em Linguagem',
      body: 'Conselho Federal de Fonoaudiologia',
      registration: 'n. 9940/24',
    },
    {
      title: 'Especialista em Fonoaudiologia Educacional',
      body: 'Conselho Federal de Fonoaudiologia',
      registration: 'n. 9144/23',
    },
  ],

  /** Tier 2 — formação. */
  formation: {
    degree: 'Graduada em Fonoaudiologia',
    institution: 'PUC-SP — Pontifícia Universidade Católica de São Paulo',
  },

  /** Tier 3 — rendered as one wrapped line, not five bullets
   *  (design-system.md §21). Institution/year deliberately not required. */
  postgraduate: [
    'Especialização em Linguagem',
    'Avaliação e Reabilitação em Motricidade Orofacial',
    'Neuroeducação',
    'Educação Especial com Ênfase em Transtornos Globais do Desenvolvimento',
    'Liderança e Coaching',
  ],

  /**
   * TODO [OPEN — client validation]: CFFa public verification URL.
   * Confirmed to exist (F3) but the specific URL was never provided
   * (design-system.md §35). Optional link, not a blocker.
   */
  verificationUrl: null,
} as const;

/** Navigation — design-system.md §18. FAQ is a homepage section, not a nav item. */
export const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Áreas de Atuação', href: '/#areas-de-atuacao' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
] as const;
