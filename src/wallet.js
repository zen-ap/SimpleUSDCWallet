const ethers = require("ethers");

// Replace the following with your own mnemonic
const mnemonic =
  "marriage damp october original chalk harvest glance ramp alert parent acoustic patrol";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
