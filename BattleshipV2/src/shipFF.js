export function shipGenerate() {
  const shipNames = [
    { name: "Carrier", length: 5 },
    { name: "Battleship", length: 4 },
    { name: "Cruiser", length: 3 },
    { name: "Submarine", length: 3 },
    { name: "Destroyer", length: 2 },
  ];

  // Directly create and return an array of ships
  return shipNames.map(({ name, length }) => buildShip(name, length));

  function buildShip(shipName, length) {
    return {
      ship: shipName,
      length,
      hits: 0,
      sunk: false,
      hit: function () {
        this.hits++;
      },
      isSunk: function () {
        if (this.hits >= this.length) {
          this.sunk = true;
          return true;
        }
        return false;
      },
    };
  }
}
