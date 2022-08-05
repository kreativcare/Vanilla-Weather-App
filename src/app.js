function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#todaystemperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let skydescriptionElement = document.querySelector("#skydescriptiontoday");
  skydescriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windspeedElement = document.querySelector("#windspeed");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  let feelslikeElement = document.querySelector("#feelslike");
  feelslikeElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "1a15e23b46fc8dbb324b4a9be06ed972";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bremen&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
