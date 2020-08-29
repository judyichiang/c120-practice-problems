// Create a function that takes a string and returns the sum of the vowels, where some vowels are considered numbers.
// Vowel	Number
// A	4
// E	3
// I	1
// O	0
// Examples
// sumOfVowels("Let\'s test this function.") ➞ 8
// sumOfVowels("Do I get the correct output?") ➞ 10
// sumOfVowels("I love edabit!") ➞ 12
// Notes
// Vowels are case-insensitive (e.g. A = 4 and a = 4).

// Write a function called sumOfVowels that takes a parameter as a string
// Create an object with the property key value pairs of vowels and numbers, respectively
// variable to be the sum number storage
// for loop to iterate through the string, when the string index is a vowel check against the object for the corresponding number
// Add to sum accordingly, return the sum

function sumOfVowels(str) {
	const vowels = {'A': 4, 'E': 3, 'I': 1, 'O': 0}
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    const upperChar = str[i].toUpperCase()
    if (vowels[upperChar]) sum += vowels[upperChar]
  }
  return sum
}

// https://edabit.com/challenge/PrvFxnBvedPweuK2E