var searchButton = document.querySelector(".btn-primary");
var apiKey = "9fdcdbfbe9804119cad80e119f8f0742";
var cityNameDisplay = document.querySelector(".display-city-name")

// when search button is click, it searches for that city weather (current + 5 day report)
//city is saved as a button via local storage and weather can be reloaded 
//loads city name and date via API/DOM
function cityName () {
    var  cityNameInput = $(".city-name").val();
    console.log(cityNameInput);

    cityNameDisplay.append(cityNameInput)
    
    localStorage.setItem("city", cityNameInput);

    var cityButton = document.createElement("button");
    cityButton.innerHTML = cityNameInput;
    $(".city-button").append(cityButton)

    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&appid=" + apiKey + "&units=metric";
    var fiveDayWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameInput + "&Appid=" + apiKey + "&units=metric";

    fetch(currentWeather)
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        var temperatureEl = document.querySelector(".temperature")
        temperatureEl.append(" " + response.main.temp + " C")

        var windEl = document.querySelector(".wind")
        windEl.append(" " + response.wind.speed + " km/h")

        var humidityEl = document.querySelector(".humidity")
        humidityEl.append(" " + response.main.humidity + " %")

        var latitude = response.coord.lat
        console.log(latitude)
        var longitude = response.coord.lon
        console.log(longitude)

        var uvIndex = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" +longitude + "&appid=" + apiKey;

        fetch(uvIndex)
        .then(function(response) {
        return response.json();
        })

        .then(function(response) {
        var uvIndexEl = document.querySelector(".uv-index")
        uvIndexEl.append(" " + response.current.uvi)
       
        // add if uv is less than 2 = green, 3-5 = yellow, 6 and higher is red

        })
    })

    fetch(fiveDayWeather)
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        var dayOneTempEl = document.querySelector(".day-one-temp")
        dayOneTempEl.append("Temperature = " + response.list[3].main.temp + " C")
        var dayOneWindEl = document.querySelector(".day-one-wind")
        dayOneWindEl.append("Wind = " + response.list[3].wind.speed + " km/h")
        var dayOneHumidityEl = document.querySelector(".day-one-humidity")
        dayOneHumidityEl.append("Humdity = " + response.list[3].main.humidity + " %")

        var dayTwoTempEl = document.querySelector(".day-two-temp")
        dayTwoTempEl.append("Temperature = " + response.list[11].main.temp + " C")
        var dayTwoWindEl = document.querySelector(".day-two-wind")
        dayTwoWindEl.append("Wind = " + response.list[11].wind.speed + " km/h")
        var dayTwoHumidityEl = document.querySelector(".day-two-humidity")
        dayTwoHumidityEl.append("Humdity = " + response.list[11].main.humidity + " %")

        var dayThreeTempEl = document.querySelector(".day-three-temp")
        dayThreeTempEl.append("Temperature = " + response.list[19].main.temp + " C")
        var dayThreeWindEl = document.querySelector(".day-three-wind")
        dayOneWindEl.append("Wind = " + response.list[19].wind.speed + " km/h")
        var dayThreeHumidityEl = document.querySelector(".day-three-humidity")
        dayThreeHumidityEl.append("Humdity = " + response.list[19].main.humidity + " %")

        var dayFourTempEl = document.querySelector(".day-four-temp")
        dayFourTempEl.append("Temperature = " + response.list[27].main.temp + " C")
        var dayFourWindEl = document.querySelector(".day-four-wind")
        dayFourWindEl.append("Wind = " + response.list[27].wind.speed + " km/h")
        var dayFourHumidityEl = document.querySelector(".day-four-humidity")
        dayFourHumidityEl.append("Humdity = " + response.list[27].main.humidity + " %")

        var dayFiveTempEl = document.querySelector(".day-five-temp")
        dayFiveTempEl.append("Temperature = " + response.list[35].main.temp + " C")
        var dayFiveWindEl = document.querySelector(".day-five-wind")
        dayFiveWindEl.append("Wind = " + response.list[35].wind.speed + " km/h")
        var dayFiveHumidityEl = document.querySelector(".day-five-humidity")
        dayFiveHumidityEl.append("Humdity = " + response.list[35].main.humidity + " %")

    })
}


searchButton.addEventListener("click", cityName);

//auto populates the temp, win, humidity and uv index


// 5 days forecast is loaded as well
