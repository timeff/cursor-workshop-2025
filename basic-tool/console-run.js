const { getLatestPTTPrice, summarizeArticle } = require("./chat.js");

getLatestPTTPrice().then((price) => {
  console.log("Getting latest PTT price...");
  console.log(price);
  console.log("--------------------------------");
});

summarizeArticle(
  "https://www.theverge.com/elon-musk/617427/musk-trump-doge-recession-unemployment",
  250
).then((summary) => {
  console.log("Summarizing article...");
  console.log(summary);
  console.log("--------------------------------");
});
