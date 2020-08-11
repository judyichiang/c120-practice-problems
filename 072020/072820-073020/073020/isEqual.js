// Extend the global Array object with an`isEqual()` method
// Extend the global Array object to have an instance method called isEqual().The method should accept an array as the first argument, and a second optional argument that is a flag to ignore the order of the arrays.This second argument should default to false

// Examples
// [1, 2, 3].isEqual([1, 2, 3]) ➞ true

// [1, 2, 3].isEqual([1, 3, 2]) ➞ false

// [1, 2, 3].isEqual([1, 3, 2], true) ➞ true
// Notes
// This method does not need to compare Arrays, Objects, and non - primitives.It just needs to consider numbers, booleans, and strings.

Array.prototype.isEqual = function (arr, someBoolean) {
  if (someBoolean) {
    return someBoolean
  }
  for (let i = 0; i < this.length; i++) {
    if (arr[i] !== this[i]) {
      return false
    }
  }
  return true
}
