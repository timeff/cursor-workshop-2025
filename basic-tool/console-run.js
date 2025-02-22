const { getLatestPTTPrice } = require("./chat.js");

getLatestPTTPrice().then((price) => {
  console.log(price);
});
