/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an resultay. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function (string) {
  // Your code here.
  var result = [];

  var findAnagrams = function (anagram, str) {
    if (anagram.length === string.length) {
      result.push(anagram);
    } else {
      for (var i = 0; i < str.length; i++) {
        findAnagrams(
          anagram + str[i],
          str.slice(0, i).concat(str.slice(i + 1))
        );
      }
    }
  };
  findAnagrams("", string);
  
  return result;
};

allAnagrams("cba") // ["cba", "cab", "bca", "bac", "acb", "abc"]
