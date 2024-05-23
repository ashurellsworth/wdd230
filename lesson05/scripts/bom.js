const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != ''){
        const li = document.createElement("li");
        const delButton = document.createElement("button");

        li.textContent = input.value;
        delButton.textContent = 'X';

        li.appendChild(delButton);
        list.append(li);

        delButton.addEventListener("click", () => {
            list.removeChild(li)
            input.focus()
        });

        input.value = '';
    }
    else {
        input.focus();
    }
})