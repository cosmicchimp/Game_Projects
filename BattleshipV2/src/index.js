import "./styles.css";
import { playerFF } from "./playerFF.js";
import { shipFF } from "./shipFF.js";
import { createGrid } from "./grid.js";
import { playerChoice } from "./playerChoice.js";
// Event listeners with fixed syntax errors
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newPlayer").addEventListener("change", (e) => {
    if (e.target.checked) {
      // Fixed parentheses
      playerChoice(true);
    } else {
      playerChoice(false);
    }
  });
});
