// ./js/iframe-lazy.js
const iframes = document.querySelectorAll('iframe[data-src]');

if (iframes.length) {
  const loadIframe = (iframe) => {
    if (iframe.src) return;
    iframe.src = iframe.dataset.src;
  };

  // Si hay IntersectionObserver, cargamos al acercarse
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadIframe(entry.target);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '300px' }); // empieza a cargar antes de que se vea

    iframes.forEach((iframe) => io.observe(iframe));
  } else {
    // Fallback: cargarlos todos (navegadores antiguos)
    iframes.forEach(loadIframe);
  }
}
