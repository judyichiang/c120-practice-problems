// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
// Notes
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

//Pseudocode
//write a function that takes in an array as a parameter
//have an empty variable to hold empty array
//iterate through the array backwards
//push the values backwards into the variable
//return the result

function reverse(arr){
  let newArr =[];
  for(let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
  }
  return newArr
}

// i=2
// [4, 3, ]

 reverse([1, 2, 3, 4])

//Completed by: Tracy