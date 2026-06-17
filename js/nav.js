export function initNav() {
  const toggle = document.querySelector(".c-nav-toggle");
  const nav = document.querySelector(".c-nav");

  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  window.matchMedia("(min-width: 48em)").addEventListener("change", (e) => {
    if (e.matches) closeNav();
  });
}
