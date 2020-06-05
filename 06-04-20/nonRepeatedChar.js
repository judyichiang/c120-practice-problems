/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

function repeat(string) {
  let newWord = "";
  for (let i = 0; i < string.length; i++) {
    if (string[0] !== string[i]) {
      newWord += string[i];
      break;
    }
  }
  return newWord;
}

repeat("AACBDB");

function firstNonRepeatedCharacter(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      word += str[i + 1];
      break;
    }
  }
  return word;
}

firstNonRepeatedCharacter("ABA");
