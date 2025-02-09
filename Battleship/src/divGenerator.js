export function divGenerator(toAppendTo, num) {
  for (let i = 0; i < num; i++) {
    let shipSquare = document.createElement("div");
    shipSquare.classList = "shipSquare";
    toAppendTo.append(shipSquare);
  }
}
