// A positive number's population is the number of 1s in its binary representation. An evil number has an even numbered population, whereas an odious number has an odd numbered population. Moreover, a number is pernicious if its population is a prime number.

// Create a function that takes a number as an argument and returns a sorted array of all its descriptors("Evil", "Odious", or "Pernicious").

//   Examples
// howBad(7) ➞["Odious", "Pernicious"]
// // binary = 111

// howBad(17) ➞["Evil", "Pernicious"]
// // binary = 10001

// howBad(23) ➞["Evil"]
// // binary = 10111
// Notes
// Notice how the example "111" is shown as a prime but in base - 10, "111" isn't prime (37 * 3). Convert it back to a "7", and it is.

function howBad(num) {
  let binary = (num).toString(2);
  let binaryStr = binary + ""
  let newNum = 0;
  let arr = []
  for (let i = 0; i < binaryStr.length; i++) {
    newNum += Number(binaryStr[i])
  }
  if (newNum % 2 === 0) {
    arr.push("Evil")
  }
  else if (newNum % 2 === 1) {
    arr.push("Odious")
  }
  function isPrime(newNum) {
    for (var j = 2; j < newNum; j++) {
      if (newNum % j === 0) return false;
    }
    return newNum > 1;
  }
  if (isPrime(newNum)) {
    arr.push("Pernicious")
  }
  return arr
}
