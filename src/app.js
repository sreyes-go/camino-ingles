// ===== Carrusel "features": desplazamiento con flechas =====
(function () {
  'use strict';

  const list = document.getElementById('features-list');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');

  if (!list || !prev || !next) return;

  // Paso = ancho de una card + gap del contenedor
  function getStep() {
    const firstCard = list.querySelector('.feature-card');
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(list);
    const gap = parseFloat(styles.gap || styles.columnGap || 0);
    const width = firstCard.getBoundingClientRect().width;

    return width + gap;
  }

  // Desplaza una "card" a izquierda/derecha
  function scrollByStep(direction) {
    const step = getStep() || 300;
    list.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  // Habilita/deshabilita flechas según posición
  function updateButtons() {
    const maxScroll = list.scrollWidth - list.clientWidth;
    const atStart = list.scrollLeft <= 1;
    const atEnd = list.scrollLeft >= (maxScroll - 1);
    prev.disabled = atStart;
    next.disabled = atEnd;
  }

  // Eventos
  prev.addEventListener('click', () => scrollByStep(-1));
  next.addEventListener('click', () => scrollByStep(1));
  list.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);

  // Init
  function init() { updateButtons(); }
  // Llamadas múltiples para cubrir cambios de layout/carga de fuentes
  init();
  requestAnimationFrame(init);
  setTimeout(init, 150);
})();
