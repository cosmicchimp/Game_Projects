import { player } from "../src/playerFF.js";
test("test player gen", () => {
  const johnny = player("johnny");
  const ships = johnny.ships;
  expect(johnny.ships.length).toBe(5);
  expect(ships[0].length).toBe(5);
  expect(ships[0].ship).toBe("Carrier");
});
