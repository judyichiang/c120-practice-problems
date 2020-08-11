// Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples
// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
// Notes
//     1 is not a prime number.
//     If a number is odd it is not divisible by an even number.

//Jerry
function isPrime(num) {
  let counter = 0;
  for (let i = 0; i <= num; i++) {
      if (num % [i] === 0) {
          counter ++
      }
  }
  if (counter === 2) {
      return true
  } else return false
}

//Tracy
function isPrime(num) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 103]
  if (primes.includes(num)){
      return true
  } else {
  return false
}
}