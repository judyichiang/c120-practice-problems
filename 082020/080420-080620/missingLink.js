Date 8/06/2020
https://edabit.com/challenge/M6hcm6ezCoRBbANQr

// Jasmine
Jasmine!Today at 3:22 PM
function missing(arr) {
  var difference = arr[1] - arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] - difference !== arr[i]) {
      return (arr[i + 1] - difference);
    }
  }
}

//Jack
function missing(arr) {
  let diff = (arr[arr.length - 1] - arr[0]) / arr.length
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) !== diff) return arr[i] + diff
  }
}
