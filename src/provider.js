const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  // Replace the following with your own INFURA API key
  infura: "a67d23a7d16747178c3635e68644a855",
});

module.exports = provider;
