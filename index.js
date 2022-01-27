function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = now.getDate();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let year = now.getFullYear();
  let month = months[now.getMonth()];

  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${date}/${month}/${year}`;
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${day} ${hours}.${minutes}`;
}
formatDate();

function returnLocation(event) {
  event.preventDefault();
  let yourLocation = document.querySelector("#your-location");
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = `${yourLocation.value}`;
}

let choosingLocation = document.querySelector("#location-form");
choosingLocation.addEventListener("submit", returnLocation);

function checkTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHtml = 0;
}

let celsiusTemp = document.querySelector("#celsius-unit");
celsiusTemp.addEventListener("click", checkTemp);

function checkFahr(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = 17;
}

let fahrTemp = document.querySelector("#farenheit-unit");
fahrTemp.addEventListener("click", checkFahr);
