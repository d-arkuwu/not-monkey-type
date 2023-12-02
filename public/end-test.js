function endTest() {
    userInput.disabled = true; // Disable further input
    calculateResults();
    isTestStarted = false;
    durationSelect.disabled = false;
}

function calculateResults() {
    const typedText = userInput.value;
    const totalChars = totalTypedWords
    const correctChars = totalCorrectWords
    const wpm = (correctChars / 5) / (timeLimit / 60); // Assuming an average of 5 chars per word
    const accuracy = (correctChars / totalChars) * 100;
  
    // Display the results
    displayResults(wpm, accuracy);
  }
  
  function displayResults(wpm, accuracy) {
    accuracyIndicator.textContent = accuracy;
    wpmIndicator.textContent = wpm;
    console.log("WPM: ", wpm);
    console.log("Accuracy: ", accuracy);
  }
  