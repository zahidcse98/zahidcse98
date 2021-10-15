let buttonColors = ['red', 'green', 'blue', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    flushTheButton(randomChosenColor);
    playSound(randomChosenColor);
}

function flushTheButton(color) {
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(color) {
    let audio = new Audio('./sounds/' + color + '.mp3');
    audio.play();
}

$('.btn').click(function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    flushTheButton(userChosenColor);
    playSound(userChosenColor);
})