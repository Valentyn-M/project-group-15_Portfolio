import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.accordion-wrap', {
    duration: 400,
    showMultiple: false,
    openOnInit: [0],
  });
});
