let buttonColors = ['red', 'green', 'blue', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let start = false;
let level = 0;


$(document).keypress(function() {
    if (!start) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }

})


function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);


    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    flushTheButton(randomChosenColor);
    playSound(randomChosenColor);
}

function flushTheButton(color) {
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function pressedButton(name) {
    $('#' + name).addClass('pressed');

    setTimeout(function() {
        $('#' + name).removeClass('pressed');
    }, 100);
}


function playSound(color) {
    let audio = new Audio('./sounds/' + color + '.mp3');
    audio.play();
}

$('.btn').click(function() {
    let userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    pressedButton(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentlevel) {
    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 200);
        $('h1').text("Game Over! Press any key to restart");
    }
}