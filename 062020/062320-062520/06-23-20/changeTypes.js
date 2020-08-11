// Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
//   Concatenates "!" to all strings and capitalises them.
// Changes all boolean values to its opposite.
//   Examples
// changeTypes(["a", 12, true]) ➞["A!", 13, false]

// changeTypes([13, "13", "12", "twelve"]) ➞[13, "13!", "12!", "Twelve!"]

// changeTypes([false, "false", "true"]) ➞[true, "False!", "True!"]
// Notes
// There won't be any float values.
// You won't get strings with both numbers and letters in them.
// Although the task may be easy, try keeping your code as clean and as readable as possible!

function changeTypes(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
      result.push(arr[i])
    }
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      result.push(arr[i] + 1)
    }
    if (typeof arr[i] === "boolean") {
      result.push(!arr[i])
    }
    if (typeof arr[i] === "string") {
      result.push(arr[i][0].toUpperCase() + arr[i].slice(1) + "!")
    }
  }
  return result
}
