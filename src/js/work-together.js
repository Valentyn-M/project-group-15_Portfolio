import iziToast from "izitoast";
import axios from "axios";
const BASE_URL = "https://portfolio-js.b.goit.study/api";

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

// Activate input or textarea
inputEmail.addEventListener("focus", function (event) {
	// Hide placeholder
	inputEmail.setAttribute('data-placeholder', inputEmail.getAttribute('placeholder'));
	inputEmail.setAttribute('placeholder', '');
	// Delete error classes
	massageError.classList.remove("is-active");
	inputEmail.classList.remove("error");
	iconSuccess.classList.remove("is-active");
})
textareaMessage.addEventListener("focus", function (event) {
	// Hide placeholder
	textareaMessage.setAttribute('data-placeholder', textareaMessage.getAttribute('placeholder'));
	textareaMessage.setAttribute('placeholder', '');
})

// Check email field after entering data
inputEmail.addEventListener("blur", function () {
	if (formData.email != '') {
		if (!inputEmail.checkValidity()) {
			activateErrorClass();
		}
		else {
			hideErrorClass();
		}
	}
	// Put placeholder back
	inputEmail.setAttribute('placeholder', inputEmail.getAttribute('data-placeholder'));
})

textareaMessage.addEventListener("blur", function (event) {
	// Put placeholder back
	textareaMessage.setAttribute('placeholder', textareaMessage.getAttribute('data-placeholder'));
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
			timeout: 4000,
			animateInside: false,
			transitionIn: "bounceInLeft",
		});
	}

	// If email is incorrect
	if (!inputEmail.checkValidity()) {
		activateErrorClass();
		return;
	}

	// Send user data
	sendData(formData.email, formData.message)
		.then(data => console.log(data))
		.catch(error => console.log(error));

	// Clear LocalStorage, Object with form data, Form
	iconSuccess.classList.remove("is-active");
	localStorage.removeItem(localStorageKey);
	formData.email = "";
	formData.message = "";
	const form = event.target;
	form.reset();
})

// --------------------------------------------

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

// ---------------------------------------------

async function sendData(email, message) {
	const formData = {
		email: email,
		comment: message,
	};

	const response = await axios.post(`${BASE_URL}/requests`, formData);
	return response.data;
}