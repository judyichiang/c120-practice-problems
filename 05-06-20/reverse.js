// Completed by Tracy
// Create a Function that Reverses a String:
// Input:
// str = 'the quick brown fox';
// Parameter: 'You cant use any str.methods'
// output = 'xof nworb kciuq eht'

// Psuedo code your steps
// design algorithm
// trace

function reverse(str) {
  var newStr = str.split("")
  console.log(newStr)
  var result = []
  for (var i = newStr.length - 1; i >= 0; i--) {
    result.push(newStr[i])
  }
  return result.join("")
}
