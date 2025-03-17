import { createGrid } from "./grid.js";
import { shipGenerate } from "./shipFF.js";
export function player(name) {
  return {
    name,
    ships: shipGenerate([]),
    board: createGrid(name),
  };
}
