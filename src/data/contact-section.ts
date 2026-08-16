/**
 * Contact section + footer framing text.
 *
 * SOURCING RULE (CLAUDE.md): this file carries ONLY framing/label text.
 * Every factual value — number, address, hours, maps URL — lives in
 * src/data/site.ts and is read from there, never duplicated here.
 *
 * Nothing below states a response time, a session duration, a price, an
 * availability promise or any convenience claim: none of that is validated.
 * `contact.email` and `contact.hoursSpec` remain null in site.ts and are not
 * surfaced anywhere.
 */

export const contactSection = {
  eyebrow: 'Contato',
  /** Structural heading — no claim, no persuasion. */
  heading: 'Vamos conversar',
  /**
   * States the channel and nothing more.
   * Source: client-validation E2 (WhatsApp is the sole preferred channel)
   * and E1 (first contact is an exchange of messages).
   */
  lead: 'O contato é feito pelo WhatsApp, onde também são esclarecidas dúvidas sobre horários e valores.',

  /** Field labels for the details list. */
  labelWhatsapp: 'WhatsApp',
  labelAddress: 'Consultório',
  labelHours: 'Horários',
  labelOnline: 'Atendimento on-line',

  /** Accessible name for the map link (client-validation G1 destination). */
  mapLinkText: 'Ver no Google Maps',
} as const;

export const footerSection = {
  /** Quiet closing line. Registration numbers themselves come from site.ts. */
  credentialsLabel: 'Registros profissionais',
  navLabel: 'Navegação',
} as const;
