import solcx   
from solcx import install_solc, compile_standard # Ensure to import install_solc
import json
import os

# Install Solidity Compiler
install_solc("0.8.11")

# Specify the path to your .sol file
file_path = '/Users/ningranli/IceyToLearn/COS30049/week_8&9/Group_1/truffle_smartContract/contracts/people.sol'

# Open the file in read mode and assign its content to simple_storage_file
with open(file_path, 'r') as file:
    perople_contract = file.read()


# A dictionary is passed as an argument to specify the compilation inputs
compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"perople_contract.sol": {"content": perople_contract}},
        "settings": {
            # Specifies the output selection settings
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    },
    solc_version="0.8.11",
)

# Get the directory where the Python script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the output file path in the same directory as the script
output_file_path = os.path.join(script_dir, 'compiled_contract_result.json')

# Write the compiled output to a JSON file
with open(output_file_path, 'w') as file:
    json.dump(compiled_sol, file, indent=4)

# get bytecode
bytecode = compiled_sol["contracts"]["perople_contract.sol"]["SimpleStorage"]["evm"][
    "bytecode"
]["object"]

# Extract ABI
contract_abi = compiled_sol['contracts']['perople_contract.sol']['SimpleStorage']['abi']

# Display the ABI
print("ABI:", json.dumps(contract_abi, indent=4))