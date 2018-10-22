
// A module for the gameboard, per TOP suggestions


// const theGameBoard = (() => {
//   gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
//   let a=0;
//   console.log(a + "what is happening")
//   return {a,gameBoard};
// })();

whoseTurn = undefined;

const playerFactory = (name,marker) => {
  return {name, marker};
};

function displayBoard() {
  gameBoard = [0,0,0,0,0,0,0,0,0];
  for (i in gameBoard) {
    renderSquare(gameBoard[i]);
  }
  htmlCode = "";
}
// This should add a single square with the marker into the game board
function renderSquare(marker) {
// Making the gameboard clickable? Using buttons in this case. 
  const container = document.querySelector('#container');
  const content = document.createElement('button');
  content.classList.add('gameboardButton');
  content.id = 'testItem';
  content.textContent = marker;
  container.appendChild(content);

}

function editSquare(player) {
  
}

function whenPlayerClick(player) {
  console.log("it's " + player.name + "'s turn")
  let testSelect = document.getElementById('testItem');
  testSelect.addEventListener("click",function(player){
    console.log("it's " + player.name + "'s turns");
    testSelect.textContent = player.marker;
  });
  
  
}

// Test functions down here
// I'm going to create default players for now.
// Later, I'll allow players to enter their own names.
// theGameBoard;
displayBoard();

const player1 = playerFactory("Bokyung","X");
console.log(player1.name,player1.marker);

const player2 = playerFactory("David Tennant","O");
console.log(player2.name);

whenPlayerClick(player2);


