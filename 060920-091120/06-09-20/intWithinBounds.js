https://edabit.com/challenge/YT2kXSMEtACPPk35R
// false if n is not an integer
// false if n equals or exceeds upper
// false if n is less than lower
function intWithinBounds(n, lower, upper) {
  return !(n >= upper || n < lower || Number.isInteger(n) === false)
}
// Challenger: Judy
// Completed: Melissa
