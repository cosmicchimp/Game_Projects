export function randomize(user) {
  console.log(user);
  let userShips = Array.from(document.querySelectorAll(`.${user.name}ship`));
  const grid = document.querySelector(".gridContainer");
  function shipLocations(ships) {
    userShips.forEach((ship) => {
      let xNum = getRandom();
      let square = document.querySelector(`#square${xNum}`);
      let shipLength = parseInt(ship.getAttribute("data-length")); // Get ship's length from the data-length attribute

      let endColumn = xNum + shipLength - 1;
      if (endColumn > 10) {
        xNum = Math.floor(xNum / 2.3);
        // If the ship won't fit, just try again (you could add a more sophisticated retry logic)
        return shipLocations([ship]);
      }

      // Append the ship to the grid
      grid.appendChild(ship);

      // Position the ship in the grid
      ship.style.gridColumn = `${xNum} / span ${shipLength}`;
      ship.style.position = "absolute";
    });
  }
  console.log(typeof userShips, userShips);
  function random() {
    let prevNum = -1; // initial value that won't match the first random number
    return function () {
      let num;
      do {
        num = Math.floor(Math.random() * 100) + 1;
      } while (num === prevNum);
      prevNum = num;
      return num;
    };
  }

  const getRandom = random();
  shipLocations();
}
