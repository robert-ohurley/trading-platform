import fs from 'fs';
import { fileURLToPath } from 'url';
import Web3 from 'web3';
import path from 'path'

const contractName = 'TradeHistory'
const fileName = 'TradeHistory.sol'


//dirty hack to get __dirname in an ES module apparently
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Set up a connection to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.Contract.handleRevert = true;

// Read the contract address from the file system
const deployedAddressPath = path.join(__dirname, 'MyContractAddress.bin');
const deployedAddress = fs.readFileSync(deployedAddressPath, 'utf8');


// Read the bytecode from the file system
const bytecodePath = path.join(__dirname, `${contractName}.bin`);
const bytecode = fs.readFileSync(bytecodePath, 'utf8');


// Create a new contract object using the ABI and bytecode
import abi from './TradeHistory.json' assert { type: "json"}
const MyContract = new web3.eth.Contract(abi, deployedAddress);

let privateKey = '0x0ce62120e6588ceb45d4b3ee9b551a991d7bde69718b726746bb6b35b0c6db83'
let fromAddress = '0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7';
let toAddress = '0x88126883a7c3dd9685e50EE8E02c776BB79a0a4F';

async function addTradeToBlockchain(nftName, from, to, ethValue, timeStamp, image, transactionHash) {
  // const providersAccounts = await web3.eth.getAccounts();
  // const defaultAccount = providersAccounts[0];
	
  try {
    const receipt = await MyContract.methods.addTrade(nftName, from, to, ethValue, timeStamp, image, transactionHash).send({
      from: from,
      gas: 6721975,
      gasPrice: 20000000000,
    });

    return receipt;
  } catch (error) {
    console.error(error);
  }
}

async function getTradesFromBlockchain() {
  try {
    const transactionHistory = await MyContract.methods.getTrades().call();
    return transactionHistory;
  } catch (error) {
    console.error(error);
  }
}

// addTradeToBlockchain("Digital Pi", "0x88126883a7c3dd9685e50EE8E02c776BB79a0a4F", "0x154B0A2e458Cb37e93622798d04Bb3B38088BAD7", "0.15", new Date().toLocaleString(), '/nft1', '0x8a7032dc80d8104fa0a46b67db96c27966e59e80d930f4babc6a9a295d19ab8d');

export { addTradeToBlockchain, getTradesFromBlockchain }




