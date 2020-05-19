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


// ANOTHER WAY TO DO IT (WITHOUT METHODS)

function canNest(arr1, arr2) {
	let max = arr1[0];
  let min = arr1[0];
  let max2 = arr2[0];
  let min2 = arr2[0];

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] < min ) {
			min = arr1[i]
		}	
    if (arr1[i] > max ) {
			max = arr1[i]
		}	
	}

  for (let j = 0; j < arr2.length; j++) {
		if (arr2[j] < min2 ) {
			min2 = arr2[j]
		}	
    if (arr2[j] > max2 ) {
			max2 = arr2[j]
		}	
	}

  if (max < max2 && min > min2){
    return true
  } else 
    return false
}

function canNest(arr1, arr2) {
  function findMinMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return [min, max]
  }
  const arr1MinMax = findMinMax(arr1)
  const arr2MinMax = findMinMax(arr2)
  console.log(arr1MinMax)
  console.log(arr2MinMax)
  return arr1MinMax[0] > arr2MinMax[0] && arr1MinMax[1] < arr2MinMax[1]
} 

//Create a function that returns true if the first array can be nested inside the second.

//arr1 can be nested inside arr2 if:

//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.
//Examples
canNest([1, 2, 3, 4], [0, 6])

//canNest([3, 1], [4, 0])

//canNest([9, 9, 8], [8, 9])

//canNest([1, 2, 3, 4], [2, 3])
//Notes
//Note the strict inequality (see example #3).

//canNest([-7, 2, 3, 50, 4, 9, 19], [0, 10])
