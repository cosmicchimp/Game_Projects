import { chooseShipsDom } from "./chooseShipsDom.js";
export function startGame() {
  const startButton = document.querySelector(".startButton");
  startButton.addEventListener("click", () => {
    chooseShipsDom();
  });
}
