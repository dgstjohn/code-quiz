function showScores {

    // retrieve existing high scores or set empty array to catch new scores
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    // loop through retrieved scores and display
    highScores.forEach() {
        var showScore = document.createElement("li");
        showScore.textContent = score.initials + ": " + score.score;
        var getScores = document.getElementById("highScoreList");
        getScores.appendChild(showScore);
    }
};

// clear high scores 
var clearHighScores = document.querySelector("#clearHighScoreBtn");

clearHighScores.addEventListener("click", function () {
    localStorage.removeItem("highscores");
});

// call the function
showScores();