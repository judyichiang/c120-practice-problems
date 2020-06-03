// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
// Examples

// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"]) 
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// ➞ []

// Notes

//     A string with a single character is trivially counted as a string with repeating identical characters.
//     If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let working = []
    let nah = []
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i][0]) {
        working.push(arr[i][j])
      }
      else {
        nah.push(arr[i][j])
      }
    }
    if (working.join('') === arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

