import Web3 from 'web3';

//Defines the senders address and private key
const CONTRACT_ADDRESS = '0x417Cf73661971a80A5E25F9f04C6180ee326617C';
const SENDER_ADDRESS = '0xa97ba9A6F3422a29a7f3Ba0F937223326Cc1e05D';
const PRIVATE_KEY = '0x8105f68810f014b5686867947d136dcb1dd743252a02da081e4ea62e6089b25c';
const RECIEVER_ADDRESS = '0x8a879042526e7Ee13daC6118695f03736311c6d8'
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

async function getNonceAndChainId() {
  //get nonce
  const nonce = await web3.eth.getTransactionCount(SENDER_ADDRESS);
  
  //get chain Id
  let chainId = await web3.eth.getChainId();

  return {
    nonce,
    chainId
  }
}


async function addTradeToBlockchain(nftName, from, to, ethValue, image, transactionHash) {
  const { nonce, chainId } = getNonceAndChainId();

  try {
    let storeTransaction = await MyContract.methods.addTrade(nftName, from, to, ethValue, new Date().toLocaleString(), image, transactionHash).send({
      chainId: chainId,
      nonce: nonce,
      to: CONTRACT_ADDRESS,
      from: from,
      gas: 6721975,
    })
    return storeTransaction;
  } catch (error) {
      console.error(error);
      return error;
  }
}

async function getTradesFromBlockchain() {
  try {
    let res = await MyContract.methods.getTrades().call();
    return res;

  } catch (error) {
    console.error(error);
    return error;
  }
}

export { addTradeToBlockchain, getTradesFromBlockchain }




