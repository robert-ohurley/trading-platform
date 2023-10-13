import Web3 from 'web3';

const CONTRACT_ADDRESS = '0xDfce14630B1E52CbBF830216A117c35a4474f5B9'

// Set up a connection to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.Contract.handleRevert = true;

// Create a new contract object using the ABI and bytecode
import abi from './TradeHistory.json' assert { type: "json"}
const MyContract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);


async function addTradeToBlockchain(nftName, from, to, ethValue, timeStamp, image, transactionHash) {
  try {
    const receipt = await MyContract.methods.addTrade(nftName, from, to, ethValue, timeStamp, image, transactionHash).send({
      from: from,
      gas: 16721975,
      gasPrice: 20000000000,
    });
    console.log(receipt)

    return receipt;
  } catch (error) {
    console.error(error);
  }
}

async function getTradesFromBlockchain() {
  try {
    const transactionHistory = await MyContract.methods.getTrades().call();
    // const transactionHistory = await MyContract.methods;
    return transactionHistory;
  } catch (error) {
    console.error(error);
  }
}
addTradeToBlockchain('', '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7', '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7', 0.11, new Date().toLocaleString(), '/img2', 'sdfafafsdfsafaffsdfsf').then(res => console.log('res', res))
export { addTradeToBlockchain, getTradesFromBlockchain }





