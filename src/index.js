import { renderText } from "./renderer/render-text.js";

const input = `hello
bitch`;

const lines = input.split("\n");
lines.map(line => {
    console.log(renderText(line));
});
