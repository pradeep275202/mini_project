// true = false

let intervalID;
function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");

  let totalseconds = minuteInput * 60;

  if (nameInput == "") {
    alert("please fill the Timer name");
    return false;
  }

  if (minuteInput == "") {
    alert("please fill the Time in the minutes");
    return false;
  }
  if (nameInput >= 0) {
    alert("please fill the in the word");
    return false;
  } else {
    name.innerHTML = nameInput;
  }

  let intervalID;

  function startInterval(totalSeconds) {
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
          console.log("Remaining hours at pause:", hours,minutes,seconds);
          let stop = document.querySelector("#stopTime")
          let formattedHours = hours < 10 ? `0${hours}` : hours;
          let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
          let showhour = document.querySelector("#hou")
          let showsmin = document.querySelector("#min")
          let showsec = document.querySelector("#sec")
          let ak = document.querySelector(".input").value;
          let timername = document.querySelector("#timerName")
          timername.innerHTML=ak 
          showhour.innerHTML = formattedHours;
          showsmin.innerHTML = formattedMinutes;
          showsec.innerHTML = formattedSeconds+1;

         // show stop and start time
         // create the first parent div
          let parentDiv = document.createElement("div")
          
          parentDiv.classList.add('container')
          //  create the first childDiv
          let firstChild = document.createElement('div')
          
          firstChild.classList.add('timer-name')
          let hedding = document.createElement('h3')
          hedding.id='timerName'
          hedding.innerHTML = `Timer Name : ${ak}`
          firstChild.appendChild(hedding)
          parentDiv.appendChild(firstChild)

          // create the second child
          let secondChild = document.createElement('div')
          secondChild.classList.add('stop-time')
          let h3 = document.createElement('h3')
          h3.classList.add('stopTime')
          let  span1= document.createComment('span')
          span1.id='hou'
          
          span1.innerHTML=formattedHours
          let  span2= document.createComment('span')
          span2.id='min'
          span1.innerHTML=formattedMinutes

          let  span3= document.createComment('span')
          span3.id='sec'
          span3.innerHTML=formattedMinutes
          h3.appendChild(span1)
          h3.appendChild(span2)
          h3.appendChild(span3)
          secondChild.appendChild(h3)
          parentDiv.appendChild(secondChild)
          

          // secondChild.appendChild(parentDiv)
          // parentDiv.appendChild(secondChild)



          // document.body.appendChild()
          document.body.appendChild(parentDiv)





          
          
        });
    }
    pauseInterval();
    

    function startButton() {
      document
        .getElementById("startBtn")
        .addEventListener("click", function () {
          console.log("this is a start")
        });
    }
    startButton();

    
  }

  // document.getElementById("startBtn").addEventListener("click", startInterval);
  // document.getElementById("pauseBtn").addEventListener("click", pauseInterval);
  // pauseInterval()

  startInterval(totalseconds);
}







