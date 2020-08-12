// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

//     If win equals true, end the list with Pong!.
//     If win equals false, end with Ping! instead.
// Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
//     You will always return the ball (i.e. the Pongs are yours).
//     Player 1 serves the ball and makes Ping!.
//     Return an array of strings.

//Judy
// create a array placeholder 
//if 2nd param is true, result array is even
//if 2nd param is false, result array is odd
//create for loop and add pong! after each ping unless it is false
//return result array

function pingPong(arr, win) {
  let result = []
  for(let i = 0 ; i< arr.length ; i++){
      result.push("Ping!", "Pong!")
      }
  if(win === true){
      return result          
  }
  if(win === false){
      return result.splice(0, (result.length -1))        
  }     
}

// pingPong(["Ping!"], true) // ["Ping!", "Pong!"]

// pingPong(["Ping!", "Ping!"], false) // ["Ping!", "Pong!", "Ping!"]

// pingPong(["Ping!", "Ping!", "Ping!"], true) // ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

//Jerry
function pingPong(arr, win) {
	let result = [];
  for (let i = 0; i < arr.length; i++){
      result.push(arr[i])
      result.push('Pong!')
    }
    if( win === true){
      return result
    } else return result.slice(0, result.length -1)
}

//Jack
function pingPong(arr, win) {
  if (arr.length === 1) {
    arr[arr.length] = 'Pong!'
    return arr
  }
	for (let i = arr.length - 1; i >= 1; i--) {
    if (win === true) {
      arr.splice(i, 0, 'Pong!')
      arr[arr.length] = 'Pong!'
      arr.length = 6
    }
    else arr.splice(i, 0, 'Pong!')
  }
  return arr
}

//