import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
	const accordion = new Accordion('.accordion-wrap', {
		duration: 400,
		showMultiple: false,
		openOnInit: [0],
	});
});


document.addEventListener("click", (event) => {
	const targetElement = event.target;

	if (targetElement.closest(".ac")) {
		const accordionImem = targetElement.closest(".ac");
		const accordionImems = document.querySelectorAll('.ac');

		accordionImems.forEach(accordionImem => {
			accordionImem.classList.remove("no-line");
		});

		if (!accordionImem.matches("#ac-0")) {
			if (accordionImem.classList.contains("is-active")) {
				const accordionImemPreviousSibling = accordionImem.previousElementSibling;
				accordionImemPreviousSibling.classList.add("no-line");
			}
		}
	}
});