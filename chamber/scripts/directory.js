const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const directory = document.querySelector("#directory");

const url = "https://ashurellsworth.github.io/chamber/data/members.json";

//get info from json file
async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//add to html
function displayMembers(members) {
    members.forEach(member => {
        //create parent
        let section = document.createElement("section");

        //populate
        section.innerHTML = `<img src="${member.logo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <address>${member.address}</address>
        <p>${member.phone}</p>
        <a href="${member.url}">${member.url}</a>`;

        //append
        directory.append(section);
    });
}

getMembers();

//toggle views
gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
    gridButton.classList.add("active");
    listButton.classList.remove("active");
})

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
})