// Write a function that sorts a given array in an alternative fashion. The result should be a array sorted in ascending order (number then letter). Array will contain equal amounts of integer numbers and single characters.
// Examples
// alternateSort(["a", "b", "c", 1, 2, 3]) ➞ [1, "a", 2, "b", 3, "c"]
// alternateSort([-2, "f", "A", 0, 100, "z"]) ➞ [-2, "A", 0, "f", 100, "z"]
// alternateSort(["X", 15, 12, 18, "Y", "Z"]) ➞ [12, "X", 15, "Y", 18, "Z"]
// Notes
// N/A

//Jerry

function alternateSort(arr) {
  arr.sort()
  arr.sort((a, b) => a - b)
  let result = [];
  
for (let i = 0; i < arr.length/2; i++) {
      result.push(arr[i] )
      result.push(arr[i+ (arr.length/2)])
  }
  
  return result
}

//Jack
function alternateSort(arr) {
  let result = []
  const letters = arr.filter(letter => typeof letter === 'string').sort()
  const numbers = arr.filter(number => typeof number === 'number').sort((a, b) => a - b)
  let index = 0
  for (const item of numbers) {
    result.push(item)
    result.push(letters[index])
    index++
  }
  return result
}