/**
 * Áreas de Atuação — six validated practice areas.
 *
 * Every `description` below is the client's OWN plain-language wording,
 * verbatim from docs/discovery/client-validation.md (C1) and the final
 * validation round (content-positioning-brief.md, UPDATE section).
 * These are clinical descriptions authored by the practitioner — they must
 * not be reworded, shortened or "improved" without her re-validation.
 *
 * ORDER IS FIXED (design-system.md §20 / content-positioning-brief §5):
 * inquiry-volume ordering from client-validation A2. This is a scan-order
 * decision only — it is NOT a statement of relative importance.
 *
 * `afasia` carries identical visual weight to every other area — explicitly
 * client-validated, and a fixed rule in design-system.md §35.
 */

export type PracticeArea = {
  /** Stable id, also used as the section anchor. */
  id: string;
  /** Public-facing area name. */
  name: string;
  /** Client-authored plain-language description (verbatim — do not edit). */
  description: string;
  /** Light audience tag — not a pill/badge (design-system.md §20). */
  audience: string;
  /**
   * Visual treatment. 'clinical' = standard editorial row.
   * 'coaching' = the single terracotta-tinted module (oratória only).
   */
  variant: 'clinical' | 'coaching';
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'atraso-de-linguagem',
    name: 'Atraso de linguagem',
    description:
      'Atraso de linguagem é quando uma criança demora mais que o esperado para começar a falar ou para formar frases; ela pode entender bem, mas falar menos palavras que outras da mesma idade.',
    audience: 'Crianças e adolescentes',
    variant: 'clinical',
  },
  {
    id: 'trocas-na-fala',
    name: 'Trocas na fala',
    description:
      'Quando a pessoa confunde ou substitui sons, sílabas ou palavras ao falar, fazendo com que a frase saia diferente do que ela queria dizer.',
    audience: 'Crianças e adolescentes',
    variant: 'clinical',
  },
  {
    id: 'disturbios-da-fluencia',
    name: 'Distúrbios da fluência',
    description:
      'Gagueira é quando a pessoa repete sons, alonga sílabas ou trava ao falar, o que atrapalha o ritmo da fala e pode causar frustração.',
    audience: 'Crianças, adolescentes e adultos',
    variant: 'clinical',
  },
  {
    id: 'motricidade-orofacial',
    name: 'Motricidade orofacial',
    description:
      'Motricidade orofacial é o conjunto de movimentos que fazemos com a boca e o rosto para funções importantes do dia a dia, como mastigar, engolir, respirar, falar e até expressar emoções. Quando essa motricidade não está funcionando bem, podemos ter dificuldades nessas atividades, e a terapia ajuda a fortalecer e coordenar esses músculos.',
    audience: 'Crianças, adolescentes e adultos',
    variant: 'clinical',
  },
  {
    id: 'oratoria',
    name: 'Oratória',
    description:
      'Oratória é a habilidade de falar em público de forma clara e organizada para explicar ideias, contar histórias ou convencer quem escuta.',
    audience: 'Adultos',
    variant: 'coaching',
  },
  {
    id: 'afasia',
    name: 'Afasia e reabilitação de linguagem',
    description:
      'Afasia compreensão e expressão é quando alguém tem dificuldade para entender o que os outros dizem ou para encontrar as palavras e falar, geralmente por causa de uma lesão no cérebro.',
    audience: 'Adultos',
    variant: 'clinical',
  },
];

/**
 * Service scope notes — client-validated, used as eligibility copy.
 * B1: children from 2y6m; parental guidance below that age.
 * D1: online sessions for adults and adolescents only.
 */
export const serviceScope = {
  minimumChildAge: 'A partir de 2 anos e 6 meses',
  underMinimumAgeNote: 'Antes dessa idade: orientação parental',
  onlineEligibility: 'Atendimento on-line disponível para adultos e adolescentes',
  oratoriaFormat: 'Atendimento individual, em consultório e/ou on-line',
} as const;
