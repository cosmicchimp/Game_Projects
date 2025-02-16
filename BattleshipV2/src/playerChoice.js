import { startGame } from "./startGame.js";
const nameBox = document.querySelector(".nameBox");
const startGameButton = document.querySelector(".startButton");
export function playerChoice(player) {
  //Determining whether or not they are adding or removing the player check
  if (player) {
    player2Dom();
  } else if (!player) {
    let children = Array.from(nameBox.children);
    children[1].remove();
  }

  //Function that creates a new input for the second players name if chosen
  function player2Dom() {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "player1";
    input.placeholder = "Player Two Name";
    input.classList.add("userInput");
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "player2";
    input2.placeholder = "Player Two Name";
    input2.classList.add("userInput");
    input2.style.marginLeft = "1vh";
    nameBox.appendChild(input2);
  }
  //Adding an event listener to grab the players data and start the game
}
startGameButton.addEventListener("click", () => {
  let children = Array.from(nameBox.children);
  if (children.length > 1) {
    startGame(true);
  } else {
    startGame(false);
  }
});
