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
var homeTabLink = $("#homeTab");
var highScoresTabLink = $("#highScoresTab");

// Home Screen
var main = $('#main');

// Start Screen Elements
var startScreen = $('#start');
var quizTitleEl = $('#quizTitle');
var startButton = $('#startButton');

// Game Screen Elements
var gameScreen = $('#game');
var scoreEl = $('#score');
var timerEl = $('#timer');
var questionNumEl = $('#questionNum');
var questionEl = $('#question');
var buttonEls = [$('#0'), $('#1'), $('#2'), $('#3')];

// Game End Screen Elements
var gameEndScreen = $('#finish');
var timeLeftEl = $('#timeLeft');
var finalScoreEl = $('#finalScore');
var submitEl = $('#submit');
var restartEl = $('#restart');
var initialsInput = $('#initials');

// High Score Screen Elements
var highScoresTab = $("#highScores");
var highScoreList = $("#highScoresList");
var backButton = $('#back');



/* TAB SWITCH FUNCTIONS */
var hideTabs = function(){
    startScreen.css('display', 'none');
    gameScreen.css('display', 'none');
    gameEndScreen.css('display', 'none');
    highScoresTab.css('display', 'none');
}

var showStartTab = function(){
    hideTabs();
    main.css('display', 'block');
    startScreen.css('display', 'block');
}

var showGameTab = function(){
    hideTabs();
    main.css('display', 'block');
    gameScreen.css('display', 'block');
}

var showGameEndTab = function(){
    hideTabs();
    main.css('display', 'block');
    gameEndScreen.css('display', 'block');
}

var showHighScoreTab = function(){
    homeTabLink.attr("class", "nav-link");
    highScoresTabLink.attr("class", "nav-link active");
    main.css('display', 'none');
    highScoresTab.css('display', 'block');
    updateHighScores();
}



/* GAME FUNCTIONS */
var updateTime = function(){
    timerEl.text("Time: " + time.toFixed(1));
}
var updateScore = function(){
    scoreEl.text('Score: ' + score.toFixed(0));
}

var startTimer = function(){
    var timerInterval = setInterval(function() {
        if(time <= 0){
            time = 0;
            updateTime();
            clearInterval(timerInterval);
            endGame();
        }else{
            updateTime();
        }
        time-= 0.1;
    }, 100);
}

var start = function(){
    time = 60;
    score = 0;
    questionNum = 0;
    questionSheet = selectedQuestionSheet;

    updateScore();
    updateTime();
    showGameTab();
    startTimer();
    newQuestion();
}

var correct = function(){
    score += time * 100
    updateScore();
}

var incorrect = function(){
    time -= 10;
}

var newQuestion = function(){
    if(questionNum >= 10){
        endGame();
        return;
    }
    questionNumEl.text("Question #" + (questionNum + 1));

    questionObject = questionSheet[questionNum];
    questionEl.text(questionObject.question);
    for(var i = 0; i < buttonEls.length; i++){
        buttonEls[i].text(questionObject.answers[i]);
    }
    questionNum++;
}



/* GAME END FUNCTIONS */
var endGame = function(){

  showGameEndTab();

  timeLeftEl.text('Time Left: ' + time.toFixed(1));
  finalScoreEl.text('Final Score: ' + score.toFixed(0));
  
  console.log("submit set")
}

var submitScore = function(){
    if(+initialsInput.val().length >= 2 && +initialsInput.val().length <= 4){
        var highScoreArray = JSON.parse(localStorage.getItem("highScore"));
        var highScoreObject = {
            "initials": initialsInput.val().toUpperCase(),
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
    highScoreList.html('');
    if(highScores[0] === undefined){
        var listItem = $('<li>');
        listItem.text("No high scores to display!");
        listItem.attr("class", "list-group-item");
        highScoreList.append(listItem);
    }else{
        for(var i = 0; i < highScores.length; i++){
            var listItem = $('<li>');
            listItem.text(highScores[i].initials + " - " + highScores[i].score + "  / Difficulty - " + highScores[i].difficulty);
            listItem.attr("class", "list-group-item");
            highScoreList.append(listItem);
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

buttonEls.forEach( (x) => x.on("click", function(e){
    if(+x.attr("id") === questionObject.correct){
        correct();
    }else{
        incorrect();
    }
    newQuestion();
}));

submitEl.on("click", submitScore);

restartEl.on("click", showStartTab);

highScoresTabLink.on("click", showHighScoreTab);

backButton.on("click", showStartTab);

homeTabLink.on("click", showStartTab);



// Create array for high scores in local storage, if not already made
if(localStorage.getItem("highScore") === null || localStorage.getItem("highScore") === undefined){
    localStorage.setItem("highScore", JSON.stringify([]));
}