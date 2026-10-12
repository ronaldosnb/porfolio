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
