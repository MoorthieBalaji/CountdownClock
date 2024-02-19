let timerInterval;
let timeInSeconds = 0; // Set initial time to 0 for 00:00:00

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("startButton").disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("startButton").disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeInSeconds = 0; // Reset the time to 0 for 00:00:00
    updateTimerDisplay();
    document.getElementById("startButton").disabled = false;
}

function updateTimer() {
    timeInSeconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    document.getElementById("timer").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);

updateTimerDisplay();
