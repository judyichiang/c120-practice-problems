// Create a function that converts dates from one of five string formats:
//     "January 9, 2019" (MM D, YYYY)
//     "Jan 9, 2019" (MM D, YYYY)
//     "01/09/2019" (MM/DD/YYYY)
//     "01-09-2019" (MM-DD-YYYY)
//     "01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
// Examples
// convertDate("January 9, 2019") ➞ [1, 9, 2019]
// convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
// convertDate("01/09/2019") ➞ [1, 9, 2019]
// convertDate("01-09-2019") ➞ [1, 9, 2019]
// convertDate("01.09.2019") ➞ [1, 9, 2019]
// Notes
// You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.

//Judy
function convertDate(date) {
  let newDate = new Date(date)
    let month = newDate.getMonth() +1
    let day = newDate.getDate()
    let year = newDate.getYear() + 1900
    let result = [month, day, year]
    return result;    
}

//Jerry
function convertDate(date) {
  let house = new Date(date)
  let result = []
  let regex = /[a-z0-9]+/gi
  let horse = date.match(regex)
  result.push(house.getMonth()+1)
  for (let i = 1; i < horse.length; i++) {
      result.push(parseInt(horse[i]))
  }
  return result
}

//Tracy
function convertDate(date) {
  let arr = []
    let n = new Date(date)
  let month = n.getMonth() + 1
  let day = n.getDate()
  let year = n.getFullYear()
  return [month, day, year]
}

