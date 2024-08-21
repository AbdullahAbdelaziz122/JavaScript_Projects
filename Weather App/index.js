// weather app 

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// add your api key here withoud the {}
const apiKey = "{here}";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);
            card.style.display = "flex"; // Ensure the card is visible after data is fetched
        }catch(error){
            console.error(error);
            displayError("Error fetching weather data. Please try again.");
        }
    }else{
        displayError("Please enter a city.");
    }
});

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

async function getWeatherData(city){
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Couldn't fetch data");
    }else{
        return await response.json();
    }
}

function displayWeatherData(weatherData){
    console.log(weatherData);
    let city = weatherData.location.name;
    let temp = weatherData.current.temp_c;
    let humidity = weatherData.current.humidity;
    let description = weatherData.current.condition.text;
    let icon = weatherData.current.condition.icon;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("img");

    // City
    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    // Temperature
    tempDisplay.textContent = `${temp}°C`;
    tempDisplay.classList.add("tempDisplay");

    // Humidity
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");

    // Description
    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");

    // Weather Icon
    weatherEmoji.src = `https:${icon}`;
    weatherEmoji.alt = description;
    weatherEmoji.classList.add("weatherIcon");

    // Append elements to the card
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}
