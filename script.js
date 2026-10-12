// Entrada: os pixels da logo RB. entram de fora da tela e se juntam no centro.
// Mesmo desenho de logo.svg (30 × 14); 1, 2 e 3 são os três tons do relevo.
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

if (loader && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const mark = loader.querySelector(".loader-mark");
  const { innerWidth: vw, innerHeight: vh } = window;
  // Tamanho inteiro por pixel, para não abrir frestas entre os quadrados.
  const px = Math.max(3, Math.floor(Math.min(vw * 0.6, 420) / 30));
  mark.style.setProperty("--px", `${px}px`);

  loaderPixels.forEach((row, y) =>
    [...row].forEach((tone, x) => {
      if (tone === ".") return;
      const pixel = document.createElement("span");
      pixel.style.background = loaderTones[tone];
      pixel.style.left = `${x * px}px`;
      pixel.style.top = `${y * px}px`;
      mark.append(pixel);

      // Ponto de partida fora da tela, em direção aleatória, alinhado à grade.
      const angle = Math.random() * Math.PI * 2;
      const reach = Math.hypot(vw, vh) * (0.55 + Math.random() * 0.35);
      const homeX = (x - 15) * px;
      const homeY = (y - 7) * px;
      const dx = Math.round((Math.cos(angle) * reach - homeX) / px) * px;
      const dy = Math.round((Math.sin(angle) * reach - homeY) / px) * px;

      pixel.animate(
        [
          { transform: `translate(${dx}px, ${dy}px)` },
          { transform: "translate(0, 0)" },
        ],
        {
          duration: 1100,
          delay: Math.random() * 500,
          easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
          fill: "backwards",
        },
      );
    }),
  );

  loader.addEventListener("animationend", () => loader.remove());
} else {
  loader?.remove();
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
const curriculoUrl = "";

if (curriculoUrl) {
  document.querySelectorAll(".cv-link").forEach((link) => {
    link.href = curriculoUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}
