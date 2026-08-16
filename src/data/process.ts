/**
 * "Como Funciona" — the four-step intake process.
 *
 * SOURCING RULE (CLAUDE.md): every line traces to a client-validated answer.
 * The sequence itself is verbatim from client-validation E1:
 *   "há uma troca de mensagens com esclarecimentos como preços e horarios.
 *    Na consulta inicial acontece uma entrevista, momento em que são coletadas
 *    todas as informações referentes a queixa e histórico do paciente.
 *    À partir daí inicia-se a avaliação e processo terapêutico propriamente dito"
 *
 * FIXED AT FOUR STEPS (design-system.md §22). No step may be added, removed,
 * split or renamed without new client validation. No duration, price, session
 * count or outcome appears here — none is validated.
 */

export type ProcessStep = {
  id: string;
  /** Displayed marker number. Decorative — the <ol> carries real order. */
  number: string;
  title: string;
  description: string;
  /** Client-validation question this step traces to. */
  source: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 'whatsapp',
    number: '01',
    title: 'WhatsApp',
    description:
      'O primeiro contato acontece por mensagem, com esclarecimentos sobre preços e horários.',
    source: 'client-validation E1',
  },
  {
    id: 'consulta-inicial',
    number: '02',
    title: 'Consulta inicial e entrevista',
    description:
      'Na consulta inicial acontece uma entrevista, quando são coletadas as informações sobre a queixa e o histórico do paciente.',
    source: 'client-validation E1',
  },
  {
    id: 'avaliacao',
    number: '03',
    title: 'Avaliação',
    description: 'A partir das informações da entrevista, começa a avaliação.',
    source: 'client-validation E1',
  },
  {
    id: 'processo-terapeutico',
    number: '04',
    title: 'Processo terapêutico',
    description: 'Concluída a avaliação, inicia-se o processo terapêutico.',
    source: 'client-validation E1',
  },
];

/**
 * Online-session mechanics — attached to step 02 only, never as a second
 * parallel timeline (design-system.md §22).
 *
 * Source: client-validation D2. Deliberately limited to the mechanics that
 * change what the visitor must DO before a remote first session. The fuller
 * D2 answer (quiet environment, connection, punctual start) is carried in the
 * FAQ entry `atendimento-online` in src/data/faq.ts, so nothing is lost — this
 * note stays short enough to sit inline without a disclosure control.
 *
 * NOT stated here because none of it is validated: duration, equipment specs,
 * bandwidth figures, platform alternatives, pricing.
 */
export const onlineNote = {
  label: 'No atendimento on-line',
  text: 'A sessão acontece pelo Google Meet, e o link de acesso é enviado cerca de 10 minutos antes. Uma ficha de cadastro e um termo de compromisso são enviados para preencher antes da consulta.',
  source: 'client-validation D2',
} as const;

/** Section framing. */
export const processSection = {
  eyebrow: 'Como funciona',
  heading: 'Do primeiro contato ao acompanhamento',
  /** Purely structural framing — states the sequence exists, claims nothing. */
  lead: 'O caminho é o mesmo para o atendimento presencial e para o on-line.',
  imageAlt:
    'Sala de atendimento do consultório, com mesa, cadeiras e materiais de apoio',
} as const;
