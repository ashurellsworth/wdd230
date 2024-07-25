document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();

    function fetchWeatherData() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=metric&appid=b8331a838ddd25dae8589cf38fc19a97')
            .then(response => response.json())
            .then(data => {
                const tempMax = data.main.temp_max;
                const currentWeatherHtml = `
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                `;
                document.getElementById('current-weather').innerHTML = currentWeatherHtml;

                document.getElementById('weather-alert').innerHTML = `Today's high temperature: ${tempMax}°C <button onclick="closeMessage()">Close</button>`;
            });

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&units=metric&appid=3f4d6dbedd8ffb72017897edcf3e5d18')
            .then(response => response.json())
            .then(data => {
                const forecast = data.list.filter(f => f.dt_txt.includes('15:00:00'))[1];
                const forecastHtml = `
                    <p>Temperature: ${forecast.main.temp}°C</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Weather: ${forecast.weather[0].main} (${forecast.weather[0].description})</p>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
                `;
                document.getElementById('forecast-weather').innerHTML = forecastHtml;
            });
    }
});

function closeMessage() {
    document.getElementById('weather-alert').style.display = 'none';
}
