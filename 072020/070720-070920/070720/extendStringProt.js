// Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:
//     .consonants(), which returns the number of consonants in a word when called.
//     .vowels(), which returns the number of vowels in a word when called.
// Examples
// "hello".consonants() ➞ 3
// "hello".vowels() ➞ 2
// "greatly".consonants() ➞ 5
// "greatly".vowels() ➞ 2
// "Smithsonian".consonants() ➞ 7
// "Smithsonian".vowels() ➞ 4
// Notes
//     Treat y as a consonant, not a vowel.
//     Upper vs. lower case does not matter.
//     Hint: See comments for another example if you get stuck.
// It is not mandatory for this exercise, but in general it is a good idea to double-check if there exists methods with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).


//Jack
String.prototype.consonants = function() {
  let count = 0
  const vowels = {a:1, e:1, i:1, o:1, u:1}
  for (let i = 0; i < this.length; i++) {
      if (!vowels[this[i]]) count++
  }
  return count
}

String.prototype.vowels = function() {
  let count = 0
  const vowels = {a:1, e:1, i:1, o:1, u:1}
  for (let i = 0; i < this.length; i++) {
      if (vowels[this[i]]) count++
  }
  return count
}

//Judy
String.prototype.consonants = function() {
  let count = 0
  for(i=0; i< this.length; i++){
      if(this[i].toLowerCase() !== 'a' && this[i].toLowerCase() !== 'e' && this[i].toLowerCase() !== 'i' && this[i].toLowerCase() !== 'o'&& this[i].toLowerCase() !== 'u'){
          count ++
      }       
  }
  return count
}

String.prototype.vowels = function() {
  let count = 0
  for(i=0; i< this.length; i++){
      if(this[i].toLowerCase() === 'a' || this[i].toLowerCase() === 'e' || this[i].toLowerCase() === 'i' || this[i].toLowerCase() === 'o'|| this[i].toLowerCase() === 'u'){
          count ++
      }       
  }
  return count
  
}