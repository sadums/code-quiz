var main = $('main');
var difficulties = ['Easy', 'Medium', 'Hard', 'Impossible'];

var questionNum = '4';
var question = 'This is a test';

var ans1 = 'test';
var ans2 = 'test';
var ans3 = 'test';
var ans4 = 'test';


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
        question: "",
        answers: [
            "",
            "",
            "",
            ""
        ],
        correct: 0
    },

]
// Initialize radio buttons
var difficultyRadioBtns = document.getElementsByName('difficulty');
difficultyRadioBtns[0].checked = true;
var selectedDifficulty = 0;
var quizTitleEl = $('#quizTitle');

var checkButtons = function(){
    for(let i = 0; i < difficultyRadioBtns.length; i++){
        if(difficultyRadioBtns[i].checked == true){
            selectedDifficulty = i;
        }
    }
    quizTitleEl.text(`Code Quiz: ${difficulties[selectedDifficulty]}`)
}

checkButtons();
difficultyRadioBtns.forEach( (x) => x.addEventListener("click", checkButtons));

// Start

var startCard = $('#start');
var startButton = $('#startButton');

startButton.on('click', function(){
    startTimer();
    startCard.css('display','none');
    main.html(`
    <div id="start" class="row align-items-md-stretch align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
            <div class="row">
                <h4 class="col-sm-10">Score: </h4>
                <h4 class="col-sm-2">Time: </h4>
            </div>
                <div class="h-100 p-5 text-white bg-dark border rounded-3 shadow">
                <h2>Question #${questionNum}</h2>
                <p>${question}</p>
                <div class="container vstack gap-3">
                    <button id="0" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button">${ans1}</button>
                    <button id="1" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button">${ans2}</button>
                    <button id="2" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button">${ans3}</button>
                    <button id="3" class="btn btn-outline-light text-blue grow d-flex justify-content-start align-items-center" type="button">${ans4}</button>
                </div>
            </div>
        </div>
    </div>
    `);
});

var startTimer = function(){
    var timerInterval = setInterval(function() {
        
    }, 1000);
}
