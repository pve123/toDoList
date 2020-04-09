const clockContainer = document.querySelector(".clock");
let clockTitle = clockContainer.querySelector("h1");


function getTime(){
  date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  clockTitle.innerHTML = `${h > 9 ? `${h}` : `0${h}`}:${m > 9 ? `${m}` : `0${m}`}:${s > 9 ? `${s}` : `0${s}`}`;
}

setInterval(getTime, 1000);