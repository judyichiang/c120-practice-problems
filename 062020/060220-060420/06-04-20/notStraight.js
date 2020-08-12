// https://edabit.com/challenge/WMorR7e2z3AkoesJC

// In this challenge, you have to establish if the digits of a given number form a straight arithmetic sequence(either increasing or decreasing).A straight sequence has an equal step between every pair of digits.

// Given an integer n, implement a function that returns:

// "Not Straight" if n is lower than 100 or if its digits are not an arithmetic sequence.
// "Trivial Straight" if n has a single repeating digit.
// An integer being the step of the sequence if the n digits are a straight arithmetic sequence.
//   Examples
// straightDigital(123) ➞ 1
// // 2 - 1 = 1 | 3 - 2 = 1

// straightDigital(753) ➞ -2
// // 5 - 7 = -2 | 3 - 5 = -2

// straightDigital(666) ➞ "Trivial Straight"
// // There's a single repeating digit (step = 0).

// straightDigital(124) ➞ "Not Straight"
// // 2 - 1 = 1 | 4 - 2 = 2
// // A valid sequence has always the same step between its digits.

// straightDigital(99) ➞ "Not Straight"
// // The number is lower than 100.
// Notes
// The step of the sequence can be either positive or negative(see example #2).
//   Trivia: there are infinite straight digital numbers, but only 96 of them are made of at least two different digits.

//Melissa
function straightDigital(number) {
  if (number < 100) {
    return "Not Straight";
  }
  number = number + "";
  var difference = number[1] - number[0];
  console.log(difference);

  for (var i = 1; i + 1 < number.length; i++) {
    if (difference !== number[i + 1] - number[i]) {
      return "Not Straight";
    }
  }
  if (difference == 0) {
    return "Trivial Straight";
  }
  return difference;
}

// check difference between 0th and 1st digits
// if difference is 0, increment index and check for next difference
// ("not straight" if not 0, "trivial straight" if all 0)
// if difference is >0, increment index and check for next difference
// ("not straight" if different difference; return difference if same difference)
