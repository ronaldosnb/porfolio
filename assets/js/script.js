// Entrada: a logo RB. é montada por pixels menores que entram de fora da tela e se juntam no centro.
// Mesmo desenho de assets/img/logo.svg (30 × 14); 1, 2 e 3 são os três tons do relevo.
const loaderPixels = [
  "..111111113....111111113......",
  ".12222222223..12222222223.....",
  "3333333333223.333333333223....",
  "..........123..........123....",
  "..13......123...13.....123....",
  ".123......123..123....1223....",
  ".123.....1223..1221111223.....",
  ".12211111223...1223333223.....",
  ".1222222223....123....3223....",
  ".122333223.....123.....123....",
  ".123...3223....123.....123....",
  ".123....3223...12211111223..1.",
  ".123.....3223..1222222223..123",
  ".333......3333.333333333....3.",
];
const loaderTones = { 1: "#f8fafc", 2: "#cbd2dc", 3: "#7c8594" };

const loader = document.querySelector(".loader");

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Conteúdo que entra aos poucos conforme a página rola.
const revealItems = reducedMotion
  ? []
  : document.querySelectorAll(
      ".hero-copy > *, .hero-photo, .section-heading, .project, .projects-toggle, .about-text > p, .about-figure, .site-footer > *",
    );
revealItems.forEach((item) => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) =>
    entries
      .filter((entry) => {
        // O que já ficou acima da tela (ex.: recarregar no meio da página) aparece direto.
        if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
          revealObserver.unobserve(entry.target);
          entry.target.classList.remove("reveal");
        }
        return entry.isIntersecting;
      })
      .forEach(({ target }, index) => {
        revealObserver.unobserve(target);
        // Itens que entram juntos na tela aparecem em sequência.
        target.style.transitionDelay = `${index * 90}ms`;
        target.classList.add("is-visible");
        target.addEventListener("transitionend", function done(event) {
          if (event.target !== target || event.propertyName !== "opacity") return;
          target.removeEventListener("transitionend", done);
          target.classList.remove("reveal", "is-visible");
          target.style.transitionDelay = "";
        });
      }),
  { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
);

const revealContent = () =>
  revealItems.forEach((item) => revealObserver.observe(item));

// A animação de entrada roda só na primeira visita da sessão; depois a página abre direto.
let primeiraVisita = true;
try {
  primeiraVisita = !sessionStorage.getItem("loader-visto");
  sessionStorage.setItem("loader-visto", "1");
} catch {
  // Sem acesso ao sessionStorage (ex.: modo privado): conta como primeira visita.
}

if (loader && !reducedMotion && primeiraVisita) {
  // Enquanto o loader cobre a página, o conteúdo atrás dele não recebe foco.
  const atras = [
    document.querySelector("main"),
    document.querySelector(".site-header"),
    document.querySelector(".site-footer"),
    document.querySelector(".skip-link"),
  ];
  atras.forEach((el) => el && (el.inert = true));

  const mark = loader.querySelector(".loader-mark");
  const { innerWidth: vw, innerHeight: vh } = window;
  // Cada pixel da logo é montado por split × split pixels menores.
  const split = 3;
  // Tamanho inteiro por pixel, para não abrir frestas entre os quadrados.
  const sub = Math.max(2, Math.floor(Math.min(vw * 0.6, 420) / (30 * split)));
  const px = sub * split;
  mark.style.setProperty("--px", `${px}px`);
  mark.style.setProperty("--sub", `${sub}px`);

  loaderPixels.forEach((row, y) =>
    [...row].forEach((tone, x) => {
      if (tone === ".") return;
      for (let i = 0; i < split * split; i++) {
        const left = x * px + (i % split) * sub;
        const top = y * px + Math.floor(i / split) * sub;
        const pixel = document.createElement("span");
        pixel.style.background = loaderTones[tone];
        pixel.style.left = `${left}px`;
        pixel.style.top = `${top}px`;
        mark.append(pixel);

        // Ponto de partida logo depois da borda da tela, em direção aleatória, alinhado à grade.
        const angle = Math.random() * Math.PI * 2;
        const edge = Math.min(
          vw / 2 / Math.abs(Math.cos(angle)),
          vh / 2 / Math.abs(Math.sin(angle)),
        );
        const reach = edge + px + Math.random() * Math.min(vw, vh) * 0.12;
        const homeX = left - 15 * px;
        const homeY = top - 7 * px;
        const dx = Math.round((Math.cos(angle) * reach - homeX) / sub) * sub;
        const dy = Math.round((Math.sin(angle) * reach - homeY) / sub) * sub;

        pixel.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)` },
            { transform: "translate(0, 0)" },
          ],
          {
            duration: 1100,
            delay: Math.random() * 500,
            easing: "cubic-bezier(0.4, 0.1, 0.2, 1)",
            fill: "backwards",
          },
        );
      }
    }),
  );

  // O conteúdo começa a entrar junto com a saída do loader.
  loader.addEventListener("animationstart", revealContent);
  loader.addEventListener("animationend", () => {
    loader.remove();
    atras.forEach((el) => el && (el.inert = false));
  });
} else {
  loader?.remove();
  revealContent();
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector("span").textContent = open ? "×" : "+";
});

nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.querySelector("span").textContent = "+";
  }),
);

document.querySelector("#year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll(".section");

const centerSections = () =>
  sections.forEach((section) => {
    const gap = (window.innerHeight - section.offsetHeight) / 2;
    section.style.scrollMarginTop = `${Math.max(0, gap)}px`;
  });

const sectionObserver = new ResizeObserver(centerSections);
sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("resize", centerSections);

const projectsToggle = document.querySelector(".projects-toggle");
const moreProjects = document.querySelector("#mais-projetos");

if (projectsToggle && moreProjects) {
  moreProjects.hidden = true;
  projectsToggle.hidden = false;

  projectsToggle.addEventListener("click", () => {
    const expanded = moreProjects.hidden;
    moreProjects.hidden = !expanded;
    projectsToggle.setAttribute("aria-expanded", String(expanded));
    projectsToggle.querySelector(".projects-toggle-label").textContent = expanded
      ? "Ver menos projetos"
      : "Ver mais projetos";
    projectsToggle.querySelector(".projects-toggle-icon").textContent = expanded
      ? "−"
      : "+";

    if (expanded) {
      const first = moreProjects.querySelector("article");
      first?.setAttribute("tabindex", "-1");
      first?.focus({ preventScroll: true });
    }
  });
}

const copyEmail = document.querySelector(".copy-email");

if (copyEmail && navigator.clipboard) {
  const label = copyEmail.textContent.trim();
  copyEmail.hidden = false;

  copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyEmail.dataset.email);
      copyEmail.textContent = "Copiado";
    } catch {
      copyEmail.textContent = "Não foi possível copiar";
    }
    setTimeout(() => (copyEmail.textContent = label), 2000);
  });
}

// Link público do currículo (PDF). Enquanto estiver vazio, os links ficam inativos.
const curriculoUrl =
  "https://drive.google.com/file/d/1o2iO0WV33mHuqIc-HI0gpzMDCXkEW2pf/view?usp=sharing";

if (curriculoUrl) {
  document.querySelectorAll(".cv-link").forEach((link) => {
    link.href = curriculoUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}
