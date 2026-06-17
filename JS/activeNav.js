export function initActiveNav() {
  const links = [...document.querySelectorAll('.c-nav__link[href^="#"]')];
  if (!links.length) return;

  const byId = {};
  links.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (id) byId[id] = link;
  });

  const sections = Object.keys(byId)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id = "") => {
    links.forEach((link) => link.classList.remove("is-active"));
    if (!id) return;
    const active = byId[id];
    if (active) active.classList.add("is-active");
  };

  const updateActive = () => {
    const viewportHeight = window.innerHeight;
    let activeId = "";
    let maxVisiblePx = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visiblePx = Math.max(0, visibleBottom - visibleTop);

      if (visiblePx > maxVisiblePx) {
        maxVisiblePx = visiblePx;
        activeId = section.id;
      }
    });

    if (maxVisiblePx <= 0) {
      setActive();
      return;
    }

    setActive(activeId);
  };

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
}
