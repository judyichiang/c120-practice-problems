// Write a function that changes every letter to the next letter:

//     "a" becomes "b"
//     "b" becomes "c"
//     "d" becomes "e"
//     and so on ...

// Examples

// move("hello") ➞ "ifmmp"

// move("bye") ➞ "czf"

// move("welcome") ➞ "xfmdpnf"

// Notes

// There will be no z's in the tests.

//Judy
function move(word) {
  let result =""
  for(let i =0; i< word.length;i++){
      let num = word.charCodeAt(i)
      result += String.fromCharCode(num+1)
  }
return result    
}