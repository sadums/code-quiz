var main = $('main');
var questionNum = '';
var question = '';

var ans1 = 't';
var ans2 = 't';
var ans3 = 't';
var ans4 = 't';

// Initialize radio buttons
var difficultyRadioBtns = document.getElementsByName('difficulty');
difficultyRadioBtns[0].checked = true;
var selectedDifficulty = 0;

var checkButtons = function(){
    for(let i = 0; i < difficultyRadioBtns.length; i++){
        if(difficultyRadioBtns[i].checked == true){
            selectedDifficulty = i;
        }
    }
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
