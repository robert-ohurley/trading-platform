
import Web3 from 'web3';
import * as Tx from 'ethereumjs-tx'

//Defines the senders address and private key
const CONTRACT_ADDRESS = '0x51e78135F2c9a7116948c1aeb9D67182c651F50b';
const SENDER_ADDRESS = '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7';
const PRIVATE_KEY = '0x0ce62120e6588ceb45d4b3ee9b551a991d7bde69718b726746bb6b35b0c6db83';

// Connect to Ganache 
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.Contract.handleRevert = true;

// Load the contract data 
import abi from './TradeHistory.json' assert { type: "json"}
const MyContract = new web3.eth.Contract(abi, CONTRACT_ADDRESS, {
  from: SENDER_ADDRESS,
  gas: 200000,
  gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
});


//get nonce
const nonce = await web3.eth.getTransactionCount(SENDER_ADDRESS);
console.log(nonce);

//get chain Id
let chainId = await web3.eth.getChainId();
console.log(chainId)

//get gas estimate
let gas = await MyContract.methods.store(67).estimateGas({ from: SENDER_ADDRESS })
console.log('gas', gas)


//Call the store function of the simple contract
let storeTransaction = await MyContract.methods.store(0).send({
  chainId: chainId,
  nonce: nonce,
  to: CONTRACT_ADDRESS,
  from: SENDER_ADDRESS,
  gas: 6721975,
})


//test the getter
let res = await MyContract.methods.retrieve().call();
console.log('should be 0', res)

//Call the store function of the simple contract
await MyContract.methods.store(69).send({
  chainId: chainId,
  nonce: nonce + 1,
  to: CONTRACT_ADDRESS,
  from: SENDER_ADDRESS,
  gas: 6721975,
})

//test the getter again
let newRes = await MyContract.methods.retrieve().call();
console.log('should be 69', newRes)


console.log(storeTransaction)

// let signedStoreTransaction = await web3.eth.accounts.signTransaction(storeTransaction, PRIVATE_KEY);
// console.log('signed store trans', signedStoreTransaction)
// let sendStoreTransaction = await web3.eth.sendSignedTransaction(storeTransaction.rawTransaction);
// console.log('after signing???', sendStoreTransaction);
// let receipt = await web3.eth.getTransactionReceipt(sendStoreTransaction);


/*

async function addTradeToBlockchain(nftName, from, to, ethValue, timeStamp, image, transactionHash) {


  try {
    // const receipt = await MyContract.methods.addTrade(nftName, from, to, ethValue, timeStamp, image, transactionHash).send({
    //   from: from,
    //   gas: 16721975,
    //   gasPrice: 20000000000,
    // });
    // console.log(receipt)

    return receipt;
  } catch (error) {
    console.error(error);
  }
}

async function getTradesFromBlockchain() {
  try {
    // const transactionHistory = await MyContract.methods.getTrades().call();
    // const transactionHistory = await MyContract.methods;
    return transactionHistory;
  } catch (error) {
    console.error(error);
  }
}
addTradeToBlockchain('', '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7', '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7', 0.11, new Date().toLocaleString(), '/img2', 'sdfafafsdfsafaffsdfsf').then(res => console.log('res', res))
export { addTradeToBlockchain, getTradesFromBlockchain }



*/

