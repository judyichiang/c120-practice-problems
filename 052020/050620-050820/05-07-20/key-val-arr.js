Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

  Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞[["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞[["likes", 2], ["dislikes", 3], ["followers", 10]]



function objectToArray(obj) {
  const myArray = Object.entries(obj);
  return myArray;
}

//Challenger Judy
//Completed by Blake


// ----------------------------------------- other solutions
function objectToArray(obj) {
  var arr = [];
  for (var i in obj) {
    var newArr = [];
    newArr.push(i);
    newArr.push(obj[i])
    arr.push(newArr)
  }
  return arr;
}


function objectToArray(obj) {
  let finalArr = [];
  for (let key in obj) {
    finalArr.push([key, obj[key]]);
  }
  return finalArr
}
