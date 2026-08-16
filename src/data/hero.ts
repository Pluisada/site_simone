/**
 * Hero content.
 *
 * SOURCING RULE (CLAUDE.md): every line below is assembled ONLY from
 * client-validated facts. No claim, statistic, superlative or comparative
 * statement appears here, per the healthcare-communication rules.
 *
 * CONTENT UPDATE 2026-08-16 (client-approved, source: TEXTOS DA LANDING
 * PAGE.docx — tracked changes approved by the client). This supersedes the
 * earlier "validated-fact draft" status noted below: headline, supporting
 * message and credibility lines are now the client's own approved wording,
 * reproduced verbatim (wording, capitalization, punctuation, terminology).
 *
 * NAME UPDATE 2026-08-16: portraitAlt reads `site.name` instead of
 * repeating the professional name as a separate literal.
 */
import { site } from './site';

export const hero = {
  /**
   * Positioning headline (H1).
   * Source: client-validation A1 — "Especialista em linguagem, especialista
   * em educação"; corroborated by the CFFa registration n. 9940/24
   * (Especialista em Linguagem) on the current site.
   * This states a registered credential — it is not a superiority claim.
   * CLIENT-APPROVED 2026-08-16 wording/capitalization.
   */
  headline: 'Fonoaudióloga Especialista em Linguagem',

  /**
   * Supporting message — the validated scope of practice in plain language.
   * CLIENT-APPROVED 2026-08-16 verbatim, including its punctuation (the
   * space before the comma after "taquifemia)" is reproduced exactly as
   * approved, not corrected).
   */
  supportingMessage:
    'Atendimento em Atraso de linguagem, “trocas na fala”, distúrbios da fluência (gagueira, taquifemia) , motricidade orofacial, oratória, afasia.',

  /**
   * Audience cue — compressed life-stage tags shown above the headline.
   * Source: content-positioning-brief.md §6, which specifies exactly
   * "Crianças e adolescentes" / "Adultos" (from client-validation A2, B1, D1).
   * Unchanged by the 2026-08-16 content update.
   *
   * Deliberately kept short: the 2y6m minimum age (B1) is an eligibility
   * detail that belongs to Áreas de Atuação and the FAQ, not the hero cue.
   * It already lives in src/data/practice-areas.ts (serviceScope).
   */
  audienceCue: ['Crianças e adolescentes', 'Adultos'],

  /**
   * Credibility cue — CLIENT-APPROVED 2026-08-16 as three separate lines
   * (previously a single combined sentence). Rendered as three lines inside
   * the same styled block in Hero.astro — no layout/typography change.
   * Source: client-validation F1 + registration numbers on the current site.
   */
  credibilityCue: [
    'Especialista em Linguagem pelo Conselho Federal de Fonoaudiologia',
    'Especialista de Fonoaudiologia Educacional pelo Conselho Federal de Fonoaudiologia',
    'Graduada em Fonoaudiologia pela Pontifícia Universidade Católica – PUC - SP',
  ],

  /**
   * CTA label. WhatsApp is the sole primary channel (client-validation E2).
   * Contextual microcopy is permitted as long as destination and action are
   * identical across placements (design-system.md §15, ux-strategy §10).
   */
  ctaLabel: 'Conversar no WhatsApp',

  /**
   * Portrait alt text — descriptive and role-based, replacing the current
   * site's generic "Picture"/"Imagem" (design-system.md §27). Unchanged by
   * the 2026-08-16 content update.
   */
  portraitAlt: `${site.name}, fonoaudióloga, em seu consultório`,
} as const;
