export function initHeader() {
  const header = document.querySelector(".c-header");
  if (!header) return;

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
