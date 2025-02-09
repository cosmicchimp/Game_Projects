export function rotate() {
  document.addEventListener("keydown", (e) => {
    const shipBay = document.querySelector(".shipBay");
    let currentDirection = shipBay.style.flexDirection;
    console.log(currentDirection);
    if (e.key == "r") {
      if (currentDirection === "column") {
        shipBay.style.flexDirection = "row";
        const children = Array.from(shipBay.children);
        children.forEach((ship) => {
          ship.style.transform = "rotate(0deg)";
        });
      } else {
        shipBay.style.flexDirection = "column";
        const children = Array.from(shipBay.children);
        children.forEach((ship) => {
          ship.style.transform = "rotate(90deg)";
          shipBay.style.padding = "3vw";
        });
      }
    }
  });
}
