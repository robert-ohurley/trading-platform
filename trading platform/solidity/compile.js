// This code will compile smart contract and generate its ABI and bytecode
// Alternatively, you can use something like `npm i solc && npx solcjs MyContract.sol --bin --abi`
import solc from 'solc';
const { compile } = solc;
import path from 'path';
import fs from 'fs';

//dirty hack to get __dirname in an ES module apparently
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = 'MetaCoin.sol';
const contractName = 'MetaCoin';

// Read the Solidity source code from the file system
const contractPath = path.join(__dirname, '/contracts/', fileName);
const sourceCode = fs.readFileSync(contractPath, 'utf8');

// solc compiler config
const input = {
    language: 'Solidity',
    sources: {
        [fileName]: {
            content: sourceCode,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

// Compile the Solidity code using solc
const compiledCode = JSON.parse(compile(JSON.stringify(input)));
console.log(compiledCode)
// Get the bytecode from the compiled contract
const bytecode = compiledCode.contracts[fileName][contractName].evm.bytecode.object;

// Write the bytecode to a new file
const bytecodePath = path.join(__dirname, 'MetaCoin.bin');
fs.writeFileSync(bytecodePath, bytecode);

// Log the compiled contract code to the console
console.log('Contract Bytecode:\n', bytecode);

// Get the ABI from the compiled contract
const abi = compiledCode.contracts[fileName][contractName].abi;

// Write the Contract ABI to a new file
const abiPath = path.join(__dirname, 'MetaCoin.json');
fs.writeFileSync(abiPath, JSON.stringify(abi, null, '\t'));

// Log the Contract ABI to the console
console.log('Contract ABI:\n', abi);