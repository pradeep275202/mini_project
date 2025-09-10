// let name  = prompt("please enter the name")
// let minutes = prompt("plase enter the time")

// function convertMinutes(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minutres = Math.floor(minutes % 60);
//   const seconds = Math.floor((minutes % 1) * 60);

//   let a = document.querySelector("#box1");
//   let b = document.querySelector("#box2");
//   let c = document.querySelector("#box3");
//   let countTimer = document.querySelector(".timer");
//   let getInput = document.querySelector = (".name");
//   console.log(getInput)

//   a.innerHTML = hours;
//   b.innerHTML = minutres;
//   c.innerHTML = seconds;
// }

// const result = convertMinutes(45256);
// console.log(result);

// function getInput() {
//   var name = document.getElementById("count").value;
//   var time = document.getElementById("time").value;

//   let countDown = document.querySelector(".timer");
//   countDown.innerHTML = name;
//   console.log(name);
//   console.log(time);
//   updatTime();

// }

//   function updatTime() {
//     var hours = Math.floor(time / 60);
//     var minutres = Math.floor(time % 60);
//     var seconds = Math.floor((time % 1) * 60);
//     console.log("check the number", time);
//     console.log(hours, minutres, seconds);
//     console.log(minutres);
//     console.log(seconds);
//   }

function getInput() {
  let nameInput = document.querySelector("#user_name").value;
  let minuteInput = document.querySelector("#time1").value;
  let name = document.querySelector(".timer");
  name.innerHTML = nameInput;

  let totalseconds = minuteInput * 60;

  // if (nameInput) {
  //   alert("please fill the name input");
  // }

  // if (totalseconds == 0) {
  //   alert("please fill the minute input");
  //   return;
  // }

  function startCountdown(totalSeconds) {
    let count = setInterval(() => {
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      let hour = document.querySelector("#box1");
      let minute = document.querySelector("#box2");
      let second = document.querySelector("#box3");

      // hour.innerHTML = hours;
      // minute.innerHTML = minutes;
      // second.innerHTML = seconds;

      // if(hour.legth)

      // let a  = [hour,minute,second]
      // a.forEach(element => {
      //   if(element.length==1){
      //     `0 ${hour.innerHTML = hours} 0 ${minute.innerHTML = minutes} 0${second.innerHTML= seconds}`

      //   }
      // });

      // let timeArray = [hours,minutes,seconds]; 


      // let formattedTimeArray = timeArray.map((time) =>
      //   time < 10 ? `0${time} `  :time
      // );

      
      // let hours = 5;
      // let minutes = 9;
      // let seconds = 12;


let formattedHours = hours < 10 ? `0${hours}` : hours;
let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;


console.log(formattedHours);   
console.log(formattedMinutes); 
console.log(formattedSeconds); 

hour.innerHTML = formattedHours;
minute.innerHTML = formattedMinutes;
second.innerHTML = formattedSeconds;

      // console.log(hours, minutes, seconds);

      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(count);
        console.log("Countdown finished");
      }
    }, 1000);
  }
  startCountdown(totalseconds);
}

// let button = document.getElementById("pauseBtn")
// button.addEventListener("clcik", function() {
//   // clearInterval(count);
//   // console.log("pause setInterval");
//   alert("you clicked")
// });

let button = document.querySelector("#pauseBtn");
button.addEventListener("click", function () {
  clearInterval(count);
  alert("this is a not run");
});
