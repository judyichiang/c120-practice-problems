// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".
// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"



//Tracy
function inputAddress(address){
  let newAddress = ""
  for (let i = 0; i < address.length; i++){
    for (let j = 0; j < address[i].length; j++) {
      if (address[i][j] === "."){
      let thing = address[i][j] = "[.]"
        newAddress += thing
      }
      else {
        newAddress += address[i][j]
      }
    }
  }
  return newAddress
}

inputAddress("255.100.50.0")

//Judy
function defang(str){
  let result ="";
  for(let i=0; i< str.length; i++){
    if(str[i]== "."){
      result += "[.]"
    }
    else{
      result +=str[i]
    }
  }
return result; 
}

// defang("1.1.1.1")
defang("255.100.50.0")


//Blake
function deFang(address) {
  let result = "";
  for(let i = 0; i < address.length; i++) {
    if(address[i] === ".") {
      result = result + "[.]";
    } else {
      result = result + address[i];
    }
  }
  return result
}

//Harris
var defangIPaddr = function(address) {
  let hold = address.split('')
  for(let i = 0; i < hold.length; i++){
      if (hold[i]==='.'){
        hold[i] = '[.]'
      }
    }
    return hold.join('')
  }
  const arr = "1.1.1.1.1.1"
  console.log(defangIPaddr(arr))