import { player } from "./playerFF.js";
import { popups } from "./popups.js";
import { shipBay } from "./shipBay.js";
import { shipResize } from "./shipResize.js";
const popup = popups();
export function startGame(twoPlayer) {
  const gameInputs = document.querySelector(".gameInputs");
  const gameContainer = document.querySelector(".gameContainer");
  const wrapper = document.querySelector(".wrapper");
  const gridContainer = document.createElement("div");
  gridContainer.classList = "gridContainer";
  if (twoPlayer) {
    twoPlayerGame();
  } else if (!twoPlayer) {
    cpuGame();
  }
  function twoPlayerGame() {
    const p1 = player(document.getElementById("user1").value);
    const p2 = player(document.getElementById("player2").value);
    gameInputs.remove();
    p1.board.domPrint(gridContainer);
    popup.p1ShipPlace();
    let shipBayy = shipBay(gameContainer, p1);
    gameContainer.appendChild(gridContainer);
  }
  function cpuGame() {
    const p1 = player(document.getElementById("user1").value);
    gameInputs.remove();
    popup.p1ShipPlace();
    p1.board.domPrint(gridContainer);
    gameContainer.appendChild(gridContainer);
    let shipBayy = shipBay(gameContainer, p1);
  }
  shipResize();
}
