var buttonColours = ["red", "blue", "green", "yellow"];

 var gamePattern = [];
 var userCLickedPattern = [];

var started = false;
var level = 0;

function nextSequence() {

level++;
$("#level-title").text("Level " + level);

    var randomNumber = Math.random();
    randomNumber = randomNumber*4;
    randomNumber = Math.floor(randomNumber);

var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userCLickedPattern.push(userChosenColour);
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour){
    $("#" + currentColor).addClass("pressed")
    setTimeout(function (){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$("body").keypress( function(){
if(!started){
    $("#level-title").text("level" + level);
    nextSequence();
    started = true;
}

});

function checkAnswer(currentLevel){

}