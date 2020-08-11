// Create a function that takes a string and returns a string in which each character is repeated once.

//   Examples
doubleChar("String")
//  "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings.Don't worry about spaces, special characters or numbers. They're all considered valid characters.


//create a function that takes in a string
//create a variable that holds the new string value
//iterate through the string given using for loop
//store value into variable
//manipulate the string given and multiply the indexed value twice
//push valued variable into new string
//return new string

function doubleChar(str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString
}

//Challenger Judy
//Completed by Tracy
