// Example 1: Find Maximum
function findMax(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

// Example 2: Count Vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
