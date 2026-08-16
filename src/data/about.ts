/**
 * "Quem é Simone" section content.
 *
 * SOURCING RULE (CLAUDE.md): assembled ONLY from client-validated facts.
 *
 * The client explicitly DECLINED to share a personal story or career
 * narrative (client-validation F2: "Não"). content-positioning-brief.md §7
 * therefore scopes this section to professional identity + credentials +
 * scope of practice. No biography, philosophy, years of experience, patient
 * count, outcome or award appears here, and none may be added.
 *
 * The credential data itself lives in src/data/site.ts (single source of
 * truth) — this file only carries the section's framing text.
 */

export const about = {
  /** Section eyebrow. */
  eyebrow: 'Quem é Simone',

  /**
   * Section heading. Her name is used as the heading — factual, editorial,
   * and free of any claim. Source: client-validation (identity, confirmed).
   */
  heading: 'Simone Tavolaro',

  /**
   * Short professional lead. Every clause traces to a validated answer:
   *  - "linguagem e educação"      -> A1 (her own stated specialisms)
   *  - "crianças, adolescentes e adultos" -> A2, B1, D1
   *  - "Alphaville"                -> G1 (address confirmed current)
   *  - "também on-line"            -> D1 (online for adults/adolescents)
   * No adjective of quality, no experience figure, no outcome claim.
   */
  lead: 'Fonoaudióloga com atuação em linguagem e educação. Atende crianças, adolescentes e adultos em consultório particular em Alphaville, e também on-line.',

  /** Tier labels — design-system.md §21 three-tier hierarchy. */
  tier1Label: 'Especialista pelo Conselho Federal de Fonoaudiologia',
  tier2Label: 'Formação',
  /** "Lato Sensu" stated once as a qualifier rather than repeated five times,
   *  which is what keeps Tier 3 compact (design-system.md §21). */
  tier3Label: 'Pós-graduações (Lato Sensu)',

  /** Alt text for the contextual portrait — a different photograph from the
   *  Hero's, so the description differs too. */
  portraitAlt: 'Simone Tavolaro sorrindo, sentada à mesa de atendimento em seu consultório',
} as const;
