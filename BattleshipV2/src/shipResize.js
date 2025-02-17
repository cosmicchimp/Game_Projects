export function shipResize() {
  const ships = Array.from(document.querySelectorAll(".shipImage"));
  const shipBay = document.querySelector(".shipBay");
  const squareGrab = document.querySelector(".square");
  let squareHeight = 0;
  let squareWidth = 0;
  if (squareGrab) {
    const squareDimensions = squareGrab.getBoundingClientRect();
    console.log(squareDimensions.height, squareDimensions.width);
    squareHeight = squareDimensions.height;
    squareWidth = squareDimensions.width;
    console.log(squareHeight, squareWidth);
  } else {
    console.log("Element not found");
    return;
  }
  for (let ship of ships) {
    let length = ship.getAttribute("data-length");
    let shipHeight = length * squareHeight;
    let shipWidth = squareWidth;
    ship.style.width = `${shipWidth}px`;
    ship.style.height = `${shipHeight}px`;
  }
}
