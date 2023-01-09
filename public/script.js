const searchButton = document.getElementById(".searchBar");
const url = "https://api.themoviedb.org/3/search/movie?api_key=a299fbe5ab099ad1c542674fd239f25d&language=en-US&page=1&include_adult=false";
const apiKey = "a299fbe5ab099ad1c542674fd239f25d";
const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk5ZmJlNWFiMDk5YWQxYzU0MjY3NGZkMjM5ZjI1ZCIsInN1YiI6IjYzYTI4ZjU5MmYzYjE3MDA4NWRkNDM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uixy0unpQnM8ymcpZ71z1YTcv_PwBCSnK81qGl6PZ5Q";

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const loginButton = document.querySelector(".loginButton");
const signUpButton = document.querySelector(".signUpButton");
const resultsModal = document.querySelector(".resultsModal");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

loginButton.addEventListener("click", showLogin);
signUpButton.addEventListener("click", showSignUp);
const loginModal = document.querySelector(".Login-Modal");
const signUpModal = document.querySelector(".signUp");

function showLogin() {
    let loginModal = document.querySelector(".Login-Modal");
    toggleModal();
    loginModal.classList.remove("hidden");
}

const loginCloseButton = document.querySelector(".login-close-button");

loginCloseButton.addEventListener("click", toggleLoginModal);

function toggleLoginModal() {
    loginModal.classList.add("hidden");
}

function showSignUp() {
    let signUpModal = document.querySelector(".signUp");
    toggleModal();
    signUpModal.classList.remove("hidden");
}

const signupCloseButton = document.querySelector(".signup-close-button");

signupCloseButton.addEventListener("click", toggleSignupModal);

function toggleSignupModal() {
    signUpModal.classList.add("hidden");
}

// let results = {
//     fetchMovie: function (movie) {
//         fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&page=1&include_adult=false&query=" + movie)
//             .then((response) => response.json()).then((data) => this.displayResults(data));
//     },

//     displayResults: function (data) {
//         data = data.results[0];
//         let name = data.original_title;
//         let description = data.overview;/*description*/
//         let reviews = data.vote_average;/*reviews*/
//         console.log(data);
//         console.log(name)
//         console.log(description)
//         console.log(reviews)
//         document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?movie&query=" + name + ")";
//     },

//     /*fetchResults: function (movie) {
//         fetch("https://api.themoviedb.org/3/search/" + movie + "?" + apiKey + "&language=en-US&page=1&include_adult=false").then((response) => response.json()).then((data) => displayFeatures(data));

//         function displayFeatures(data) {
//             for (let i = 0; i < 6; i++) {
//                 const thumbnail = data;/*thumbnail icon from API call
//                 // calls the results and returns a thumbnail to each feature card, up to 6
//                 document.querySelector(`.feature${i + 1}`).innerHTML = thumbnail;
//             }
//         }
//     },*/
    
//     search: function () {
//         this.fetchMovie(document.querySelector(".searchBar").value);
//         resultsModal.classList.remove("hidden");
//     },
// };

// document.querySelector(".mainBtn").addEventListener("click", function () {
//     results.search();
// });
// // allows for "enter" to be placed when searching instead of requiring a mouse click
// document.querySelector(".searchBar").addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//         results.search();
//     }
// })
