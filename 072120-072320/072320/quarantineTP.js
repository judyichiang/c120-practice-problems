// Can you spare a square?
// Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
// Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
// Create a function that will receive an object with two key/values:
//     people ⁠— Number of people in the household.
//     tp ⁠— Number of rolls.
// Return a statement telling the user if they need to buy more TP!
// Examples
// tpChecker({people: 4, tp: 1}) ➞ "Your TP will only last 2 days, buy more!"
// tpChecker({people: 3, tp: 20}) ➞ "Your TP will last 58 days, no need to panic!"
// tpChecker({people: 4, tp: 12} ➞ "Your TP will last 26 days, no need to panic!"
// Notes
// Stay safe, and happy coding!

//Jerry
function tpChecker(home) {
  let amount = Math.floor((home.tp *500)/(home.people*57))
  if ( amount > 11 ) {
      return `Your TP will last ${amount} days, no need to panic!`
  } else return `Your TP will only last ${amount} days, buy more!`
}

//Tracy
function tpChecker(home) {
  let tpSheets = home.tp * 500;
  let pplSheets = home.people * 57;
  let days = Math.floor(tpSheets/pplSheets);
  if (days < 15) {
    return `Your TP will only last ${days} days, buy more!`
  } else {
    return `Your TP will last ${days} days, no need to panic!`
  }
}