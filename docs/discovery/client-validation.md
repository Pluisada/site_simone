# Client Validation Questionnaire

**Date:** 2026-08-15
**Purpose:** Convert the 14 validation items identified in [[ux-strategy]] §21 into a concise, plain-language questionnaire for Simone. This document does not answer any question itself — every answer must come from Simone.
**Status:** To be sent/reviewed with the client before the Design Direction phase begins.

**How to use this document:** each question below is written in simple Portuguese, ready to send to Simone as-is or read to her directly. The "Why," "Where used," and "Priority" fields are internal notes for the project team, not part of what Simone sees.

Total: 20 questions across 9 categories (within the practical limit requested).

---

## A. POSITIONING

### A1.
**Question for Simone (PT):**
> "Você se vê mais como uma fonoaudióloga generalista, que atende várias necessidades diferentes (crianças, adultos, idosos, fala, linguagem, oratória), ou você prefere que o site destaque uma área específica como sua principal especialidade?"

**RESPOSTA DO CLIENTE:**

> Especialista em linguagem, especialista em educação e focos atuais de atendimento são: atraso de linguagem, trocas na fala, disturbios da fluencia (gagueira e taquefemia), motricidade orofacial e oratória.

- **Why we need this:** Determines whether the homepage opens with a broad value statement or a narrower, single-focus one (see [[ux-strategy]] §1, §9).
- **Where the answer will be used:** Hero headline; "Quem é Simone" section.
- **Priority:** BLOCKER

### A2.
**Question for Simone (PT):**
> "Hoje em dia, qual é o motivo mais comum pelo qual as pessoas entram em contato com você? Pode ser uma estimativa, não precisa ser um número exato (por exemplo: mais pais de crianças, mais adultos, mais pessoas buscando ajuda com oratória, etc.)."

**RESPOSTA DO CLIENTE:**

> Pais de crianças e adolescentes para atraso de linguagem, disturbios da fluência, motricidade orofacial e trocas na fala. Adultos que querem melhorar a performance da fala. 

- **Why we need this:** Helps decide which audience/service appears first in the "Áreas de Atuação" section (see [[ux-strategy]] §5).
- **Where the answer will be used:** Order of content within "Áreas de Atuação."
- **Priority:** IMPORTANT

---

## B. AUDIENCE

### B1.
**Question for Simone (PT):**
> "O site atual diz que você atende crianças, adultos e idosos. Isso ainda está correto? Existe algum caso ou faixa etária que você não atende mais, ou que você atende com alguma restrição?"

**RESPOSTA DO CLIENTE:**

> Crianças: a partir de 2 anos e 6 meses
> Antes dessa idade: Orientação parental

- **Why we need this:** Prevents the new site from overstating or misrepresenting who Simone actually serves.
- **Where the answer will be used:** "Áreas de Atuação" / audience-eligibility notes.
- **Priority:** BLOCKER

### B2.
**Question for Simone (PT):**
> "Sobre o atendimento de comunicação no ambiente de trabalho (oratória): isso é feito de forma individual, em grupo, ou também para empresas? Como costuma funcionar?"

**RESPOSTA DO CLIENTE:**

> Atendimento individual em consultório e/ou on-line.

- **Why we need this:** This service was flagged in Discovery as under-specified — needed to describe it accurately, since it may attract a different type of visitor than the clinical services.
- **Where the answer will be used:** "Áreas de Atuação" (oratória entry).
- **Priority:** IMPORTANT

---

## C. SERVICES / AREAS OF PRACTICE

### C1.
**Question for Simone (PT):**
> "Para cada uma das áreas que você atende hoje (trocas na fala, atraso de linguagem, gagueira, afasia/compreensão e expressão, oratória), você pode escrever uma ou duas frases simples explicando o que é, em linguagem que uma pessoa sem conhecimento técnico entenderia?"

**RESPOSTA DO CLIENTE:**

> Trocas na fala: Quando a pessoa confunde ou substitui sons, sílabas ou palavras ao falar, fazendo com que a frase saia diferente do que ela queria dizer.
> Atraso de linguagem é quando uma criança demora mais que o esperado para começar a falar ou para formar frases; ela pode entender bem, mas falar menos palavras que outras da mesma idade.
> Gagueira é quando a pessoa repete sons, alonga sílabas ou trava ao falar, o que atrapalha o ritmo da fala e pode causar frustração.
> Afasia compreensão e expressão é quando alguém tem dificuldade para entender o que os outros dizem ou para encontrar as palavras e falar, geralmente por causa de uma lesão no cérebro.
> Oratória é a habilidade de falar em público de forma clara e organizada para explicar ideias, contar histórias ou convencer quem escuta.

- **Why we need this:** The current site lists these as technical terms with no plain-language explanation, which is a readability gap identified in [[ux-audit]] §8. We cannot write these explanations ourselves without clinical input.
- **Where the answer will be used:** "Áreas de Atuação" section (main homepage copy).
- **Priority:** BLOCKER

### C2.
**Question for Simone (PT):**
> "Existe alguma área de atuação que não está mais no site, mas que você atende hoje? Ou alguma que está no site, mas que você não atende mais?"

 **RESPOSTA DO CLIENTE:**

> Não. Está tudo no site

- **Why we need this:** Confirms the practice-area list is current before it becomes the basis for the new site's main content.
- **Where the answer will be used:** "Áreas de Atuação" section.
- **Priority:** IMPORTANT

---

## D. ONLINE CONSULTATION

### D1.
**Question for Simone (PT):**
> "O site atual diz que o atendimento online é só para adultos. Isso ainda é verdade? Ou crianças e idosos também podem ser atendidos online?"

**RESPOSTA DO CLIENTE:**

> Somente para adultos e adolescentes

- **Why we need this:** Directly affects who we can tell "online is an option for you" — cannot be left ambiguous or assumed.
- **Where the answer will be used:** "Áreas de Atuação" eligibility notes; FAQ.
- **Priority:** BLOCKER

### D2.
**Question for Simone (PT):**
> "Como funciona, na prática, uma consulta online? (Por exemplo: qual ferramenta/aplicativo você usa, o que a pessoa precisa ter em casa, se funciona igual a uma consulta presencial.)"

**RESPOSTA DO CLIENTE:**

> Funciona igual uma consulta presencial. Para esses casos são fornecidas as seguintes instruções: Instruções para o agendamento de consulta/ entrevista inicial on-line: "O familiar ou paciente deve estar conectado a uma rede ou plano de dados em ambiente tranquilo e sem interrupções; O atendimento será realizado através da plataforma Google Meet. 10min antes será enviado um link para acesso; Pontualmente você será chamado para iniciar a sessão ; Será enviada uma ficha de cadastro e termo de compromisso que deverá ser preenchida e enviada antes da consulta." 


- **Why we need this:** Benchmark research (TinyEYE) shows that online sessions need clear, explicit explanation to build trust, since they lack the physical cues of an in-person office visit (see [[additional-benchmarks]] §6).
- **Where the answer will be used:** "Como Funciona" section; FAQ.
- **Priority:** BLOCKER

---

## E. FIRST CONTACT / HOW IT WORKS

### E1.
**Question for Simone (PT):**
> "O que acontece, passo a passo, depois que uma pessoa te manda uma mensagem no WhatsApp? (Por exemplo: você responde e já marca uma consulta? Tem uma conversa inicial antes? Tem uma avaliação antes do tratamento começar?)"

**RESPOSTA DO CLIENTE:**

> há uma troca de mensagens com esclarecimentos como preços e horarios. Na consulta inicial acontece uma entrevista, momento em que são coletadas todas as informações referentes a queixa e histórico do paciente. À partir daí inicia-se a avaliação e processo terapêutico propriamente dito

- **Why we need this:** The current site gives no indication of what happens after first contact, which was identified as a source of visitor anxiety/friction in [[ux-audit]] §11.
- **Where the answer will be used:** "Como Funciona" section.
- **Priority:** BLOCKER

### E2.
**Question for Simone (PT):**
> "Além do WhatsApp, você gostaria de ter outra forma de contato no site, como um pequeno formulário? Ou o WhatsApp sozinho continua sendo a melhor forma?"

**RESPOSTA DO CLIENTE:**

> o WhatsApp sozinho continua sendo a melhor forma

- **Why we need this:** Determines whether a secondary contact option should be designed, without competing with WhatsApp as the main action.
- **Where the answer will be used:** Contact/CTA area, footer.
- **Priority:** OPTIONAL

---

## F. CREDENTIALS / BIOGRAPHY

### F1.
**Question for Simone (PT):**
> "Para cada uma das suas pós-graduações listadas no site (Especialização em Linguagem, Motricidade Orofacial, Neuroeducação, Educação Especial, Liderança e Coaching), você pode confirmar em qual instituição e em que ano você concluiu?"

**RESPOSTA DO CLIENTE:**

> Gostaria apenar de Informar: Formação pela PUC/SP. Especializaçãon em linguagem e educação pelo conselho federal de fonoaudiologia. Outros não precisa. 

- **Why we need this:** This information is not stated on the current site and cannot be added without it.
- **Where the answer will be used:** "Quem é Simone" section; Sobre page.
- **Priority:** IMPORTANT

### F2.
**Question for Simone (PT):**
> "Você gostaria de compartilhar um pouco da sua história pessoal no site — por exemplo, o que te motivou a escolher a fonoaudiologia, ou algo sobre a sua trajetória profissional? Se sim, pode escrever livremente, sem se preocupar com o texto final."

**RESPOSTA DO CLIENTE:**

> Não

- **Why we need this:** The current site has no personal narrative, only a generic description of the profession — identified as a content gap in [[content-inventory]] §9.
- **Where the answer will be used:** Sobre page; short version in "Quem é Simone" section.
- **Priority:** IMPORTANT

### F3.
**Question for Simone (PT):**
> "Existe algum site oficial (por exemplo, do Conselho Federal de Fonoaudiologia) onde as pessoas possam conferir seus registros de especialista? Se sim, qual o link?"

**RESPOSTA DO CLIENTE:**

> Sim. No site oficial do Conselho Federal de Fonoaudiologia

- **Why we need this:** Would let us link her registration numbers to a public verification source, adding credibility. Not currently on the site.
- **Where the answer will be used:** Credentials section (optional link).
- **Priority:** OPTIONAL

---

## G. LOGISTICS / PAYMENT / INSURANCE

### G1.
**Question for Simone (PT):**
> "Confirmando os dados que estão no site atual: o WhatsApp (11) 97671-4748 e o endereço (Av Andrômeda, 885, sala 1721, Alphaville, Edifício Brascan Century Plaza) ainda estão corretos?"

**RESPOSTA DO CLIENTE:**

> SIM

- **Why we need this:** This information must be accurate before appearing on the new site's contact/footer sections.
- **Where the answer will be used:** Contato page; footer (all pages).
- **Priority:** BLOCKER

### G2.
**Question for Simone (PT):**
> "Quais são os seus horários de atendimento?"

**RESPOSTA DO CLIENTE:**

> De terças à quintas, manhã e tarde.

- **Why we need this:** Not stated anywhere on the current site; visitors currently have no way to know when they can expect a response or book a session.
- **Where the answer will be used:** Contato page; footer.
- **Priority:** IMPORTANT

### G3.
**Question for Simone (PT):**
> "Você atende por convênio (plano de saúde) ou só particular? Se for só particular, você emite recibo para que a pessoa peça reembolso pelo plano dela?"

**RESPOSTA DO CLIENTE:**

> Somente particular e emito recibos para reembolso pelos planos.

- **Why we need this:** Payment/insurance policy is completely absent from the current site and is one of the most common questions visitors need answered before contacting (seen consistently across benchmark FAQs).
- **Where the answer will be used:** FAQ; possibly a short note near the CTA.
- **Priority:** BLOCKER

---

## H. TESTIMONIALS / REVIEWS

### H1.
**Question for Simone (PT):**
> "Você tem algum paciente ou responsável que toparia dar um depoimento por escrito, com autorização para publicarmos no site?"

**RESPOSTA DO CLIENTE:**

> Não, mas tenho varios depoimentos da minha emmpresa no Google e seria interessante chamar a atençao para isso e eventualmente redirecionar para essa página das avaliações

- **Why we need this:** The current site has zero on-site testimonials. Per project rules, we cannot invent testimonials — they can only be added if real and consented.
- **Where the answer will be used:** "Avaliações" section (only if a real testimonial is obtained).
- **Priority:** IMPORTANT

### H2.
**Question for Simone (PT):**
> "Além do link para as avaliações no Google, existe alguma outra forma que você gostaria de mostrar que as pessoas confiam no seu trabalho?"

**RESPOSTA DO CLIENTE:**

> Não

- **Why we need this:** Explores other honest trust-signal options without fabricating anything.
- **Where the answer will be used:** "Avaliações" section.
- **Priority:** OPTIONAL

---

## I. BRAND / VISUAL IDENTITY

### I1.
**Question for Simone (PT):**
> "Você gostaria de manter a logo e as cores que você usa hoje, ou está aberta a um novo visual para o site?"

**RESPOSTA DO CLIENTE:**

> Estou aberta a sugestões

- **Why we need this:** Directly determines the starting point for the next phase (Design Direction) — cannot be decided by the project team alone.
- **Where the answer will be used:** Overall visual identity, logo usage.
- **Priority:** BLOCKER

### I2.
**Question for Simone (PT):**
> "Além da foto que já está no site, você tem outras fotos suas ou do consultório que possam ser usadas (evitando fotos de banco de imagens)?"

**RESPOSTA DO CLIENTE:**

> Utilizar as mesmas do site

- **Why we need this:** Real photography is preferred over generic stock imagery per the project's design principles ([[preliminary-design-direction]] §4).
- **Where the answer will be used:** Hero image, "Quem é Simone," "Como Funciona" sections.
- **Priority:** IMPORTANT

---

## INFORMAÇÕES JÁ CONFIRMADAS

The following are already documented facts from the current website ([[content-inventory]]) and do **not** need to be asked again:

- Nome e título: Simone Tavolaro, Fonoaudióloga.
- Registro: Especialista em Linguagem pelo Conselho Federal de Fonoaudiologia, n. 9940/24.
- Registro: Especialista em Fonoaudiologia Educacional pelo Conselho Federal de Fonoaudiologia, n. 9144/23.
- Graduação: PUC-SP (Pontifícia Universidade Católica de São Paulo).
- Nomes das 5 pós-graduações: Especialização em Linguagem; Avaliação e Reabilitação em Motricidade Orofacial; Neuroeducação; Educação Especial com Ênfase em Transtornos Globais do Desenvolvimento; Liderança e Coaching. *(Instituição e ano de cada uma ainda precisam ser confirmados — ver F1.)*
- Áreas de atuação citadas no site: trocas na fala; atraso de linguagem; fluência da fala (ex. gagueira); compreensão ou expressão (afasia); comunicação no ambiente de trabalho (oratória).
- Públicos citados no site: adultos, crianças e idosos.
- Possibilidade de atendimento on-line (site atual restringe essa opção a adultos — ver D1 para confirmação).
- Endereço citado: Av Andrômeda, 885, sala 1721, Alphaville, Edifício Brascan Century Plaza *(a confirmar se segue atual — ver G1).*
- WhatsApp citado: (11) 97671-4748 *(a confirmar se segue atual — ver G1).*
- Existe um link para avaliações no Google (site atual não hospeda depoimentos próprios).
- O site atual não faz nenhuma afirmação sobre anos de experiência, número de pacientes ou resultados de tratamento — não devemos inventar esses números.

---

## BLOCKERS FOR COPY/IMPLEMENTATION

Only the questions marked **BLOCKER** are listed here — these must be answered before the corresponding section can be finalized. Everything else (IMPORTANT/OPTIONAL) can proceed with placeholders or be added later without stopping the work.

| Question | Blocks |
|---|---|
| A1 — Posicionamento amplo vs. foco específico | Hero headline copy; "Quem é Simone" copy |
| B1 — Confirmação do público atendido | "Áreas de Atuação" audience-eligibility copy |
| C1 — Explicações simples de cada área de atuação | "Áreas de Atuação" section copy (cannot be written at all without this) |
| D1 — Escopo do atendimento online (quem pode) | "Áreas de Atuação" eligibility notes; FAQ |
| D2 — Como funciona a consulta online | "Como Funciona" section; FAQ |
| E1 — Passo a passo após o primeiro contato | "Como Funciona" section (cannot be written at all without this) |
| G1 — Confirmação de WhatsApp e endereço | Contato page; footer on every page |
| G3 — Política de convênio/pagamento | FAQ (payment/insurance question cannot be answered without this) |
| I1 — Manter ou renovar a identidade visual | Entry point for the Design Direction phase — needed before that phase can start |

**Everything else in this questionnaire (A2, B2, C2, E2, F1, F2, F3, G2, H1, H2, I2) is IMPORTANT or OPTIONAL — useful and should still be collected, but does not block starting work on the sections listed above.**
