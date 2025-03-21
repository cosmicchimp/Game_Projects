import { gridGenerator } from "./gridGenerator";
import { divGenerator } from "./divGenerator.js";
import { rotate } from "./rotate.js";
import { drag } from "./drag.js";
import { clearFirstPage } from "./clearFirstPage.js";
import { shipResize } from "./shipResize.js";
export function chooseShipsDom() {
  const wrapper = document.querySelector(".gameContainer");

  //clearing the first page away
  clearFirstPage();

  //Creating the ships that you will drag and drop onto your grid
  const shipBay = document.createElement("div");
  shipBay.classList = "shipBay";

  //Creation of ship div's and assigning them data lengths
  const carrier = document.createElement("div");
  carrier.setAttribute("data-length", 5);
  const battleship = document.createElement("div");
  battleship.setAttribute("data-length", 4);
  const cruiser = document.createElement("div");
  cruiser.setAttribute("data-length", 3);
  const submarine = document.createElement("div");
  submarine.setAttribute("data-length", 3);
  const destroyer = document.createElement("div");
  destroyer.setAttribute("data-length", 2);

  let ships = [carrier, battleship, cruiser, submarine, destroyer];

  const shipNames = {
    carrier: "carrier",
    battleship: "battleship",
    cruiser: "cruiser",
    submarine: "submarine",
    destroyer: "destroyer",
  };

  for (let ship of ships) {
    shipBay.appendChild(ship);
    console.log(ships);
  }

  let increment = 0;
  for (let shipName in shipNames) {
    ships[increment].classList.add("ship", shipNames[shipName]);
    ships[increment].id = `ship${increment}`;
    increment++;
  }
  wrapper.append(shipBay);

  //Now creating the grid to choose your ship placements
  let placementGrid = gridGenerator();
  let placementGridDisplay = document.createElement("div");
  placementGridDisplay.classList = "placementGrid";
  placementGrid.forEach((item, index) => {
    const square = document.createElement("div");
    square.id = `square${index}`;
    square.classList = "square";
    square.dataset.x = index % 10;
    square.dataset.y = Math.floor(index / 10);
    console.log(square);
    placementGridDisplay.append(square);
  });

  wrapper.append(placementGridDisplay);

  drag(ships);

  console.log(ships);

  rotate();
  //This will be grabbing the width and height of the square of the grid depending on the users computer and calculate the proper ship length
  shipResize();
  window.addEventListener("resize", () => {
    shipResize();
  });
}
