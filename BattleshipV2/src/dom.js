export function domGen() {
  function boardGen() {
    const board = document.createElement("div");
    function squareGen(player) {
      for (let i = 1; i < 101; i++) {
        let square = document.createElement("div");
        square.classList = "square";
        square.classList.add(player);
        square.id = `square${i}`;
        board.appendChild(square);
      }
    }
  }
}
