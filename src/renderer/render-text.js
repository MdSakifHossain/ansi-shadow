import { renderLine } from "./render-line.js";
import { sanitizeText } from "../utils/sanitize-text.js";

export function renderText(dirtyText = "") {
  const text = sanitizeText(dirtyText);

  const textLines = text.split("\n");

  return textLines.map((line) => renderLine(line)).join("\n");
}
