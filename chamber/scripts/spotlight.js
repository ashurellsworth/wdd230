const spotlight = document.querySelector(".spot-card");

const url = "https://ashurellsworth.github.io/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            displayNotableMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayNotableMembers(members) {
    //select members with gold or silver membership and randomize their order
    let notableMembers = members.filter(member => member.membership === "Gold" || member.membership === "Silver").sort(() => 0.5 - Math.random()); 

    //get three 
    let selected = notableMembers.slice(0, 3);

    //add member info to page
    selected.forEach(member => {
        let div = document.createElement("div");
        
        div.innerHTML = `<img src="${member.logo}" alt="${member.name}">
        <h3>${member.name}</h3>`

        spotlight.appendChild(div);
    });
}

getMembers();