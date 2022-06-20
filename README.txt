EXAMPLE
    (3 (4 2 mul) 5 add)

LEXICAL RULES
    "(" ")" number operator whitespace

GRAMMAR RULES
    expression -> "(" operand{2,} operator ")"
    operand -> number | expression
