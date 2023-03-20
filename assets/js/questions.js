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