// =================== Implement algorithm ==================
// Example 1: Implement as instructed in slide
function ex1(people) {
  return people;
}

// Example 2: Implement as instructed in slide
function ex2(list) {
  return list;
}

// =================== Code Refactoring ===================

// Example 3: This function calculates the average (mean) of numbers in an array
// Input: An array of numbers
// Output: The average of all numbers, or 0 if array is empty
// Example: calculateAverage([1, 2, 3]) => 2
function calculateAverage(n) {
  if (n.length === 0) return 0;
  return n.reduce((i, y) => i + y, 0) / n.length;
}

// Example 4: This function counts the frequency of each character in a string
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
  ex1,
  ex2,
  calculateAverage,
  countCharacters,
};

// =================== Time intensive task ===================
// Example 5: We need data with snake_case header
let data = [
  { header: "Trade Date", key: "dtTradeDate", width: 15 },
  { header: "Model", key: "model", width: 15 },
  { header: "Product Type", key: "productType", width: 15 },
  { header: "Account", key: "account", width: 15 },
  { header: "Cash Balance", key: "cashBalance", width: 15 },
  { header: "MPV", key: "mpv", width: 15 },
  { header: "Deposit", key: "deposit", width: 15 },
  { header: "Stock Deposit", key: "stockDeposit", width: 15 },
  { header: "Withdraw", key: "withdraw", width: 15 },
  { header: "XD Cash", key: "xdcash", width: 15 },
];

// Example 6: We need to create data sample of 10 person with name, age, gender, nationality.
let person = [];
