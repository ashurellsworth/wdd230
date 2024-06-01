const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const description = document.querySelector("#weather-description");
const windSpeed = document.querySelector("#wind-speed");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=42.2917&lon=-85.5872&units=metric&appid=b8331a838ddd25dae8589cf38fc19a97";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    //icon
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    //temp
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    //description
    description.innerHTML = data.weather[0].description;

    //wind speed
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`
}

apiFetch();