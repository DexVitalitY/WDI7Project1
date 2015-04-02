$(document).ready(function(){
// TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA
var one = $('#one');
var two = $('#two');
var three = $('#three');
var four = $('#four');
var five = $('#five');
var six = $('#six');
var seven = $('#seven');
var eight = $('#eight');
var nine = $('#nine');

var oneV = $('#one').text();
var twoV = $('#two').text();
var threeV = $('#three').text();
var fourV = $('#four').text();
var fiveV = $('#five').text();
var sixV = $('#six').text();
var sevenV = $('#seven').text();
var eightV = $('#eight').text();
var nineV = $('#nine').text();
var whoPlayerTemp = 0;

var playerOneWins = 0;
var playerTwoWins = 0;
var numTies = 0;
var whoPlayer;
// TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA

var starWars = "Star Wars";
var starTrek = "Star Trek";
var timerOn;
var foo; 

var playerOne;
var playerTwo;
whoPlayer = "playerOne"; //FIRST PLAYER ALWAYS PLAYER ONE AT START THEN CHANGES.
var currentPlayerTemp = '#'+ whoPlayer;
var currentPlayer = $(currentPlayerTemp);


var timeLeft = 10;

var computerWins = 0; 

function changePlayer() {
  if (whoPlayer === "playerOne") {
    whoPlayer = "playerTwo";
  } else if (whoPlayer === "playerTwo") {
    whoPlayer = "playerOne";
  }
}

function resetTimer() {
  clearInterval(foo);
  timeLeft = 10;
  $('#timeLeft').text("10");
}

function timerReset() {
  timerOn = false; 
}

function currentP () {
  $('#currentP').text(whoPlayer)
}
//button variables for OnClick -- Simplify After Functionality
$('#one').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    one.text('Star Wars');
  } else {
    one.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#two').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    two.text('Star Wars');
  } else {
    two.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#three').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    three.text('Star Wars');
  } else {
    three.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#four').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    four.text('Star Wars');
  } else {
    four.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#five').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    five.text('Star Wars');
  } else {
    five.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#six').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    six.text('Star Wars');
  } else {
    six.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#seven').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    seven.text('Star Wars');
  } else {
    seven.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#eight').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    eight.text('Star Wars');
  } else {
    eight.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});
$('#nine').bind('click', function() {
  $(this).unbind('click');
  if (whoPlayer === "playerOne") {
    nine.text('Star Wars');
  } else {
    nine.text('Star Trek');
  }
  timerReset();
  resetTimer();
  changePlayer();
  getInput();
  checkWin();
  checkTie();
  currentP();
  resetOne();
});

// INEFFICIENT Way to REBIND BUTTONS?

      function reBind() {
        $('#one').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          one.text('Star Wars');
        } else {
          one.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#two').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          two.text('Star Wars');
        } else {
          two.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#three').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          three.text('Star Wars');
        } else {
          three.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#four').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          four.text('Star Wars');
        } else {
          four.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#five').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          five.text('Star Wars');
        } else {
          five.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#six').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          six.text('Star Wars');
        } else {
          six.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#seven').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          seven.text('Star Wars');
        } else {
          seven.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#eight').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          eight.text('Star Wars');
        } else {
          eight.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      $('#nine').bind('click', function() {
        $(this).unbind('click');
        if (whoPlayer === "playerOne") {
          nine.text('Star Wars');
        } else {
          nine.text('Star Trek');
        }
        timerReset();
        resetTimer();
        changePlayer();
        getInput();
        checkWin();
        checkTie();
        currentP();
        resetOne();
      });
      }

function getInput(){

  one = $('#one');
  two = $('#two');
  three = $('#three');
  four = $('#four');
  five = $('#five');
  six = $('#six');
  seven = $('#seven');
  eight = $('#eight');
  nine = $('#nine');

  oneV = $('#one').text();
  twoV = $('#two').text();
  threeV = $('#three').text();
  fourV = $('#four').text();
  fiveV = $('#five').text();
  sixV = $('#six').text();
  sevenV = $('#seven').text();
  eightV = $('#eight').text();
  nineV = $('#nine').text();

}

function checkWin(){
  //ROW WIN CONDITIONS
if (oneV === twoV && twoV === threeV && oneV === threeV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
  console.log(whoPlayerTemp);
    if (whoPlayerTemp === "playerOneWins") {
    playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  } else if (fourV === fiveV && fourV === sixV && fiveV === sixV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  } else if (sevenV === eightV && sevenV === nineV && eightV === nineV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  //COLUMN WIN CONDITIONS
  } else if (oneV === fourV && oneV === sevenV && fourV === sevenV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  } else if (twoV === fiveV && twoV === eightV && fiveV === eightV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  } else if (threeV === sixV && threeV === nineV && sixV === nineV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  //CROSS WIN CONDITIONS
  } else if (oneV === fiveV && oneV === nineV && fiveV === nineV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  } else if (threeV === fiveV && threeV === sevenV && fiveV === sevenV) {
  console.log('WINNER');
  whoPlayerTemp = (whoPlayer+'Wins');
    if (whoPlayerTemp === "playerOneWins") {
      playerOneWins += 1;
    } else {
      playerTwoWins +=1;
    }
    resetBoard();
  }
  $('#p2Score').text(playerTwoWins);
  $('#p1Score').text(playerOneWins);
  bestOfFiveWinner();
} 

function checkTie() {
  getInput();
  if ((oneV === starWars || oneV === starTrek) && 
    (twoV === starWars || twoV === starTrek) &&
    (threeV === starWars || threeV === starTrek) &&
    (fourV === starWars || fourV === starTrek) &&
    (fiveV === starWars || fiveV === starTrek) &&
    (sixV === starWars || sixV === starTrek) &&
    (sevenV === starWars || sevenV === starTrek) &&
    (eightV === starWars || eightV === starTrek) &&
    (nineV === starWars || nineV === starTrek)) {
    console.log('THIS IS A TIE')
    numTies ++;
    $('#tieScore').text(numTies);
    resetBoard();
  }
} 


function bestOfFiveWinner() {
  if (playerOneWins === 5 || playerTwoWins === 5) {
    if (playerOneWins === 5) {
      alert('STAR TREK WINS');
      timerReset();   
      resetGame();  
      resetBoardStarTrek();
    } else if (playerTwoWins === 5) {
      alert('STAR WARS WINS');
      timerReset();
      resetGame();
      resetBoardStarWars();
    }
  }
}


//RESET FUNCTION! JUST NEEDS TO WORK, REFACTOR LATER

function resetBoardStarTrek() {
  $('#one').text('1');
  $('#two').text('Live');
  $('#three').text('3');
  $('#four').text('4');
  $('#five').text('Long');
  $('#six').text('6');
  $('#seven').text('And');
  $('#eight').text('Prosper');
  $('#nine').text('-RIP Nimoy');
  whoPlayer = "playerOne";
  numTies = 0;
  $('#tieScore').text(numTies);
  reBind();
  resetOne();
  }

function resetBoardStarWars() {
  $('#one').text('1');
  $('#two').text('May');
  $('#three').text('3');
  $('#four').text('The');
  $('#five').text('Force');
  $('#six').text('6');
  $('#seven').text('Be');
  $('#eight').text('With');
  $('#nine').text('You');
  whoPlayer = "playerOne";
  numTies = 0;
  $('#tieScore').text(numTies);
  reBind();
  resetOne();
  }

function resetBoard() {
  $('#one').text('1');
  $('#two').text('2');
  $('#three').text('3');
  $('#four').text('4');
  $('#five').text('5');
  $('#six').text('6');
  $('#seven').text('7');
  $('#eight').text('8');
  $('#nine').text('9');
  whoPlayer = "playerOne";
  reBind();
  resetOne();
  }


$('#resetGame').click(function() {
  timerReset(); 
  resetTimer();
  resetGame();
  resetBoard();
});

function resetGame() {
  clearInterval(foo);
  timeLeft = 10;
  $('#timeLeft').text("10");
  playerOneWins = 0;
  playerTwoWins = 0;
  $('#p1Score').text("0");
  $('#p2Score').text("0");
}

function resetOne () {
  // $('.box').unbind('click').one('click', function() {
    if (timerOn !== true) {
     foo = setInterval(function(){
        if (timeLeft > 0) { 
          timeLeft -= 1;
          } else {
          clearInterval(foo);
          changePlayer();
          }
          $('#timeLeft').text(timeLeft);
        }, 1000);
    timerOn = true;
    }
  // });
}

$('.box').one('click', function() {
  if (timerOn !== true) {
     foo = setInterval(function(){
        if (timeLeft > 0) { 
          timeLeft -= 1;
          } else {
          clearInterval(foo);
          changePlayer();
          }
          $('#timeLeft').text(timeLeft);
        }, 1000);
    timerOn = true;
    }
});


});