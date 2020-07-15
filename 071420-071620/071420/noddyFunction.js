// Noddy has written a mysterious function which takes in a word and returns true if it's passed a specific test. Solve the riddle of what Noddy's function is by having a look at some of the examples below.
// Examples
// noddyFunction("FANTASTIC") ➞ true
// noddyFunction("wonderful") ➞ false
// noddyFunction("NODDY") ➞ false
// Notes
//     Check the Tests tab for more examples.
//     This isn't really a coding challenge, more of a fun riddle ;)

//Judy
function noddyFunction(str) {
  for(let i=0; i< str.length; i++){
      if(str[i] === "d" ||str[i] === "D"  ){
          return false
      }
  }
  return true;    
}

//Jerry
function noddyFunction(str) {
  return !/d/i.test(str)
}

//Tracy