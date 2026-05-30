import { FONT_HEIGHT } from "../constants/constants.js";
import { getGlyph } from "../utils/get-glyph.js";

export function renderLine(text = "") {
  const normalizedText = String(text).toLowerCase();

  const outputLines = [];

  for (let row = 0; row < FONT_HEIGHT; row++) {
    let line = "";

    for (const character of normalizedText) {
      const glyph = getGlyph(character);

      line += glyph[row];
    }

    outputLines.push(line);
  }

  return outputLines.join("\n");
}
