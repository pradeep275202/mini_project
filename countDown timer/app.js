let totalseconds;
let intervalID;

let gettime = document.getElementById("time1").value;

let disableBtn = document.getElementById("startBtn");
let disablePause = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("reset-data");

resetBtn.disabled = true;
disableBtn.disabled = true;
disablePause.disabled = true;

resetBtn.style.cursor = "not-allowed";
disableBtn.style.cursor = "not-allowed";
disablePause.style.cursor = "not-allowed";
// let userDEtails;
function getInput() {
  document
    .querySelector("#submit-time")
    .addEventListener("click", function (event) {
      event.preventDefault();
      // document.querySelector("#submit-time").addEventListener("click", function () {
      nameInput = document.querySelector("#user_name").value;

      // userName = nameInput;
      let minuteInput = document.querySelector("#time1").value;
      let name = document.querySelector(".timer");

      let bigIntNuber = BigInt(minuteInput);

      localStorage.setItem("username", nameInput);
      localStorage.setItem("minutes", bigIntNuber);
      let userDEtails = localStorage.getItem("username");
      let userMinute = localStorage.getItem("minutes");
      console.log("this is a userDetails", userDEtails, userMinute);

      totalseconds = BigInt(userMinute) * BigInt(60);
      // When we refresh the page, our data should not be lost. JavaScript language
      localStorage.setItem("totalseconds", totalseconds);
      let allTime = localStorage.getItem("totalseconds");
      console.log("this is a total seconds", allTime);

      function enableBtns() {
        // return false;
        if (bigIntNuber > 0) {
          // let disableBtn = (document.getElementById("startBtn").disabled = false);
          let disablePause = (document.getElementById(
            "pauseBtn"
          ).disabled = false);
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
      disablePause.style.cursor = "pointer";

      document.querySelector("#user_name").value = "";
      document.querySelector("#time1").value = "";

      let disableSubmitBtn = document.getElementById("submit-time");
      disableSubmitBtn.disabled = true;
      disableSubmitBtn.style.cursor = "not-allowed";

      let resetBtn = document.getElementById("reset-data");
      resetBtn.disabled = false;
      resetBtn.style.cursor = "pointer";

      startInterval(totalseconds);
      // }
    });
}
getInput();

function startInterval(TotalSeconds) {
  let remaning = localStorage.getItem("totalseconds");
  // localStorage.getItem('')
  let remainingSeconds = BigInt(TotalSeconds);

  // remainingSeconds = TotalSeconds;
  intervalID = setInterval(() => {
    let years = Number(remainingSeconds / BigInt(31536000));
    let days = Number((remainingSeconds % BigInt(31536000)) / BigInt(86400));
    let hours = Number((remainingSeconds % BigInt(86400)) / BigInt(3600));
    let minutes = Number((remainingSeconds % BigInt(3600)) / BigInt(60));
    let seconds = Number(remainingSeconds % BigInt(60));

    let year = document.querySelector("#box5");
    let day = document.querySelector("#box4");
    let hour = document.querySelector("#box3");
    let minute = document.querySelector("#box2");
    let second = document.querySelector("#box1");

    let formatedYear = years < 10 ? `0${years}` : years;
    let fomatedDay = days < 10 ? `0${days}` : days;
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // console.log("all",formatedYear,fomatedDay,formattedHours,formattedMinutes,formattedSeconds)

    year.innerHTML = formatedYear;
    day.innerHTML = fomatedDay;
    hour.innerHTML = formattedHours;
    minute.innerHTML = formattedMinutes;
    second.innerHTML = formattedSeconds;

    remainingSeconds -= BigInt(1);

    // console.log("ak",BigInt(remaning)-BigInt(remainingSeconds))
    let fulltime = localStorage.getItem("remaining");
    // console.log("this is a full",BigInt(fulltime)-BigInt(remainingSeconds))
    localStorage.setItem("remaining", remainingSeconds);

    localStorage.setItem("formatedye", formatedYear);
    localStorage.setItem("formatedDa", fomatedDay);
    localStorage.setItem("formatedHo", formattedHours);
    localStorage.setItem("formatedMi", formattedMinutes);
    localStorage.setItem("formatedSe", formattedSeconds);

    if (remainingSeconds < 0) {
      clearInterval(intervalID);
      alert("Countdown finished");
    }
  }, 1000);
}

function pauseInterval() {
  document.getElementById("pauseBtn").addEventListener("click", function () {
    alert("Are you sure pause the Coutdown");
    afterAlertShow();
  });
}
pauseInterval();

function afterAlertShow() {
  clearInterval(intervalID);
  let disableBtn = document.getElementById("pauseBtn");
  let enableBtn = document.getElementById("startBtn");

  disableBtn.disabled = true;
  enableBtn.disabled = false;

  disableBtn.style.cursor = "not-allowed";
  enableBtn.style.cursor = "pointer";

  let remaning = localStorage.getItem("totalseconds");
  let remainingSeconds = BigInt(remaning);

  let formatedye = localStorage.getItem("formatedye");
  let formatedDa = localStorage.getItem("formatedDa");
  let formatedHo = localStorage.getItem("formatedHo");
  let formatedMi = localStorage.getItem("formatedMi");
  let formatedSe = localStorage.getItem("formatedSe");

  // console.log("all",formatedYear.formatedDays,formattedHours,formattedMinutes,formattedSeconds)

  let now = new Date();
  let hou = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let currentTime = `Stop Time - ${hou} : ${min} : ${sec}`;

  let table = document.querySelector("#table-container");
  if (table.rows.length === 0) {
    let tablerow = document.createElement("tr");
    let coutDownName = document.createElement("th");
    coutDownName.innerHTML = "Count Down Name";
    let stopStart = document.createElement("th");
    stopStart.innerHTML = "Stop Time / Start Time";
    let remaningtimeTimepassed = document.createElement("th");
    remaningtimeTimepassed.innerHTML = "Remaining time / Time Passed";
    tablerow.appendChild(coutDownName);
    tablerow.appendChild(stopStart);
    tablerow.appendChild(remaningtimeTimepassed);
    table.appendChild(tablerow);
  }

  let createTr = document.createElement("tr");
  let firstTd = document.createElement("td");
  firstTd.innerHTML = nameInput;
  let secondTd = document.createElement("td");
  secondTd.innerHTML = currentTime;
  let ThirdTd = document.createElement("td");
  ThirdTd.innerHTML = `Remaining time - ${formatedye}:${formatedDa}:${formatedHo}:${formatedMi}:${formatedSe}`;
  createTr.appendChild(firstTd);
  createTr.appendChild(secondTd);
  createTr.appendChild(ThirdTd);

  table.appendChild(createTr);

  let Tabledata = {
    userName: nameInput,
    currentTime: currentTime,
    information: `Remaining time - ${formatedye}:${formatedDa}:${formatedHo}:${formatedMi}:${formatedSe}`,
  };
  console.log(Tabledata);
  localStorage.setItem("tableDATa", JSON.stringify(Tabledata));
}

function againStartInterval() {
  document.getElementById("startBtn").addEventListener("click", function () {
    alert("Are you sure start again coutDown");
    againStar();
  });
}
againStartInterval();
function againStar() {
  let Totals = BigInt(localStorage.getItem("totalseconds"));
  let remanin = BigInt(localStorage.getItem("remaining"));
  let time2 = remanin;

  // let timePassed = Totals - remanin;

  // let z = remanin
  console.log("this is a reming time", time2);

  startInterval(time2);

  let disableBtn = document.getElementById("startBtn");
  let enableBtn = document.getElementById("pauseBtn");
  // let btnColor = document.getElementById("startBtn");

  disableBtn.disabled = true;
  enableBtn.disabled = false;

  disableBtn.style.cursor = "not-allowed";
  enableBtn.style.cursor = "pointer";

  // let totalseconds = localStorage.getItem("totalseconds");
  // let tim = Totals - remanin;
  // let timePassed = BigInt(tim);

  let timePassed = Totals - remanin;

  let years = Number(timePassed / BigInt(31536000));
  let days = Number((timePassed % BigInt(31536000)) / BigInt(86400));
  let hours = Number((timePassed % BigInt(86400)) / BigInt(3600));
  let minutes = Number((timePassed % BigInt(3600)) / BigInt(60));
  let seconds = Number(timePassed % BigInt(60));

  let formatedYear = years < 10 ? `0${years}` : years;
  let formatedDays = days < 10 ? `0${days}` : days;
  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  let now = new Date();
  let hou = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let currentTime = `Start Time - ${hou} : ${min} : ${sec}`;

  //   document.getElementById("table-container").appendChild(table);
  let createTr = document.createElement("tr");
  let firstTd = document.createElement("td");
  firstTd.innerHTML = nameInput;
  let secondTd = document.createElement("td");
  secondTd.innerHTML = currentTime;
  let ThirdTd = document.createElement("td");
  ThirdTd.innerHTML = `Time Passed - ${formatedYear}:${formatedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  createTr.appendChild(firstTd);
  createTr.appendChild(secondTd);
  createTr.appendChild(ThirdTd);
  let table = document.querySelector("#table-container");
  table.appendChild(createTr);

  let AgainStartData = {
    user1: nameInput,
    againstartTime: currentTime,
    info: `Time Passed - ${formatedYear}:${formatedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`,
  };
  console.log(AgainStartData);
  localStorage.setItem("DataOFAGainStart", JSON.stringify(AgainStartData));
}

function resetTimer() {
  document.getElementById("reset-data").addEventListener("click", function () {
    clearInterval(intervalID);

    document.querySelector("#box5").innerHTML = "00";
    document.querySelector("#box4").innerHTML = "00";
    document.querySelector("#box3").innerHTML = "00";
    document.querySelector("#box2").innerHTML = "00";
    document.querySelector("#box1").innerHTML = "00";

    remainingSeconds = 0;
    totalseconds = 0;

    let start_btn = document.getElementById("startBtn");
    start_btn.disabled = true;
    start_btn.style.cursor = "not-allowed";

    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("reset-data").disabled = true;
    let submit_enable = document.getElementById("submit-time");
    submit_enable.disabled = false;
    submit_enable.style.cursor = "pointer";

    resetBtn.style.cursor = "not-allowed";
    // disableBtn.style.cursor = "pointer";
    disablePause.style.cursor = "not-allowed";

    document.querySelector("#user_name").value = "";
    document.querySelector("#time1").value = "";

    let container = document.getElementById("table-container");
    if (container) {
      container.innerHTML = "";
    }
    localStorage.clear();
  });
}

resetTimer();

window.onload = function () {
  let remaining = localStorage.getItem("remaining");
  let username = localStorage.getItem("username");

  if (remaining && username) {
    let timerof = (document.querySelector(".timer").innerHTML = username);

    startInterval(BigInt(remaining));

    document.getElementById("pauseBtn").disabled = false;
    document.getElementById("pauseBtn").style.cursor = "pointer";

    document.getElementById("reset-data").disabled = false;
    document.getElementById("reset-data").style.cursor = "pointer";

    document.getElementById("submit-time").disabled = true;
    document.getElementById("submit-time").style.cursor = "not-allowed";

    let pauseData = localStorage.getItem("tableDATa");
    let startData = localStorage.getItem("DataOFAGainStart");
    console.log("this is a pause and start Data", pauseData, startData);


  }
};

document.getElementById("openPopup").onclick = function () {
      document.getElementById("popup").style.display = "block";
    }

    document.getElementById("closePopup").onclick = function () {
      document.getElementById("popup").style.display = "none";
    }
