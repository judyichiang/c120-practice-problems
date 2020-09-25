// Abigail and Benson are playing Rock, Paper, Scissors.
// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
//     R stands for Rock
//     P stands for Paper
//     S stands for Scissors
// Examples
// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
// // Ben wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper). 
// // Abigail wins 2/3.
// calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
// Notes
// N/A

//Judy
function calculateScore(games) {
  let ben = 0
  let abigail = 0
  const ab = ["R,S", "S,P", "P,R"]
  const bn = ["R,P", "S,R", "R,S"]
  for (let i = 0; i < games.length; i++) {
    if (String(games[i]) === ab[0]
      || String(games[i]) === ab[1]
      || String(games[i]) === ab[2]) {
      abigail++
    } else if (String(games[i]) === bn[0]
      || String(games[i]) === bn[1]
      || String(games[i]) === bn[2]) {
      ben++
    }
  }
  if (ben > abigail) { return "Benson" }
  else if (abigail > ben) { return "Abigail" }
  else { return "Tie" }
}

//Blake
function calculateScore(games) {
  let abigail = 0;
  let benson = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] === "R" && games[i][1] === "P") {
      benson++
    } else if (games[i][0] === "R" && games[i][1] === "S") {
      abigail++
    } else if (games[i][0] === "P" && games[i][1] === "R") {
      abigail++
    } else if (games[i][0] === "P" && games[i][1] === "S") {
      benson++
    } else if (games[i][0] === "S" && games[i][1] === "R") {
      benson++
    } else if (games[i][0] === "S" && games[i][1] === "P") {
      abigail++
    }
  }

  if (abigail > benson) {
    return "Abigail"
  } else if (benson > abigail) {
    return "Benson"
  } else {
    return "Tie"
  }
}

//Jack
function calculateScore(games) {
  const winCondition = { 'S': 'R', 'R': 'P', 'P': 'S' }
  let abi = 0, ben = 0
  for (let i = 0; i < games.length; i++) {
    const [abiChoice, benChoice] = games[i]
    if (abiChoice === winCondition[benChoice]) abi++
    else if (benChoice === winCondition[abiChoice]) ben++
  }
  if (abi === ben) return 'Tie'
  else return abi > ben ? 'Abigail' : 'Benson'
}