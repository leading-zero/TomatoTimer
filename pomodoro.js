let timerInterval;
let timeRemaining;
let pomodoroDuration = 25 * 60; // 25 minutes in seconds

function updateDuration() {
  const minutesInput = document.getElementById('minutes').value;
  const secondsInput = document.getElementById('seconds').value;
  pomodoroDuration = minutesInput * 60 + secondsInput * 1; // convert to seconds
  timeRemaining = pomodoroDuration;
  displayTimeRemaining();
}

function startTimer() {
  timeRemaining = pomodoroDuration;
  displayTimeRemaining();
  timerInterval = setInterval(decreaseTimer, 1000); // decrease the timer every second
}

function stopTimer() {
  clearInterval(timerInterval);
  timeRemaining = pomodoroDuration;
  displayTimeRemaining();
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resumeTimer() {
  timerInterval = setInterval(decreaseTimer, 1000);
}

function displayTimeRemaining() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById('minutes-display').textContent = minutes;
  document.getElementById('seconds-display').textContent = seconds < 10 ? '0' + seconds : seconds;
}

function decreaseTimer() {
  timeRemaining--;
  if (timeRemaining < 0) {
    clearInterval(timerInterval);
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    alert('Time is up!');
  } else {
    displayTimeRemaining();
  }
}

updateDuration();
