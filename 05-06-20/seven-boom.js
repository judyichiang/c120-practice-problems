// https://edabit.com/challenge/6R6gReGTGwzpwuffD
// Completed by Black
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array.Otherwise, return "there is no 7 in the array".
//   Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

const arr = [1, 2, 3, 4, 5, 97]
function whereIsSeven(arr) {
  for (let i = 0; i < arr.length; i++) {
    let check = '' + arr[i];
    for (let j = 0; j < check.length; j++) {
      if (check[j] === '7') {
        return "Boom!"
      }
    }
  }
  return "there is no 7 in the array";
}
whereIsSeven(arr);
