// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

//   Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  var str = str.split(" ");
  console.log(str)
  var pig = ""
  for (var i = 0; i < str.length - 1; i++) {
    var a = str[i]
    var b = a[0];
    console.log(a.slice(1))
    pig += a.slice(1) + b + "ay ";
  }
  if (str[str.length - 1] === "!" || str[str.length - 1] === "?" || str[str.length - 1] === ".") {
    pig += str[str.length - 1]
  }
  else {
    var c = str[str.length - 1]
    var d = c[0]
    pig += c.slice(1) + d + "ay"
  }
  return pig;
}

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

pigIt('Hello world !');     // elloHay orldway !