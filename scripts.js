// user shold be able to click a box and an X/O shows up
// put a onclick on the first square
// when user clicks, call function that puts a X in the box
// MILESTONE

$(document).ready(function(){

	$('#start-button').click(function(){
		$(this).fadeOut(1000);
	})

})


var whosTurn = 1; //initialize whosTurn to player 1
var player1Squares = [];
var player2Squares = [];
var someoneWon = false;
var computerPlayer = false;
var startPressed = false;
// setup up winners array
var winningCombos =[
['A1', 'B1', 'C1'],
['A2', 'B2', 'C2'],
['A3', 'B3', 'C3'],
['A1', 'A2', 'A3'],
['B1', 'B2', 'B3'],
['C1', 'C2', 'C3'],
['A1', 'B2', 'C3'],
['A3', 'B2', 'C1']
];

console.log(winningCombos);

// function start(){
// 	document.getElementById('start').style.display='none';

// }

function onePlayerGame(){
	computerPlayer = true;
}

function markSquare(currentSquare){
	$(currentSquare).click(function(){
		$(this).addClass("takenSquare")
	})
	if(startPressed = true){
		if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML =="0")){
			return "taken";
		}else if(someoneWon){
			console.log("Someone already won!");
		}else{
			if(whosTurn == 1){
			currentSquare.innerHTML = "X";
			whosTurn = 2;
			player1Squares.push(currentSquare.id);
			checkWin(1, player1Squares);
			if(computerPlayer){
				computerMove();
			}

			}else{
				currentSquare.innerHTML = "0";
				whosTurn = 1;
				player2Squares.push(currentSquare.id);
				checkWin(2, player2Squares);
			}
		}
	}
}

function computerMove(){
	//gofind a random square
	var needASquare = true;
	var squareButtons = document.getELementsByClassName('square'); //will return an array
	while(needASquare){
		var randomNumber = (Math.ceil(Math.random() * 9)) + 1;
		var randomSquare = squareButtons[randomNumber];
		isTaken = markSquare(randomSquare);
		console.log(isTaken);
		if(isTaken !== "taken"){
			needASquare = false;
		}
	}	
}

function checkWin(whoJustWent, currentPlayerSquares){
	//outer loop
	for(var i=0; i < winningCombos.length; i++){
		//Inner loop
		var rowCount1 = 0;
		// var rowCount2 = 0;
		for(var j = 0; j < winningCombos[i].length; j++){
			// console.log(winningCombos[i][j]);
			var winningSquare = winningCombos[i][j];
				if(currentPlayerSquares.indexOf(winningSquare) > -1){
					//HIT! player 1 has this square somewhere
					rowCount1++;
				}
				// if(player2Squares.indexOf(winningSquare) > -1){
				// 	//HIT! Player 2 has this square somewhere
				// 	rowCount2++;
				// }
		}

		if(rowCount1 === 3) 
			// || (rowCount2 ===3)) {
				{
			// player had all three of theses j's - WIN!
			console.log(message);
			// gameOn = false; 
			gameOver(whoJustWent, winningCombos[i]);
			break;
		}
	}
}

function gameOver(whoJustWon, winningCombo){
	var message = "Congrats to player " + whoJustWon + "!!!!<BR>You just won, smartie ;)";
	document.getElementById('message').innerHTML = message;
	document.getElementById('reset').style.display ="block";
	var allSquares = $('.square');
	console.log(allSquares);
	gameOn = false;
	for(var i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += ' losing-squares';
	}
	for(var i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += ' winning-squares';
	}
	someoneWon = true;
}

function reset(){
	location.reload();
}



 // style reset button
 // get 'message' out of board
 // score counter automated
 // timer ("you won in just ___ seconds!")















