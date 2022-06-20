import { parser } from "./syntax.js";

const CstVisitor = parser.getBaseCstVisitorConstructor();

class Visitor extends CstVisitor {
  constructor() {
    super();
    this.validateVisitor();
  }

  expression(ctx) {
    return {
      operator: ctx.operator[0].image,
      operands: ctx.operand.map((item) => this.visit(item)),
    };
  }

  operand(ctx) {
    return ctx.number
      ? parseInt(ctx.number[0].image, 10)
      : this.visit(ctx.expression);
  }
}

const visitor = new Visitor();

export const toAst = (cst) => {
  const ast = visitor.visit(cst);

  return ast;
};
