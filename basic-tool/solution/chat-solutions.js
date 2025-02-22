function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function allocateAndFormatThaiBaht(amount, numberOfPayers) {
  const { allocateAmount, numberToThaiBaht } = require("./helpers/chat-utils");

  // Get the allocated amounts as numbers
  const allocatedAmounts = allocateAmount(amount, numberOfPayers);

  // Convert each amount to Thai Baht format
  return allocatedAmounts.map((amount) => numberToThaiBaht(amount));
}

async function getLatestPTTPrice() {
  const symbol = "PTT.BK"; // .BK suffix for Thai stocks on Yahoo Finance

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch stock price");
    }

    const data = await response.json();
    if (data.chart?.result?.[0]?.meta?.regularMarketPrice) {
      return data.chart.result[0].meta.regularMarketPrice;
    }

    throw new Error("Price data not found");
  } catch (error) {
    console.error("Error fetching PTT price:", error);
    return null;
  }
}
