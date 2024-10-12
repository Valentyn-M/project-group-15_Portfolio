import iziToast from "izitoast";
import axios from "axios";
import { BASE_URL } from "./config";

const contactForm = document.querySelector(".work-together-form");
const inputEmail = contactForm.elements.email;
const textareaMessage = contactForm.elements.message;
const iconSuccess = contactForm.querySelector(".work-together-input-success-icon");
const massageError = contactForm.querySelector(".work-together-input-error-message");
const localStorageKey = "contact-form-state";
const modalForm = document.querySelector(".modal-overlay");

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
		return iziToast.warning({
			class: "izitoast-warning",
			titleSize: "16px",
			message: "Please enter your email",
			messageSize: "16px",
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

	// ------------ Work with Backend --------------
	// Send user data
	sendData(formData.email, formData.message)
		// Get response
		.then(data => {
			modalForm.querySelector('.modal-form-title').textContent = `${data.title}`;
			modalForm.querySelector('.modal-form-text').textContent = `${data.message}`;
			modalForm.classList.add("is-active");
			closeModal();
			// Clear LocalStorage, Object with form data, Form
			iconSuccess.classList.remove("is-active");
			localStorage.removeItem(localStorageKey);
			formData.email = "";
			formData.message = "";
			const form = event.target;
			form.reset();
		})
		.catch(error => {
			return iziToast.error({
				class: "izitoast-error",
				title: `${error.code}`,
				titleSize: "16px",
				titleLineHeight: "1.3",
				message: `${error.message}. ${error.response.data.message}`,
				messageSize: "16px",
				messageLineHeight: "1.4",
				close: true,
				closeOnEscape: true,
				position: "topRight",
				timeout: 10000,
				animateInside: false,
				transitionIn: "bounceInLeft",
			});
		});
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

function closeModal() {
	// Close by click
	modalForm.addEventListener("click", modalActions);
	function modalActions(event) {
		const targetElement = event.target;

		if (targetElement.closest(".modal-overlay")) {
			modalForm.classList.remove("is-active");
			modalForm.removeEventListener("click", modalActions);
		}

		if (targetElement.closest(".modal-form-close-icon")) {
			modalForm.classList.remove("is-active");
			modalForm.removeEventListener("click", modalActions);
		}
	}

	// Close by Escape
	document.addEventListener("keyup", keyActions);
	function keyActions(event) {
		if (event.code === "Escape") {
			modalForm.classList.remove("is-active");
			document.removeEventListener("keyup", keyActions);
		}
	}
}

// ---------------------------------------------

async function sendData(email, message) {
	const formData = {
		email: email,
		comment: message || "Message is empty"
	};

	const response = await axios.post(`${BASE_URL}requests`, formData);
	return response.data;
}