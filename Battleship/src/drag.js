import { appendDroppedShip } from "./appendDroppedShip.js";
export function drag(ships) {
  let offsetX = 0;
  let offsetY = 0;
  let startX = 0;
  let startY = 0;
  const placementGrid = document.querySelector(".placementGrid");
  const gridArray = Array.from(placementGrid.children);
  gridArray.forEach((square) => {
    square.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
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
    });
  });
  ships.forEach((ship) => {
    ship.draggable = true;
    ship.addEventListener("drag", (e) => {});
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
  document.addEventListener("click", (e) => {
    console.log(
      `offsetX: ${e.offsetX} offsetY: ${e.offsetY} x: ${e.pageX} y: ${e.pageY}`
    );
  });
}
