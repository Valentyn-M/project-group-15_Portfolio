const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

const letters = Array.from(text);
let index = 0;

function showLetter() {
	if (index < letters.length) {

		const span = document.createElement('span');
		span.textContent = letters[index];
		span.classList.add('show');
		subtitle.appendChild(span);
		index++;
		setTimeout(showLetter, 100);
	} else {
		setTimeout(hideText, 3000);
	}
}

function hideText() {
	const spans = subtitle.querySelectorAll('span');
	spans.forEach(span => {
		span.classList.remove('show');
	});
	setTimeout(() => {
		subtitle.textContent = '';
		index = 0;
		setTimeout(showLetter, 1000);
	}, 500);
}

showLetter(); 