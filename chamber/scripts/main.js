// footer - copyright year and date of modification
const year = document.querySelector("#year");
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// responsive menu
const navButton = document.querySelector("#nav-button");
const navElement = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("open");
    navElement.classList.toggle("open");
});