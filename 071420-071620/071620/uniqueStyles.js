// https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values.

// Write a function that returns true if an array is positive dominant.

//   Examples
// [1, 1, 1, 1, -3, -4]➞ false
// // there is only 1 unique positive value (1)
// // there are 2 unique negative values (-3, -4)

// [5, 99, 832, -3, -4]➞ true

// [5, 0]➞ true

// [0, -4, -1]➞ false
// Notes
// 0 neither counts as a positive nor a negative value.

function isPositiveDominant(a) {
  let counter = 0;
  let counter2 = 0;
  let uniqueArray = [];
  for (i = 0; i < a.length; i++) {
    if (uniqueArray.indexOf(a[i]) === -1) {
      uniqueArray.push(a[i]);
    }
  }
  console.log(uniqueArray)

  for (let i = 0; i < uniqueArray.length; i++) {
    if (uniqueArray[i] > 0) {
      counter++
    }
    if (uniqueArray[i] < 0) {
      counter2++
    }
  }
  if (counter === counter2) {
    return false
  }
  if (counter >= counter2) {
    return true
  } else return false
}

function isPositiveDominant(a) {
  let uniques = []
  let trash = []
  let pos = 0;
  let neg = 0
  for (let i = 0; i < a.length; i++) {
    if (uniques.includes(a[i])) {
      trash.push(a[i])
    } else {
      uniques.push(a[i])
    }
  }
  for (let i = 0; i < uniques.length; i++) {
    if (uniques[i] > 0) {
      pos++
    } else if (uniques[i] < 0) {
      neg++
    }
  }
  if (pos > neg) {
    return true
  } else {
    return false
  }
}
