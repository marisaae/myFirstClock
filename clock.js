window.addEventListener("DOMContentLoaded", (event) => {
  startClock();

  //stop clock
  let stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", stopClock);

  //restart clock
  let startButton = document.getElementById("start-button");
  startButton.addEventListener("click", restartClock);
});

function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let time = `${hours}:${minutes}:${seconds} ${session}`;

  let displayClock = document.getElementById("clock-face");

  displayClock.innerHTML = time;
}

let isClockRunning = false;
let intervalId;

//start clock
function startClock() {
  intervalId = setInterval(displayTime, 1000);
  isClockRunning = true;
}

//stop clock
function stopClock() {
  clearInterval(intervalId);
  isClockRunning = false;
  document.getElementById("stop-button").style.backgroundColor = "red";
}

//restart clock
function restartClock() {
  document.getElementById("stop-button").style.backgroundColor = "";
  startClock();
}
