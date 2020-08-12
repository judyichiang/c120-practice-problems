https://edabit.com/challenge/rgXMMHEmbh2MCKSrM
Recursion: Factorials
Write a function that calculates the factorial of a number recursively.

  Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1
Notes
N / A

// Judy
function factorial(n) {
	if(n === 0 || n === 1){
		return 1
	}
	return n* factorial(n-1)

}

factorial(5)

// 5 mult(4)
// 4 mult(4*5)
// 3 mult(4*5*3)
// 2 mult(4*5*3*2)
// 1 mult(4*5*3*2*1) // return 120
