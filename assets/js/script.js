// Game Variables
var score;
var time;
var questionNum;
var questionObject;
var questionSheet;

// Question/Answer arrays
var difficulties = ['Easy', 'Medium', 'Hard'];
var questionSheets = [questionSheetEasy, questionSheetMedium, questionSheetHard];



/* HTML ELEMENTS */

// Nav Bar Elements
var homeTabLinkEl = $("#homeTab");
var highScoresTabLinkEl = $("#highScoresTab");

// Home Tab
var mainEl = $('#main');

// Start Tab Elements
var startTabEl = $('#start');
var quizTitleEl = $('#quizTitle');
var startButton = $('#startButton');

// Game Tab Elements
var gameTabEl = $('#game');
var scoreEl = $('#score');
var timerEl = $('#timer');
var questionNumEl = $('#questionNum');
var questionEl = $('#question');
var answerButtons = [$('#0'), $('#1'), $('#2'), $('#3')];
var correctEl = $('#correct');

// Game End Tab Elements
var gameEndTabEl = $('#gameEnd');
var timeLeftEl = $('#timeLeft');
var finalScoreEl = $('#finalScore');
var submitButton = $('#submit');
var restartButton = $('#restart');
var initialsInputEl = $('#initials');

// High Score Tab Elements
var highScoresTabEl = $("#highScores");
var highScoreListEl = $("#highScoresList");
var backButton = $('#back');



/* TAB SWITCH FUNCTIONS */
var hideTabs = function(){
    startTabEl.css('display', 'none');
    gameTabEl.css('display', 'none');
    gameEndTabEl.css('display', 'none');
    highScoresTabEl.css('display', 'none');
}

var showStartTab = function(){
    homeTabLinkEl.attr("class", "nav-link active");
    highScoresTabLinkEl.attr("class", "nav-link");
    hideTabs();
    mainEl.css('display', 'block');
    startTabEl.css('display', 'block');
}

var showGameTab = function(){
    homeTabLinkEl.attr("class", "nav-link active");
    highScoresTabLinkEl.attr("class", "nav-link");
    hideTabs();
    mainEl.css('display', 'block');
    gameTabEl.css('display', 'block');
}

var showGameEndTab = function(){
    homeTabLinkEl.attr("class", "nav-link active");
    highScoresTabLinkEl.attr("class", "nav-link");
    hideTabs();
    mainEl.css('display', 'block');
    gameEndTabEl.css('display', 'block');
}

var showHighScoreTab = function(){
    homeTabLinkEl.attr("class", "nav-link");
    highScoresTabLinkEl.attr("class", "nav-link active");
    mainEl.css('display', 'none');
    highScoresTabEl.css('display', 'block');
    updateHighScores();
}



/* GAME FUNCTIONS */
var start = function(){
    time = 60;
    score = 0;
    questionNum = 0;
    questionSheet = selectedQuestionSheet;

    correctEl.text("");
    updateScore();
    updateTime();
    showGameTab();
    startTimer();
    newQuestion();
}

var updateTime = function(){
    timerEl.text("Time: " + time.toFixed(1));
}

var updateScore = function(){
    scoreEl.text('Score: ' + score.toFixed(0));
}

var startTimer = function(){
    var timerInterval = setInterval(function() {
        // if timer or game ends, stop timer
        if(time <= 0){
            time = 0;
            endGame();
            clearInterval(timerInterval);
        }
        if(questionNum >= 10){
            clearInterval(timerInterval);
        }

        updateTime();
        time-= 0.1;
    }, 100);
}

var correct = function(){
    score += time * 100
    updateScore();
    correctEl.text("Correct!");
}

var incorrect = function(){
    time -= 10;
    correctEl.text("Incorrect.");
}

// show new question to the screen
var newQuestion = function(){
    if(questionNum >= 10){
        endGame();
        return;
    }
    questionNumEl.text("Question #" + (questionNum + 1));

    questionObject = questionSheet[questionNum];
    questionEl.text(questionObject.question);
    for(var i = 0; i < answerButtons.length; i++){
        answerButtons[i].text(questionObject.answers[i]);
    }
    questionNum++;
}



/* GAME END FUNCTIONS */
var endGame = function(){
    showGameEndTab();

    timeLeftEl.text('Time Left: ' + time.toFixed(1));
    finalScoreEl.text('Final Score: ' + score.toFixed(0));
}

var submitScore = function(){
    if(+initialsInputEl.val().length >= 2 && +initialsInputEl.val().length <= 4){
        var highScoreArray = JSON.parse(localStorage.getItem("highScore"));
        var highScoreObject = {
            "initials": initialsInputEl.val().toUpperCase(),
            "score": score.toFixed(0),
            "difficulty": difficulties[selectedDifficulty]
        }
        highScoreArray.push(highScoreObject);
        highScoreArray.sort(function(a,b){return +b.score - +a.score});
        localStorage.setItem("highScore", JSON.stringify(highScoreArray));
        showHighScoreTab();
    }else{
        alert("Please make initials 2 - 4 characters long");
    }
}



/* HIGH SCORE FUNCTIONS */ 
var updateHighScores = function(){
    var highScores = JSON.parse(localStorage.getItem("highScore"));
    highScoreListEl.html('');
    if(highScores[0] === undefined || highScores[0] === null){
        var listItem = $('<li>');
        listItem.text("No high scores to display!");
        listItem.attr("class", "list-group-item");
        highScoreListEl.append(listItem);
    }else{
        // Display High Scores
        for(var i = 0; i < highScores.length; i++){
            var listItem = $('<li>');
            listItem.text(highScores[i].initials + " - " + highScores[i].score + "  / Difficulty - " + highScores[i].difficulty);
            listItem.attr("class", "list-group-item");
            highScoreListEl.append(listItem);
        }
    }
}




/* ADD EVENT LISTENERS */ 
var difficultyRadioButtons = document.getElementsByName('difficulty');
difficultyRadioButtons[0].checked = true;
var selectedDifficulty;

var checkButtons = function(){
    for(let i = 0; i < difficultyRadioButtons.length; i++){
        if(difficultyRadioButtons[i].checked == true){
            selectedDifficulty = i;
        }
    }
    selectedQuestionSheet = questionSheets[selectedDifficulty];
    quizTitleEl.text(`Code Quiz: ${difficulties[selectedDifficulty]}`);
}
checkButtons();
difficultyRadioButtons.forEach( (x) => x.addEventListener("click", checkButtons));

startButton.on("click", start);

answerButtons.forEach( (x) => x.on("click", function(e){
    if(+x.attr("id") === questionObject.correct){
        correct();
    }else{
        incorrect();
    }
    newQuestion();
}));

submitButton.on("click", submitScore);

restartButton.on("click", showStartTab);

highScoresTabLinkEl.on("click", showHighScoreTab);

backButton.on("click", showStartTab);

homeTabLinkEl.on("click", showStartTab);



// Create array for high scores in local storage, if not already made
if(localStorage.getItem("highScore") === null || localStorage.getItem("highScore") === undefined){
    localStorage.setItem("highScore", JSON.stringify([]));
}