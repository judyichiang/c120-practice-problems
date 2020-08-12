// The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.
// Examples

// On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].

// fibonacciSequence(0, 1) ➞ 1

// fibonacciSequence(1, 1) ➞ 2

// fibonacciSequence(1, 2) ➞ 3

// Notes

// This function will take no parameters.

//Jerry
function fibonacciSequence() {
  let result = [0,1]
  let i = 0
  do {
      result.push((result[i] + result[i+1]))
      i++
  }
  while (result[result.length -1] <= 144)
  return result
}

//Tracy
function fibonacciSequence() {
  let arr = [0, 1]
  for (let i=0; i<255; i++) {
      if ((arr[i] + arr[i+1]) < 255) {
          arr.push(arr[i] + arr[i+1])
      } else {
          break
      }
  }
  return arr
}