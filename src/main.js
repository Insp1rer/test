import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);

new Accordion(accordions, {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});

import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/navigation';

let params = {
  modules: [Navigation, Mousewheel, Keyboard],

  // slidesPerView: 'auto',
  slidesPerView: 2,
  lazy: true,
  loop: true,
  centeredSlides: false,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  spaceBetween: 0,

  breakpoints: {
    768: {
      // slidesPerView: 'auto',
      slidesPerView: 3,
    },
    1440: {
      // slidesPerView: 'auto',
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },

  on: {
    init: function () {
      document
        .querySelector('.swiper-button-next')
        .classList.remove('swiper-button-lock');
    },
  },
};

const aboutMeSwiper = new Swiper('.about-me-swiper', params);
