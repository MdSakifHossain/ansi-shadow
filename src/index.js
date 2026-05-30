import { renderText } from "./renderer/render-text.js";

const input = `hello
world`;

const lines = input.split("\n");
lines.map((line) => {
  console.log(renderText(line));
});
