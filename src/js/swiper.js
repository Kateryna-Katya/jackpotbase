// ===== Swiper imports =====
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

Swiper.use([Autoplay]);

const DESKTOP_WIDTH = 1440;

let visualSwiper = null;
let similarSwiper = null;

/* ===============================
   VISUAL
================================ */
function initVisualSwiper() {
  if (window.innerWidth < DESKTOP_WIDTH && !visualSwiper) {
    visualSwiper = new Swiper('.visual-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  if (window.innerWidth >= DESKTOP_WIDTH && visualSwiper) {
    visualSwiper.destroy(true, true);
    visualSwiper = null;
  }
}

/* ===============================
   SIMILAR
================================ */
function initSimilarSwiper() {
  if (window.innerWidth < DESKTOP_WIDTH && !similarSwiper) {
    similarSwiper = new Swiper('.similar-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  if (window.innerWidth >= DESKTOP_WIDTH && similarSwiper) {
    similarSwiper.destroy(true, true);
    similarSwiper = null;
  }
}

/* ===============================
   INIT
================================ */
function initSwipers() {
  initVisualSwiper();
  initSimilarSwiper();
}

window.addEventListener('load', initSwipers);
window.addEventListener('resize', initSwipers);
