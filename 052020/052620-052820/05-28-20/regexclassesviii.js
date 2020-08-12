// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Extract the addresses from this string:
// const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
// // ["123 Redding Dr.", "1560 Knoxville Ave", "3030 Norwalk Dr.", "5 South St."]
// Write the regular expression that matches all street addresses. All street addresses begin with a number. Use the character class \d in your expression.
// Notes
// Check the Resources tab for details on character classes if you're stuck.

const REGEXP = /\d+\D+./g