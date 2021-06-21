// set variables

var introDiv = document.querySelector("#intro");
var questionsDiv = document.querySelector("#questions");
var questionIndex = 0;
var gameoverDiv = document.querySelector("#gameover");
var correctDiv = document.querySelector("#correct");
var wrongDiv = document.querySelector("#wrong");
var startBtn = document.querySelector("#startBtn");
var timeLeftSpan = document.querySelector("#timeLeftSpan");
var title = document.querySelector("#title");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

// Set question array in a variable

var questions = [
  {
    q: 'Commonly used data types do NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    a: '3. alerts'
  },
  {
    q: 'The condition in an if/else statement is enclosed within _____:',
    choices: ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
    a: '2. curly brackets'
  },
  {
    q: 'Arrays in JavaScript can be used to store ______:',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    a: '4. all of the above'
  },
  {
    q: 'String values must be enclosed within ______ when being assigned to variables.',
    choices: ['1. commas', '2. quotes', '3. curly brackets', '4. parentheses'],
    a: '2. quotes'
  },
  {
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    a: '4. console.log'
  }
];

var timeRemaining = questions.length * 15; // set starting time left to 75 seconds

// create timer countdown function
function countDown() {
  var timeInterval = setInterval(function () {
    if (timeRemaining > 1) {
      timeLeftSpan.textContent = timeRemaining; // insert time remaining onto HTML page
      timeRemaining--;  // timeRemaining = timeRemaining - 1
    }
    else {
      timeLeftSpan.textContent = "No time left!";
      clearInterval(timeInterval);
      questionsDiv.classList.add("hide");
      gameoverDiv.classList.remove("hide");
    }
  }, 1000);

}

// if (timeRemaining === 0) {
//   clearInterval(pidClock)
//   introDiv.classList.add("hide")  //adding the hide class to make it invisible
//   questionsDiv.classList.remove("hide") // removing the hide class to make it visible
// }
// else (timeRemaining > 0) {
//   introDiv.classList.add("hide")  //adding the hide class to make it invisible
//   questionsDiv.classList.remove("hide") // removing the hide class to make it visible
// }

// create function to load questions into the questions div

function loadQuestion() {
  title.textContent = questions[questionIndex].q;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}


startBtn.addEventListener("click", function () {
  introDiv.classList.add("hide");
  questionsDiv.classList.remove("hide");
  loadQuestion();
  countDown();
});

choice1.addEventListener("click", function () {
  // for (var i = 0; i < questions.length; i++) {
  // grab value of clicked button 
  var buttonchoice = questions[questionIndex].choices[0];
  console.log(buttonchoice);
  // }
  questionIndex++;
  loadQuestion();
  if (
    (buttonchoice === questions[questionIndex].a)
  ) {
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  } else {
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
    timeRemaining = timeRemaining - 10;
  }
});
choice2.addEventListener("click", function () {
  // for (var i = 0; i < questions.length; i++) {
  // grab value of clicked button 
  var buttonchoice = questions[questionIndex].choices[1];
  console.log(buttonchoice);

  // Compare answers
  if (
    (buttonchoice === questions[questionIndex].a)

  ) {
    correctDiv.classList.remove("hide");
  } else {
    wrongDiv.classList.remove("hide");
    timeRemaining = timeRemaining - 10;
  }
  // }
  questionIndex++;
  loadQuestion();
});
choice3.addEventListener("click", function () {
  // for (var i = 0; i < questions.length; i++) {
  // grab value of clicked button 
  var buttonchoice = questions[questionIndex].choices[2];
  console.log(buttonchoice);

  // Compare answers
  if (
    (buttonchoice === questions[questionIndex].a)

  ) {
    correctDiv.classList.remove("hide");
  } else {
    wrongDiv.classList.remove("hide");
    timeRemaining = timeRemaining - 10;
  }
  // }
  questionIndex++;
  loadQuestion();
});
choice4.addEventListener("click", function () {
  // for (var i = 0; i < questions.length; i++) {
  // grab value of clicked button 
  var buttonchoice = questions[questionIndex].choices[3];
  console.log(buttonchoice);
  // Compare answers
  if (
    (buttonchoice === questions[questionIndex].a)

  ) {
    correctDiv.classList.remove("hide");
  } else {
    wrongDiv.classList.remove("hide");
    timeRemaining = timeRemaining - 10;
  }
  // }
  questionIndex++;
  loadQuestion();
});
// clear high scores 
var clearHighScores = document.querySelector("#clearHighScoreBtn");
clearHighScores.addEventListener("click", function () {
  localStorage.clear();
});



