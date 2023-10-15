import Web3 from 'web3';

//Defines the senders address and private key
const CONTRACT_ADDRESS = '0x8e60063a7687508747245264BE0Bd22d3fA9f0f6';
const SENDER_ADDRESS = '0x6B81776aAf39999a3c7ed49014Ccf74D444A179F';
const PRIVATE_KEY = '0x9df9c277d58daff906ad1a3aa2cb4999d9e8bce2b5dce702634733ee6e9e28c2';
const RECIEVER_ADDRESS = '0x86B4bFf70e9de71265411875707f2Ee145FF1399'
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
  console.log(nftName, from, to, ethValue, image, transactionHash)
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
    // return error;
    // return ['error']
  }
}

export { addTradeToBlockchain, getTradesFromBlockchain }




