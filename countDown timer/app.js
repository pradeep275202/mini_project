// let totalseconds;
function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");

  // window.globalVariable = minuteInput;
  // console.log("this is a global",globalVariable)

  totalseconds = minuteInput * 60;

  if (nameInput == "") {
    alert("please fill the Timer name");
    return false;
  }
  if (nameInput >= 0) {
    alert("please fill the in the word in timer name");
    return false;
  } else {
    name.innerHTML = nameInput;
  }

  if (minuteInput == "") {
    alert("please fill the input Time in  minutes");
    return false;
  }
  if (minuteInput < 0) {
    alert("please fill the positive number");
    return false;
  }

  startInterval();
}
let totalseconds;
console.log("this is a totalseconds", totalseconds);

function startInterval() {
  let intervalID = setInterval(() => {
    // window.globalVariable = totalSeconds;
    let hours = Math.floor(totalseconds / 3600);
    let minutes = Math.floor((totalseconds % 3600) / 60);
    let seconds = totalseconds % 60;

    let hour = document.querySelector("#box1");
    let minute = document.querySelector("#box2");
    let second = document.querySelector("#box3");

    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
    second.innerHTML = formattedSeconds;

    // console.log(hours, minutes, seconds);

    totalseconds--;

    if (totalseconds < 0) {
      clearInterval(intervalID);
      alert("Countdown finished");
    }
  }, 1000);
}

function pauseInterval() {
  // clearInterval(intervalID)
  // console.log("clear")
  document.getElementById("pauseBtn").addEventListener("click", function () {
    clearInterval(intervalID);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    console.log("Remaining hours at pause:", hours, minutes, seconds);
    let stop = document.querySelector("#stopTime");
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    let ak = document.querySelector(".input").value;

    // show stop and start time
    // create the first parent div
    let parentDiv = document.createElement("div");

    parentDiv.classList.add("container");
    //  create the first childDiv
    let firstChild = document.createElement("div");

    firstChild.classList.add("timer-name");
    let hedding = document.createElement("h3");
    hedding.id = "timerName";
    hedding.innerHTML = `Timer Name : ${ak}`;
    firstChild.appendChild(hedding);
    parentDiv.appendChild(firstChild);

    // create the second child
    let secondChild = document.createElement("div");
    //add class on div
    secondChild.classList.add("stop-time");
    // create h3
    let h3 = document.createElement("h3");
    //add class on h3
    h3.classList.add("stopTime");
    //  console.log("this is a current time",currentTime)
    console.log("this is a total seconds", totalSeconds);

    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let currentTime = `Stop Time - ${hou} : ${min} : ${sec},`;
    console.log(currentTime);

    h3.innerHTML = `${currentTime}       Remining Time - ${formattedHours}:${formattedMinutes}:${
      formattedSeconds + 1
    }`;

    secondChild.appendChild(h3);
    //append second child in the parent div
    parentDiv.appendChild(secondChild);

    document.body.appendChild(parentDiv);
  });
}

function startInterval() {
  document.getElementById("startBtn").addEventListener("click", function () {
    clearInterval(intervalID);

    let timePassed = totalseconds - totalSeconds;

    console.log("time passed", timePassed - 1);
    let hours = Math.floor(timePassed / 3600);
    let minutes = Math.floor((timePassed % 3600) / 60);
    let seconds = timePassed % 60;

    console.log("Remaining hours at pause:", hours, minutes, seconds);
    let stop = document.querySelector("#stopTime");
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // let timePassed = totalseconds-totalSeconds;
    // console.log('time passed',timePassed-1)

    let ak = document.querySelector(".input").value;

    let parentDiv = document.createElement("div");

    parentDiv.classList.add("container");

    let firstChild = document.createElement("div");

    firstChild.classList.add("timer-name");
    let hedding = document.createElement("h3");
    hedding.id = "timerName";
    hedding.innerHTML = `Timer Name : ${ak}`;
    firstChild.appendChild(hedding);
    parentDiv.appendChild(firstChild);

    // create the second child
    let secondChild = document.createElement("div");
    //add class on div
    secondChild.classList.add("stop-time");
    // create h3
    let h3 = document.createElement("h3");
    //add class on h3
    h3.classList.add("stopTime");
    //  console.log("this is a current time",currentTime)
    console.log("this is a total seconds", totalSeconds);
    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let currentTime = `Start time - ${hou} : ${min} : ${sec},`;
    console.log(currentTime);

    h3.innerHTML = `${currentTime}  Time passed - ${formattedHours}:${formattedMinutes}:${
      formattedSeconds - 1
    }`;

    secondChild.appendChild(h3);
    //append second child in the parent div
    parentDiv.appendChild(secondChild);

    document.body.appendChild(parentDiv);
  });
}
startInterval();
