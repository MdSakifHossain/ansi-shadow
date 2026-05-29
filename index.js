import { chars as fonts } from "./lib/ansi-shadow/index.js";

const input = "Sakif Hossain";
const chars = input.toLocaleLowerCase();
const rows = 6;

let output = "";

for (let row = 0; row < rows; row++) {
  for (let ch of chars) {
    output += fonts[ch]?.[row] || fonts["space"][row];
  }

  output += "\n";
}

console.log(output);
