/**
 * Áreas de Atuação — six validated practice areas, in two editorial groups.
 *
 * Every `description` below is the client's OWN clinical wording.
 * CONTENT UPDATE 2026-08-16 (client-approved, source: TEXTOS DA LANDING
 * PAGE.docx — tracked changes approved by the client): all six descriptions
 * were replaced with new client-authored wording, reproduced verbatim. The
 * previous short plain-language paragraphs (client-validation C1) were
 * explicitly removed per the approved revision. These are clinical
 * descriptions authored by the practitioner — they must not be reworded,
 * shortened or "improved" without her re-validation.
 *
 * GROUPING (client-approved 2026-08-16, design-system.md §20 amended):
 * two editorial groups distinguish two different visitor needs — NOT a
 * statement that one group or area is more important than another.
 *  - `language-development`: the five clinical/developmental areas.
 *  - `professional-communication`: oratória, alone.
 * See `practiceAreaGroups` below for the group labels.
 *
 * ORDER IS FIXED (design-system.md §20 / content-positioning-brief §5):
 * within `language-development`, inquiry-volume ordering from
 * client-validation A2. This is a scan-order decision only — it is NOT a
 * statement of relative importance.
 *
 * `afasia` carries identical visual weight to every other area — explicitly
 * client-validated, and a fixed rule in design-system.md §35. Oratória also
 * carries identical row-level visual weight to every other area — it is no
 * longer background-tinted; only its group heading differs.
 */

export type PracticeAreaGroupKey = 'language-development' | 'professional-communication';

/** Group labels — the only thing that visually distinguishes Oratória now. */
export const practiceAreaGroups: Record<PracticeAreaGroupKey, string> = {
  'language-development': 'Linguagem, fala e desenvolvimento',
  'professional-communication': 'Comunicação profissional',
};

export type PracticeArea = {
  /** Stable id, also used as the section anchor. */
  id: string;
  /** Public-facing area name. */
  name: string;
  /** Client-authored plain-language description (verbatim — do not edit). */
  description: string;
  /** Light audience tag — not a pill/badge (design-system.md §20). */
  audience: string;
  /** Which editorial group this area belongs to. See practiceAreaGroups. */
  group: PracticeAreaGroupKey;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'atraso-de-linguagem',
    name: 'Atraso de linguagem',
    description:
      'A fonoaudióloga busca compreender como a criança está se comunicando, identificando suas habilidades e dificuldades de linguagem. A partir dessa avaliação são definidas estratégias terapêuticas individualizadas para favorecer o desenvolvimento da compreensão, da expressão e do uso funcional da linguagem, além de orientações à família e, quando necessário, encaminhamentos para outros profissionais.',
    audience: 'Crianças',
    group: 'language-development',
  },
  {
    id: 'trocas-na-fala',
    name: 'Trocas na fala',
    description:
      'Quando a criança apresenta trocas, omissões, substituições ou distorções de sons, sua fala pode se tornar menos clara e compreensível. A fonoaudióloga realiza uma avaliação para identificar quais sons estão alterados, considerando a idade e o desenvolvimento da criança, além dos contextos em que essas alterações ocorrem. A partir dessa avaliação, são definidas estratégias terapêuticas individualizadas para favorecer o desenvolvimento e a produção adequada dos sons da fala.',
    audience: 'Crianças',
    group: 'language-development',
  },
  {
    id: 'disturbios-da-fluencia',
    // CLIENT-APPROVED 2026-08-16 display name. The approved document gives
    // this as "Fluência da Fala (Gagueira e Taquifemia) – Crianças,
    // adolescentes e adultos" in one line; the audience clause is carried
    // in the `audience` field below (already rendered separately by
    // PracticeAreas.astro) rather than duplicated inside `name`.
    name: 'Fluência da Fala (Gagueira e Taquifemia)',
    description:
      'A fonoaudióloga busca compreender como a pessoa se comunica, identificando as características da sua fala e possíveis alterações de fluência, como a gagueira e a taquifemia. A partir dessa avaliação, são definidas estratégias terapêuticas individualizadas, considerando a idade, as necessidades e os objetivos de cada paciente, com o propósito de favorecer uma comunicação mais confortável, espontânea e funcional.',
    audience: 'Crianças, adolescentes e adultos',
    group: 'language-development',
  },
  {
    id: 'motricidade-orofacial',
    name: 'Motricidade orofacial',
    description:
      'A fonoaudióloga avalia o funcionamento das estruturas e das funções orofaciais, como respiração, mastigação, deglutição, fala e postura e mobilidade da língua e dos lábios. A partir dessa avaliação, são identificadas possíveis alterações miofuncionais, como interposição lingual e alterações na articulação da fala, e definidas estratégias terapêuticas individualizadas para promover um funcionamento mais adequado e integrado das funções orofaciais. Quando necessário, o trabalho é realizado de forma interdisciplinar, em parceria com dentistas e outros profissionais.',
    audience: 'Crianças, adolescentes e adultos',
    group: 'language-development',
  },
  {
    id: 'oratoria',
    name: 'Oratória',
    description:
      'Aprimoramento da comunicação oral para profissionais que desejam se expressar com mais clareza, segurança e assertividade. A avaliação fonoaudiológica considera aspectos da fala, voz e comunicação, trabalhando recursos como articulação, ritmo, entonação, expressividade, organização do discurso e postura comunicativa, de acordo com as demandas e objetivos profissionais de cada paciente.',
    audience: 'Adultos',
    group: 'professional-communication',
  },
  {
    id: 'afasia',
    name: 'Afasia e reabilitação de linguagem',
    description:
      'Alteração da linguagem que pode ocorrer após um AVC ou outras condições neurológicas, afetando a capacidade de falar, compreender, ler e/ou escrever. A fonoaudióloga realiza uma avaliação para compreender as habilidades de comunicação preservadas e as dificuldades apresentadas, definindo estratégias terapêuticas individualizadas para favorecer a comunicação funcional e a participação do paciente em seu cotidiano, além de orientar familiares e, quando necessário, atuar em conjunto com outros profissionais.',
    audience: 'Adultos',
    group: 'language-development',
  },
];

/**
 * Service scope notes — client-validated, used as eligibility copy.
 * B1: children from 2y6m; parental guidance below that age.
 * D1: online sessions for adults and adolescents only.
 *
 * `oratoriaFormat` ("Atendimento individual, em consultório e/ou on-line")
 * was removed 2026-08-16 (client-approved, TEXTOS DA LANDING PAGE.docx) —
 * the approved revision drops the note that used to render under Oratória.
 */
export const serviceScope = {
  minimumChildAge: 'A partir de 2 anos e 6 meses',
  underMinimumAgeNote: 'Antes dessa idade: orientação parental',
  onlineEligibility: 'Atendimento on-line disponível para adultos e adolescentes',
} as const;
