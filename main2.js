
const playerFactory = (name,marker) => {
  return {name, marker};
};

function displayBoard() {
  gameBoard = [0,0,0,0,0,0,0,0,0];
  for (i in gameBoard) {
    renderSquare(gameBoard[i],i);
  }
  return gameBoard;
}

function renderSquare(marker,squareIndex) {
  // Making the gameboard clickable? Using buttons in this case. 
    const container = document.querySelector('#container');
    const content = document.createElement('button');
    content.classList.add('gameboarda');
    content.id = 'testItem'+squareIndex;
    content.textContent = marker;
    
    container.appendChild(content);
  }

function buttonPress() {
  i=0;
  // Adds event listener to each button on the game board
  // The buttons should change on click, and be disabled to prevent double click
  // gameBoard updated so we can test if there is a win case
  while (i<9) {
    let selectTest = document.getElementById('testItem'+i);
    selectTest.addEventListener("click", function(){
      currentP = getCurrentPlayer();
      selectTest.textContent = currentP.marker;
      selectTest.disabled = true;
      index = selectTest.id[selectTest.id.length-1];
      gameBoard[index] = currentP.marker;
      console.log(gameBoard);
      turnNumber++;
      checkisWin();
    });
    i++;
  }
}

function getCurrentPlayer() {
  console.log(turnNumber);
  if (turnNumber%2==0) {
    return player2;
  }
  else {return player1;}
}

function checkisWin() {
  // Check squares 1, 5, 9  to determine 
  relevantMarker = getCurrentPlayer().marker;
  if (gameBoard[1] != relevantMarker && gameBoard[1] != relevantMarker\ && gameBoard[1] != relevantMarker
}

function gamePlay() {
  // Gameplay setup
  displayBoard();
  buttonPress();
  turnNumber = 0;
}
const player1 = playerFactory("Bokyung","X");
const player2 = playerFactory("David Tennant","O");
gamePlay();



