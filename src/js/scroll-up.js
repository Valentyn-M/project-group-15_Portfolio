const buttonTop = document.querySelector(".button-top");

// Hide/show the Back to Top button when scrolling the page
window.addEventListener("scroll", function () {
	const windowScrollTop = window.scrollY;
	if (windowScrollTop > 150) {
		!buttonTop.classList.contains("is-active") ? buttonTop.classList.add("is-active") : null;
	} else {
		buttonTop.classList.contains("is-active") ? buttonTop.classList.remove("is-active") : null;
	}
})

// Scroll up
buttonTop.addEventListener("click", (event) => {
	event.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
})
