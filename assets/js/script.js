var main = $('main');
localStorage.setItem("highScore", JSON.stringify([]));
var difficulties = ['Easy', 'Medium', 'Hard'];


// Question/Answer arrays
var questionSheetEasy = [
    {
        question: "What will the following code output: console.log(42);",
        answers: [
            "12",
            "4",
            "24",
            "42"
        ],
        correct: 3
    },
    {
        question: 'What is the purpose of the "if...else" statement in JavaScript?',
        answers: [
            "To define a function",
            "To create a loop",
            "To test a condition and execute code based on the result",
            "None of the above"
        ],
        correct: 2
    },
    {
        question: "What is the output of the following code: console.log(3 < 5);",
        answers: [
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correct: 0
    },
    {
        question: "What is the output of the following code: console.log('Hello, ' + 'world!');",
        answers: [
            "world!",
            "Hello,",
            "SyntaxError",
            "Hello, world!"
        ],
        correct: 3
    },
    {
        question: "Which of the following is the correct way to add a comment in JavaScript?",
        answers: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */",
            "Both A and C are correct"
        ],
        correct: 3
    },
    {
        question: "What is the output of the following code: console.log(5 % 2);",
        answers: [
            "2",
            "3",
            "2.5",
            "1"
        ],
        correct: 3
    },
    {
        question: "What is the output of the following code: console.log('hello'.toUpperCase());",
        answers: [
            "hello",
            "HELLO",
            "HellO",
            "SyntaxError"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a valid way to write a JavaScript conditional statement?",
        answers: [
            "if x = 5 {}",
            "if (x == 5) {}",
            "if x == 5 then {}",
            "if x == 5;"
        ],
        correct: 1
    },
    {
        question: "Which of the following is not a way to declare a variable in JavaScript?",
        answers: [
            "let",
            "const",
            "var",
            "def"
        ],
        correct: 3
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: [
            "Number",
            "String",
            "Boolean",
            "Array"
        ],
        correct: 3
    }
]

var questionSheetMedium = [
    {
        question: "Which of the following is a way to add an element to the end of an array in JavaScript?",
        answers: [
            "array.push(element)",
            "array.unshift(element)",
            "array.append(element)",
            "array.add(element)"
        ],
        correct: 0
    },
    {
        question: "Which of the following is the correct syntax to declare a JavaScript object?",
        answers: [
            "var myObject = {}",
            "let myObject = ()",
            "const myObject = []",
            "var myObject = ()"
        ],
        correct: 0
    },
    {
        question: 'What does the keyword "this" refer to in JavaScript?',
        answers: [
            "The current function.",
            "The global object.",
            "The object that the function is a method of.",
            "The object that the function was called on."
        ],
        correct: 2
    },
    {
        question: "What is the output of the following code snippet: console.log(typeof null);",
        answers: [
            "null",
            "undefined",
            "object",
            "boolean"
        ],
        correct: 2
    },
    {
        question: 'What does the "slice" method do on an array in JavaScript?',
        answers: [
            "Removes the last element of the array.",
            "Adds an element to the beginning of the array.",
            "Returns a new array with a portion of the original array.",
            "Reverses the order of the elements in the array."
        ],
        correct: 2
    },
    {
        question: 'What is the difference between "let" and "var" in JavaScript?',
        answers: [
            "There is no difference.",
            '"let" declares a block-scoped variable, while "var" declares a function-scoped variable',
            '"var" declares a block-scoped variable, while "let" declares a function-scoped variable.',
            '"let" and "var" are synonyms in JavaScript.'
        ],
        correct: 1
    },
    {
        question: 'What is the difference between "null" and "undefined" in JavaScript?',
        answers: [
            "There is no difference.",
            '"null" represents an intentional absence of any object value, while "undefined" represents a variable that has not been assigned a value.',
            '"null" represents a variable that has not been assigned a value, while "undefined" represents an intentional absence of any object value.',
            '"undefined" is a keyword in JavaScript, while "null" is not.'
        ],
        correct: 1
    },
    {
        question: 'What is the difference between "map" and "forEach" methods in JavaScript?',
        answers: [
            "There is no difference.",
            '"map" creates a new array with the results of calling a function on each element in the array, while "forEach" executes a function for each element in the array without returning a new array.',
            '"forEach" creates a new array with the results of calling a function on each element in the array, while "map" executes a function for each element in the array without returning a new array.',
            '"map" and "forEach" are synonyms in JavaScript.'
        ],
        correct: 1
    },
    {
        question: 'What does the "continue" keyword do in a loop in JavaScript?',
        answers: [
            "Exits the loop.",
            "Skips the current iteration of the loop and goes to the next iteration.",
            "Returns a value from the loop.",
            "Throws an error."
        ],
        correct: 1
    },
    {
        question: "Which of the following is not a valid way to define a function in JavaScript?",
        answers: [
            "function foo() {}",
            "const foo = function() {};",
            "const foo = () => {};",
            "const foo = new Function();"
        ],
        correct: 3
    },
]

var questionSheetHard = [
    {
        question: "Which of the following statements regarding JavaScript event loop is true?",
        answers: [
            "Event loop executes in the same thread as JavaScript code.",
            "Event loop is a separate thread that executes concurrently with the main thread.",
            "Event loop is a synchronous operation.",
            "Event loop executes asynchronously with JavaScript code."
        ],
        correct: 0
    },
    {
        question: "What is the output of the following code: console.log(1 + +'2' + 3);",
        answers: [
            "'123'",
            "6",
            "7",
            "SyntaxError"
        ],
        correct: 1
    },
    {
        question: "What is the output of the following code: console.log(0.1 + 0.2 == 0.3);",
        answers: [
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correct: 1
    },
    {
        question: "Which of the following is the correct syntax to declare a JavaScript generator function?",
        answers: [
            "function* myGenerator() {}",
            "let* myGenerator() {}",
            "const* myGenerator() {}",
            "var* myGenerator() {}"
        ],
        correct: 0
    },
    {
        question: "Which of the following is the correct way to create a private property in a JavaScript class?",
        answers: [
            "_myProperty",
            "this.myProperty",
            "let myProperty",
            "const myProperty"
        ],
        correct: 0
    },
    {
        question: "What does the 'Promise.all()' method do in JavaScript?",
        answers: [
            "Resolves multiple promises simultaneously and returns an array of their results.",
            "Resolves multiple promises sequentially and returns the first resolved result.",
            "Rejects all promises if any of them are rejected.",
            "None of the above."
        ],
        correct: 0
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            "There is no difference between the two.",
            "'==' checks for equality of value, while '===' checks for equality of value and type.",
            "'===' checks for equality of value, while '==' checks for equality of value and type.",
            "Both '==' and '===' check for equality of value and type."
        ],
        correct: 1
    },
    {
        question: "Which of the following is a valid way to create a new array with a length of 10 in JavaScript?",
        answers: [
            "let myArray = [10];",
            "let myArray = new Array(10);",
            "let myArray = Array(10);",
            "Both B and C are valid."
        ],
        correct: 3
    },
    {
        question: "What is the output of the following code: console.log(typeof typeof 42);",
        answers: [
            "number",
            "string",
            "undefined",
            "SyntaxError"
        ],
        correct: 0
    },
    {
        question: "Which of the following is not a valid JavaScript event listener?",
        answers: [
            "click",
            "keydown",
            "hover",
            "scroll"
        ],
        correct: 2
    },
]

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

    startCard = $('#start');
    startButton = $('#startButton');
    startButton.on('click', start);
  }


  submitEl.on("click", function(){
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
  });

  restartEl.on("click", function(){
    restart();
  });
}


var homePageLink = $("#homePage");
var highScoresPageLink = $("#highScoresPage");
var highScoresPage = $("#highScores")
var highScoreList = $("#highScoresList")


highScoresPageLink.on("click", function(){
    main.css("display", "none");
    highScoresPage.css("display", "block");
    homePageLink.attr("class", "nav-link");
    highScoresPageLink.attr("class", "nav-link active");

    var highScores = JSON.parse(localStorage.getItem("highScore"));
    console.log(highScores);

    
    highScores.forEach
})

homePageLink.on("click", function(){
    highScoresPage.css("display", "none");
    main.css("display", "block");
    homePageLink.attr("class", "nav-link active");
    highScoresPageLink.attr("class", "nav-link");
})