
// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.0;

contract TradeHistory {
    enum Status {
        Pending,
        Completed,
        Failed,
        Rejected,
        Cancelled
    }

    struct Trade {
        string assetName;
        string newOwnerUsername;
        address sender;
        address reciever;
        uint price;
        Status transactionStatus;
        uint timestamp;
    }

    //storage -- state variables are stored on blockchain
    Trade[] public trades;
	mapping (Status => string) public StatusString;

    //mapping of userIds to their wallet addresses
	mapping (uint => address[]) userAddresses;

	constructor() {
	}

    function getUserAddresses(uint userId) public view returns (address[] memory) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
        return userAddresses[userId];
    }


    function addUserAddresses(address addr, uint userId) public {
        // push new user address to array of their available wallets. 
        if (userAddresses[userId].length == 0) {
            userAddresses[userId].push(addr);
        } else {
            userAddresses[userId].push(addr);
        }
    }

    function createTrade(string calldata assetName, string calldata newOwnerUsername, address sender, address reciever, uint price, uint timestamp) pure private returns (Trade memory) {
        Trade memory newTrade = Trade({ assetName : assetName, newOwnerUsername : newOwnerUsername, sender : sender, reciever : reciever, price : price, timestamp : timestamp, transactionStatus : Status.Pending });
        return newTrade;
    }


    //creates a trade struct and performs eth transaction. If successfull new trade struct status is set to complete and is pushed to array of trades;
	function addTrade(string calldata assetName, string calldata newOwnerUsername, address sender, address reciever, uint price, uint timestamp) public {
        Trade memory currentTrade = createTrade({ assetName : assetName, newOwnerUsername: newOwnerUsername, sender : sender, reciever : reciever, price : price, timestamp : timestamp });

        trades.push(currentTrade);

        //send price in ether from sender to reciever
        // send();
       //if successful change status to completed and push trade onto trades array

	}

	function getTrades() public view returns (Trade[] memory){
		return trades;	
	}

	// function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
	// 	if (balances[msg.sender] < amount) return false;
	// 	balances[msg.sender] -= amount;
	// 	balances[receiver] += amount;
	// 	emit Transfer(msg.sender, receiver, amount);
	// 	return true;
	// }

	// event Transfer(address indexed _from, address indexed _to, uint256 _value);
}
