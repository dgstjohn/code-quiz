var startBtn = document.querySelector("#startBtn")
var questionsDiv = document.querySelector("#questions")
var introDiv = document.querySelector("#intro")
var TimeLeftSpan = document.querySelector("#TimeLeftSpan")
var initialDiv = document.querySelector("#initialDiv")
var title = document.querySelector("#title")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")


// Set question array in a variable
var questions = [
  {
    q: 'Commonly used data types do NOT include:',
    choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers']
    a: '2'
  },
  {
    q: 'The condition in an if/else statement is enclosed within _____:',
    choices;['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets']
    a: '1' 
  },
  {
    q: 'Arrays in JavaScript can be used to store ______:',
    choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above']
    a: '3'
  },
  {
    q: 'String values must be enclosed within ______ when being assigned to variables.',
    choices: ['1. commas', '2. quotes', '3. curly brackets', '4. parentheses']
    a: '1'
  },
  {
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log']
    a: '3'
  }
];

startBtn.addEventListener("click", function () {
  questionsDiv.classList.remove("hide")
  introDiv.classList.add("hide")
  loadQuestion()
  pidClock = setInterval(countDown, 1000)

})
function loadQuestion() {

  title.textContent = questions[questionIndex].q
  choice1.textContent = questions[questionIndex].choices[0]
  choice2.textContent = questions[questionIndex].choices[1]
  choice3.textContent = questions[questionIndex].choices[2]
  choice4.textContent = questions[questionIndex].choices[3]


}

choice1.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice2.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice3.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})
choice4.addEventListener("click", function () {
  questionIndex++
  loadQuestion()
})

// timer countdown function here

function countDown() {
  if (timeRemaining === 0) {
    clearInterval(pidClock)
    questionsDiv.classList.add("hide")  //adding the hide class to make it invisible
    initialDiv.classList.remove("hide") // removing the hide class to make it visible

  }
  TimeLeftSpan.textContent = timeRemaining
  timeRemaining--  // timeRemaining = timeRemaining-1


}

//---------------LOCAL STORAGE CODE FOR HIGH SCORES------------------

// Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'
// If there is nothing in 'localStorage', sets the 'list' to an empty array

//convert string back to object array
var list = JSON.parse(localStorage.getItem('todolist')) || [];
console.log(list)

// Renders our to-dos to the page
function renderTodos(list) {
  // Empties out the html
  $('#to-dos').empty();

  ///document.qeuerySelection("#to-dos").textContent=""

  // Iterates over the 'list'
  for (var i = 0; i < list.length; i++) {
    // Creates a new variable 'toDoItem' that will hold a "<p>" tag
    // Sets the `list` item's value as text of this <p> element
    var toDoItem = $('<p>');  //document.createElement("p")
    toDoItem.text(list[i]);  // document.querySelector("#to-dos").textContent=list[i]

    // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
    var toDoClose = $('<button>');  //document.createElement("button")
    toDoClose.attr('data-to-do', i);  //toDoClose.setAttribute("data-to-do",i)

    // Gives the button a class called 'checkbox'
    toDoClose.addClass('checkbox');  // toDoClose.classList.add('checkbox')

    // Adds a checkmark symbol as its text value
    toDoClose.text('✓');

    // Adds the button to the `toDoItem`
    toDoItem = toDoItem.prepend(toDoClose);

    // Adds 'toDoItem' to the To-Do List div
    $('#to-dos').append(toDoItem);
  }
}

$('#add-to-do').on('click', function (event) {
  event.preventDefault();

  // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
  // YOUR CODE HERE
  //
  var toDo = $("#to-do").val().trim() //document.querySelector("#to-do").value.trim()



  // Add the new to-do to our local 'list' variable
  // YOUR CODE HERE
  //
  list.push(toDo)

  // Update the to-dos on the page
  // YOUR CODE HERE
  //
  renderTodos(list)
  // Save the to-dos into localStorage
  // We need to use JSON.stringify to turn the list from an array into a string
  // YOUR CODE HERE
  //

  //it takes an object and converts into a string

  localStorage.setItem("todolist", JSON.stringify(list))
  // Clear the textbox when done using `.val()`

  $("#to-do").val("")
  // YOUR CODE HERE
  //
});

$(document).on('click', '.checkbox', function () {
  // Get the `id` of the button from its data attribute and hold in a variable called 'toDoNumber'
  // YOUR CODE HERE
  //
  var index = $(this).attr("data-to-do") //this.getAttribute("data-to-do")
  // Delete the to-do with that `id` from our local `list` using `.splice()`
  // YOUR CODE HERE
  //
  index = parseInt(index)
  list.splice(index, 1)
  renderTodos(list)
  // Update the to-dos on the page
  // YOUR CODE HERE
  //
  // Save the to-dos into localStorage
  // We need to use JSON.stringify to turn the list from an array into a string
  // YOUR CODE HERE
  localStorage.setItem("todolist", JSON.stringify(list))
  //
});

// Renders our to-dos on page load
renderTodos(list);
















// ------------MY STUFF---------------
// pass q string to an h2 
document.querySelector
// pass choice string to a button
document.querySelector(questions[choices]) = "<button>";
// listen for button click
// loop over all the question objects
for (let index = 0; questions < array.length; index++) {
  document.addEventListener('click',)
  var answer = a;
}
// if button clicked matches a, show "Correct!" value in HTML, proceed to next question and rehide correct/wrong block
// if button clicked does not match, reduce timer by 10000 milliseconds, display "Wrong!" value and continue loop
if (
  (answer === [i]])
  )


// set timer to count down from 75 seconds
var timer = setInterval(, 75000);
// pass timer to div based on timer id
document.getElementById("#timer") = "<p>";