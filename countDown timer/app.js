// true = false

let countdownInterval;
function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");

  let totalseconds = minuteInput * 60;

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
  if(minuteInput < 0){
    alert("please fill the positive number")
    return false;
  }
  

  let intervalID;

  function startInterval(totalSeconds) {
    // if (countdownInterval) {
    //     clearInterval(countdownInterval);
    // }

    let intervalID = setInterval(() => {
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      let hour = document.querySelector("#box1");
      let minute = document.querySelector("#box2");
      let second = document.querySelector("#box3");

      let formattedHours = hours < 10 ? `0${hours}` : hours;
      let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      // console.log(formattedHours);
      // console.log(formattedMinutes);
      // console.log(formattedSeconds);

      hour.innerHTML = formattedHours;
      minute.innerHTML = formattedMinutes;
      second.innerHTML = formattedSeconds;

      // console.log(hours, minutes, seconds);

      totalSeconds--;
     

      if (totalSeconds < 0) {
        clearInterval(intervalID);
        console.log("Countdown finished");
      }
    }, 1000);
    // startButton.disabled = true;
    // stopButton.disabled = false;

    // function presetTime(){
    //   let a  = document.querySelector("box1")
    //   a.addEventListener("click",function(event){
    //     console.log("this is a event",event)
    //   })
    //  }
    //  presetTime()

    function pauseInterval() {
      // clearInterval(intervalID)
      // console.log("clear")
      document
        .getElementById("pauseBtn")
        .addEventListener("click", function () {
          clearInterval(intervalID);
          let hours = Math.floor(totalSeconds / 3600);
          let minutes = Math.floor((totalSeconds % 3600) / 60);
          let seconds = totalSeconds % 60;

          console.log("Remaining hours at pause:", hours, minutes, seconds);
          let stop = document.querySelector("#stopTime");
          let formattedHours = hours < 10 ? `0${hours}` : hours;
          let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

          // let showhour = document.querySelector("#hou");
          // let showsmin = document.querySelector("#min");
          // let showsec = document.querySelector("#sec");
          let ak = document.querySelector(".input").value;

          // let timername = document.querySelector("#timerName");

          // timername.innerHTML = ak;
          // showhour.innerHTML = formattedHours;
          // showsmin.innerHTML = formattedMinutes;
          // showsec.innerHTML = formattedSeconds + 1;

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
          console.log("this is a total seconds",totalSeconds)
          // let a = Math.floor(totalSeconds / 3600)
          // let b = Math.floor((totalSeconds % 3600) / 60)
          // let c = totalSeconds % 60 + 1

          // let showH = a < 10 ? `0${hours}` : hours;
          // let showm = b < 10 ? `0${minutes}` : minutes;
          // let shows = c < 10 ? `0${seconds}` : seconds;

          let now = new Date()
          let hou = now.getHours()
          let min = now.getMinutes()
          let sec = now.getSeconds()
          
          let currentTime =`Stop Time ${hou} : ${min} : ${sec}`
          console.log(currentTime)


          h3.innerHTML = `${currentTime}       Remining Time - ${formattedHours}:${formattedMinutes}:${formattedSeconds+1}`;
          
          secondChild.appendChild(h3);
          //append second child in the parent div
          parentDiv.appendChild(secondChild);

          document.body.appendChild(parentDiv);
        });
      // startButton.disabled = false;
      // stopButton.disabled = true;
    }
    pauseInterval();

    // function startButton() {
      
      
    // }
    // startButton();
  }

  // document.getElementById("startBtn").addEventListener("click", startInterval);
  // document.getElementById("pauseBtn").addEventListener("click", pauseInterval);
  // pauseInterval()

  startInterval(totalseconds);
}


