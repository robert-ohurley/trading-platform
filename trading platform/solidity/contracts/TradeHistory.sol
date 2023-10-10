
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
        string nftName;
        address from;
        address to;
        string ethValue;
        Status transactionStatus;
        string timeStamp;
        string image;
        string transactionHash;
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

    function createTrade(string calldata nftName, address from, address to, string memory ethValue, string calldata timeStamp, string calldata image, string calldata transactionHash) pure private returns (Trade memory) {
        Trade memory newTrade = Trade({ nftName : nftName, from : from, to : to, ethValue : ethValue, transactionStatus : Status.Completed, timeStamp:timeStamp, image:image, transactionHash:transactionHash});
        return newTrade;
    }


    //creates a trade struct and performs eth transaction. If successfull new trade struct status is set to complete and is pushed to array of trades;
	function addTrade(string calldata nftName, address from, address to, string memory ethValue, string calldata timeStamp, string calldata image, string calldata transactionHash) public {
        Trade memory currentTrade = createTrade({ nftName : nftName, from : from, to : to, ethValue : ethValue, timeStamp:timeStamp, image:image, transactionHash:transactionHash });
        trades.push(currentTrade);
	}

	function getTrades() public view returns (Trade[] memory){
		return trades;	
	}
}
