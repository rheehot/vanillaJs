// const clockContainer = document.querySelector(".js-clock");
// const clockTitle = clockContainer.querySelector("h1");

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //   clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //   seconds < 10 ? `0${seconds}` : seconds 은 작은 if절이다.초의숫자가 10보다 작으면 앞에 0을 붙이고 10이후로는 그냥 초만 보여진다
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
