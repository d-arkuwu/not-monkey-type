let userInput = document.getElementById("user-input");
let typingTest = document.getElementById("typing-test");


const typingTestParagraph = "Betty decided to write a short story and she was sure it was going to be amazing. She had already written it in her head and each time she thought about it she grinned from ear to ear knowing how wonderful it would be. She could imagine the accolades coming in and the praise she would receive for creating such a wonderful piece. She was therefore extremely frustrated when she actually sat down to write the short story and the story that was so beautiful inside her head refused to come out that way on paper.";
const chars = typingTestParagraph.split("");

let backSpacePressed = false;
let totalTypedWords = 0;
let totalCorrectWords = 0;
let currentIndex = 0;

typingTest.textContent = "";
chars.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.className = "default";
  typingTest.appendChild(span);
});

const spans = typingTest.querySelectorAll("span");

userInput.addEventListener("input", function (event) {
    const typedText = userInput.value;
    console.log("input listener called");
        if (typedText[currentIndex] === typingTestParagraph[currentIndex] && backSpacePressed === false) {
            totalTypedWords++;
            totalCorrectWords++;
            console.log([typedText[currentIndex], typingTestParagraph[currentIndex], typedText]);
            spans[currentIndex].className = "";
            spans[currentIndex].classList.add("correct");
            //spans[currentIndex].classList.add("current-word");
            currentIndex++;
            console.log(currentIndex);
            console.log("Total words: ",totalCorrectWords);
            console.log("Total typed words: ",totalTypedWords);
        } else if (typedText[currentIndex] != typingTestParagraph[currentIndex] && backSpacePressed === false) {
            totalTypedWords++;
            console.log([typedText[currentIndex], typingTestParagraph[currentIndex], typedText]);
            spans[currentIndex].className = "";
            spans[currentIndex].classList.add("wrong");
            currentIndex++;
            console.log(currentIndex);
            console.log("Total words: ",totalCorrectWords);
            console.log("Total typed words: ",totalTypedWords);
        }
    backSpacePressed = false;
});

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        if (currentIndex === 0) {
            totalCorrectWords = 0;
            totalTypedWords = 0;
            backSpacePressed = false;
            currentIndex = 0;
            console.log(currentIndex);
            console.log("Total correct words: ",totalCorrectWords);
            console.log("Total typed words: ",totalTypedWords);
        }
        else if (currentIndex > 0) {
            totalTypedWords--;
            backSpacePressed = true;
            console.log("Called keydown for backspace");
            currentIndex--;
            if(spans[currentIndex].className === "correct")
            {
                totalCorrectWords--;
            }
            spans[currentIndex].classList = "";
            spans[currentIndex].classList.add("default");
            console.log(currentIndex);
            console.log("Total correct words: ",totalCorrectWords);
            console.log("Total typed words: ",totalTypedWords);
        }
    }
});

userInput.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Backspace') {
      event.preventDefault();
    }
  });




