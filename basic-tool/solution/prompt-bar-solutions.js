// Example 1
function ex1(people) {
  return people.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
  });
}

// Example 2
function ex2(list) {
  const frequency = {};
  for (let element of list) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  return frequency;
}

// Example 3
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
}

// Example 4
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
