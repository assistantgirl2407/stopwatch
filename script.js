const timer = document.getElementById("stopwatch");
var min = 0;
var sec = 0;
var msec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    msec = parseInt(msec);
    sec = parseInt(sec);
    min = parseInt(min);

    msec = msec + 1;

    if (msec == 60) {
      sec = sec + 1;
      msec = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      msec = 0;
    }

    if (msec < 10 ) {
      msec = "0" + msec;
    }
    if (sec < 10 ) {
      sec = "0" + sec;
    }
    if (min < 10 ) {
      min = "0" + min;
    }

    timer.innerHTML = min + ":" + sec + ":" + msec;

    setTimeout("timerCycle()", 15);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  min = 0;
  msec = 0;
  sec = 0;
};