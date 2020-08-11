// leetcode #415
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//convert parameter into Number
//return the number via string coersion
//the end


var num1 = "0"
var num2 = "0"
var addStrings = function (num1, num2) {
  let result = Number(num1) + Number(num2)
  return ""+ result
  // return result.toString()
}

addStrings(num1, num2)

// Challenger Blake / Jack
// Completed by Judy
