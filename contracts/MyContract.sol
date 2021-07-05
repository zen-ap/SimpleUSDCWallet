// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;


contract MyContract {
    constructor() public {}

    const wallet = ethers.Wallet.createRandom();
    console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
    console.log(`Address: ${wallet.address}`);
}
