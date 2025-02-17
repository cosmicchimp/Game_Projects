import { player } from "./playerFF.js";
import { popups } from "./popups.js";
import { shipBay } from "./shipBay.js";
import { shipResize } from "./shipResize.js";
const popup = popups();
export function startGame(twoPlayer) {
  const gameInputs = document.querySelector(".gameInputs");
  const gameContainer = document.querySelector(".gameContainer");
  const wrapper = document.querySelector(".wrapper");
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
    popup.p1ShipPlace();
    let shipBayy = shipBay(wrapper);
  }
  function cpuGame() {
    const p1 = player(document.getElementById("user1").value);
    gameInputs.remove();
    popup.p1ShipPlace();
    p1.board.domPrint(gameContainer);
    let shipBayy = shipBay(wrapper);
  }
  shipResize();
}
