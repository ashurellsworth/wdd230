const icon = document.querySelector("#weather-icon");
const temp = document.querySelector("#current-temp");
const description = document.querySelector("#weather-description");
const forecast = document.querySelector("#forecast");

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=42.2917&lon=-85.5872&units=metric&appid=b8331a838ddd25dae8589cf38fc19a97";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=42.2917&lon=-85.5872&units=metric&appid=b8331a838ddd25dae8589cf38fc19a97";

async function getData() {
    try {
        const response1 = await fetch(currentUrl);
        const response2 = await fetch(forecastUrl);

        if (response1.ok) {
            const data1 = await response1.json();

            displayCurrentWeather(data1);
        } else {
            throw Error(await response1.text());
        }

        if (response2.ok) {
            const data2 = await response2.json();

            displayForecast(data2.list);
        } else {
            throw Error(await response2.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    //icon
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt", data.weather[0].description);

    //temp
    temp.innerHTML = `${data.main.temp}&deg;C`;

    //description
    description.innerHTML = data.weather[0].description;
}

function displayForecast(data) {
    data.forEach(element => { 
        let date = element.dt_txt;

        forecast.innerHTML += `<div>
        <p class="forecast-temp">${element.main.temp}&deg;C</p>
        <p class="forecast-date">${date.slice(5, 13)}hrs</p>
        </div>`;
    });
}

getData();