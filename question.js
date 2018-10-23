buttonX.addEventListener("click", function(){
  //The clicked buttons textContent should update to X or O (marker)
  buttonX.textContent = getCurrentPlayer().marker;
  buttonX.disabled = true;
  turnNumber++;

  if (checkisWin()==true) {
    displayMessage("GAME OVER");
  }
  //if 9 turns have passed, and no one has won, its a tie
  if (turnNumber == 9 && checkisWin()==false) {
    displayMessage("No One Wins");
  }
});

function displayMessage(someMessage) {
parentSelected = document.querySelector('#container');
messageContent = document.createElement('h2');
messageContent.textContent = someMessage;
parentSelected.appendChild(messageContent);
}