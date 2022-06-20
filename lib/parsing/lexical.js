import { Lexer } from "chevrotain";

import { LexicalError } from "../errors.js";
import tokens from "./tokens.js";

const lexer = new Lexer(tokens);

export const toTokens = (text) => {
  const { tokens, errors } = lexer.tokenize(text);

  if (errors.length > 0) {
    throw new LexicalError(errors.map((error) => error.message).join(", "));
  }

  return tokens;
};
