// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.
// Examples
// asciiSort(["hey", "man"]) ➞ "man"
// // ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// // ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
// asciiSort(["majorly", "then"]) ➞ "then"
// asciiSort(["victory", "careless"]) ➞ "victory"
// Notes
// Both words will have strictly different ASCII sums.

//Jerry
function asciiSort(arr) {
  let word1 = arr[0].split("")
  let word2 = arr[1].split("")
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < word1.length; i++) {
    total1 += word1[i].charCodeAt()
  }
  for (let j = 0; j < word2.length; j++) {
    total2 += word2[j].charCodeAt()
  }
  if (total1 > total2) {
    return arr[1]
  } else return arr[0]
}
