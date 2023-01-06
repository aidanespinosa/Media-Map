document.getElementById("logoutButton").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicking")
    window.location.replace('/')
})