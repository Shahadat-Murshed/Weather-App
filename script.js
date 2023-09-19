let weather = {
  apikey: "bdde8c778b2127d608ce62c96964bbd9",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=en&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.dataweather(data));
  },
  dataweather: function (data) {
    var { name } = data;
    var { description } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humidity :" + humidity + "%";
    document.querySelector(".wind").innerHTML =
      "Wind Speed : " + speed + "km/h";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-eng").value);
  },
};

document.querySelector(".search-eng").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-eng").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});

document.querySelector("button").addEventListener("click", function () {
  weather.search();
});

weather.fetchWeather("Chittagong");
