import carrierImage from "./assets/Carrier.png";
import battleshipImage from "./assets/Battleship.png";
import submarineImage from "./assets/Submarine.png";
import destroyerImage from "./assets/Destroyer.png";
import patrolImage from "./assets/Patrol.png";
import { shipGenerate } from "./shipFF.js";
const shipNames = [
  { name: "Carrier", image: carrierImage, length: 5 },
  { name: "Battleship", image: battleshipImage, length: 4 },
  { name: "Cruiser", image: submarineImage, length: 3 },
  { name: "Submarine", image: destroyerImage, length: 3 },
  { name: "Destroyer", image: patrolImage, length: 2 },
];
export function shipBay(toAppendTo) {
  const shipBayDiv = document.createElement("div");
  shipBayDiv.classList.add("shipBay");
  toAppendTo.appendChild(shipBayDiv);
  for (let i = 0; i < shipNames.length; i++) {
    let shipDiv = document.createElement("div");
    shipDiv.classList.add("shipDiv");
    shipDiv.id = shipNames[i].name;
    let shipImage = document.createElement("img");
    shipImage.classList.add("shipImage");
    shipImage.id = `img${shipNames[i].name}`;
    shipImage.src = shipNames[i].image;
    shipImage.setAttribute("data-length", shipNames[i].length);
    shipDiv.appendChild(shipImage);
    shipBayDiv.appendChild(shipDiv);
  }
  console.log(shipNames);
  return {
    shipBayDiv,
  };
}
