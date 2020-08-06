// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

const nthFibo = (n) => {
  const seq = [0, 1]
  let i = 0
  do {
    seq.push(seq[i] + seq[i + 1])
    i++
  } while (i < n - 1)
  return seq[n]
};