/**
 * Converts a number to Thai Baht currency string format
 * @param {number} amount - The amount to convert
 * @returns {string} Formatted string with THB suffix
 */
const numberToThaiBaht = (amount) => {
  if (typeof amount !== "number") return "0.00THB";
  return `${amount.toFixed(2)}THB`;
};

/**
 * Converts a Thai Baht string back to a number
 * @param {string} bahtString - The Thai Baht string (e.g., "1,000THB")
 * @returns {number} The numeric value
 */
const thaiBahtToNumber = (bahtString) => {
  if (typeof bahtString !== "string") return 0;
  return Number(bahtString.replace(/[,THB]/g, ""));
};

/**
 * Allocates an amount equally among a specified number of payers
 * @param {number} amount - Total amount to allocate
 * @param {number} numberOfPayers - Number of people to split between
 * @returns {number[]} Array of allocated amounts
 */
const allocateAmount = (amount, numberOfPayers) => {
  if (amount < 0 || !numberOfPayers || numberOfPayers <= 0) return [];

  const baseAmount = Number((amount / numberOfPayers).toFixed(2));
  const allocations = new Array(numberOfPayers).fill(baseAmount);

  // Adjust for rounding errors
  const totalAllocated = baseAmount * numberOfPayers;
  const difference = Number((amount - totalAllocated).toFixed(2));

  if (difference !== 0) {
    allocations[0] = Number((allocations[0] + difference).toFixed(2));
  }

  return allocations;
};

module.exports = {
  numberToThaiBaht,
  thaiBahtToNumber,
  allocateAmount,
};
