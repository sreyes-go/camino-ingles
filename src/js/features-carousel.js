export function initCarousel() {
  "use strict";

  const list = document.getElementById("features-list");
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");

  if (!list || !prev || !next) return;

  function getStep() {
    const firstCard = list.querySelector(".feature-card");
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(list);
    const gap = parseFloat(styles.gap || styles.columnGap || 0);
    const width = firstCard.getBoundingClientRect().width;

    return width + gap;
  }

  function scrollByStep(direction) {
    const step = getStep() || 300;
    list.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function updateButtons() {
    const maxScroll = list.scrollWidth - list.clientWidth;
    const atStart = list.scrollLeft <= 1;
    const atEnd = list.scrollLeft >= maxScroll - 1;

    prev.disabled = atStart;
    next.disabled = atEnd;
  }

  prev.addEventListener("click", () => scrollByStep(-1));
  next.addEventListener("click", () => scrollByStep(1));
  list.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);

  function init() {
    updateButtons();
  }

  // Init: varias llamadas para cubrir cambios de layout (fonts, etc.)
  init();
  requestAnimationFrame(init);
  setTimeout(init, 150);
}
