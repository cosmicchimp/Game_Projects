export function divGenerator(toAppendTo, num) {
  for (let i = 0; i < num; i++) {
    let shipSquare = document.createElement("div");
    shipSquare.id = `${toAppendTo}${i}`;
    toAppendTo.append(shipSquare);
  }
}
