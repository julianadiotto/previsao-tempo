// Variável global
const API_KEY = "74cc569b2597cff3b00062cc6e0317ca"; // chave da API.

const imgFundo = {
    "Clear": "./img/clear.jpeg",
    "Clouds": "./img/clouds.jpeg",
    "Rain": "./img/rain.jpeg",
    "Snow": "./img/snow.jpeg",
    "Thunderstorm": "./img/thunderstorm.jpeg",
    "Mist": "./img/mist.jpeg",
    "Default": "./img/default.jpeg"
};

// Referências aos elementos HTML
const inputCity = document.querySelector('#input-city');
const buttonSearch = document.querySelector('#search');
const cityName = document.querySelector('.city');
const tempDisplay = document.querySelector('.temp-display');
const weatherIcon = document.querySelector('.weather-icon');
const textDescription = document.querySelector('.text-description');
const humidity = document.querySelector('.humidity');


// Event Listeners
buttonSearch.addEventListener('click', () => {
    if (inputCity.value) buscarCidade(inputCity.value);
});

inputCity.addEventListener('keydown', (event) => {    
    if (event.key === 'Enter' && inputCity.value) {
        buscarCidade(inputCity.value);
    }
});

/**
 * Updates the UI with fetched weather data
 * @param {Object} data - Data from OpenWeather API
 */
function exibirDados(data) {
    cityName.textContent = `Tempo em ${data.name}`;
    tempDisplay.textContent = `${Math.floor(data.main.temp)}°C`;
    textDescription.textContent = data.weather[0].description;
    humidity.textContent = `Umidade: ${data.main.humidity}%`;        
   

   const condition = data.weather[0].main;
    const urlImagem = imgFundo[condition] || imgFundo["Default"];

    // Aplicação forçada no body
    document.body.style.backgroundImage = "url('" + urlImagem + "')";
    
    // Forçar o CSS a aceitar a imagem
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
         
    // High definition icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
    inputCity.value = '';
}

/**
 * Fetches data from API
 */
async function buscarCidade(city) {    
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        exibirDados(data);
        
    } catch (error) {
        alert("Cidade não encontrada! Verifique o nome e tente novamente.");
    }
}






