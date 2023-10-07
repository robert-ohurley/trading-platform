/*

This file sets up a connection to the local ethereum network, reads in the compiled bytecode from the solidity contracts,
creates a new contract object using the binary interface and the bytecode and finally deploys the contract 
to the ganache network. Logs out the deployer account, the estimated gas and the address where the contract is deployed.

*/


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


// Read the bytecode from the file system
const bytecodePath = path.join(__dirname, '/MetaCoin.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');


// Create a new contract object using the ABI and bytecode
// const abi = require('./MetaCoin.json');
import abi from './MetaCoin.json' assert { type: "json"}
const MyContract = new web3.eth.Contract(abi);
console.log(MyContract.deploy);

async function deploy() {
    const providersAccounts = await web3.eth.getAccounts();
    const defaultAccount = providersAccounts[0];
    console.log('deployer account:', defaultAccount);

    const myContract = MyContract.deploy({ data: bytecode, });

    // optionally, estimate the gas that will be used for development and log it
    const gas = await myContract.estimateGas({
        from: defaultAccount,
    });
    console.log('estimated gas:', gas);

    try {
        // Deploy the contract to the Ganache network
        const tx = await myContract.send({
            from: defaultAccount,
            gas,
            gasPrice: 10000000000,
        });
        console.log('Contract deployed at address: ' + tx.options.address);

        // Write the Contract address to a new file
        const deployedAddressPath = path.join(__dirname, 'MyContractAddress.bin');
        fs.writeFileSync(deployedAddressPath, tx.options.address);
    } catch (error) {
        console.error(error);
    }
}

deploy();


