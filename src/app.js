

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
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    
    return days[day];
  }


    function displayForecast(response){
      let forecast = response.data.daily;
      console.log(forecast);
      let forecastElement = document.querySelector("#forecast");
      
      let forecastHTML = `
                            <div class="row forecast">  
                              <div class="weather-forecast">
                                <div class="calender">📅</div>
                                <div class="new-forecast">Next Forecast</div>
                                
                              </div>
                          `;
      
        forecast.forEach(function (forecastDay) {
        forecastHTML = forecastHTML + `
        <div class="row forecast">  
        <p class="col">${formatDay(forecastDay.time)}</p>
        <p class="col">⛈</p>
        <p class="col">${Math.round(forecastDay.temperature.maximum)}°C ${Math.round(forecastDay.temperature.minimum)}°</p>
        </div>
      `;
      })
      
      forecastHTML = forecastHTML+`</div>`;
      forecastElement.innerHTML= forecastHTML
      
      
    }
    

  let celsiusTemperature = null;

    function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "a723af9810a3de0odaa247t7a977cd9b"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);

  }


    function showTemperature(response) {
    console.log(response.data);
    celsiusTemperature = response.data.temperature.current;
    let temperature = Math.round(celsiusTemperature);
    let temperatureElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    temperatureElement.innerHTML = `${temperature}`;
    description.innerHTML = response.data.condition.description;

    res = response.data;
    getForecast(res.coordinates);
 
   }

   function searchCity(city) {
    city = document.querySelector("#city-input").value;
    let apiKey= "a723af9810a3de0odaa247t7a977cd9b";
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    console.log(city);
   }
   searchCity("Lagos");
    
   function showposition(position) {
    
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
   }

   function getCurrentPosition(){
     navigator.geolocation.getCurrentPosition(showposition);
   }
   

   let buttonLocation = document.querySelector(".location-button");
   buttonLocation.addEventListener("click", getCurrentPosition);


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
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  

  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);


