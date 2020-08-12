// Create a function that capitalizes the last letter of every word.
// Examples

// capLast("hello") ➞ "hellO"

// capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"

// capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"

// Notes

// There won't be any cases of punctuation in the tests.

//Jerry
function capLast(txt) {
  let split = txt.split(" ")
  let string = ""
  let string2 = ""
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      if (j === split[i].length - 1) {
        string += split[i][j].toUpperCase() + " "
      } else {
        string += split[i][j]
      }
    }
    for (let i = 0; i < string.length - 1; i++) {
      string2 += string[i]
    }
    return string2
  }
}
function capLast(txt) {
  let newArr = txt.split(" ")
  
  let map = newArr.map(x => x.slice(0, -1) + x.slice(-1).toUpperCase()).join(" ")

  return map
}

//Tracy
function capLast(txt) {
  let splitted = txt.split(' ')
  let sentence = (splitted.map(x => " " + x.slice(0, x.length - 1) + x[x.length - 1].toUpperCase())).join('')
  return sentence.slice(1, sentence.length)
}
function capLast(txt) {
  let splitted = txt.split(' ')
  let container = ''
  for (let i = 0; i < splitted.length; i++) {
    for (let j = 0; j < splitted[i].length; j++) {
      if (!splitted[i][j + 1]) {
        container += splitted[i][j].toUpperCase() + ' '
      } else {
        container += splitted[i][j]
      }
    }
  }
  return container.slice(0, container.length - 1)
}