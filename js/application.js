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
var whoPlayer;
// TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA TESTING AREA
$(document).ready(function(){

var starWars = $('#starWarsIcon');
var starTrek = $('#starTrekIcon');
var timerOn;
var foo; 

var playerOne;
var playerTwo;
	whoPlayer = "playerOne"; //FIRST PLAYER ALWAYS PLAYER ONE AT START THEN CHANGES.
var whoPlayerTemp;
var currentPlayerTemp = '#'+ whoPlayer;
var currentPlayer = $(currentPlayerTemp);

// var timer = 2;
var timeLeft = 10;

// var playerOneWins = 0;
// var playerTwoWins = 0;
var computerWins = 0; 
var numTies = 0;

function changePlayer() {
	if (whoPlayer === "playerOne") {
		whoPlayer = "playerTwo";
	} else if (whoPlayer === "playerTwo") {
		whoPlayer = "playerOne";
	}
}

// var one = $('#one');
// var two = $('#two');
// var three = $('#three');
// var four = $('#four');
// var five = $('#five');
// var six = $('#six');
// var seven = $('#seven');
// var eight = $('#eight');
// var nine = $('#nine');

// var oneV = $('#one').text();
// var twoV = $('#two').text();
// var threeV = $('#three').text();
// var fourV = $('#four').text();
// var fiveV = $('#five').text();
// var sixV = $('#six').text();
// var sevenV = $('#seven').text();
// var eightV = $('#eight').text();
// var nineV = $('#nine').text();


function resetTimer() {
	clearInterval(foo);
	timeLeft = 10;
	$('#timeLeft').text("10");
}

function timerReset() {
	// clearInterval(foo);
	timerOn = false; 
}

//button variables for OnClick -- Simplify After Functionality
$('#one').click(function() {
	if (whoPlayer === "playerOne") {
		one.text('Star Wars');
	} else {
		one.text('Star Trek');
	}
	resetTimer();
	timerReset();
	changePlayer();
	getInput();
	checkWin();
});
$('#two').click(function() {
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
});
$('#three').click(function() {
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
});
$('#four').click(function() {
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
});
$('#five').click(function() {
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
});
$('#six').click(function() {
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
});
$('#seven').click(function() {
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
});
$('#eight').click(function() {
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
});
$('#nine').click(function() {
	if (whoPlayer === "playerOne") {
		nine.text('Star Trek');
	} else {
		nine.text('Star Wars');
	}
	timerReset();
	resetTimer();
	changePlayer();
	getInput();
	checkWin();
});
//StarWars == X == playerOne
//StarTrek == O == playerTwo

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

		//MAKE A CLEAR BOARD FUNCTION AND PLACE IT AFTER WIN DETERMINED

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
	} else if (fourV === fiveV && fourV === sixV && fiveV === sixV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	} else if (sevenV === eightV && sevenV === nineV && eightV === nineV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	//COLUMN WIN CONDITIONS
	} else if (oneV === fourV && oneV === sevenV && fourV === sevenV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	} else if (twoV === fiveV && twoV === eightV && fiveV === eightV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	} else if (threeV === sixV && threeV === nineV && sixV === nineV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	//CROSS WIN CONDITIONS
	} else if (oneV === fiveV && oneV === nineV && fiveV === nineV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	} else if (threeV === fiveV && threeV === sevenV && fiveV === sevenV) {
	console.log('WINNER');
	whoPlayerTemp = (whoPlayer+'Wins');
		if (whoPlayerTemp === "playerOneWins") {
			playerOneWins += 1;
		} else {
			playerTwoWins +=1;
		}
	}
	$('#p2Score').text(playerTwoWins);
	$('#p1Score').text(playerOneWins);
	bestOfFiveWinner();
} 


function bestOfFiveWinner() {
	if (playerOneWins === 5 || playerTwoWins === 5) {
		if (playerOneWins === 5) {
			alert('STAR TREK WINS');
			timerReset();   
			resetGame();	
			resetBoardStarWars();
		} else if (playerTwoWins === 5) {
			alert('STAR WARS WINS');
			timerReset();
			resetGame();
			resetBoardStarTrek();	
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
}


$('#resetGame').click(function() {
	resetOne();
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

//Count Down Function For Player Turns

// var timerStart = setInterval(function(){
// 				if (timeLeft > 0) {	
// 					timeLeft -= 1;
// 					} else {
// 						clearInterval();
// 					}
// 					$('#timeLeft').text(timeLeft);
// 				}, 1000);

function resetOne () {
	$('.box').unbind('mouseenter').one('mouseenter', function() {
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
}

$('.box').one('mouseenter', function() {
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




// function drawCheck() {
// //This checks if there is a draw.
// }

// function playerOneMove() {
// //This inititates playerOneMove
// }

// function playerTwoMove() {
// //This initiates playerTwoMove
// }

// function timerCountDown() {
// //This is counts down to 0 before ending current players move.
// }

// function changeComputer() {
// //This changes the game mode to player vs Computer
// }

// function changePlayer() {

// }
});