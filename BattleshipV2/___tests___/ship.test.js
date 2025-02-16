import { shipGenerate } from "../src/shipFF";
test("Expect correct ship length and hit mechanics", () => {
  const ships = shipGenerate();
  expect(ships[0].length).toBe(5);
  for (let i = 0; i < 7; i++) {
    ships[0].hit();
  }

  ships[0].isSunk();
  expect(ships[0].isSunk()).toBe(true);
});
