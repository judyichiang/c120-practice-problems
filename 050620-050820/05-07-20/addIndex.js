// Add the Index
// Given an array of numbers, create a function which returns the same array but with each index
// elements index in the array added to itself. This means you add 0 to the number at index 0,
// add 1 to the number at index 1, etc...
// input = [1, 2, 3, 4, 5]
// output = [1, 3, 5, 7, 9]

//Pseudocode
//Use a for loop to loop through the index
//With each index add the index number as a number to the index value
//return the array

function addIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += i
  }
  return arr
}

//i = 2
//arr[i] = 3
//arr.length = 5
//arr = [1, 3, 5]
addIndex([1, 2, 3, 4, 5]);

//Challenger Blake
//Completed by Jack
