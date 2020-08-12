// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.
// Examples
// stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"
// stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"
// stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
// Notes
//     You may be asked to remove punctuation and spaces.
//     Return an empty string if every charcter is specified (see example #3).
//     All tests will be in lowercase.

function stripSentence(str, chars) {
  //Regex Solution
  // return str.replace(RegExp('['+chars+']', 'g'), '')
  //Rosetta Code Solution
  // const elem = (x, xs) => xs.indexOf(x) !== -1
  // return str.split('').filter(letter => !elem(letter, chars)).join('')
  const strArr = [...str]
  const result = []
  for (let i = 0; i < strArr.length; i++) {
    if (!(chars.indexOf(strArr[i]) !== -1)) result.push(strArr[i])
  }
  return result.join('')
}
