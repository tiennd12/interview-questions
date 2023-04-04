function getCombinations(array, length) {
  const result = [];

  // Check if there is a duplicate element in the array
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  // Form an array of n elements before adding it to the result array
  function arrayBuilder(current, remaining) {
    if (current.length === length) {
      result.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        arrayBuilder(current.concat(remaining[i]), remaining.slice(i + 1));
      }
    }
  }

  arrayBuilder([], uniqueArray);
  return result;
}

const array = [1, 2, 3, 4];
const combinations = getCombinations(array, 3);
console.log(combinations);
