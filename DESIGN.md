---
name: Ronaldo Batista Portfolio
description: Portfólio de um desenvolvedor full-stack que transforma operações complexas em sistemas claros.
colors:
  ink: "#0b0d0c"
  panel: "#121613"
  panel-raised: "#192019"
  paper: "#eef2e9"
  muted: "#aab3a7"
  signal: "#b9ff63"
  signal-ink: "#15210b"
  signal-shadow: "#5f8034"
  line: "#354035"
typography:
  display:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 7.5rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1
  role:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.35rem)"
    fontWeight: 600
    lineHeight: 1.32
  heading:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 5.35rem)"
    fontWeight: 600
    lineHeight: 0.96
  project:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 4.1rem)"
    fontWeight: 600
    lineHeight: 0.95
  wordmark:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "1.55rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  sm: "10px"
  md: "16px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.sm}"
    padding: "14px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 20px"
---

# Design System: Ronaldo Batista Portfolio

## Overview

**Creative North Star: "A bancada de sistemas após o expediente"**

O portfólio se comporta como uma bancada de trabalho digital: escura porque é vista no notebook à noite, precisa porque mostra sistemas e não adereços. A tipografia ampla dá clareza editorial; pixels aparecem somente onde existe sinal, estado ou medição, como uma assinatura do ofício.

**Key Characteristics:** contraste calmo, superfícies planas, verde-sinal raro, estrutura assimétrica e detalhes pixelados funcionais.

## Colors

Neutros verdeados evitam o preto puro; o verde-sinal só marca ação, foco e estado ativo.

### Primary

- **Signal Lime** (#B9FF63): CTA, foco, marcações e o cursor da visualização de sistemas.

### Neutral

- **Workbench Ink** (#0B0D0C): fundo principal.
- **Raised Panel** (#192019): superfícies de case e controles ativos.
- **Paper Light** (#EEF2E9): texto principal.
- **Soft Readout** (#AAB3A7): texto de apoio.

**The Signal Rule.** Verde-sinal não decora: só indica o próximo passo ou um estado vivo.

## Typography

**Display Font:** Onest, Arial, sans-serif
**Body Font:** Onest, Arial, sans-serif
**Label/Mono Font:** Pixelify Sans, monospace

O texto é humano e direto; a face pixelada é reservada a coordenadas, rótulos de estado e pequenos metadados — nunca para parágrafos.

## Layout

O primeiro viewport é uma composição de nome em grande escala e um mapa de sistema ativo, não um hero convencional. A grade usa uma coluna de informação estreita e uma área ampla para trabalho; no celular ela vira uma sequência única com a visualização preservada.

## Elevation & Depth

Profundidade vem de mudança tonal e linhas finas. Não há sombras permanentes; elevação é usada apenas no hover e em controles acionáveis.

## Shapes

Blocos são quase retos, com cantos de 10–16px. Chips são reservados a status; botões têm cantos discretamente arredondados, não formato de pílula.

## Components

### Buttons

- **Shape:** cantos de 10px.
- **Primary:** Signal Lime sobre Signal Ink.
- **Hover / Focus:** deslocamento vertical curto e foco visível em Signal Lime.

### Cards / Containers

- **Corner Style:** 16px.
- **Background:** Panel ou Panel Raised.
- **Border:** linha de 1px em Line, sem sombra em repouso.

### Navigation

- Links compactos e diretos; em telas pequenas, a navegação vira um acionador de menu acessível.

### Wordmark

- **Forma:** monograma textual “RB.” na face Pixelify Sans, com ponto em Signal Lime.
- **Uso:** somente como assinatura de navegação; a referência pixelada é sutil, nunca uma identidade gamer completa.

## Do's and Don'ts

### Do:

- **Do** manter o conteúdo e a interface legíveis antes de qualquer ornamento.
- **Do** usar pixels em informação técnica, sinalização e transições pontuais.
- **Do** mostrar casos com contexto e decisão, não apenas tecnologias.

### Don't:

- **Don't** usar estética gamer, neon difuso ou grade decorativa genérica.
- **Don't** transformar cada seção em uma coleção de cards iguais.
- **Don't** usar verde-sinal para texto longo ou decoração.
