import iziToast from "izitoast";

const contactForm = document.querySelector(".work-together-form");
const inputEmail = contactForm.elements.email;
const textareaMessage = contactForm.elements.message;
const iconSuccess = contactForm.querySelector(".work-together-input-success-icon");
const massageError = contactForm.querySelector(".work-together-input-error-message");
const localStorageKey = "contact-form-state";

// Object for form data
const formData = {
	email: "",
	message: "",
}

// Check data in LocalStorage. If there is data then fill input and textarea
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
	const savedDataEmail = savedData.email ?? '';
	const savedDataMessage = savedData.message ?? '';

	if (savedDataEmail) {
		inputEmail.value = savedDataEmail;
		formData.email = savedDataEmail;
	}
	if (savedDataMessage) {
		textareaMessage.value = savedDataMessage;
		formData.message = savedDataMessage;
	}
}

// Place data in LocalStorage when the value in any of the form's input fields changes
contactForm.addEventListener("input", event => {
	if (event.target === inputEmail) {
		formData.email = event.target.value.trim();
	}
	else if (event.target === textareaMessage) {
		formData.message = event.target.value.trim();
	}
	localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

// Check email field after entering data
inputEmail.addEventListener("blur", function () {
	if (!inputEmail.checkValidity()) {
		activateErrorClass();
	}
	else {
		hideErrorClass();
	}
})

// Send form
contactForm.addEventListener("submit", (event) => {
	event.preventDefault();

	// If email field is empty
	if (formData.email === '') {
		return iziToast.error({
			class: "izi-error",
			titleSize: "16px",
			titleLineHeight: "1.5",
			message: "Please enter your email",
			messageSize: "16px",
			messageColor: "#292929",
			messageLineHeight: "1.5",
			close: true,
			closeOnEscape: true,
			position: "topRight",
			timeout: 5000,
			animateInside: false,
			transitionIn: "bounceInLeft",
		});
	}

	// If email is incorrect
	if (!inputEmail.checkValidity()) {
		return;
	}

	if (!inputEmail.checkValidity()) {
		activateErrorClass();
		return;
	}

	// Clear LocalStorage, Object with form data, Form
	localStorage.removeItem(localStorageKey);
	formData.email = "";
	formData.message = "";
	const form = event.target;
	form.reset();
})

function activateErrorClass() {
	massageError.classList.add("is-active");
	inputEmail.classList.add("error");
	iconSuccess.classList.remove("is-active");
}

function hideErrorClass() {
	massageError.classList.remove("is-active");
	inputEmail.classList.remove("error");
	iconSuccess.classList.add("is-active");
}