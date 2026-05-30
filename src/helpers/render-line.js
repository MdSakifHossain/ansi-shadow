import { FONT_HEIGHT } from "../constants/constants.js";
import { getGlyph } from "../utils/get-glyph.js";
import { sanitizeText } from "../utils/sanitize-text.js";

export function renderLine(text = "") {
  const normalizedText = sanitizeText(text);

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
