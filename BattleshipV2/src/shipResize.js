export function shipResize() {
  const ships = Array.from(document.querySelectorAll(".shipImage"));
  const shipContainers = Array.from(document.querySelectorAll(".shipDiv"));
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
  ships.forEach((ship, index) => {
    let length = ship.getAttribute("data-length");
    let shipHeight = length * squareHeight;
    let shipWidth = squareWidth;
    ship.style.zIndex = "20000000000000000";
    // Apply dimensions to both ship and corresponding container
    ship.style.width = `${shipWidth}px`;
    ship.style.height = `${shipHeight}px`;

    if (shipContainers[index]) {
      shipContainers[index].style.width = `${shipWidth}px`;
      shipContainers[index].style.height = `${shipHeight}px`;
    }
  });
}
