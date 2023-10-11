

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
        bytes32 nftName;
        address from;
        address to;
        bytes32 ethValue;
        Status transactionStatus;
        bytes32 timeStamp;
        bytes32 image;
        bytes32 transactionHash;
    }

    //storage -- state variables are stored on blockchain
    Trade[] public trades;
    uint myNum = 69;
	mapping (Status => bytes32) public StatusString;
    uint[] nums = [1,3,4,5];

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

    //creates a trade struct and performs eth transaction. If successfull new trade struct status is set to complete and is pushed to array of trades;
	function addTrade(bytes32 nftName, address from, address to, bytes32 ethValue, bytes32 timeStamp, bytes32 image, bytes32 transactionHash) public {
        //Trade memory currentTrade = createTrade({ nftName : nftName, from : from, to : to, ethValue : ethValue, timeStamp:timeStamp, image:image, transactionHash:transactionHash });
        Trade memory newTrade = Trade(nftName, from, to, ethValue, Status.Pending, timeStamp, image, transactionHash);

        trades.push(newTrade);
	}
	function getNums() public pure returns (uint){
		return 69;	
	}
	function getTrades() public view returns (Trade[] memory){
		return trades;	
	}

    function updateTransactionStatus(bytes32 _transactionHash) public {
       for (uint i = 0; i<trades.length; i++) {
            if (keccak256(abi.encodePacked(trades[i].transactionHash)) == keccak256(abi.encodePacked(_transactionHash))) {
                trades[i].transactionStatus = Status.Completed;
            }
        }
       } 
    }