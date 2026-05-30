import { FONT_HEIGHT } from "./constants.js";
import { getGlyph } from "./get-glyph.js";

export function renderText(text = "") {
  const normalizedText = String(text).toLowerCase();

  const outputLines = [];

  for (let row = 0; row < FONT_HEIGHT; row++) {
    let line = "";

    for (const character of normalizedText) {
      const glyph = getGlyph(character);

      line += glyph[row] + " ";
    }

    outputLines.push(line);
  }

  return outputLines.join("\n");
}
