// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.0;

// import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not ERC20 compatible and cannot be expected to talk to other
// coin/token contracts.

contract MetaCoin {
	uint public x = 69;

	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	constructor() {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		emit Transfer(msg.sender, receiver, amount);
		return true;
	}

	function getBalanceInEth() public pure returns(uint){
		return 1;	
		// return ConvertLib.convert(getBalance(addr),2);
	}

	function getMyNumber() public view returns(uint){
		return x;	
	}

	function setMyNumber(uint num) public {
		x = num;	
	}

	function getBalance(address addr) public view returns(uint) {
		return balances[addr];
	}
}
