import { renderLine } from "./src/helpers/render-line.js";

const input = `hello\nworld`;

const lines = input.split("\n");
lines.map((line) => {
  console.log(renderLine(line));
});
