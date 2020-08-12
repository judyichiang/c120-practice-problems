// https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk

// Product of Digits of Sum
// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

//   Examples
// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0) ➞ 0

// sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
// Notes
// The input of the function is at least one number.

// Both Jerry's Solution
// Solution #1:
function sumDigProd() {
  let arr = Array.from(arguments)
  let sum = 0
  let sum2 = 1
  let sum3 = 1
  let sum4 = 1
  let sum5 = 1
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  let hi = sum + ""
  for (let i = 0; i < hi.length; i++) {
    sum2 *= hi[i]
  }

  let hello = sum2 + ""
  for (let i = 0; i < hello.length; i++) {
    sum3 *= hello[i]
  }

  let dog = sum3 + ""
  for (let i = 0; i < dog.length; i++) {
    sum4 *= dog[i]
  }

  let cat = sum4 + ""
  for (let i = 0; i < cat.length; i++) {
    sum5 *= cat[i]
  }

  return sum5
}

// Solution #2
function sumDigProd() {
  let arr = Array.from(arguments)
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  do {
    let string = sum + ""
    sum = 1
    for (let i = 0; i < string.length; i++) {
      sum *= string[i]
    }
  }
  while (sum > 10)

  return sum
}
