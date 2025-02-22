const cheerio = require("cheerio");
const OpenAI = require("openai");

// =================== Function generator ===================

// Example 1: Create a function that counts the number of vowels in a string
// Input: A string
// Output: Number of vowels (a, e, i, o, u) in the string
// Example: countVowels('hello') => 2

function countVowels(str) {
  return null;
}

// Example 2: Create a function that allocates money among payers and formats in Thai Baht
// Input:
//   - amount: number (total amount of money to split)
//   - numberOfPayers: number (number of people to split between)
// Output: Array of strings, each representing the amount per person in Thai Baht (! always output with two decimal places) format
// Example: allocateAndFormatThaiBaht(1000, 3) => ['333.34THB', '333.33THB', '333.33THB']
function allocateAndFormatThaiBaht(amount, numberOfPayers) {
  return null;
}

// Example 3: Create a function that return latest price of PTT (Thai company stock) in THB
// Input: None
// Output: Number (latest price of PTT (Thai company stock) in THB)
// Example: getLatestPTTPrice() => 35
async function getLatestPTTPrice() {
  return null;
}

// Example 4: Create a function that fetches and summarizes a web article
// Input:
//   - url: string (URL of the article to summarize)
//   - maxLength: number (maximum length of summary in characters)
// Output: string containing the summarized article
// Example: summarizeArticle('https://example.com/article', 250) => 'This article discusses...'
// Hint - using LLM to summarize the article
async function summarizeArticle(url, maxLength) {
  return null;
}

module.exports = {
  countVowels,
  allocateAndFormatThaiBaht,
  getLatestPTTPrice,
  summarizeArticle,
};
