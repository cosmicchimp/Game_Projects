import { shipResize } from "./shipResize.js";
export function rotate() {
  document.addEventListener("keydown", (e) => {
    const shipBay = document.querySelector(".shipBay");
    let currentDirection = shipBay.style.flexDirection;
    console.log(currentDirection);
    if (e.key == "r") {
      if (currentDirection === "column") {
        shipBay.style.flexDirection = "row";
        shipBay.style.alignItems = "flex-start";
        shipBay.style.justifyContent = "center";
        shipBay.style.height = "25vw";
        const children = Array.from(shipBay.children);
        children.forEach((ship) => {
          if (!ship.classList.contains("dropped")) {
            ship.style.flexDirection = "row";
            ship.style.transform = "rotate(0deg)";
          }
        });
      } else {
        shipBay.style.flexDirection = "column";
        shipBay.style.alignItems = "center";
        shipBay.style.justifyContent = "flex-start";
        shipBay.style.height = "90vh";
        const children = Array.from(shipBay.children);
        children.forEach((ship) => {
          if (!ship.classList.contains("dropped")) {
            ship.style.transform = "rotate(90deg)";
            ship.style.flexShrink = "0";
            ship.style.flexGrow = "0";
            ship.style.display = "flex";
          }
        });
      }
    }
  });
}
