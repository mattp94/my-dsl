export class LexicalError extends Error {
  constructor(message) {
    super(message);

    this.name = "LexicalError";
  }
}

export class SyntaxError extends Error {
  constructor(message) {
    super(message);

    this.name = "SyntaxError";
  }
}
