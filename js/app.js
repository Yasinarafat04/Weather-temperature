const API_KEY = `560b44c34e309740c5554e0551c7cb08`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    console.log(url);
}