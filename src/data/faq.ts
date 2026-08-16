/**
 * FAQ — question set and validated answers.
 *
 * Question topics come from content-positioning-brief.md §12.
 * Every answer below is derived strictly from a client-validated response,
 * cited by question ID. No answer may be invented or extended beyond
 * what the client actually confirmed.
 *
 * This array is the SINGLE SOURCE for both the visible accordion UI and the
 * future FAQPage JSON-LD (technical-architecture.md §8) — so the two can
 * never drift apart.
 *
 * Phase 1 note: the accordion UI itself is NOT built yet. The final
 * implementation must use native <details name="faq"> for exclusive
 * open/close behavior with zero JS (technical-architecture.md §4).
 */

export type FaqItem = {
  id: string;
  question: string;
  /** Validated answer, or null where the source data is still incomplete. */
  answer: string | null;
  /** Client-validation question ID this answer traces to. */
  source: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 'idade-minima',
    question: 'A partir de que idade Simone atende crianças?',
    answer:
      'O atendimento é a partir de 2 anos e 6 meses. Antes dessa idade, é realizada orientação parental.',
    source: 'client-validation B1',
  },
  {
    id: 'atendimento-online',
    question: 'Como funciona o atendimento on-line e para quem é indicado?',
    answer:
      'O atendimento on-line é realizado para adultos e adolescentes e funciona da mesma forma que uma consulta presencial. As sessões acontecem pela plataforma Google Meet: o link de acesso é enviado cerca de 10 minutos antes do horário marcado, e é necessário estar conectado a uma rede ou plano de dados, em um ambiente tranquilo e sem interrupções. Antes da consulta, é enviada uma ficha de cadastro e um termo de compromisso que devem ser preenchidos e devolvidos.',
    source: 'client-validation D1, D2',
  },
  {
    id: 'primeiro-contato',
    question: 'O que acontece depois que eu mando uma mensagem no WhatsApp?',
    answer:
      'Primeiro há uma troca de mensagens com esclarecimentos sobre preços e horários. Na consulta inicial acontece uma entrevista, momento em que são coletadas as informações sobre a queixa e o histórico do paciente. A partir daí inicia-se a avaliação e o processo terapêutico.',
    source: 'client-validation E1',
  },
  {
    id: 'convenio-reembolso',
    question: 'Simone atende por convênio? Emite recibo para reembolso?',
    answer:
      'O atendimento é somente particular. São emitidos recibos para solicitação de reembolso junto ao plano de saúde.',
    source: 'client-validation G3',
  },
  {
    id: 'horarios',
    question: 'Quais são os horários de atendimento?',
    answer: 'O atendimento acontece de terças a quintas, nos períodos da manhã e da tarde.',
    source: 'client-validation G2',
  },
  {
    id: 'localizacao',
    question: 'Onde fica o consultório?',
    answer:
      'O consultório fica na Av. Andrômeda, 885, sala 1721, no Edifício Brascan Century Plaza, em Alphaville, Barueri (SP).',
    source: 'client-validation G1',
  },
  {
    id: 'como-entrar-em-contato',
    question: 'Qual a melhor forma de entrar em contato?',
    answer: 'O contato é feito pelo WhatsApp, que é o canal utilizado para agendamentos e dúvidas.',
    source: 'client-validation E2',
  },
  {
    id: 'significado-titulos',
    question: 'O que significam os títulos e especializações?',
    answer: null, // TODO [Phase 2 copy]: plain-language explanation of the CFFa
    // specialist titles, drawn only from the validated credential list in
    // site.ts. Addresses the readability gap in ux-audit §8. Not yet written.
    source: 'content-positioning-brief §12 (copy pending)',
  },
];
