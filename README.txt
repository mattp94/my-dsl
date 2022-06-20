EXAMPLE
    (3 (4 2 mul) 5 add)

LEXICAL RULES
    whitespace   -> \s+
    leftBracket  -> "("
    rightBracket -> ")"
    number       -> \d+
    operator     -> "add" | "mul"

GRAMMAR RULES
    expression   -> leftBracket operand{2,} operator rightBracket
    operand      -> number | expression
