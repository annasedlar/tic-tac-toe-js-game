// user shold be able to click a box and an X/O shows up
// put a onclick on the first square
// when user clicks, call function that puts a X in the box
// MILESTONE

var whosTurn =1; //initialize whosTurn to player 1
var player1Squares = [];
var player2Squares = [];
var gameOn = true;
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


function markSquare(currentSquare){
	if(gameOn){
		if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML =="0")){
			console.log("that square is already taken");
		}else{
			if(whosTurn == 1){
			currentSquare.innerHTML = "X";
			whosTurn = 2;
			player1Squares.push(currentSquare.id);
			checkWin(1, player1Squares);
			}else{
				currentSquare.innerHTML = "0";
				whosTurn = 1;
				player2Squares.push(currentSquare.id);
				checkWin(2, player2Squares);
			}
			console.log(player1Squares);
			console.log(player2Squares);
			// checkWin();
		}
	}
}

function checkWin(whoJustWent, currentPlayerSquares){
	// if(whoJustWent === 1){
	// 	playerArray = player1Squares;
	// }else{ 
	// 	playerArray = player2Squares;
	// }
	//Outer loop
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
	var message = "Congrats to player " + whoJustWon + ". You just won with a " + winningCombo;
	document.getElementById('message').innerHTML = message;
}






















