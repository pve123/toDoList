const weather = document.querySelector(".weather");
const loc = document.querySelector(".loc");
const API_KEY = "4496a3f96afddf43eb36f998f118235b";

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then(function(response){
      return response.json();
  }).then(function(json){
    const temp = Math.floor(json.main.temp);
    const place = json.name;
     loc.innerHTML = `지역 : ${place}`;
    weather.innerHTML = `온도      : ${temp}°`; 
  });
}


function askForCoords(posObj) {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function saveCoords(posObj){
  localStorage.setItem("coords",JSON.stringify(posObj));
}

function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  const posObj = {
    latitude,
    longitude
  }
  saveCoords(posObj);
  getWeather(latitude,longitude);
}

function handleGeoError() {
  console.log("위치정보를 가져오지 못했습니다.");
}

function loadCoords() {

  const loadedCoords = localStorage.getItem("coords");
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

loadCoords();