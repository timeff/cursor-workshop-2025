// =================== Code Refactoring ===================

// This function calculates the average (mean) of numbers in an array
// Input: An array of numbers
// Output: The average of all numbers, or 0 if array is empty
// Example: calculateAverage([1, 2, 3]) => 2
function calculateAverage(n) {
  if (n.length === 0) return 0;
  return n.reduce((i, y) => i + y, 0) / n.length;
}

// This function counts the frequency of each character in a string
// Input: A string
// Output: An object where keys are characters and values are their counts
// Example: countCharacters("hello") => { h: 1, e: 1, l: 2, o: 1 }
function countCharacters(str) {
  return str.split("").reduce((i, y) => {
    i[y] = (i[y] || 0) + 1;
    return i;
  }, {});
}

module.exports = {
  calculateAverage,
  countCharacters,
};
