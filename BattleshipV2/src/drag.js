// export function drag(ship, placementGrid) {
//   let offsetX = 0;
//   let offsetY = 0;
//   let startX = 0;
//   let startY = 0;
//   placementGrid.forEach((square) => {
//     square.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     square.classList.add("droppable");
//     square.addEventListener("drop", (e) => {
//       e.preventDefault();
//       const droppedShip = document.getElementById(
//         e.dataTransfer.getData("text/plain")
//       );
//       let mouseX = e.pageX;
//       let mouseY = e.pageY;
//       let snapX = mouseX + startX - 17;
//       let snapY = mouseY + startY - 10;
//       droppedShip.style.position = "absolute";
//       droppedShip.style.zIndex = 1000;
//       console.log(`snapX: ${snapX} snapY: ${snapY}`);
//       droppedShip.style.left = `${snapX}px`;
//       droppedShip.style.top = `${snapY}px`;
//     });
//   });
//   console.log(placementGrid);

//   ship.addEventListener("drag", (e) => {
//     e.target.draggable = true;
//   });
//   ship.addEventListener("dragstart", (e) => {
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//     startX = e.pageX;
//     startY = e.pageY;
//     e.dataTransfer.setData("text/plain", ship.id);
//     const rect = ship.getBoundingClientRect();
//     const clone = ship.cloneNode(true); // Create a temporary clone of the ship
//     clone.style.position = "absolute";
//     clone.style.top = "-9999px"; // Move it offscreen
//     clone.style.left = "-9999px";
//     document.body.appendChild(clone); // Add it temporarily to the DOM
//     e.dataTransfer.setDragImage(clone, rect.width / 2, rect.height / 2);

//     setTimeout(() => document.body.removeChild(clone), 0);
//     console.log(
//       `Dragstart for ${ship.id}: pageY: ${e.pageY} pageX:${e.pageX} offsetX:${e.offsetX} offsetY:${e.offsetY}`
//     );
//   });
// }
// document.addEventListener("click", (e) => {
//   console.log(
//     `offsetX: ${e.offsetX} offsetY: ${e.offsetY} x: ${e.pageX} y: ${e.pageY}`
//   );
// });
