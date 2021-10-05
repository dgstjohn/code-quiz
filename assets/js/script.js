// set variables

var introDiv = document.querySelector("#intro"); // checked
var questionsDiv = document.querySelector("#questions"); // checked
var gameoverDiv = document.querySelector("#gameover");
var correctDiv = document.querySelector("#correct");
var wrongDiv = document.querySelector("#wrong");
var startBtn = document.querySelector("#startBtn"); // checked
var timeLeftSpan = document.querySelector("#timeLeftSpan"); //checked
var title = document.querySelector("#title");
var finalScore = document.querySelector("#finalscore");
var submitInitials = document.querySelector("#submitInitials"); // checked
var getHighScore = document.querySelector("#highscorelist");
var showHighScore = document.createElement("ul");
var questionIndex = 0; // checked
var timeInterval;


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
    q: 'String values must be enclosed within ______ when being assigned to variables:',
    choices: ['1. quotes', '2. commas', '3. curly brackets', '4. parentheses'],
    a: '1. quotes'
  },
  {
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    a: '4. console.log'
  }
];

// switch from intro page to questions page
function startOfQuiz() {
  introDiv.setAttribute("class", "hide");
  questionsDiv.removeAttribute("class", "hide");
  // start timer
  timeInterval = setInterval(countDown, 1000)
  // run questions function
  loadQuestion();
}

// create timer countdown function
function countDown() {
  var timeRemaining = 75; // set starting time left to 75 seconds  // checked
  timeRemaining--;  // timeRemaining = timeRemaining - 1
  timeLeftSpan.textContent = timeRemaining;
  if (timeRemaining <= 0) {
    endOfQuiz();
  }
}


// create function to load questions into the questions div
function loadQuestion() {
  var showQuestion = questions(questionIndex);
  title.textContent = showQuestion.title;
  // display choices
  for (i = 0; i < questions[choices].length; index++) {
    // make a button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("id", "choice");
    choiceButton.setAttribute("value", choices);
    choiceButton.textContent = i + 1 + ": " + choiceButton;
    choiceButton.addEventListener("click", function () {
      clickForAnswer
    })
  }
};

// create function to evaluate answer
function clickForAnswer() {
  // deduct 15 second if wrong answer
  if (this.value !== questions[questionIndex].a) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }
    // display time deduction
    timeLeftSpan.textContent = time;
    // show "Wrong!" response to user
    wrongDiv.classList.remove("hide");
    correctDiv.classList.add("hide");
  }
  else {
    // show "Correct!" answer to user
    correctDiv.classList.remove("hide");
    wrongDiv.classList.add("hide");
  }
  // increment questionIndex by 1
  questionIndex++;
  // if that was the last question,go to endOfQuiz function
  if (questionIndex === questions.length) {
    endOfQuiz();
  }
  // otherwise go to next question in loadQuestion function
  else {
    loadQuestion();
  }
}

function endOfQuiz () {
  // stop the timer
  clearInterval(timeInterval);
  // switch from questions page to end of quiz page
  questionsDiv.setAttribute("class", "hide");
  gameoverDiv.removeAttribute("class", "hide");
  // display the final score
  finalScore.textContent = timeRemaining;
}

submitInitials.addEventListener("click", function () {
  var initials = document.getElementById("initials").value;
  var finalscore = document.getElementById("finalscore").innerHTML;
  var highScoreObj = {
    name: initials,
    score: finalscore
  }
  localStorage.setItem("highscore", JSON.stringify(highScoreObj));
});

// call start function
startBtn.addEventListener("click", startOfQuiz());
