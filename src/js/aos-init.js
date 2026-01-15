import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
  AOS.init({
    duration: 1500,
    once: true
  });
}
