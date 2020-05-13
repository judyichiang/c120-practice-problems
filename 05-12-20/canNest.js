// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
//     arr1's min is greater than arr2's min.
//     arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// Notes
// Note the strict inequality (see example #3).

function canNest(arr1, arr2) {
	let arr1Smol = Math.min(...arr1)
  let arr2Smol = Math.min(...arr2)
  let arr1Big = Math.max(...arr1)
  let arr2Big = Math.max(...arr2)
  
  if (arr1Smol > arr2Smol && arr1Big < arr2Big){
    return true
  } else return false
}

//Complete by: Jerry