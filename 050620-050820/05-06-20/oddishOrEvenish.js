// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
// Completed by Jack
// Create a function that determines whether a number is Oddish or Evenish.A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.If a number is Oddish, return "Oddish".Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"

function oddishOrEvenish(num) {
  let result = '' + num;
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += Number(result[i])
  }
  if (sum % 2 === 1) return 'Oddish'
  else return 'Evenish'
}

oddishOrEvenish(4433)

//Challenger Judy
// Completed by Jack
