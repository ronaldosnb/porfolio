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

const canvas = document.querySelector("#system-canvas");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (canvas) {
  const ctx = canvas.getContext("2d");
  let width = 0,
    height = 0,
    phase = 0;
  const points = [
    [0.18, 0.39],
    [0.45, 0.52],   
    [0.71, 0.34],
    [0.71, 0.66],
    [0.93, 0.51],
  ];

  const draw = () => {
    const ratio = window.devicePixelRatio || 1;
    const box = canvas.getBoundingClientRect();
    if (box.width !== width || box.height !== height) {
      width = box.width;
      height = box.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(170, 179, 167, .16)";
    ctx.lineWidth = 1;
    for (let x = 34; x < width; x += 34) {
      ctx.beginPath();
      ctx.moveTo(x, 44);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 70; y < height; y += 34) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    const p = points.map(([x, y]) => [x * width, y * height]);
    const links = [
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
    ];
    ctx.lineWidth = 1.5;
    links.forEach(([a, b], index) => {
      ctx.strokeStyle =
        index === 1 ? "rgba(185,255,99,.62)" : "rgba(170,179,167,.45)";
      ctx.beginPath();
      ctx.moveTo(...p[a]);
      ctx.lineTo(...p[b]);
      ctx.stroke();
    });
    const pulseLink = links[1];
    const start = p[pulseLink[0]],
      end = p[pulseLink[1]];
    const t = (Math.sin(phase) + 1) / 2;
    const x = start[0] + (end[0] - start[0]) * t,
      y = start[1] + (end[1] - start[1]) * t;
    ctx.fillStyle = "#b9ff63";
    ctx.fillRect(x - 3, y - 3, 6, 6);
    phase += 0.035;
    if (!reduceMotion) requestAnimationFrame(draw);
  };
  window.addEventListener("resize", draw);
  draw();
}
