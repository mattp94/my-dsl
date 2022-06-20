import repl from "node:repl";

import evaluate from "./lib/evaluate.js";

repl.start({
  eval: (cmd, context, filename, callback) => {
    try {
      callback(null, evaluate(cmd));
    } catch (err) {
      callback(err);
    }
  },
});
