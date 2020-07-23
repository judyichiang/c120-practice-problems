// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

// Description
// Middle Earth is about to go to war.The forces of good will have many battles with the forces of evil.Different races will certainly be involved.Each race has a certain worth when battling against others.On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

//   Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

//     Input:
// The function will be given two parameters.Each parameter will be a string of multiple integers separated by a single space.Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non - negative integers.The resulting sum of the worth for each side will not exceed the limit of a 32 - bit integer.

//   Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.



// Blake
function goodVsEvil(good, evil) {
  const goodForces = [1, 2, 3, 3, 4, 10];
  const badForces = [1, 2, 2, 2, 3, 5, 10];

  const goodNumbers = good.split(" ");
  const badNumbers = evil.split(" ");

  let goodResult = 0;
  let badResult = 0;

  for (let i = 0; i < goodForces.length; i++) {
    let tempResult = 0;
    tempResult = (goodForces[i] * goodNumbers[i]);
    goodResult += tempResult;
  }

  for (let j = 0; j < badForces.length; j++) {
    let anotherResult = 0;
    anotherResult = (badForces[j] * badNumbers[j]);
    badResult += anotherResult
  }

  if (goodResult > badResult) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (goodResult < badResult) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}

// Judy
function goodVsEvil(good, evil) {
  good = good.split(" ")
  evil = evil.split(" ")
  let hobbit = 1 * Number(good[0])
  let men = 2 * Number(good[1])
  let elf = 3 * Number(good[2])
  let dwarf = 3 * Number(good[3])
  let eagle = 4 * Number(good[4])
  let wiz = 10 * Number(good[5])

  let goodPt = hobbit + men + elf + dwarf + eagle + wiz
  console.log(goodPt)

  let orc = 1 * Number(evil[0])
  let men2 = 2 * Number(evil[1])
  let warg = 2 * Number(evil[2])
  let goblin = 2 * Number(evil[3])
  let uruk = 3 * Number(evil[4])
  let trolls = 5 * Number(evil[5])
  let wiz2 = 10 * Number(evil[6])

  let evilPt = orc + men2 + warg + goblin + uruk + trolls + wiz2
  console.log(evilPt)

  if (goodPt > evilPt) {
    return 'Battle Result: Good triumphs over Evil'
  }
  if (goodPt < evilPt) {
    return 'Battle Result: Evil eradicates all trace of Good'
  }
  if (goodPt === evilPt) {
    return 'Battle Result: No victor on this battle field'
  }
}

// Tracy
function goodVsEvil(good, evil) {
  let OG = [1, 2, 3, 3, 4, 10];
  let OB = [1, 2, 2, 2, 3, 5, 10];

  let splitGood = good.split(' ');
  let splitEvil = evil.split(' ');

  let goodies = 0;
  let badies = 0;

  for (let i = 0; i < splitGood.length; i++) {
    goodies += Number(splitGood[i]) * OG[i];
  }
  for (let i = 0; i < splitEvil.length; i++) {
    badies += Number(splitEvil[i]) * OB[i];
  }

  if (goodies > badies) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (badies > goodies) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}
