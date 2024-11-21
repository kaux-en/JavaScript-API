const endTime = new Date('00:00:00')
let duration = parseInt(prompt("Enter duration in seconds:"));


function timeRemaining(duration) {
    const seconds = duration % 60;
    return seconds;
}


function startTimer() {
    const timerDisplay = document.getElementById('timer');
    const interval = setInterval(function () {
      timerDisplay.textContent = timeRemaining(duration);
      console.log("Current Time:", timeRemaining(duration));
  
      duration -= 1;
  
      if (duration < 0) {
        clearInterval(interval);
        console.log("Time's Up!");
        timerDisplay.textContent = "00:00";
      }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", startTimer);

function notificationDelay(delay) {
    setTimeout(() => {
        if (timeRemaining(duration) == delay) {
            alert("Time's Almost Up!")
        }
    }, delay);
};

function repeatNotifications(callback) {
    return callback;
}

repeatNotifications(notificationDelay(8000));
