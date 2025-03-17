import { appendDroppedShip } from "./appendDroppedShip.js";
export function drag(ships) {
  //defining the values that will be used to move the ship
  let offsetX = 0;
  let offsetY = 0;
  let startX = 0;
  let startY = 0;
  //defining the placementgrid
  const placementGrid = document.querySelector(".placementGrid");
  const gridArray = Array.from(placementGrid.children);
  //For every square in the grid there will be 'dragover' eventlistener applied
  gridArray.forEach((square) => {
    square.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    //Event listener, e = gridSquare, it is listening for when a ship is dropped over the grid
    square.addEventListener("drop", (e) => {
      e.preventDefault();
      const droppedShip = document.getElementById(
        e.dataTransfer.getData("text/plain")
      );
      let mouseX = e.pageX;
      let mouseY = e.pageY;
      let snapX = mouseX - startX;
      let snapY = mouseY - startY;
      console.log(`snapX: ${snapX} snapY: ${snapY}`);
      droppedShip.style.left = `${snapX}px`;
      droppedShip.style.top = `${snapY}px`;
      appendDroppedShip(droppedShip, mouseX, mouseY);
      droppedShip.classList.add("dropped");
      droppedShip.draggable = false;
    });
  });
  //applying event listeners to each ship via forEach
  ships.forEach((ship) => {
    //This is checking for if the draggable function has been set false already: i.e. an already dropped ship
    if (ship.dragagble != false) {
      ship.draggable = true;
    }
    //Listening for the drag start on a ship, so that you can start to track their positions
    ship.addEventListener("dragstart", (e) => {
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      startX = e.pageX;
      startY = e.pageY;
      e.dataTransfer.setData("text/plain", ship.id);
      console.log("dropped ship ID:", e.dataTransfer.getData("text/plain"));
      console.log(
        `Dragstart for ${ship.id}:`,
        e.pageX,
        e.pageY,
        e.offsetX,
        e.offsetY
      );
    });
  });
  //just an event listener to help visualize (X,Y) points on the window
  document.addEventListener("click", (e) => {
    console.log(
      `offsetX: ${e.offsetX} offsetY: ${e.offsetY} x: ${e.pageX} y: ${e.pageY}`
    );
  });
}
