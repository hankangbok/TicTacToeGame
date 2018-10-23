
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
    if (marker!=0) {
      content.textContent = marker;
    }
    container.appendChild(content);
  }
  
function getCurrentPlayer() {
  console.log(turnNumber);
  if (turnNumber%2==0) {
    return player2;
  }
  else {return player1;}
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
      if (checkisWin()==true) {
        displayWinner();
      }
      if (turnNumber == 9 && checkisWin()==false) {
        displayMessage("No one Wins =(");
      }
    });
    i++;
  }
}
function displayWinner() {
  getCurrentPlayer();
  var x = document.getElementsByClassName('gameboarda');
  for (j=0;j<9;j++) {
    x[j].disabled=true;
  }
  displayMessage(getCurrentPlayer().name + " wins!");
}

function displayMessage(someMessage) {
  parentSelected = document.querySelector('#container');
  winMessage = document.createElement('h2');
  winMessage.textContent = someMessage;
  parentSelected.appendChild(winMessage);
}

function checkisWin() {
  // Check squares 1, 5, 9  to determine if a winning case exists
  // from 1,5,9, you can text possible win cases
  // There must be a marker in 1,5, or 9 for a win case to exist
  // Dude theres gotta be a way to reduce this down
  relevantMarker = getCurrentPlayer().marker;
  winPossible=undefined;
  if (gameBoard[0]==relevantMarker) {
    if (gameBoard[0]==gameBoard[1]&&gameBoard[0]==gameBoard[2]) {
      return true;
    }
    if (gameBoard[0]==gameBoard[3]&&gameBoard[0]==gameBoard[6]) {
      return true;
    }
  }
  if (gameBoard[4]==relevantMarker) {
    if (gameBoard[4]==gameBoard[1]&&gameBoard[4]==gameBoard[7]) {
      return true;
    }
    if (gameBoard[4]==gameBoard[3]&&gameBoard[4]==gameBoard[5]) {
      return true;
    }
    if (gameBoard[4]==gameBoard[0]&&gameBoard[4]==gameBoard[8]) {
      return true;
    }
    if (gameBoard[4]==gameBoard[2]&&gameBoard[4]==gameBoard[6]) {
      return true;
    }
  }
  if (gameBoard[8]==relevantMarker) {
    if (gameBoard[8]==gameBoard[2]&&gameBoard[8]==gameBoard[5]) {
      return true;
    }
    if (gameBoard[8]==gameBoard[6]&&gameBoard[8]==gameBoard[7]) {
      return true;
    }
  }
  else {
    return false;
  }
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



