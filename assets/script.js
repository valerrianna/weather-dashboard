var searchButton = document.querySelector(".btn-primary");
var apiKey = "9fdcdbfbe9804119cad80e119f8f0742";

// when search button is click, it searches for that city weather (current + 5 day report)
//city is saved as a button via local storage and weather can be reloaded 
//loads city name and date via API/DOM
function cityName () {
    var  cityNameInput = $(".city-name").val();
    console.log(cityNameInput);
    
    localStorage.setItem("city", cityNameInput);

    var cityButton = document.createElement("button");
    cityButton.innerHTML = cityNameInput;
    $(".city-button").append(cityButton)
}

function cityWeather () {
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&Appid=" + apiKey;
    var fiveDayWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameInput + "&Appid=" + apiKey;
}

searchButton.addEventListener("click", cityName);

//auto populates the temp, win, humidity and uv index

//uv index has a bg based on the conditions (favourable=green, moderate=yellow, severe= red)

// 5 days forecast is loaded as well
