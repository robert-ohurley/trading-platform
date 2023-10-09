import fs from 'fs';
import { dirname } from 'path';
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

async function interact() {
  const providersAccounts = await web3.eth.getAccounts();
  const defaultAccount = providersAccounts[0];
  console.log("methods: ", MyContract.methods);

  try {

    let value = web3.utils.toWei('0.1', 'ether')
    let signedTransaction = await web3.eth.accounts.signTransaction({
      to:toAddress,
      value: value,
      gas:2000000
    }, privateKey)

    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).then((receipt) => {
      console.log(receipt)
    })

  } catch (error) {
    console.error(error);
  }
}
    
interact();
   

        



