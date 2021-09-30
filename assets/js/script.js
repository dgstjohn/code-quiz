// set variables

var introDiv = document.querySelector("#intro"); // checked
var questionsDiv = document.querySelector("#questions");
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
var finalScore = document.querySelector("#finalscore");
var submitInitials = document.querySelector("#submitInitials");
var storeHighScores = [];
var getHighScore = document.querySelector("#highscorelist");
var showHighScore = document.createElement("ul");
var questionIndex = 0; // checked
var timeRemaining = questions.length * 15; // set starting time left to 75 seconds  // checked


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
    a: '3. parentheses'
  },
  {
    q: 'Arrays in JavaScript can be used to store ______:',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    a: '4. all of the above'
  },
  {
    q: 'String values must be enclosed within ______ when being assigned to variables.',
    choices: ['1. quotes', '2. commas', '3. curly brackets', '4. parentheses'],
    a: '1. quotes'
  },
  {
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    a: '4. console.log'
  }
];


// create timer countdown function
function countDown() {
  var timeInterval = setInterval(function () {
    if (timeRemaining > 1 && questionIndex < 5) {
      timeLeftSpan.textContent = timeRemaining; // insert time remaining onto HTML page
      timeRemaining--;  // timeRemaining = timeRemaining - 1
    }
    else if (timeRemaining > 1 && questionIndex === 5) {
      questionsDiv.classList.add("hide");
      gameoverDiv.classList.remove("hide");
      finalScore.textContent = timeRemaining.toString();
    }
    else {
      timeLeftSpan.textContent = "No time left!";
      clearInterval(timeInterval);
      questionsDiv.classList.add("hide");
      gameoverDiv.classList.remove("hide");
      finalScore.textContent = "0";
    }
  }, 1000);
}


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
  var buttonchoice = questions[questionIndex].choices[0];
  if (
    (buttonchoice === questions[questionIndex].a)
  ) {
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  } else {
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
    timeRemaining = timeRemaining - 10;
  };
  questionIndex++;
  if (questionIndex < 5) {
    loadQuestion();
  }
  else {
    questionsDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    correctDiv.classList.add("hide");
    gameoverDiv.classList.remove("hide");
    finalScore.textContent = timeRemaining.toString();
  }
});

choice2.addEventListener("click", function () {
  var buttonchoice = questions[questionIndex].choices[1];
  if (
    (buttonchoice === questions[questionIndex].a)
  ) {
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  } else {
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
    timeRemaining = timeRemaining - 10;
  };
  questionIndex++;
  if (questionIndex < 5) {
    loadQuestion();
  }
  else {
    questionsDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    correctDiv.classList.add("hide");
    gameoverDiv.classList.remove("hide");
    finalScore.textContent = timeRemaining.toString();
  }
});

choice3.addEventListener("click", function () {
  var buttonchoice = questions[questionIndex].choices[2];
  if (
    (buttonchoice === questions[questionIndex].a)
  ) {
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  } else {
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
    timeRemaining = timeRemaining - 10;
  };
  questionIndex++;
  if (questionIndex < 5) {
    loadQuestion();
  }
  else {
    questionsDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    correctDiv.classList.add("hide");
    gameoverDiv.classList.remove("hide");
    finalScore.textContent = timeRemaining.toString();
  }
});
choice4.addEventListener("click", function () {
  var buttonchoice = questions[questionIndex].choices[3];
  if (
    (buttonchoice === questions[questionIndex].a)
  ) {
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  } else {
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
    timeRemaining = timeRemaining - 10;
  };
  questionIndex++;
  if (questionIndex < 5) {
    loadQuestion();
  }
  else {
    questionsDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    correctDiv.classList.add("hide");
    gameoverDiv.classList.remove("hide");
    finalScore.textContent = timeRemaining.toString();
  }
});

submitInitials.addEventListener("click", function(){
  var initials = document.getElementById("initials").value;
  var finalscore = document.getElementById("finalscore").innerHTML;
  var highScoreObj = {
    name: initials,
    score: finalscore
  }
  localStorage.setItem("highscore", JSON.stringify(highScoreObj));
});