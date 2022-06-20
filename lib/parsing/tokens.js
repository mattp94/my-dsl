import { createToken, Lexer } from "chevrotain";

export const whitespace = createToken({
  name: "whitespace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

export const leftBracket = createToken({
  name: "leftBracket",
  pattern: /\(/,
});

export const rightBracket = createToken({
  name: "rightBracket",
  pattern: /\)/,
});

export const number = createToken({
  name: "number",
  pattern: /\d+/,
});

export const operator = createToken({
  name: "operator",
  pattern: /add|mul/,
});

export default [whitespace, leftBracket, rightBracket, number, operator];
