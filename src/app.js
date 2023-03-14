

function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
function search(event) {
    event.preventDefault();
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city-name");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 77;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 25;
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);

//    let apiKey= "93856e13ae97ee790323bc3d7a005645";
//    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
   function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    temperatureElement.innerHTML = `${temperature}`;
    description.innerHTML = response.data.weather[0].description;
   }

   function searchCity(city, time) {
    city = document.querySelector("#city-input").value;
    let apiKey= "93856e13ae97ee790323bc3d7a005645";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    console.log(city);
   }
    
   function showposition(position) {
    
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
   }

   function getCurrentPosition(){
     navigator.geolocation.getCurrentPosition(showposition);
   }
   

   let buttonLocation = document.querySelector(".location-button");
   buttonLocation.addEventListener("click", getCurrentPosition);