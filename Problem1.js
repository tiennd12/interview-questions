// sort the numbers in the given array
function numSort(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// check if the number is a Prime Number or not
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Keep Prime Numbers only and sort the newly created array
function isPrimeAndSorted(arr) {
  let primeArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeArr.push(arr[i]);
    }
  }
  let sortedArr = numSort(primeArr);
  return sortedArr;
}

let arr = [
  680, 374, 549, 964, 993, 135, 292, 900, 264, 980, 396, 268, 925, 769, 216,
  479, 128, 448, 991, 412, 972, 125, 296, 947, 360, 247, 175, 851, 258, 186,
  926, 376, 103, 755, 23, 525, 985, 563, 183, 340, 370, 602, 315, 695, 660, 162,
  650, 557, 488, 116,
];
console.log(isPrimeAndSorted(arr));
