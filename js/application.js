$(document).ready(function(){

var starWars = $('#starWarsIcon');
var starTrek = $('#starTrekIcon');

var playerOne;
var playerTwo;
var whoPlayer = "ME";
var whoPlayerTemp;
var currentPlayerTemp = '#'+ whoPlayer;
var currentPlayer = $(currentPlayerTemp);

var playerOneWins = 0;
var playerTwoWins = 0;
var computerWins = 0; 
var numTies = 0;

var one = $('#one').text();
var two = $('#two').text();
var three = $('#three').text();
var four = $('#four').text();
var five = $('#five').text();
var six = $('#six').text();
var seven = $('#seven').text();
var eight = $('#eight').text();
var nine = $('#nine').text();

//StarWars == X == playerOne
//StarTrek == O == playerTwo
var x = 0;
var o = 0;

function checkWin(){
	//ROW WIN CONDITIONS
if (one == two && two == three && one == three) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
} else if (four == five && four == six && five == six) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
} else if (seven == eight && seven == nine && eight == nine) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
	//COLUMN WIN CONDITIONS
} else if (one == four && one == seven && four == seven) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
} else if (two == five && two == eight && five == eight) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
} else if (three == five && three == nine && six == nine) {
	whoPlayerTemp = (whoPlayer+'Wins')
	whoPlayerTemp +=;
} else {
	alert('Tie!');
}

function bestOfFiveWinner() {
	if
}

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