// Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.
// Examples
// toBinary(12) ➞ 1100
// toBinary(0) ➞ 0
// toBinary(101) ➞ 1100101
// Notes
// 0 <= n <= 101


function Stack() {
  let data = [];
  this.push = function (item) {
    data.push(item);
  };
  this.isEmpty = function () {
    return !data.length;
  };
  this.pop = function () {
    return data.pop();
  };
  this.peek = function () {
    return data[data.length - 1];
  };
  this.size = function () {
    return data.length;
  };
}

function toBinary(num) {
  let stack = new Stack();
  let binaryResult = ''
  let nextNumber = num
  do {
    let remainder = nextNumber % 2
    stack.push(remainder)
    nextNumber = Math.floor(nextNumber / 2)
  } while (nextNumber !== 0)
  while (!stack.isEmpty()) {
    binaryResult += stack.pop()
  }
  return +binaryResult
}