import { Font as fonts } from "./lib/ansi-shadow/index.js";

const input = `sakif_576`;
const chars = input.toLocaleLowerCase();
const rows = 6;

let output = "";

for (let row = 0; row < rows; row++) {
  for (let ch of chars) {
    output += fonts[ch]?.[row] || fonts["unknown"][row];
  }

  output += "\n";
}

console.log(`input:\n${input}`);
console.log("");
console.log(`output:\n${output}`);
