// Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
//     Array
//     Object
//     String
//     Number
//     Boolean
//     Null
//     Undefined
//     Date
// Examples
// dataType([1, 2, 3, 4]) ➞ "array"
// dataType({key: "value"}) ➞ "object"
// dataType("This is an example string.") ➞ "string"
// dataType(new Date()) ➞ "date"
// Notes
// Return the name of the data type as a lowercase string.

//Jerry
function dataType(value) {
  if (Array.isArray(value) === true) {
      return "array"
  } else if (value === null) {
      return "null"
  } else if (value instanceof Date === true) {
      return "date"
  }
    return typeof value
}

//Tracy
function dataType(value) {
  if (Array.isArray(value)) {
      return "array"
  } else if (value instanceof Date) {
      return 'date'
  } else if (value === null) {
      return 'null'
  } else {
      return typeof value
  }
}