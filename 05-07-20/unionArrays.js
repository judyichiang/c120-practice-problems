// Union Arrays
// Challenge: Given two arrays, create one array with all of the values of both and remove the duplicates.

var arr1 = [1, 2, 3, 4, 5, 3, 2, 4, 8];
var arr2 = [4, 5, 6, 7, 8];

https://repl.it/@wsugar/NaivePuzzlingCollaborativesoftware

// function unionArr(arr1, arr2) {
//   let sortedArr = arr1.concat(arr2).sort();
//   if (sortedArr.some((val, i) => sortedArr.indexOf(val) !== i)) return
//   for (let i = 0; i < sortedArr.length; i++) {
//     for (let j = 1; i > j;j++) {
//       if (sortedArr[i] === sortedArr[j]) {
//         sortedArr.splice(i, 1)
//       }
//     }
//   }
//   return sortedArr
// }
// unionArr(arr1, arr2);

var arr1 = [1, 2, 3, 4, 5, 3, 2, 4, 8];
var arr2 = [4, 5, 6, 7, 8];

function unionArrays(arr1, arr2) {
  var mergedArray = arr1.concat(arr2);

  var outputArray = [];

  for (var i = 0; i < mergedArray.length; i++) {
    var isUnique = false;
    var currNum = mergedArray[i];

    if (i == 0) {
      outputArray.push(currNum);
    }
    else {
      for (var o = 0; o < outputArray.length; o++) {
        var outNum = outputArray[o];
        if (currNum === outNum) {
          isUnique = false;
          break;
        }
        else {
          isUnique = true;
        }
      }
    }

    if (isUnique) {
      outputArray.push(currNum);
    }
  }
  return outputArray;
}
