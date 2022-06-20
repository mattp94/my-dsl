import { CstParser } from "chevrotain";

import { SyntaxError } from "../errors.js";
import tokens, {
  leftBracket,
  number,
  operator,
  rightBracket,
} from "./tokens.js";

class Parser extends CstParser {
  constructor() {
    super(tokens);

    this.RULE("expression", () => {
      this.CONSUME(leftBracket);

      this.SUBRULE1(this.operand);

      this.AT_LEAST_ONE(() => {
        this.SUBRULE2(this.operand);
      });

      this.CONSUME(operator);

      this.CONSUME(rightBracket);
    });

    this.RULE("operand", () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(number);
          },
        },
        {
          ALT: () => {
            this.SUBRULE(this.expression);
          },
        },
      ]);
    });

    this.performSelfAnalysis();
  }
}

export const parser = new Parser();

export const toCst = (tokens) => {
  parser.input = tokens;

  const cst = parser.expression();

  if (parser.errors.length > 0) {
    throw new SyntaxError(
      parser.errors.map((error) => error.message).join(", ")
    );
  }

  return cst;
};
