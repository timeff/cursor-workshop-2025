/**
 * Validates and formats a Thai national ID number
 * @param {string} id - 13-digit Thai national ID number
 * @returns {Object} Object containing validation results and formatted ID
 * @example formatThaiID('1234567890121') => {
 *   isValid: true,
 *   formatted: '1-2345-67890-12-1',
 *   province: '23'
 * }
 */
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

module.exports = { formatThaiID };
