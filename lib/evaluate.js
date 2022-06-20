import parse from "./parse.js";

const reduce = (node) => {
  const isAddition = node.operator === "add";

  return node.operands.reduce(
    (accumulator, operand) => {
      const number = typeof operand === "number" ? operand : reduce(operand);

      if (isAddition) {
        accumulator += number;
      } else {
        accumulator *= number;
      }

      return accumulator;
    },
    isAddition ? 0 : 1
  );
};

export default (text) => {
  const ast = parse(text);
  const value = reduce(ast);

  return value;
};
