# Portfólio — Ronaldo Batista

Portfólio de Ronaldo Batista, desenvolvedor full-stack com foco em backend e automação.

## Stack do site

HTML, CSS e JavaScript puros, sem build nem dependências. Fontes Onest e Pixelify Sans via Google Fonts.

## Como rodar

Abra o `index.html` no navegador ou, na raiz do projeto, rode um servidor local:

```sh
python3 -m http.server
```

Depois acesse http://localhost:8000.

## Estrutura

```
index.html     página única do portfólio
assets/css/    estilos (style.css)
assets/js/     comportamento (script.js)
assets/img/    logo, favicon, ícone e foto de perfil
docs/          glossário e decisões (ADRs)
DESIGN.md      sistema de design
PRODUCT.md     contexto e princípios do produto
```

## Destaques

- Loader com a logo RB. montada por pixels (Web Animations API), só na primeira visita.
- Revelação das seções com IntersectionObserver.
- Respeito a `prefers-reduced-motion`.
- Navegação por teclado e skip link.

## Contato

- E-mail: ronaldosnbatista@gmail.com
- LinkedIn: https://www.linkedin.com/in/ronaldosnb/
- GitHub: https://github.com/ronaldosnb
