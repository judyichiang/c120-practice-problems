// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.
// Examples
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]
// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]
// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]
// Notes
// N/A

//Use a for loop through the the first level of the array
//Loop again through the second level array
//Use an if conditional to check values for 1 or 0, if 1 assign the index value to 0 and vice versa
//Return the modified array

function reverseImage(image) {
  for (let i = 0; i < image.length; i++) {
    for (let ii = 0; ii < image[i].length; ii++) {
      if (image[i][ii] === 1) image[i][ii] = 0
      else image[i][ii] = 1
    }
  }
  return image
}