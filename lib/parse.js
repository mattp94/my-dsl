import { toTokens } from "./parsing/lexical.js";
import { toAst } from "./parsing/semantic.js";
import { toCst } from "./parsing/syntax.js";

export default (text) => {
  const tokens = toTokens(text);
  const cst = toCst(tokens);
  const ast = toAst(cst);

  return ast;
};
