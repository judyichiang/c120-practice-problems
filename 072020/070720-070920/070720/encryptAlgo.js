// Make a function that encrypts a given input with these steps:
// Input: "apple"
// Step 1: Reverse the input: "elppa"
// Step 2: Replace all vowels using the following chart:
// a => 0
// e => 1
// i => 2
// o => 2
// u => 3
// // "1lpp0"
// Step 3: Add "aca" to the end of the word: "1lpp0aca"
// Output: "1lpp0aca"
// Examples
// encrypt("banana") ➞ "0n0n0baca"
// encrypt("karaca") ➞ "0c0r0kaca"
// encrypt("burak") ➞ "k0r3baca"
// encrypt("alpaca") ➞ "0c0pl0aca"
// Notes
// All inputs are strings, no uppercases and all output must be strings.

//Tracy
function encrypt(word) {
  let newWord = ''
  let acaCont = 'aca'
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === 'a') {
      newWord += '0'
    } else if (word[i] === 'e') {
      newWord += '1'
    } else if (word[i] === 'i') {
      newWord += '2'
    } else if (word[i] === 'o') {
      newWord += '2'
    } else if (word[i] === 'u') {
      newWord += '3'
    } else {
      newWord += word[i]
    }
  }
  return newWord + acaCont
}

//Jerry
function encrypt(word) {
  let result = "";
  let replace = "";
  for (let i = word.length - 1; 0 <= i; i--) {
    result += word[i]
  }
  for (let j = 0; j < result.length; j++) {
    if (result[j] === "a") {
      replace += "0"
    } else if (result[j] === "e") {
      replace += "1"
    } else if (result[j] === "i") {
      replace += "2"
    } else if (result[j] === "o") {
      replace += "2"
    } else if (result[j] === "u") {
      replace += "3"
    } else replace += result[j]
  }
  return replace + "aca"
}
