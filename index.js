import evaluate from "./lib/evaluate.js";

try {
  console.log(evaluate("(3 (4 2 mul) 5 add)"));
} catch (err) {
  console.error(err);
}
