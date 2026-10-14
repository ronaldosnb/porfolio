---
name: Ronaldo Batista Portfolio
description: Portfólio de um desenvolvedor full-stack que transforma operações complexas em sistemas claros.
colors:
  ink: "#0b0d12"
  panel: "#11141b"
  paper: "#eef2f6"
  muted: "#a3abb8"
  signal: "#38d6f5"
  signal-ink: "#06202a"
  signal-shadow: "#1b7f95"
  line: "#2c3442"
typography:
  display:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Pixelify Sans, monospace"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1
  role:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.35rem)"
    fontWeight: 600
    lineHeight: 1.32
  heading:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 0.96
  project:
    fontFamily: "Onest, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.08
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
    padding: "14px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    padding: "14px 20px"
---

# Design System: Ronaldo Batista Portfolio

## Overview

**Creative North Star: "A bancada de sistemas após o expediente"**

O portfólio se comporta como uma bancada de trabalho digital: escura porque é vista no notebook à noite, precisa porque mostra sistemas e não adereços. A tipografia ampla dá clareza editorial; pixels aparecem somente onde existe sinal, estado ou medição, como uma assinatura do ofício.

**Key Characteristics:** contraste calmo, superfícies planas, ciano-sinal raro, estrutura assimétrica e detalhes pixelados funcionais.

## Colors

Neutros azulados evitam o preto puro; o ciano-sinal só marca ação, foco e estado ativo.

### Primary

- **Signal Cyan** (#38D6F5): CTA, foco e marcações.

### Neutral

- **Workbench Ink** (#0B0D12): fundo principal.
- **Paper Light** (#EEF2F6): texto principal.
- **Soft Readout** (#A3ABB8): texto de apoio.

**The Signal Rule.** Ciano-sinal não decora: só indica o próximo passo ou um estado vivo.

## Typography

**Display Font:** Onest, Arial, sans-serif
**Body Font:** Onest, Arial, sans-serif
**Label/Mono Font:** Pixelify Sans, monospace

O texto é humano e direto; a face pixelada é reservada a coordenadas, rótulos de estado e pequenos metadados — nunca para parágrafos.

## Layout

O primeiro viewport é uma composição de nome em grande escala e a foto de perfil em recorte circular, sem fundo, não um hero convencional. A grade usa uma coluna de informação estreita e uma área ampla para trabalho; no celular ela vira uma sequência única e a foto aparece pequena (112px) acima do nome.

## Elevation & Depth

Profundidade vem de mudança tonal e linhas finas. Não há sombras permanentes; elevação é usada apenas no hover e em controles acionáveis.

## Shapes

Blocos, botões e chips têm cantos retos; só a foto de perfil é circular. Chips são reservados a status e tecnologias.

## Components

### Buttons

- **Shape:** cantos retos.
- **Primary:** Signal Cyan sobre Signal Ink.
- **Hover / Focus:** deslocamento vertical curto e foco visível em Signal Cyan.

### Linha de projeto

- **Estrutura:** grade de quatro colunas (índice, tipo com nome e lista opcional de tecnologias em `.project-stack`, descrição, link), igual para todos os projetos, separada por linhas de 1px em Line.
- **Status:** tag opcional ao lado do tipo (“Online” em Signal Cyan).
- **Lista:** três projetos principais visíveis; os demais ficam atrás do botão “Ver mais projetos”, que os expande na própria seção.
- **Botão de expandir:** contorno de 1px em Line, sem fundo; hover em Signal Cyan.

### Navigation

- Links compactos e diretos; em telas pequenas, a navegação vira um acionador de menu acessível.

### Wordmark

- **Forma:** monograma “RB.” desenhado em grade de pixels (`assets/img/logo.svg`, 30 × 14), monocromático, com relevo em três tons do neutro azulado (#F8FAFC, #CBD2DC, #7C8594). Exibido com 28px de altura.
- **Uso:** assinatura de navegação no cabeçalho e logo montada por pixels no loader de entrada; a referência pixelada é sutil, nunca uma identidade gamer completa.

## Do's and Don'ts

### Do:

- **Do** manter o conteúdo e a interface legíveis antes de qualquer ornamento.
- **Do** usar pixels em informação técnica, sinalização e transições pontuais.
- **Do** mostrar casos com contexto e decisão, não apenas tecnologias.

### Don't:

- **Don't** usar estética gamer, neon difuso ou grade decorativa genérica.
- **Don't** transformar cada seção em uma coleção de cards iguais.
- **Don't** usar ciano-sinal para texto longo ou decoração.
