///// IMPORTANT ~~ IMPORTANT
const $ = document;
////// dark mode selectors
const colorBtn = $.querySelector(".color-btn");
const container = $.querySelector(".container");
const mainApp = $.querySelector(".main-app");
const colorIcon = $.querySelector(".color-icon");
const btn = $.querySelector(".app-btn");
///// app selectors
const input = $.querySelector("#input");
const country = $.querySelector(".country-name");
const weather = $.querySelector(".weather");
const weatherInfo = $.querySelector(".weather-info");
////// dark mode codes
colorBtn.addEventListener("click", () => {
  container.classList.toggle("dark");
  mainApp.classList.toggle("app-dark");
  colorBtn.classList.toggle("color-btn-white");
  btn.classList.toggle("dark");
  input.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    colorIcon.src = "src/icons/sun.svg";
  } else {
    colorIcon.src = "src/icons/moon.svg";
  }
});
////// app codes
btn.addEventListener("click", () => {
  const apiKey = "1b5f4e45f004fdd8ecac27ce0558389d";
  const cityName = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const updateWeather = (data) => {
    country.textContent = `${data.name.toUpperCase()} - ${data.sys.country}`;
    weather.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherInfo.textContent = data.weather[0].description;
  };

  if (cityName === "") {
    alert("import City ...");
  } else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        updateWeather(data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  input.value = "";
});
