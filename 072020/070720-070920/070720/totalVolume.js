// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
// Examples
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
// totalVolume([1, 1, 1]) ➞ 1
// Notes
//     You will be given at least one box.
//     Each box will always have three dimensions included.

//Store the arguments given into an array
//Map over the array of arrays and apply the reduce function on each subarray
//With the result of each sub array, reduce again into a single sum

//Jack
function totalVolume(...boxes) {
	const container = [...boxes]
  // return container.map(subarray => subarray.reduce((cur, acc) => cur * acc)).reduce((cur, acc) => cur + acc)
  let result = 0
  const sum = []
  for (let i = 0; i < container.length; i++) {
    let product = 1
    for(let j = 0; j < container[i].length; j++) {
      product *= container[i][j]
    }
    sum.push(product)
  }
  for (let k = 0; k < sum.length; k++) {
    result += sum[k]
  }
  return result
}

//Jerry
function totalVolume(...boxes) {
  let flat = boxes.flat()
  let result = 0;
  for (let i = 0; i < flat.length; i+=3){
      result += flat[i]* flat[i+1] * flat[i+2]
  }
  return result
}

//Tracy
function totalVolume(...boxes) {
  let box = 0;
  for (let i=0; i<boxes.length; i++){
    box += boxes[i][0] * boxes[i][1] * boxes[i][2]
}
return box
}