// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples
// reverseAndNot(123) ➞ 321123

// reverseAndNot(123456789) ➞ 987654321123456789

// turn integer into string
// need a container to store the integer in reverse
// loop through length of string
// concat string
// turn string bakc into number

function reverseNumber(num) {
  storage = "" + num
  let reverseStorage = "";
  for (i = storage.length - 1; i >= 0; i--) {
    reverseStorage += storage[i]
  }
  return Number(reverseStorage + storage)
}

reverseNumber(12)
// i 0
// storage[i] 1
// reverseStorage 21


//Challenger Judy
// Completed by Jerry
