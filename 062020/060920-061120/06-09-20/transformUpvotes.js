https://edabit.com/challenge/niTEsddTdE4gs4YGX
function transformUpvotes(str) {
  let word = str.split(" ")
  let newArray = []
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      if (word[i][j] === "k") {
        newArray.push((word[i].slice(0, -1)) * 1000)
      }
    }
    if (word[i].includes("k") === false) {
      newArray.push(+word[i])
    }
  }
  return newArray
}
// Challenger: Tracy
// Completed: Jerry
