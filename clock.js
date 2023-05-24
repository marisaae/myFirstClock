window.addEventListener("DOMContentLoaded", (event) => {
    let intervalId = setInterval(displayTime, 1000);

    //stop clock
    let stopButton = document.getElementById("stop-button");
    stopButton.addEventListener('click', event => {
        clearInterval(intervalId);
        stopButton.style.backgroundColor = 'red';
    })
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

hours = (hours < 10) ? `0${hours}` : hours;
minutes = (minutes < 10) ? `0${minutes}` : minutes;
seconds = (seconds < 10) ? `0${seconds}` : seconds;

let time = `${hours}:${minutes}:${seconds} ${session}`

let displayClock = document.getElementById('clock-face');

displayClock.innerHTML = time;

}

