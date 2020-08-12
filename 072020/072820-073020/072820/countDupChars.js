// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.
// Examples

// duplicates("Hello World!") ➞ 3

// duplicates("foobar") ➞ 1

// duplicates("helicopter") ➞ 1

// duplicates("birthday") ➞ 0
// // If there are no duplicates, return 0

// Notes

// Make sure to only start counting the second time a character appears.

function duplicates(str) {
  let counter =0;
  let arr = str.split("").sort()
  for(let i =0; i< arr.length ; i++){
      if(arr[i]=== arr[i+1]){
          counter ++
      }
  }
  return counter    
}