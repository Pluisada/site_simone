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
 *
 * NAME UPDATE 2026-08-16: heading and portraitAlt read `site.name` instead
 * of repeating the professional name as a separate literal, so the name has
 * exactly one source of truth (src/data/site.ts).
 */
import { site } from './site';

export const about = {
  /** Section eyebrow — deliberately first-name-only, an established
   *  editorial convention (design-system.md §21), not the professional name. */
  eyebrow: 'Quem é Simone',

  /**
   * Section heading. Her name is used as the heading — factual, editorial,
   * and free of any claim. Source: client-validation (identity, confirmed).
   */
  heading: site.name,

  /**
   * Short professional lead. CLIENT-APPROVED 2026-08-16 (TEXTOS DA LANDING
   * PAGE.docx), reproduced verbatim. Every clause still traces to a
   * validated answer:
   *  - "Especialista em Linguagem e em Fonoaudiologia Educacional" -> F1 +
   *    the CFFa registration numbers in src/data/site.ts
   *  - "crianças, adolescentes e adultos" -> A2, B1, D1
   *  - "Alphaville"                -> G1 (address confirmed current)
   *  - "também on-line"            -> D1 (online for adults/adolescents)
   * No adjective of quality, no experience figure, no outcome claim.
   */
  lead: 'Fonoaudióloga Especialista em Linguagem e em Fonoaudiologia Educacional. Atende crianças, adolescentes e adultos em consultório particular em Alphaville, e também on-line.',

  /** Tier labels — design-system.md §21 three-tier hierarchy. */
  tier1Label: 'Especialista pelo Conselho Federal de Fonoaudiologia',
  tier2Label: 'Formação',
  /** "Lato Sensu" stated once as a qualifier rather than repeated five times,
   *  which is what keeps Tier 3 compact (design-system.md §21). */
  tier3Label: 'Pós-graduações (Lato Sensu)',

  /** Alt text for the contextual portrait — a different photograph from the
   *  Hero's, so the description differs too. */
  portraitAlt: `${site.name} sorrindo, sentada à mesa de atendimento em seu consultório`,
} as const;
