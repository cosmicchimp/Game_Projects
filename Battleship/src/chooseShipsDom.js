import { gridGenerator } from "./gridGenerator";
import { divGenerator } from "./divGenerator.js";
export function chooseShipsDom() {
  const wrapper = document.querySelector(".wrapper");
  //clearing the first page away
  function clearFirstPage() {
    const startButton = document.querySelector(".startButton");
    const userInput = document.querySelector(".userInput");
    const gameBox = document.querySelector(".gameInputs");
    const title = document.querySelector(".title");
    title.innerText = "Place Ships";
    startButton.style.display = "none";
    userInput.style.display = "none";
    gameBox.style.display = "none";
  }
  clearFirstPage();
  //Creating the ships that you will drag and drop onto your grid
  const shipBay = document.createElement("div");
  shipBay.classList = "shipBay";
  const carrier = document.createElement("div");
  divGenerator(carrier, 5);
  const battleship = document.createElement("div");
  divGenerator(battleship, 4);
  const cruiser = document.createElement("div");
  divGenerator(cruiser, 3);
  const submarine = document.createElement("div");
  divGenerator(submarine, 3);
  const destroyer = document.createElement("div");
  divGenerator(destroyer, 2);
  const ships = { carrier, battleship, cruiser, submarine, destroyer };
  for (let ship in ships) {
    shipBay.appendChild(ships[ship]);
    ships[ship].classList = "ship";
  }
  wrapper.append(shipBay);
  //Now creating the grid to choose your ship placements
  let placementGrid = gridGenerator();
  let placementGridDisplay = document.createElement("div");
  placementGridDisplay.classList = "placementGrid";
  placementGrid.forEach((shit, index) => {
    const square = document.createElement("div");
    square.id = `square${index}`;
    square.classList = "square";
    placementGridDisplay.append(square);
  });
  wrapper.append(placementGridDisplay);
}
