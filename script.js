const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'ef7e0df5d611a159538332e21899e78d'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value
    if(city){
        fetchWeather(city)
    } else {
        alert('Ingrese una ciudad válida')
    }


})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => console.log(data))
}