import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import Web3 from 'web3';
import path from 'path';


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
const bytecodePath = path.join(__dirname, 'MetaCoin.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');


// Create a new contract object using the ABI and bytecode
import abi from './MetaCoin.json' assert { type: "json"}
const MyContract = new web3.eth.Contract(abi, deployedAddress);


async function interact() {
    const providersAccounts = await web3.eth.getAccounts();
    const defaultAccount = providersAccounts[0];

    try {
        // Get the current value of my number
        const myNumber = await MyContract.methods.getMyNumber().call();
        console.log('my number value: ' + myNumber);

        // Increment my number
        const receipt = await MyContract.methods.setMyNumber(70).send({
            from: defaultAccount,
            gas: 1000000,
            gasPrice: 10000000000,
        });
        console.log('Transaction Hash: ' + receipt.transactionHash);

        // Get the updated value of my number
        const myNumberUpdated = await MyContract.methods.getMyNumber().call();
        console.log('my number updated value: ' + myNumberUpdated);
    } catch (error) {
        console.error(error);
    }
}

interact();