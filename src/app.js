// 1) Typed.js
const heroTitle = document.querySelector("#hero-title");
if (heroTitle) {
  import("./js/hero-typed.js")
    .then(({ initTyped }) => {
      initTyped(heroTitle);
    })
    .catch((err) => console.error("Error cargando hero-typed:", err));
}

// 2) Carrusel
const featuresList = document.getElementById("features-list");
if (featuresList) {
  import("./js/features-carousel.js")
    .then(({ initCarousel }) => {
      initCarousel();
    })
    .catch((err) => console.error("Error cargando features-carousel:", err));
}

// 3) AOS
const hasAOS = document.querySelector("[data-aos]");
if (hasAOS) {
  import("./js/aos-init.js")
    .then(({ initAOS }) => {
      initAOS();
    })
    .catch((err) => console.error("Error cargando aos-init:", err));
}

// 4) Iframe-lazy
const hasLazyIframe = document.querySelector("iframe[data-src]");
if (hasLazyIframe) {
  import("./js/iframe-lazy.js")
    .catch((err) => console.error("Error cargando iframe-lazy:", err));
}
