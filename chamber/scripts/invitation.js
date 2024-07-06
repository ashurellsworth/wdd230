const banner = document.querySelector("#invitation");
const button = document.querySelector("#invitation-button");

let today = new Date(Date.now());
const days = [1, 2, 3]; //mon, wed, tue

//hide invitation if its not mon, wed, tue
if (!days.includes(today.getDay())) {
    banner.style.display = "none";
}

button.addEventListener("click", () => {
    banner.style.display = "none";
});