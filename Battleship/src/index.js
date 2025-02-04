import "./styles.css";
import { gridGen } from "./gridGen.js";
import { startGame } from "./startGame.js";
import { nodeClicked } from "./nodeClicked.js";

const startGameButton = document.querySelector(".startButton");
startGameButton.addEventListener("click", () => {
  startGame();
  startGameButton.parentElement.style.display = "none";
});

gridGen();
nodeClicked();
