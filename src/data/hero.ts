/**
 * Hero content.
 *
 * SOURCING RULE (CLAUDE.md): every line below is assembled ONLY from
 * client-validated facts. No claim, statistic, superlative or comparative
 * statement appears here, per the healthcare-communication rules.
 *
 * STATUS: this is validated-fact copy, not approved final marketing copy.
 * content-positioning-brief.md §6 defines what the hero must COMMUNICATE
 * (message / content / copy direction) and explicitly defers polished
 * wording. These strings are the minimum faithful expression of that brief
 * and remain subject to client copy approval.
 */

export const hero = {
  /**
   * Positioning headline (H1).
   * Source: client-validation A1 — "Especialista em linguagem, especialista
   * em educação"; corroborated by the CFFa registration n. 9940/24
   * (Especialista em Linguagem) on the current site.
   * This states a registered credential — it is not a superiority claim.
   */
  headline: 'Fonoaudióloga especialista em linguagem',

  /**
   * Supporting message — the validated scope of practice in plain language.
   * Source: client-validation A1 (current focus areas), C1/C2 (area
   * descriptions), A2 (audiences). Area names match src/data/practice-areas.ts.
   */
  supportingMessage:
    'Atendimento em atraso de linguagem, trocas na fala, distúrbios da fluência, motricidade orofacial, oratória e reabilitação de linguagem.',

  /**
   * Audience cue — compressed life-stage tags shown above the headline.
   * Source: content-positioning-brief.md §6, which specifies exactly
   * "Crianças e adolescentes" / "Adultos" (from client-validation A2, B1, D1).
   *
   * Deliberately kept short: the 2y6m minimum age (B1) is an eligibility
   * detail that belongs to Áreas de Atuação and the FAQ, not the hero cue.
   * It already lives in src/data/practice-areas.ts (serviceScope).
   */
  audienceCue: ['Crianças e adolescentes', 'Adultos'],

  /**
   * Lightweight credibility cue. The FULL credential list belongs to the
   * "Quem é Simone" section, not the hero (design-system.md §21, ux-strategy §13).
   * Source: client-validation F1 + registration numbers on the current site.
   */
  credibilityCue:
    'Especialista em Linguagem e em Fonoaudiologia Educacional pelo Conselho Federal de Fonoaudiologia. Graduada pela PUC-SP.',

  /**
   * CTA label. WhatsApp is the sole primary channel (client-validation E2).
   * Contextual microcopy is permitted as long as destination and action are
   * identical across placements (design-system.md §15, ux-strategy §10).
   */
  ctaLabel: 'Conversar no WhatsApp',

  /**
   * Portrait alt text — descriptive and role-based, replacing the current
   * site's generic "Picture"/"Imagem" (design-system.md §27).
   */
  portraitAlt: 'Simone Tavolaro, fonoaudióloga, em seu consultório',
} as const;
