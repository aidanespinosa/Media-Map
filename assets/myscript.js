const searchButton = document.getElementById(".searchBar");

let results = {
    fetchMovie: function (movie) {
        fetch(/*API goes here*/)
            .then((response) => response.json()).then((data) => this.displayResults(data));
    },

    displayResults: function (data) {
        const { name } = data;
        const { description } = data./*description*/
        const { reviews } = data./*reviews*/

        document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?" + name + "\")";
    },

    fetchResults: function (data) {
        fetch(/*API oes here again*/).then((response) => response.json()).then((data) => displayFeatures(data));

        function displayFeatures(data) {
            for (let i = 0; i < 5; i++) {
                const thumbnail = data./*thumbnail icon from API call*/
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