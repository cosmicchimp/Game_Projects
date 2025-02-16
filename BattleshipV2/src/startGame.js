import { player } from "./playerFF.js";
import { popups } from "./popups.js";
export function startGame(twoPlayer) {
  const gameInputs = document.querySelector(".gameInputs");
  const gameContainer = document.querySelector(".gameContainer");
  if (twoPlayer) {
    twoPlayerGame();
  } else if (!twoPlayer) {
    cpuGame();
  }
  function twoPlayerGame() {
    const p1 = player(document.getElementById("user1").value);
    const p2 = player(document.getElementById("player2").value);
    gameInputs.remove();
    p1.board.domPrint(gameContainer);
    console.log(p1, p2);
  }
  function cpuGame() {
    const p1 = player(document.getElementById("user1").value);
    gameInputs.remove();
  }
}
