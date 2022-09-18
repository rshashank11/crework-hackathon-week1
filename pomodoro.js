var heading = document.querySelector("#heading");


var startingTime = 3;
var mins = startingTime;
var sec = 0;
var intervalId = 0;
var counter = 0;



var time = mins * 60;


function pom() {
    if (time === 0) {
        counter++;
        if (counter <= 4) {
            shortBreak();
        } else {
            longBreak();
        }
    } else {
        mins = Math.floor(time / 60);
        sec = time % 60;
        time--;
        mins = String(mins).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        document.getElementById('time').innerText = `${mins} : ${sec}`;
    }
}


function shortBreak() {
    heading.innerText = "Short Break";
    startingTime = 1;
    mins = startingTime;
    sec = 0;
    time = mins * 60;
    mins = Math.floor(time / 60);
    sec = time % 60;
    time--;
    mins = String(mins).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    document.getElementById('time').innerText = `${mins} : ${sec}`;
}

function longBreak() {
    startingTime = 2;
    mins = startingTime;
    sec = 0;
    time = mins * 60;
    mins = Math.floor(time / 60);
    sec = time % 60;
    time--;
    mins = String(mins).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    document.getElementById('time').innerText = `${mins} : ${sec}`;
}

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(pom, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    startingTime = 3;
    mins = startingTime;
    sec = 0;
    time = mins * 60;
    mins = String(mins).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    document.getElementById('time').innerText = `${mins} : ${sec}`;
}