// Write a function that counts how many concentric layers a rug.
// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2
// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3
// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5
// Notes
//     Multiple layers can share the same component so count them separately (example #2).
//     Layers will be horizontally and vertically symmetric.
//     There will be at least one layer for each rug.

//Jack
function countLayers(rug, count = 1) {
	const midStr = rug[Math.floor(rug.length / 2)]
  for (let i = 0; i < Math.floor(midStr.length / 2); i++) {
    if (midStr[i] !== midStr[i + 1]) count++
  }
  return count
}

//Tracy
function countLayers(rug) {
  let onion = (rug.length +1) / 2
  if (rug[onion] === rug[onion-1]){
      if(rug.length === 3 && rug[rug.length-1] === rug[rug.length-2]){
          return onion-1
      }
      if(rug[rug.length-1] === rug[rug.length-2]){
          return onion-2
      }
      return onion -1
  } else {
      return onion
  }
}