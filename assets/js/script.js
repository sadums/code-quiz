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
    startCard.css('display','none');
    console.log("Started");
})
