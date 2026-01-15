import Typed from "typed.js";

export function initTyped(heroTitleEl) {
  new Typed(heroTitleEl, {
    strings: ["Aquí comienza tu camino"],
    typeSpeed: 80,
    loop: false,
    showCursor: false
  });
}
