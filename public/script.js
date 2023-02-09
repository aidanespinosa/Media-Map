const searchButton = document.getElementById(".searchBar");
//modals and buttons
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const loginButton = document.querySelector(".loginButton");
const signUpButton = document.querySelector(".signUpButton");
const resultsModal = document.querySelector(".resultsModal");

//turns on login/signup modal
function toggleModal() {
    modal.classList.toggle("show-modal");
}
//turns off modal when clicked outside of modal
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
//opens modal if it exists on the page
if (trigger) {
trigger.addEventListener("click", toggleModal);
};
// close button on modal
if (closeButton) {
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
};
//login button on modal
if (loginButton) {
loginButton.addEventListener("click", showLogin);
signUpButton.addEventListener("click", showSignUp);
};
//modals
const loginModal = document.querySelector(".Login-Modal");
const signUpModal = document.querySelector(".signUp");

//opens modal on login click
function showLogin() {
    let loginModal = document.querySelector(".Login-Modal");
    toggleModal();
    loginModal.classList.remove("hidden");
}

const loginCloseButton = document.querySelector(".login-close-button");
// closes modal if it exists on the page
if (loginCloseButton) {
loginCloseButton.addEventListener("click", toggleLoginModal);
};
//sets modal to and from "hidden" 
function toggleLoginModal() {
    loginModal.classList.add("hidden");
}
// toggles signup modal
function showSignUp() {
    let signUpModal = document.querySelector(".signUp");
    toggleModal();
    signUpModal.classList.remove("hidden");
}

const signupCloseButton = document.querySelector(".signup-close-button");
// closes the signup modal if it exists on the page
if (signupCloseButton) {
signupCloseButton.addEventListener("click", toggleSignupModal);
};

function toggleSignupModal() {
    signUpModal.classList.add("hidden");
}
