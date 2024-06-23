const baseURL = "https://ashurellsworth.github.io/wdd230/";
const linksURL = "https://ashurellsworth.github.io/wdd230/data/links.json";

const list = document.querySelector("#link-list");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        //create elements 
        let li = document.createElement("li");

        li.innerHTML = `${week.week}: `;
        
        week.links.forEach(link => {
            li.innerHTML += `<a href="${link.url}">${link.title}</a> | `;
        });

        list.appendChild(li);
    });
}

getLinks();
