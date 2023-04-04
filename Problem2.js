function findTheNthFibo(num) {
  // Two first numbers of the Fibonacci sequence
  let initialArr = [0, 1];
  for (let i = 0; i <= num; i++) {
    let prevNum = initialArr[initialArr.length - 2];
    let currentNum = initialArr[initialArr.length - 1];
    let nextNum = prevNum + currentNum;

    initialArr.push(nextNum);
  }
  // return the n-th number of the Fibonacci sequence
  return initialArr[num - 1];
}

console.log(findTheNthFibo(6));
