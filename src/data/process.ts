/**
 * "Como Funciona" — process content.
 *
 * SOURCING RULE (CLAUDE.md): every line traces to a client-validated answer.
 * The underlying sequence is verbatim from client-validation E1:
 *   "há uma troca de mensagens com esclarecimentos como preços e horarios.
 *    Na consulta inicial acontece uma entrevista, momento em que são coletadas
 *    todas as informações referentes a queixa e histórico do paciente.
 *    À partir daí inicia-se a avaliação e processo terapêutico propriamente dito"
 *
 * RESTRUCTURED 2026-08-16 (client-approved — Simone requested this specific
 * presentation change). Previously FOUR numbered timeline steps (01–04).
 * Now TWO editorial bullets, no numbering, no timeline, no connectors:
 *  - "Primeiro contato" = old step 01, verbatim.
 *  - "Entrevista, avaliação e processo terapêutico" = old steps 02, 03 and
 *    04 combined into a single item (quote → clinical description →
 *    online-session note). No word was added or reworded in this merge.
 *
 * CONTENT REMOVAL 2026-08-16 (client-approved): the two short closing lines
 * that came from the old steps 03 ("A partir das informações da entrevista,
 * começa a avaliação.") and 04 ("Concluída a avaliação, inicia-se o
 * processo terapêutico.") were removed outright at the client's request —
 * they no longer exist anywhere in this file, the rendered DOM, or the
 * JSON-LD (which never referenced process.ts content to begin with).
 */

export type ProcessContentBlock =
  | { type: 'quote'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'note'; label: string; text: string };

export type ProcessItem = {
  id: string;
  title: string;
  /** Ordered content blocks rendered inside this item — no sub-bullets, no
   *  internal numbering. See HowItWorks.astro for how each block type is
   *  styled (quote / plain paragraph / online-session note). */
  content: ProcessContentBlock[];
  /** Client-validation question(s) this item's content traces to. */
  source: string;
};

export const processItems: ProcessItem[] = [
  {
    id: 'primeiro-contato',
    title: 'Primeiro contato',
    content: [
      {
        type: 'paragraph',
        text: 'O primeiro contato acontece por mensagem, com esclarecimentos sobre preços e horários.',
      },
    ],
    source: 'client-validation E1',
  },
  {
    id: 'entrevista-avaliacao-processo',
    title: 'Entrevista, avaliação e processo terapêutico',
    content: [
      // CLIENT-APPROVED 2026-08-16 (TEXTOS DA LANDING PAGE.docx) — was the
      // pulled quote under the old step 02's title.
      {
        type: 'quote',
        text: '“A avaliação é um processo clínico que começa desde o primeiro contato com o paciente.”',
      },
      // CLIENT-APPROVED 2026-08-16 (TEXTOS DA LANDING PAGE.docx) — was the
      // old step 02's description.
      {
        type: 'paragraph',
        text: 'A avaliação fonoaudiológica tem início desde o primeiro contato, por meio da entrevista e da observação clínica. Ao longo desse processo, são analisados os aspectos da comunicação relacionados à fala, linguagem, voz, fluência e às funções orofaciais, de acordo com a demanda de cada paciente. Quando necessário, são utilizados instrumentos e procedimentos específicos para complementar a avaliação e compreender de forma individualizada as habilidades, dificuldades e necessidades apresentadas. A partir desses dados, são estabelecidos os objetivos terapêuticos e as estratégias mais adequadas para cada caso.',
      },
      // Online-session mechanics — source: client-validation D2. Kept
      // exactly as validated; the fuller D2 answer (quiet environment,
      // connection, punctual start) lives in the FAQ entry
      // `atendimento-online` in src/data/faq.ts.
      {
        type: 'note',
        label: 'No atendimento on-line',
        text: 'A sessão acontece pelo Google Meet, e o link de acesso é enviado cerca de 10 minutos antes. Uma ficha de cadastro e um termo de compromisso são enviados para preencher antes da consulta.',
      },
    ],
    source: 'client-validation D2; TEXTOS DA LANDING PAGE.docx (client-approved 2026-08-16)',
  },
];

/** Section framing. Unchanged by the 2026-08-16 restructuring. */
export const processSection = {
  eyebrow: 'Como funciona',
  heading: 'Do primeiro contato ao acompanhamento',
  /** Purely structural framing — states the sequence exists, claims nothing. */
  lead: 'O caminho é o mesmo para o atendimento presencial e para o on-line.',
  imageAlt:
    'Sala de atendimento do consultório, com mesa, cadeiras e materiais de apoio',
} as const;
