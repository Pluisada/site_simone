/**
 * Google Reviews social proof — validated reputation data for the early
 * homepage module (index.astro, between Hero and Áreas de Atuação).
 *
 * SOURCING RULE (CLAUDE.md): every factual value below is client-validated,
 * cited inline. Nothing is invented. This is a NEW primary treatment — the
 * existing small Google link inside "Quem é Simone"
 * (src/components/AboutCredentials.astro) stays in place as a lighter,
 * secondary echo; see docs/design/google-reviews-social-proof-options.md §7
 * for why both exist rather than one replacing the other.
 *
 * The destination URL is deliberately NOT repeated here — it already lives
 * once, validated, as `contact.mapsUrl` in src/data/site.ts, and this module
 * imports it from there rather than duplicating it.
 *
 * Explicitly withheld from this module, per this phase's brief:
 *  - the ~3,833 profile-view figure (not a useful trust/conversion metric)
 *  - "100% 5 estrelas" framing (the rating number already communicates this)
 *  - any review excerpt, patient/reviewer name, date, avatar, or screenshot
 */

/** CLIENT-VALIDATED 2026-08-16. */
export const googleReviews = {
  /** Raw value, kept alongside the display string in case it's needed for
   *  a future validated use (e.g. a JSON-LD field, if and when one is ever
   *  approved — none is added in this phase; see src/lib/schema.ts). */
  rating: 5.0,
  /** pt-BR display form (comma decimal). */
  ratingDisplay: '5,0',
  reviewCount: 43,
  /** One assembled string so the component never has to guess word order
   *  or pluralization. */
  reviewCountDisplay: '43 avaliações no Google',
  /**
   * Accessible name for the rating as a whole. The visual number, star
   * icons and count text are all `aria-hidden` in the component — this is
   * the single sentence a screen reader announces instead, per this
   * phase's accessibility brief.
   */
  accessibleSummary: '5,0 de 5. 43 avaliações no Google.',
} as const;

/** Framing copy for the module — approved wording from this phase's brief. */
export const socialProofSection = {
  eyebrow: 'Avaliações no Google',
  heading: 'O que nossos pacientes estão dizendo',
  /** Deliberately plain: no adjective inflation, no "100%", no excerpt. */
  supportingText: 'Avaliações reais de pacientes e familiares.',
  linkLabel: 'Veja as avaliações no Google',
} as const;
