import { renderLine } from "./helpers/render-line.js";
import { sanitizeText } from "./utils/sanitize-text.js";

export function renderText(dirtyText = "") {
  const workableText = sanitizeText(dirtyText);

  const logicalLines = workableText.split("\n");

  logicalLines.map((line) => {
    console.log(renderLine(line));
  });
}
