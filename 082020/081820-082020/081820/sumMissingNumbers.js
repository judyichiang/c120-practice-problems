// https://edabit.com/challenge/8a2J9T4FM5fgSwn4w

// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers.

//   Examples
// sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// // 2 + 4 + 6 + 8 + 9

// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
// Notes
// The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

function sumMissingNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b)
  let count = 0
  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) {
      count += i
    }
  }
  return count
}

function sumMissingNumbers(arr) {
  let newArr = arr.sort((a, b) => a - b)
  let counter = 0

  for (let i = newArr[0]; i < newArr[newArr.length - 1]; i++) {
    counter += i
  }

  for (let j = 0; j < newArr.length - 1; j++) {
    counter -= newArr[j]
  }

  return counter
}

function sumMissingNumbers(arr) {
  arr = arr.sort((a, b) => a - b)
  // const missing = []
  // for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
  //   missing.push(i)
  // }
  // return missing.filter(ele => !arr.includes(ele)).reduce((cur, acc) => cur + acc, 0)
  const range = Array.from({ length: (arr[arr.length - 1] - arr[0]) }, (_, i) => arr[0] + (i * 1))
  return range.filter(ele => !arr.includes(ele)).reduce((cur, acc) => cur + acc, 0)
}
