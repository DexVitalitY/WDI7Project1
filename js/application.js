$(document).ready(function(){

var starWars = $('#starWarsIcon');
var starTrek = $('#starTrekIcon');

var playerOne;
var playerTwo;
var whoPlayer = "ME"; //Testing
var whoPlayerTemp;
var currentPlayerTemp = '#'+ whoPlayer;
var currentPlayer = $(currentPlayerTemp);

var timer = 2;
var timeLeft = $('#timeLeft');

var playerOneWins = 0;
var playerTwoWins = 0;
var computerWins = 0; 
var numTies = 0;


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

//button variables for OnClick -- Simplify After Functionality
$('#one').click(function() {
	if (whoPlayer == "playerOne") {
		one.text('X');
	} else {
		one.text('O')
	}
})
$('#two').click(function() {
	if (whoPlayer == "playerOne") {
		two.text('X');
	} else {
		two.text('O')
	}
})
$('#three').click(function() {
	if (whoPlayer == "playerOne") {
		three.text('X');
	} else {
		three.text('O')
	}
})
$('#four').click(function() {
	if (whoPlayer == "playerOne") {
		four.text('X');
	} else {
		four.text('O')
	}
})
$('#five').click(function() {
	if (whoPlayer == "playerOne") {
		five.text('X');
	} else {
		five.text('O')
	}
})
$('#six').click(function() {
	if (whoPlayer == "playerOne") {
		six.text('X');
	} else {
		six.text('O')
	}
})
$('#seven').click(function() {
	if (whoPlayer == "playerOne") {
		seven.text('X');
	} else {
		seven.text('O')
	}
})
$('#eight').click(function() {
	if (whoPlayer == "playerOne") {
		eight.text('X');
	} else {
		eight.text('O')
	}
})
$('#nine').click(function() {
	if (whoPlayer == "playerOne") {
		nine.text('X');
	} else {
		nine.text('O')
	}
})
//StarWars == X == playerOne
//StarTrek == O == playerTwo
var x = 0; //StarWars
var o = 0; //StarTrek

function checkWin(){
	//ROW WIN CONDITIONS
if (oneV == twoV && twoV == threeV && oneV == threeV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} else if (fourV == fiveV && fourV == sixV && fiveV == sixV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} else if (sevenV == eightV && sevenV == nineV && eightV == nineV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
	//COLUMN WIN CONDITIONS
} else if (oneV == fourV && oneV == sevenV && fourV == sevenV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} else if (twoV == fiveV && twoV == eightV && fiveV == eightV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} else if (threeV == fiveV && threeV == nineV && sixV == nineV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
	//CROSS WIN CONDITIONS
} else if (oneV == fiveV && oneV == nineV && fiveV == nineV) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} else if (threeV = fiveV && threeV == sevenV && fiveV == sevenV)
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp += 1;
} 


function bestOfFiveWinner() {
	if (playerOneWins == 5 || playerTwoWins == 5)
		if (playerOneWins == 5) {
			alert('PLAYER 1 WINS');	
		} else {
			alert('PLAYER 2 WINS');
		}
}

//Count Down Function For Player Turns
setInterval(function(){
	timer -= 1;
	$('#timeLeft').text(timeLeft);
}, 1000);

function drawCheck() {
//This checks if there is a draw.
}

function playerOneMove() {
//This inititates playerOneMove
}

function playerTwoMove() {
//This initiates playerTwoMove
}

function timerCountDown() {
//This is counts down to 0 before ending current players move.
}

function changeComputer() {
//This changes the game mode to player vs Computer
}

function changePlayer() {

}
});