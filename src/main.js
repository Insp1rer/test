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
import 'swiper/css/navigation';

let params = {
  modules: [Navigation, Mousewheel, Keyboard],

  slidesPerView: 2,
  // maxwidth: 262,
  loop: true,
  centeredSlides: false,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,
  freeMode: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },
};

const swiper = new Swiper('.swiper', params);
