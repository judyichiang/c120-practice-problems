// Anagram - no methods

//Judy
function anagram(param1, param2) {
  if (param1.length !== param2.length) return false
  function sort(str) {
    const strArr = [...str]
    let tmp;
    for (let i = 0; i < strArr.length; i++) {
      for (let j = i + 1; j < strArr.length; j++) {
        if (strArr[i] > strArr[j]) {
          tmp = strArr[i]
          strArr[i] = strArr[j]
          strArr[j] = tmp
        }
      }
    }
    return strArr
  }
  const sorted1 = sort(param1)
  const sorted2 = sort(param2)
  for (let k = 0; k < sorted1.length; k++) {
    if (sorted1[k] !== sorted2[k]) return false
  }
  return true
}

//Judy
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const result = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    result[char] = result[char] ? result[char] += 1 : result[char] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!result[char]) {
      return false;
    }
    else {
      result[char] = -1;
    }
  }
  return true;
}
