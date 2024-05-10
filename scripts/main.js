// hamburger navigation
const navButton = document.querySelector(".nav-button");
const navElement = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    navButton.classList.toggle("open");
});

// dark mode 
const main = document.querySelector("main")
const darkMode = document.querySelector("#mode");

darkMode.addEventListener("click", () => {
    main.classList.toggle("dark");
})

// visitor count
const visits = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
} else {
    visits.textContent = "This is your first visit!"
}

numVisits++;
localStorage.setItem("numVisits", numVisits);