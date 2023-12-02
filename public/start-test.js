let displayTimer = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let durationSelect = document.getElementById('durationSelect');
let wpmIndicator = document.getElementById("wpm");
let accuracyIndicator = document.getElementById("accuracy");

let timeLimit;// 10 seconds for the test
let timer;
let timeRemaining;

let isTestStarted = false;

function startTest() {
    if (isTestStarted === false) {
        timeLimit = parseInt(durationSelect.value);
        timeRemaining = timeLimit;
        isTestStarted = true;
        userInput.focus();
        durationSelect.disabled = true;
        accuracyIndicator.textContent = '-';
        wpmIndicator.textContent = "-";
        startTimer();
    }
}

function startTimer() {
    timer = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            endTest();
        }
        displayTimer.textContent = timeRemaining;
    }, 1000);
}

//test will start when the user clicks the "Start Test" button
startButton.addEventListener("click", startTest);

durationSelect.addEventListener('change', function() {
    const selectedDuration = this.value;
    displayTimer.textContent = selectedDuration;
  });