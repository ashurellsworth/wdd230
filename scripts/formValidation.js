//password validation

const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const passFeedback = document.querySelector("#passFeedback");

password2.addEventListener("focusout", controlar)

function controlar() {
    if (password2.value !== password1.value) {

        password1.value = "";
        password2.value = "";

        focus(password1);

        passFeedback.innerHTML = "<strong>Passwords do not match</strong>. Plese ensure that both passwords are the same.";
    } else {
        passFeedback.innerHTML = "";
    }
}

//range input
const rangevalue = document.querySelector("#rangevalue");
const rating = document.querySelector("#rating");

rating.addEventListener("change", displayRating);
rating.addEventListener("input", displayRating);

function displayRating() {
    rangevalue.innerHTML = rating.value;
}