export function gridGen() {
  //Creation of 100 nodes inside of a 'board' array
  const boardOne = document.querySelector("#board1");
  const boardTwo = document.querySelector("#board2");
  //Function that returns a new 100 grid board.
  function newBoard() {
    const board = [];
    for (let i = 0; i < 100; i++) {
      board.push(i);
    }
    return board;
  }
  const board1 = newBoard();
  const board2 = newBoard();

  board1.forEach((item, index) => {
    const boardOneSquares = document.createElement("div");
    const boardTwoSquares = document.createElement("div");
    boardOneSquares.classList = "boardSqs";
    boardTwoSquares.classList = "boardSqs";
    boardOneSquares.id = `boardOneSq${index}`;
    boardTwoSquares.id = `boardTwoSq${index}`;
    boardOne.appendChild(boardOneSquares);
    boardTwo.appendChild(boardTwoSquares);
  });
}
