
// A module for the gameboard, per TOP suggestions


const theGameBoard = (() => {
  gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
  let a=0;
  console.log(a + "what is happening")
  return {a};
})();

const playerFactory = (name) => {
  return {
    name
  };
};



function displayBoard() {
  gameBoard = [0,0,0,0,0,0,0,0,0];
  for (i in gameBoard) {
    renderSquare(gameBoard[i]);
  }
  htmlCode = "";
  
  // const container = document.querySelector('#container');
  // const content = document.createElement('div');
  // content.classList.add('gamesquare');
  // content.textContent = "this is some stuff";
  // content.innerHTML = htmlCode;
  // container.appendChild(content);
}
// This should add a single square with the marker into the game board
function renderSquare(marker) {
  const container = document.querySelector('#container');
  const content = document.createElement('div');
  content.classList.add('gamesquare');
  content.textContent = marker;
  container.appendChild(content);
}

// The following is a basic constructor. How could I do this with factories?
// function Player(name) {
//   this.name = name;

// }

// Test functions down here
theGameBoard;
displayBoard();

// I'm going to create default players for now.
// Later, I'll allow players to enter their own names.
const player1 = playerFactory("Bokyung");
console.log(player1.name);

const player2 = playerFactory("David Tennant");
console.log(player2.name);
