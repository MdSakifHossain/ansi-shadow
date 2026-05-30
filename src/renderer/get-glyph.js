import { FONT } from "../glyphs/ansi-shadow.js";

export function getGlyph(character) {
  if (typeof character !== "string") {
    return FONT.unknown;
  }

  return FONT[character] || FONT.unknown;
}
