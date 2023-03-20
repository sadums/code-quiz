var main = $('main');
if(localStorage.getItem("highScore") === undefined){
    localStorage.setItem("highScore", JSON.stringify([]));
}
var difficulties = ['Easy', 'Medium', 'Hard'];


// Question/Answer arrays

var questionSheets = [questionSheetEasy, questionSheetMedium, questionSheetHard];

// Initialize radio buttons

var difficultyRadioBtns = document.getElementsByName('difficulty');
difficultyRadioBtns[0].checked = true;
var selectedDifficulty = 0;
var quizTitleEl = $('#quizTitle');
var selectedQuestionSheet = questionSheets[selectedDifficulty];

var checkButtons = function(){
    for(let i = 0; i < difficultyRadioBtns.length; i++){
        if(difficultyRadioBtns[i].checked == true){
            selectedDifficulty = i;
        }
    }
    selectedQuestionSheet = questionSheets[selectedDifficulty];
    quizTitleEl.text(`Code Quiz: ${difficulties[selectedDifficulty]}`);
}

checkButtons();
difficultyRadioBtns.forEach( (x) => x.addEventListener("click", checkButtons));

// Start

var startCard = $('#start');
var startButton = $('#startButton');

var score;
var time;

var start = function(){
    time = 60;
    score = 0;
    startCard.css('display','none');
    main.html(`
    <div id="start" class="row align-items-md-stretch align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
            <div class="row">
                <h4 class="col-sm-8" id="score">Score: 0</h4>
                <h4 class="col-sm-4" id="timer">Time: </h4>
            </div>
                <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
                <h2 id="questionNum">Question #</h2>
                <p id="question"></p>
                <div class="container vstack gap-3">
                    <button id="0" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button"></button>
                    <button id="1" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button"></button>
                    <button id="2" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button"></button>
                    <button id="3" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button"></button>
                </div>
            </div>
        </div>
    </div>
    `);
    startTimer();
}

startButton.on('click', start);

var startTimer = function(){
    var timerEl = $('#timer');
    var timerInterval = setInterval(function() {
        if(time <= 0){
            timerEl.text("Time: 0");
            time = 0;
            clearInterval(timerInterval);
            endGame();
        }else{
            timerEl.text("Time: " + time.toFixed(1));
        }
        time-= 0.1;
    }, 100);
    startGame();
}

var startGame = function(){
    var scoreEl = $('#score');
    var questionNumEl = $('#questionNum');
    var questionEl = $('#question');
    var buttonEls = [$('#0'), $('#1'), $('#2'), $('#3')];
    var questionNum = 0;
    var questionObject;
    var questionSheet = selectedQuestionSheet;

    // Load new question
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

    var correct = function(){
        score += time * 100
        scoreEl.text('Score: ' + score.toFixed(0));
    }

    var incorrect = function(){
        time -= 10;
    }

    // Question answered function
    buttonEls.forEach( (x) => x.on("click", function(e){
        if(+x.attr("id") === questionObject.correct){
            correct();
        }else{
            incorrect();
        }
        newQuestion();
    }));

    newQuestion();
}

var endGame = function(){
    main.html(
    `<div id="finish" class="row align-items-md-stretch align-items-center justify-content-center">
    <div class="col-md-6">
      <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
        <div class="row">
          <h3 class="col-sm-8" id="finalScore">Final Score: ${score.toFixed(0)}</h3>
          <h5 class="col-sm-4" id="timeLeft">Time Left: ${time.toFixed(1)}</h5>
        </div>
        <p class="my-3">Enter your initials to go on the leaderboard!</p>
        <input type="text" name="" id="initials" class="form-control w-25 my-3" placeholder="Initials here" aria-describedby="helpId">
        <button id="submit" class="btn btn-outline-light text-blue grow mt-2 mr-2" type="button">Submit</button>
        <button id="restart" class="btn btn-outline-light text-blue grow mt-2 mx-5" type="button">Restart</button>
      </div>
    </div>
  </div>`);

  var submitEl = $('#submit');
  var restartEl = $('#restart')
  var initialsInput = $('#initials');



  function restart(){
    main.html(` 
    <div id="start" class="row align-items-md-stretch align-items-center justify-content-center">
    <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
        <h2 id="quizTitle">Code Quiz: ${difficulties[selectedDifficulty]}</h2>
        <p class="my-3">Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
        <button id="startButton" class="btn btn-outline-light text-blue grow mt-2" type="button">Start</button>
        </div>
    </div>
    </div>
    `)
    quizTitleEl = $('#quizTitle');
    startCard = $('#start');
    startButton = $('#startButton');
    startButton.on('click', start);
  }
  

  submitEl.on("click", function(){
    if(+initialsInput.val().length >= 2 && +initialsInput.val().length <= 4){
        var highScoreArray = JSON.parse(localStorage.getItem("highScore"));
        var highScoreObject = {
            "initials": initialsInput.val().toUpperCase(),
            "score": score.toFixed(0),
            "difficulty": difficulties[selectedDifficulty]
        }
        
    
        highScoreArray.push(highScoreObject);
        highScoreArray.sort(function(a,b){return +b.score - +a.score});
        console.log(highScoreArray);
        localStorage.setItem("highScore", JSON.stringify(highScoreArray));
        restart();
        switchHighScorePage();
    }else{
        alert("Please make initials 2 - 4 characters long")
    }
  });

  restartEl.on("click", function(){
    restart();
  });
}


var homePageLink = $("#homePage");
var highScoresPageLink = $("#highScoresPage");
var highScoresPage = $("#highScores")
var highScoreList = $("#highScoresList")

var switchHighScorePage = function(){
    main.css("display", "none");
    highScoresPage.css("display", "block");
    homePageLink.attr("class", "nav-link");
    highScoresPageLink.attr("class", "nav-link active");

    var highScores = JSON.parse(localStorage.getItem("highScore"));
    console.log(highScores);
    highScoreList.html('');
    for(var i = 0; i < highScores.length; i++){
        var listItem = $('<li>');
        listItem.text(highScores[i].initials + " - " + highScores[i].score + "  / Difficulty - " + highScores[i].difficulty);
        listItem.attr("class", "list-group-item");
        highScoreList.append(listItem);
    }
}

var backButton = $('#back');



highScoresPageLink.on("click", switchHighScorePage);

var switchHomePage = function(){
    highScoresPage.css("display", "none");
    main.css("display", "block");
    homePageLink.attr("class", "nav-link active");
    highScoresPageLink.attr("class", "nav-link");
}

backButton.on("click", switchHomePage);

homePageLink.on("click", switchHomePage);
