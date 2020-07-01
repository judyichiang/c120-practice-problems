// Create a function that takes a string and replaces the vowels with another character.
//     a = 1
//     e = 2
//     i = 3
//     o = 4
//     u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1ri"
// Notes
// The input will always be in lowercase.

//Declare a function named replaceVowel
//Convert string into an array
//Declare an object to be used to reference each of the vowels and their numbers
//Loop through the string array
//Use an if condition to check against the vowels object, if true set each index that is equal to vowels object value
//Once the array has been processed return the array using join to convert back into a string

function replaceVowel(str) {
  const strArr = [...str]
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 }
  for (let i = 0; i < strArr.length; i++) {
    if (vowels[strArr[i]]) strArr[i] = vowels[strArr[i]]
  }
  return strArr.join('')
}

//Tracy
function replaceVowel(word) {
  let newWord = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
      newWord.push(1)
    }
    else if (word[i] === 'e') {
      newWord.push(2)
    }
    else if (word[i] === 'i') {
      newWord.push(3)
    }
    else if (word[i] === 'o') {
      newWord.push(4)
    }
    else if (word[i] === 'u') {
      newWord.push(5)
    }
    else {
      newWord.push(word[i])
    }
  }
  return newWord.flat().join('')
}

//Jerry
function replaceVowel(word) {
  let newWord = ""
  for (let i = 0; i < word.length; i++){
      if(word[i] === "a"){
          newWord += "1"
      } else if(word[i] === "e" ){
          newWord += "2"
      } else if (word[i] === "i" ){
          newWord += "3"
      } else if (word[i] === "o"){
          newWord += "4"
      } else if (word[i] === "u"){
          newWord += "5"
      } else newWord += word[i]
  }
  return newWord
}

//Judy
function replaceVowel(word) {
  let result =""
  for(let i =0; i< word.length; i++){
      if(word[i] === 'a'){
          result +="1"
      }
      else if (word[i] === "e"){
          result +="2"
      }
      else if(word[i] === "i"){
          result +="3"
      }
      else if(word[i] === "o"){
          result +="4"
      }
      else if(word[i]=== "u"){
          result +="5"
      }
      else{ result +=word[i]}
  }
  return result
}