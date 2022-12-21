const searchButton = document.getElementById(".searchBar");
const url = "https://api.themoviedb.org/3/movie/550?api_key=a299fbe5ab099ad1c542674fd239f25d";
const apiKey = "a299fbe5ab099ad1c542674fd239f25d";
const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk5ZmJlNWFiMDk5YWQxYzU0MjY3NGZkMjM5ZjI1ZCIsInN1YiI6IjYzYTI4ZjU5MmYzYjE3MDA4NWRkNDM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uixy0unpQnM8ymcpZ71z1YTcv_PwBCSnK81qGl6PZ5Q";

let results = {
    fetchMovie: function (movie) {
        fetch("https://api.themoviedb.org/3/" + movie + "/550?api_key=a299fbe5ab099ad1c542674fd239f25d")
            .then((response) => response.json()).then((data) => this.displayResults(data));
    },

    displayResults: function (data) {
        const { name } = data;
        const { description } = data;/*description*/
        const { reviews } = data;/*reviews*/

        document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?" + name + "\")";
    },

    fetchResults: function (data) {
        fetch("https://api.themoviedb.org/3/" + data + "movie/550?api_key=a299fbe5ab099ad1c542674fd239f25d").then((response) => response.json()).then((data) => displayFeatures(data));

        function displayFeatures(data) {
            for (let i = 0; i < 5; i++) {
                const thumbnail = data;/*thumbnail icon from API call*/
                // calls the results and returns a thumbnail to each feature card, up to 6
                document.querySelector(`.feature${i + 2}`).innerHTML = thumbnail;
            }
        }
    },

    search: function () {
        this.fetchResults(document.querySelector(".searchBar").value);
    },
};

document.querySelector(".mainBtn").addEventListener("click", function () {
    results.search();
});
// allows for "enter" to be placed when searching instead of requiring a mouse click
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        results.search();
    }
})