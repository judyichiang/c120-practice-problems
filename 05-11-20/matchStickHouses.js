// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number(step) as an argument and returns the amount of matchsticks in that step.See step 1, 2 and 3 in the image above.
//   Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436
// Notes
// Step 0 returns 0 matchsticks.
// The input(step) will always be a non - negative integer.

//pseudocode
/*
create a function
write a base case for 1, because step one equals 6
then for each next step add 5
the return total
 */

function matchHouses(n){
  if(n==1){return 6}
  let result = 6;
  for(let i=2; i<=n; i++){
    result +=5
  }
  return result;
}

//matchHouses(87) //436
matchHouses(4) // 21

//1 = 6
//2 = 6 +5 =11
//3 = 11 + 5 = 16
//4 = 16 + 5 = 21


// Completed by Judy