export function createGrid(user) {
  const grid = [];
  for (let i = 1; i < 101; i++) {
    let square = document.createElement("div");
    square.id = `${user}square${i}`;
    square.classList = "square";
    grid.push(square);
  }
  return {
    grid,
    recieveAttack: function () {},
    domPrint: function (container) {
      this.grid.forEach((square) => {
        container.appendChild(square);
      });
    },
  };
}
