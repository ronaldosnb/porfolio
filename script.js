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
