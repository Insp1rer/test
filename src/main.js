import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.container-accordion')
);

new Accordion(accordions, {
  duration: 600,
  showMultiple: false,
});
