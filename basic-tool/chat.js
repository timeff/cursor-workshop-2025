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

// =================== Unit test generator ===================

// Example 5: Create a function that validates and formats a Thai national ID number
// Input: string (13-digit Thai national ID number)
// Output: object containing:
//   - isValid: boolean (whether the ID is valid)
//   - formatted: string (formatted ID with dashes if valid, null if invalid)
//   - province: string (province code from ID if valid, null if invalid)
// Rules:
//   - Must be exactly 13 digits
//   - First digit must be 1-8
//   - Last digit must be valid check digit
//   - Format: #-####-#####-##-#
// Example: formatThaiID('1234567890121') => {
//   isValid: true,
//   formatted: '1-2345-67890-12-1',
//   province: '23'
// }
function formatThaiID(id) {
  // Remove any existing dashes or spaces
  const cleanId = id.replace(/[-\s]/g, "");

  // Basic validation
  if (!/^\d{13}$/.test(cleanId)) {
    return { isValid: false, formatted: null, province: null };
  }

  if (!"12345678".includes(cleanId[0])) {
    return { isValid: false, formatted: null, province: null };
  }

  // Calculate check digit
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanId[i]) * (13 - i);
  }
  const checkDigit = (11 - (sum % 11)) % 10;

  // Validate check digit
  if (parseInt(cleanId[12]) !== checkDigit) {
    return { isValid: false, formatted: null, province: null };
  }

  // Format ID if valid
  const formatted = `${cleanId[0]}-${cleanId.slice(1, 5)}-${cleanId.slice(
    5,
    10
  )}-${cleanId.slice(10, 12)}-${cleanId[12]}`;
  const province = cleanId.slice(1, 3);

  return {
    isValid: true,
    formatted,
    province,
  };
}

module.exports = {
  countVowels,
  allocateAndFormatThaiBaht,
  getLatestPTTPrice,
  summarizeArticle,
  formatThaiID,
};
