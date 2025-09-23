let totalseconds;
let intervalID;
let remainingSeconds;
let gettime = document.getElementById("time1").value;
let disableBtn = (document.getElementById("startBtn").disabled = true);
let disablePause = (document.getElementById("pauseBtn").disabled = true);

function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");
  let bigIntNuber = BigInt(minuteInput);
  // let Minutes = Number(bigIntNuber);

  totalseconds = bigIntNuber * BigInt(60);

  function enableBtns() {
    // return false;
    if (bigIntNuber > 0) {
      // let disableBtn = (document.getElementById("startBtn").disabled = false);
      let disablePause = (document.getElementById("pauseBtn").disabled = false);
      document.getElementById("submit-time").disabled = true;
    }
    return false;
  }
  enableBtns();

  // console.log(totalseconds)

  if (nameInput == "") {
    alert("Please fill the Timer name");

    return false;
  }
  if (nameInput >= 0) {
    alert("Please fill in the name without numbers");
    document.getElementById("submit-time").disabled = false;
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
    let days = Number(remainingSeconds / BigInt(86400)); 
    let hours = Number((remainingSeconds % BigInt(86400)) / BigInt(3600)); 
    let minutes = Number((remainingSeconds % BigInt(3600)) / BigInt(60));
    let seconds = Number(remainingSeconds % BigInt(60)); 


    let hour = document.querySelector("#box1");
    let minute = document.querySelector("#box2");
    let second = document.querySelector("#box3");
    let day = document.querySelector("#box4");

    let fomatedDay = days < 10 ? `0${days}` : days;
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    day.innerHTML = fomatedDay;
    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
    second.innerHTML = formattedSeconds;

    remainingSeconds -= BigInt(1);

    if (remainingSeconds < 0) {
      clearInterval(intervalID);
      alert("Countdown finished");
    }
  }, 1000);
}

function pauseInterval() {
  document.getElementById("pauseBtn").addEventListener("click", function () {
    clearInterval(intervalID);

    let disableBtn = (document.getElementById("pauseBtn").disabled = true);
    let enableBtn = (document.getElementById("startBtn").disabled = false);

    let hours = Number(remainingSeconds / BigInt(3600));
    let minutes = Number((remainingSeconds % BigInt(3600)) / BigInt(60));
    let seconds = remainingSeconds % BigInt(60);

    let enable = document.getElementById("pauseBtn");
    enable.style.cursor = "default";
    let btnColor = document.getElementById("startBtn");

    btnColor.style.cursor = "pointer";

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
    h3.innerHTML = `${currentTime} Remaining Time - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);
    document.body.appendChild(parentDiv);
  });
}
pauseInterval();

function againStartInterval() {
  document.getElementById("startBtn").addEventListener("click", function () {
    startInterval(remainingSeconds);
    let disableBtn = (document.getElementById("startBtn").disabled = true);
    let enableBtn = (document.getElementById("pauseBtn").disabled = false);
    let btnColor = document.getElementById("startBtn");
    btnColor.style.color = "";
    btnColor.style.backgroundColor = "";
    btnColor.style.cursor = "default";
    let enable = document.getElementById("pauseBtn");
    enable.style.cursor = "pointer";

    let timePassed = totalseconds - remainingSeconds;

    let hours = Number(timePassed / BigInt(3600));
    let minutes = Number((timePassed % BigInt(3600)) / BigInt(60));
    let seconds = timePassed % BigInt(60);

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
    h3.innerHTML = `${currentTime} Time Passed - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);
    document.body.appendChild(parentDiv);
  });
}
againStartInterval();

// function resetData(){
//   document.getElementById("reset-data").addEventListener("click", function () {
//   document.getElementById("main-container").reset();
// });
// }
// resetData()

// function disableBtn() {
//     document.getElementById("myBtn").disabled = true;
// }
// disableBtn()

// function enableBtn() {
//     document.getElementById("myBtn").disabled = false;
// }
// enableBtn

// function day() {}
