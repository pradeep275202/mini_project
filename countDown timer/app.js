let totalseconds;
let intervalID;
let remainingSeconds;
let gettime = document.getElementById("time1").value;
// let userInput = nameInput
// let userName = document.querySelector("#user_name").value;
// console.log("user name : ",userName)

// console.log("nameInput", nameInput);
let disableBtn = document.getElementById("startBtn");
let disablePause = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("reset-data");

resetBtn.disabled = true;
disableBtn.disabled = true;
disablePause.disabled = true;

resetBtn.style.cursor = "not-allowed"
disableBtn.style.cursor = "not-allowed";
disablePause.style.cursor = "not-allowed";
let nameInput;
function getInput() {
document.querySelector("#submit-time").addEventListener("click", function () {
  nameInput = document.querySelector("#user_name").value;
  // userName = nameInput;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");

  let bigIntNuber = BigInt(minuteInput);
  // let Minutes = Number(bigIntNuber);

  // console.log("userInput", userInput);

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

  // let box1Style = document.querySelector(".box1")
  // box1Style.style.width = "auto"

  // let stylebox1 = box1Style.length
  // console.log(stylebox1)

  // document.getElementById('user_name').value = '';
  // document.getElementById('time1').value = '';

  let disableSubmitBtn = document.getElementById("submit-time");
  disableSubmitBtn.disabled = true;
  disableSubmitBtn.style.cursor = "not-allowed";

  let resetBtn = document.getElementById("reset-data")
  resetBtn.disabled = false;
  resetBtn.style.cursor = "pointer"
  // disableSubmitBtn.style.backgroundColor = 'red';

  startInterval(totalseconds);
  // }
});
}
getInput();
console.log("this is a name input", nameInput);

function startInterval(TotalSeconds) {
  remainingSeconds = TotalSeconds;
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
    

    let formatedYear = years < 10 ? `${years}` : years;
    let fomatedDay = days < 10 ? `0${days}` : days;
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    year.innerHTML = formatedYear;
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
    alert("Are you sure pause the Coutdown");
    afterAlertShow()
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
  disableBtn.style.color = "";
  disableBtn.style.backgroundColor = "";
  enableBtn.style.color = "";
  enableBtn.style.backgroundColor = "";

  let years = Number(remainingSeconds / BigInt(31536000));
  let days = Number((remainingSeconds % BigInt(31536000)) / BigInt(86400));
  let hours = Number((remainingSeconds % BigInt(86400)) / BigInt(3600));
  let minutes = Number((remainingSeconds % BigInt(3600)) / BigInt(60));
  let seconds = Number(remainingSeconds % BigInt(60));

  // let hours = Number(remainingSeconds / BigInt(3600));
  // let minutes = Number((remainingSeconds % BigInt(3600)) / BigInt(60));
  // let seconds = remainingSeconds % BigInt(60);

  // let enable = document.getElementById("pauseBtn");
  // enable.style.cursor = "default";
  // let btnColor = document.getElementById("startBtn");

  // btnColor.style.cursor = "pointer";

  let formatedYear = years < 10 ? `${years}` : years;
  let formatedDays = days < 10 ? `0${days}` : days;
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
  heading.innerHTML = `Timer Name : ${nameInput}`;
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
  h3.innerHTML = `${currentTime} Remaining Time -  year-${formatedYear}: Day-${formatedDays}: Hour-${formattedHours}: Minute-${formattedMinutes}: Second-${formattedSeconds}`;
  secondChild.appendChild(h3);
  parentDiv.appendChild(secondChild);
  document.body.appendChild(parentDiv);
}

function againStartInterval() {
  document.getElementById("startBtn").addEventListener("click", function () {
    alert("Are you sure start again coutDown")
    againStar()
    
  });
}
againStartInterval();
function againStar(){
  startInterval(remainingSeconds);
    let disableBtn = document.getElementById("startBtn");
    let enableBtn = document.getElementById("pauseBtn");
    let btnColor = document.getElementById("startBtn");

    // if(!disableBtn){
    //   disableBtn.style.cursor = "not-allowed"
    // }
    // if(!enableBtn){
    //   enableBtn.style.cursor = "not-allowed"
    // }
    // disableBtn.style.cursor = 'not-allowed';

    // disableBtn.style.cursor = 'not-allowed';
    // enableBtn.style.cursor = 'not-allowed';
    // if(disableBtn = true){
    //   disableBtn.style.cursor ="not-allowed"
    // }disableBtn.style.cursor = "not-allowed";

    disableBtn.disabled = true;
    enableBtn.disabled = false;

    disableBtn.style.cursor = "not-allowed";
    enableBtn.style.cursor = "pointer";

    // btnColor.style.color = "";
    // btnColor.style.pauseBtnbackgroundColor = "";
    // btnColor.style.cursor = "default";
    // let enable = document.getElementById("pauseBtn");
    // enable.style.cursor = "pointer";

    let timePassed = totalseconds - remainingSeconds;

    let days = Number(timePassed / BigInt(86400));
    let hours = Number(timePassed / BigInt(3600));
    let minutes = Number((timePassed % BigInt(3600)) / BigInt(60));
    let seconds = timePassed % BigInt(60);

    let formatedDays = days < 10 ? `0${days}` : days;
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
    heading.innerHTML = `Timer Name : ${nameInput}`;
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
    h3.innerHTML = `${currentTime} Time Passed - ${formatedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    secondChild.appendChild(h3);
    parentDiv.appendChild(secondChild);
    document.body.appendChild(parentDiv);
}

function resetTimer() {
  document.getElementById("reset-data").addEventListener("click", function () {
    // let disableBtn = document.getElementById("startBtn");
    // disableBtn.disabled = true;
    // disableBtn.style.cursor = "not-allowed";
    
    clearInterval(intervalID);
    

    
    document.querySelector("#box5").innerHTML = "00"; 
    document.querySelector("#box4").innerHTML = "00"; 
    document.querySelector("#box3").innerHTML = "00"; 
    document.querySelector("#box2").innerHTML = "00"; 
    document.querySelector("#box1").innerHTML = "00"; 

    
    remainingSeconds = 0;
    totalseconds = 0;

    
    let start_btn = document.getElementById("startBtn")
    start_btn.disabled = true;
    start_btn.style.cursor = "not-allowed"

    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("reset-data").disabled = true;
    let submit_enable =  document.getElementById("submit-time")
    submit_enable.disabled = false;
    submit_enable.style.cursor = "pointer"


    
    resetBtn.style.cursor = "not-allowed";
    // disableBtn.style.cursor = "pointer";
    disablePause.style.cursor = "not-allowed";

    
    document.querySelector("#user_name").value = "";
    document.querySelector("#time1").value = "";
  });
}

resetTimer();