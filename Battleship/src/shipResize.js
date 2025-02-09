export function shipResize(rotate) {
  const ships = Array.from(document.querySelectorAll(".ship"));
  const shipBay = document.querySelector(".shipBay");
  const squareGrab = document.querySelector(".square");
  let squareHeight = 0;
  let squareWidth = 0;
  if (rotate) {
    if (shipBay.style.flexDirection === "column") {
      for (let ship of ships) {
        let length = ship.getAttribute("data-length");
        let shipHeight = length * squareHeight;
        ship.style.height = `${shipHeight}px`;
        ship.style.width = `${squareWidth}px`;
      }
    } else {
      for (let ship of ships) {
        let length = ship.getAttribute("data-length");
        let shipWidth = length * squareWidth;
        ship.style.height = `${squareHeight}px`;
        ship.style.width = `${shipWidth}px`;
      }
    }
  }
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
}
