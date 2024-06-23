const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();

        // console.table(data.prophets); // reference the objects inside, not just the objet!! 

        displayProphets(data.prophets)
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        //create the elements
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dob = document.createElement("p");
        let pob = document.createElement("p");
        let portrait = document.createElement("img");

        //h2 element
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //dob element
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;

        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        //img element
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Image of ${fullName.textContent}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "170");
        portrait.setAttribute("height", "220");

        //add to section
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        //add to div
        cards.appendChild(card);
    });
}

getProphetData();