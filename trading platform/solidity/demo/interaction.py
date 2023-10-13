from web3 import Web3
import json

# Connect to Ganache
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:7545'))

chain_id = w3.eth.chain_id
print(f'Connected to chain {chain_id}')

# Load the contract data
with open('compiled_contract_result.json', 'r') as f:
    contract_data = json.load(f)

abi = contract_data['contracts']['perople_contract.sol']['SimpleStorage']['abi']

# Define the sender's address and private key
sender_address = "0x67f81438892EC5734631d1CC82967e837762271a"
private_key = "0x914682245c9824aec8917a5549b91dbedb3dc1a23e6fcc769e23daf2bb5e2b9a"
contract_address = "0x7D8131Ccea467b8fD5AA133D8F09B4e72eF98FC6"
# the value returned by get_transaction_count is already the next valid nonce.
nonce = w3.eth.get_transaction_count(sender_address)

simple_storage = w3.eth.contract(address=contract_address, abi=abi)

# call the store function of the simple_storage contract.
store_transaction = simple_storage.functions.store(67).build_transaction(
    {
        "chainId": chain_id,
        "gas": 200000,  # Adjust the gas limit as needed
        "gasPrice":w3.to_hex(w3.to_wei('5000', 'gwei')),
        "from": sender_address,
        "nonce": nonce,
    }
)

signed_store_txn = w3.eth.account.sign_transaction(store_transaction, private_key=private_key)
send_store_tx = w3.eth.send_raw_transaction(signed_store_txn.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(send_store_tx)

print(f"transaction created at address: {tx_receipt.transactionHash.hex()}")