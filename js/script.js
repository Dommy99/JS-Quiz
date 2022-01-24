var startBtn = document.getElementById("start-btn");
var startBtn = document.getElementById("quiz-box");
var questionsCtnEl = document.getElementById("questions-box");
var timerEl = document.getElementById("timer");
// var questionsEl = document.getElementsByClassName("questions");


// var questionsEl = document.createElement("div");
// var btn1 = document.getElementsByClassName("btn1");
// var btn2 = document.getElementsByClassName("btn2");
// var btn3 = document.getElementsByClassName("btn3");
// var btn4 = document.getElementsByClassName("btn4");
// var question = document.createElement("")


// question arrays
var questions = [
  {
    question: "Whatafg a",
    answer1: "asuif",
    answer2: "asdyuigf",
    answer3: "fyaysdg",
    answer4: "dasduioy",
    correctAnswer: "asdyuigf",
  },

  {
    question: "Whatafg a",
    answer1: "asuif",
    answer2: "asdyuigf",
    answer3: "fyaysdg",
    answer4: "dasduioy",
    correctAnswer: "asdyuigf",
  },
  {
    question: "Whatafg a",
    answer1: "asuif",
    answer2: "asdyuigf",
    answer3: "fyaysdg",
    answer4: "dasduioy",
    correctAnswer: "asdyuigf",
  },
];
console.log(questions[0].question);

startBtn.addEventListener("click", startGame);

function startGame() {
  console.log("startgame");

  startBtn.classList.add("hidden");
  questionsCtnEl.classList.remove("hidden");
  countdown();
}

function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = " Time: " + timeLeft;

      timeLeft--;
    } else {
      timerEl.textContent = "Time:";

      clearInterval(timeInterval);
    }
  }, 1000);
}

// btn1.addEventListener("click",)
// btn2.addEventListener("click",)
// btn3.addEventListener("click",)
// btn4.addEventListener("click",)

// function questions() {
  // index i++;

  // var questionsEl = document.createElement("h1");
  // questionsEl.textContent = "hello"
  // console.log(questionsEl.textContent)

  document.getElementsByClassName("questions").innerHTML =
  questions[0].question;


// }

function answers() {

}

function endQuiz() {

}

// click start button
// array of questions + answers then declare the questions   let questions== [{}]
// Timer after start button click (take time for incorrect answers)
// Store user data and high score (whatever is left in the timer is the high score)
