https://edabit.com/challenge/cEcDMjnmdnYYosHzQ

Arrow Pattern
Create a function that creates a pattern as a 2D array for a given number.

Examples
 >
 >>
 >>>
 >>
 >

arrow(3) ➞ [">", ">>", ">>>", ">>", ">"]

 >
 >>
 >>>
 >>>>
 >>>>
 >>>
 >>
 >

arrow(4) ➞ [">", ">>", ">>>", ">>>>", ">>>>", ">>>", ">>", ">"]
Notes
Function argument will always be a number greater than 0.

//Jerry
function arrow(n) {
    let result = [];
  let arrow = ">"
  let apple = 2
  if (n % 2 === 0){
    apple = 1
  } else apple =2
  for (let i = 0; i < n; i++){
    result.push(arrow)
    arrow += ">"
  }
  for (let j = n - apple; j>=0; j--){
    result.push(result[j])
  }
  return result
}

//Jack

function arrow(n, result = []) {
  for (let i = 1; i <= n; i++) result.push('>'.repeat(i))
  for (let ii = n % 2 === 0 ? n : n - 1 ; ii > 0; ii--) {
    result.push('>'.repeat(ii))
  }
  return result
}

//Judy
function arrow(n) {
  let result = [];
  if (n % 2 !== 0) {
    let arrow = "";
    for (let i = 0; i < n; i++) {
      arrow += ">";
      result.push(arrow);
    }
    let nextArrow = result[result.length - 1];
    for (let k = n - 1; k > 0; k--) {
      nextArrow = nextArrow.slice(0, -1);
      result.push(nextArrow);
    }
  } else {
    let arrow = "";
    for (let i = 0; i < n; i++) {
      arrow += ">";
      result.push(arrow);
    }
    let nextArrow = result[result.length - 1];
    result.push(arrow);
    for (let k = n - 1; k > 0; k--) {
      nextArrow = nextArrow.slice(0, -1);
      result.push(nextArrow);
    }
  }
  return result;
}
