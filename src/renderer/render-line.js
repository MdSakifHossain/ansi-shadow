import { FONT_HEIGHT } from "../constants/constants.js";
import { getGlyph } from "./get-glyph.js";

export function renderLine(text = "") {
  const outputLines = [];

  for (let row = 0; row < FONT_HEIGHT; row++) {
    let line = "";

    for (const character of text) {
      const glyph = getGlyph(character);

      line += glyph[row];
    }

    outputLines.push(line);
  }

  return outputLines.join("\n");
}
