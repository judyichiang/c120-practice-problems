// Write a function called "computeFactorialOfN".
// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.
// var output = computeFactorialOfN(3);
// console.log(output); // --> 6
// var output = computeFactorialOfN(4);
// console.log(output); // --> 24

//Pseudocode
//Declare a function called computeFactorialOfN that takes parameter of a natural number
//Make variable for result
//Use a for loop with the boundry of less than the natural number 
//With the for loop apply the formula of factorial which is
//n * (n - 1), assign the result to the variable
//return the result

function computeFactorialOfN(num) {
  let result = 1;
  // for (let i = 1; i <= num; i++) {
  //   result *= i
  // }
  let i = 1
  while (i <= num) {
    result *= i
    i++
  }
  return result
}

//num = 3

//i = 4
//result = 6

computeFactorialOfN(3)

//(1)  1
//(2)  1*2
//(3)  1*2*3

