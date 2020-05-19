// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

//Pseudocode
//Make a variable that is an empty array to store the resulting string
//Use a for loop to loop through the provided string
//Add and assign the string values at each index, push the result of this to the empty array
//return the array converted into a continuous string

function doubleChar(str) {
  let resultArr = []
  for (let i = 0; i < str.length; i++) {
    resultArr.push(str[i] += str[i])
  }
  return resultArr.join('')
}

doubleChar("String")


// resultArr = ["SS", "tt", "rr"]
// str.length = 6
// i = 2
// str[i] = S
//"SSttrr"