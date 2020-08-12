// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
//     20 steps North, now at (0, 20)
//     30 steps East, now at (30, 20)
//     10 steps South. now at (30, 10)
//     40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).
// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]
// trackRobot() ➞ [0, 0]
// // No movement means the robot stays at (0, 0).
// trackRobot(-10, 20, 10) ➞ [20, -20]
// // The amount to move can be negative.
// Notes
// Each movement is an integer (whole number)

//Tracy
function trackRobot(...steps) {
  let x = 0;
  let y = 0;

  for (let i=0; i<steps.length; i++){
    if (i%4 === 0){
      y += steps[i]
    }
    if (i%4 === 1){
      x += steps[i]
    }
    if (i%4 === 2){
      y -= steps[i]
    }
    if (i%4 === 3){
      x -= steps[i]
    }
  }
  return[x, y]
}

//Jerry
function trackRobot(...steps) {
  let arr2= [1, 1, -1, -1]
  let index = [1,0,1,0]
  let counter = 0
  let result =[0,0]
  for (let i = 0; i < steps.length; i++) {
      result[index[counter]] += arr2[counter]* steps[i]
      counter++
      if (counter === 4){
              counter = 0
              } 
  }
  
  return result
}

//Jack
function trackRobot(...steps) {
  const pos = [0, 0]
  for (let i = 0; i < steps.length; i++) {
    const ns = i % 4
    const ew = i % 2
    if (ns == 0) pos[1] += steps[i]
    else if (ns == 1) pos[0] += steps[i]
    else if (ew == 0) pos[1] -= steps[i]
    else if (ew == 1) pos[0] -= steps[i]
  }
  return pos
}