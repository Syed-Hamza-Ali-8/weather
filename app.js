const inputBox = document.querySelector(".location")
const searchButton = document.getElementById("searchBtn")
const weatherImage = document.querySelector(".weather-image")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const locationNotFound = document.querySelector(".wrong-location")
const weatherBody = document.querySelector(".weather-body")

async function checkWeather(city) {
    const api_key = "815ad95c7568b54235f1173c9257fe36"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json())

    if (weather_data.cod === "404") {
        locationNotFound.style.display = "flex"
        weatherBody.style.display = "none"
        return;
    }

    locationNotFound.style.display = "none"
    weatherBody.style.display = "flex"

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherImage.src = "images/cloud.png"
            break
        case 'Clear':
            weatherImage.src = "images/clear.png"
            break
        case 'Rain':
            weatherImage.src = "images/rain.png"
            break
        case 'Mist':
            weatherImage.src = "images/mist.png"
            break
        case 'Snow':
            weatherImage.src = "images/snow.png"
            break
    }
    console.log(weather_data);
}
searchButton.addEventListener('click', () => {
    checkWeather(inputBox.value)
})
