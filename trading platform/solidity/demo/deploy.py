from web3 import Web3
import json

# Connect to Ganache
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:7545'))

chain_id = w3.eth.chain_id
print(f'Connected to chain {chain_id}')


# Get account balance

# Load the contract data
with open('compiled_contract_result.json', 'r') as f:
    contract_data = json.load(f)

abi = contract_data['contracts']['perople_contract.sol']['SimpleStorage']['abi']
bytecode = contract_data["contracts"]["perople_contract.sol"]["SimpleStorage"]["evm"][
    "bytecode"
]["object"]

# Create a contract instance
SimpleStorageContract = w3.eth.contract(abi=abi, bytecode=bytecode)

# Define the sender's address and private key
sender_address = "0x67f81438892EC5734631d1CC82967e837762271a"
private_key = "0x914682245c9824aec8917a5549b91dbedb3dc1a23e6fcc769e23daf2bb5e2b9a"

# Build the transaction
transaction = SimpleStorageContract.constructor().build_transaction({
    'chainId': chain_id,
    'gas': 2000000,  # You can adjust the gas limit as needed
    'gasPrice': w3.eth.gas_price,  # You can adjust the gas price as needed
    'nonce': w3.eth.get_transaction_count(sender_address),
})

# Sign the transaction
signed_transaction = w3.eth.account.sign_transaction(transaction, private_key=private_key)

# Deploy the contract
tx_hash = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)

# Wait for the transaction to be mined (replace with appropriate waiting logic)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

# Get the contract address
contract_address = tx_receipt.contractAddress

print(f"Contract deployed at address: {contract_address}")