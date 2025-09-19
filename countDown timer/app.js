let totalseconds;
let intervalID;
let remainingSeconds;
let gettime = document.getElementById("time1").value;

function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");
  totalseconds = minuteInput * 60;

  // console.log(totalseconds)

  if (nameInput == "") {
    alert("Please fill the Timer name");
    return false;
  }
  if (nameInput >= 0) {
    alert("Please fill in the name without numbers");
    return false;
  } else {
    name.innerHTML = nameInput;
  }

  if (minuteInput == "") {
    alert("Please fill the input Time in minutes");
    return false;
  }
  if (minuteInput < 0) {
    alert("Please fill a positive number for time");
    return false;
  }

  startInterval(totalseconds);
}

function startInterval(TotalSeconds) {
  remainingSeconds = TotalSeconds;
  intervalID = setInterval(() => {
    let hours = Math.floor(remainingSeconds / 3600);
    let minutes = Math.floor((remainingSeconds % 3600) / 60);
    let seconds = remainingSeconds % 60;

    let hour = document.querySelector("#box1");
    let minute = document.querySelector("#box2");
    let second = document.querySelector("#box3");

    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
    second.innerHTML = formattedSeconds;

    remainingSeconds--;

    if (remainingSeconds < 0) {
      clearInterval(intervalID);
      alert("Countdown finished");
    }
  }, 1000);
}

function pauseInterval() {
  document.getElementById("pauseBtn").addEventListener("click", function () {
    clearInterval(intervalID);

    let hours = Math.floor(remainingSeconds / 3600);
    let minutes = Math.floor((remainingSeconds % 3600) / 60);
    let seconds = remainingSeconds % 60;

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

    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let currentTime = `Stop Time - ${hou} : ${min} : ${sec},`;
    h3.innerHTML = `${currentTime} Remaining Time - ${formattedHours}:${formattedMinutes}:${
      formattedSeconds + 1
    }`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);
    document.body.appendChild(parentDiv);
  });
}
pauseInterval();

function againStartInterval() {
  document.getElementById("startBtn").addEventListener("click", function () {
    startInterval(remainingSeconds);
    // if(!gettime){
    //   alert("first stop after start")
    //   return false;
    // }

    let timePassed = totalseconds - remainingSeconds;

    let hours = Math.floor(timePassed / 3600);
    let minutes = Math.floor((timePassed % 3600) / 60);
    let seconds = timePassed % 60;

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
    secondChild.classList.add("start-time");
    let h3 = document.createElement("h3");
    h3.classList.add("startTime");

    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let currentTime = `Start Time - ${hou} : ${min} : ${sec},`;
    h3.innerHTML = `${currentTime} Time Passed - ${formattedHours}:${formattedMinutes}:${
      formattedSeconds - 1
    }`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);
    document.body.appendChild(parentDiv);
  });
}
againStartInterval();

function resetData(){
  document.getElementById("reset-data").addEventListener("click", function () {
  document.getElementById("main-container").reset();
});
}
resetData()
