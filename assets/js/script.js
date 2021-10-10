// set variables
var questionIndex = 0; // checked
var introDiv = document.querySelector("#intro");
var questionsDiv = document.getElementById("questions");
var correctDiv = document.querySelector("#correct");
var wrongDiv = document.querySelector("#wrong");
var gameoverDiv = document.querySelector("#gameover");
var finalScore = document.querySelector("#finalscore");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");
var startBtn = document.querySelector("#startBtn"); // checked
var submitBtn = document.querySelector("#submitInitials"); // checked

// set time-related variables
var timeInterval;
var timeRemaining = 75; // set starting time left to 75 seconds  // checked
var timeLeftSpan = document.getElementById("timeLeftSpan"); //checked

// set question array in a variable
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
  questionsDiv.removeAttribute("class");
  // start timer
  timeInterval = setInterval(countDown, 1000)
  // run questions function
  loadQuestion();
};

// create function to load questions into the questions div
function loadQuestion() {
  var showQuestion = questions[questionIndex];
  titleEl.textContent = showQuestion.q;
  choicesEl.innerHTML = "";
  // display choices
  showQuestion.choices.forEach(function (choice, i) {
    // make a button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    // show buttons on page
    choiceButton.textContent = choice;
    // make buttons clickable
    choiceButton.onclick = clickForAnswer;
    choicesEl.appendChild(choiceButton);
  })
};

// create function to evaluate answer
function clickForAnswer() {
  // deduct 15 second if wrong answer
  if (this.value !== questions[questionIndex].a) {
    timeRemaining -= 10;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }
    // display time deduction
    timeLeftSpan.textContent = timeRemaining;
    // show "Wrong!" response to user
    wrongDiv.removeAttribute("class");
    correctDiv.setAttribute("class", "hide");
  }
  else {
    // show "Correct!" answer to user
    correctDiv.removeAttribute("class");
    wrongDiv.setAttribute("class", "hide");
  };
  // increment questionIndex by 1
  questionIndex++;

  // if that was the last question,go to endOfQuiz function
  if (questionIndex === questions.length) {
    endOfQuiz();
  }
  // otherwise, go to next question in loadQuestion function
  else {
    loadQuestion();
  }
}

function endOfQuiz() {
  // stop the timer
  clearInterval(timeInterval);
  // switch from questions page to end of quiz page and clear correct/wrong divs
  questionsDiv.setAttribute("class", "hide");
  gameoverDiv.removeAttribute("class");
  correctDiv.setAttribute("class", "hide");
  wrongDiv.setAttribute("class", "hide");
  // display the final score
  finalScore.textContent = timeRemaining;
};

function saveScore() {
  // grab initials
  var initials = initialsEl.value;
  // either get existing high scores from localStorage or create a new array to hold them
  if (initials !== "") {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    // create the new saved name/score pair
    var highScoreObj = {
      score: timeRemaining,
      name: initials      
    };
    // push new final score to high scores array
    highscores.push(highScoreObj);
    // move the revised high scores array to localStorage
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // go to the high scores page
    window.location.href = "highscores.html";
  }
};

// create timer countdown function
function countDown() {
  timeRemaining--;  // timeRemaining = timeRemaining - 1
  timeLeftSpan.textContent = timeRemaining;
  if (timeRemaining <= 0) {
    endOfQuiz();
  }
};

// save scores
submitBtn.onclick = saveScore;

// call start function
startBtn.onclick = startOfQuiz;


