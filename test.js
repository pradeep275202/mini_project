let countdownInterval;
let totalSeconds = 0; // 👈 Global bana diya
let intervalID = null; // 👈 Global bana diya

function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");

  if (nameInput.trim() === "") {
    alert("please fill the Timer name");
    return false;
  }

  if (!isNaN(nameInput)) {
    alert("please fill the name in words, not numbers");
    return false;
  } else {
    name.innerHTML = nameInput;
  }

  if (minuteInput.trim() === "") {
    alert("please fill the input Time in minutes");
    return false;
  }

  if (minuteInput < 0) {
    alert("please fill a positive number");
    return false;
  }

  totalSeconds = Math.floor(minuteInput * 60); // 👈 Global me assign

  startInterval(); // 👈 Start countdown
}

function startInterval() {
  if (intervalID !== null) return; // 👈 Already running, do nothing

  intervalID = setInterval(() => {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.querySelector("#box1").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector("#box2").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector("#box3").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(intervalID);
      intervalID = null;
      console.log("Countdown finished");
    }
  }, 1000);
}

// ✅ Pause Button Logic
document.getElementById("pauseBtn").addEventListener("click", function () {
  if (intervalID !== null) {
    clearInterval(intervalID);
    intervalID = null;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    console.log("Paused at:", hours, minutes, seconds);

    let stop = document.querySelector("#stopTime");
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    let ak = document.querySelector(".input").value;

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("container");

    let firstChild = document.createElement("div");
    firstChild.classList.add("timer-name");
    let heading = document.createElement("h3");
    heading.id = "timerName";
    heading.innerHTML = `Timer Name : ${ak}`;
    firstChild.appendChild(heading);
    parentDiv.appendChild(firstChild);

    let secondChild = document.createElement("div");
    secondChild.classList.add("stop-time");
    let h3 = document.createElement("h3");
    h3.classList.add("stopTime");
    h3.innerHTML = `Stop time ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);

    document.body.appendChild(parentDiv);
  }
});
