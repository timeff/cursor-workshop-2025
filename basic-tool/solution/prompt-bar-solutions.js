function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
}

function countCharacters(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char]) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
