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
			if(whosTurn ===1){
			currentSquare.innerHTML = "X";
			whosTurn = 2;
			player1Squares.push(currentSquare.id);
			}else{
				currentSquare.innerHTML = "0";
				whosTurn = 1;
				player2Squares.push(currentSquare.id);
			}
			console.log(player1Squares);
			console.log(player2Squares);
			checkWin();
		}
	}
}

function checkWin(){
	//Outer loop
	for(var i=0; i < winningCombos.length; i++){
		//Inner loop
		var rowCount = 0;
		for(var j = 0; j < winningCombos[i].length; j++){
			// console.log(winningCombos[i][j]);
			var winningSquare = winningCombos[i][j];
			if(player1Squares.indexOf(winningSquare) > -1){
				//HIT! player has this square somewhere
				rowCount++;
			}
		}
		if(rowCount === 3){
			// player had all three of theses j's - WIN!
			alert("player 1 won!");
			gameOn = false;

		}
		// console.log("combo completed");
	}
};