// GCD and LCM(Part 1)
// Create a function that takes two numbers as arguments and returns the GCD of the two numbers.

//   Examples
// gcd(3, 5) ➞ 1

// gcd(14, 28) ➞ 14

// gcd(4, 18) ➞ 2
// Notes
// GCD looks at all the divisors of each number and finds the greatest one.


function gcd(a, b) {
  let result = [];
  let result2 = [];
  for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
      result.push(i)
    }
  }
  for (let j = 0; j <= b; j++) {
    if (b % j === 0) {
      result2.push(j)
    }
  }
  for (let k = result.length - 1; 0 <= k; k--) {
    for (let l = result2.length - 1; 0 <= l; l--) {
      if (result[k] === result2[l]) {
        return result2[l]
      }
    }
  }
}

function gcd(a, b) {
  if (a === b) {
    return a
  }
  for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i
    }
  }
}

function gcd(a, b) {
  // if (b == 0)
  //   return a;
  // else
  //   return gcd(b, (a % b));
  let remainder;
  while ((a % b) > 0) {
    remainder = a % b;
    a = b
    b = remainder
  }
  return b
}
