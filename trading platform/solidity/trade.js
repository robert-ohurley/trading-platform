const PRIVATE_KEY = '0x9df9c277d58daff906ad1a3aa2cb4999d9e8bce2b5dce702634733ee6e9e28c2'; 
import Web3 from 'web3';

export default async function tradeEth(toAddress, ethValue, nftName, image,) {
	const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.Contract.handleRevert = true;

	try {
		let value = web3.utils.toWei(ethValue.toString(), 'ether')

		let signedTransaction = await web3.eth.accounts.signTransaction({
			to: toAddress,
			value: value,
			gas: 6721975
		}, PRIVATE_KEY)

		let receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
		console.log(receipt)
		receipt.nftName = nftName;
		receipt.image = image;
		receipt.ethValue = ethValue;
		receipt.timeStamp = new Date().toLocaleString();
		
		return receipt;
	} catch (error) {
		console.error(error);
	}
}

export async function requestSellersWallet() {
	const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.Contract.handleRevert = true;

	try {
		const providersAccounts = await web3.eth.getAccounts();
		const defaultAccount = providersAccounts[1];
		return defaultAccount
	} catch (error) {
		console.error(error);
	}
}
export async function requestBuyersWallet() {
	const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.Contract.handleRevert = true;

	try {
		const providersAccounts = await web3.eth.getAccounts();
		const defaultAccount = providersAccounts[0];
		return defaultAccount
	} catch (error) {
		console.error(error);
	}
}
export async function requestUsersBalance() {
	const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.Contract.handleRevert = true;

	try {
		const providersAccounts = await web3.eth.getAccounts();
		const defaultAccount = providersAccounts[0];
		const weiBalance = await web3.eth.getBalance(defaultAccount)
        // If the value was never set, it will return the default value.
		const ethBalance = web3.utils.fromWei(weiBalance)
		return ethBalance;
	} catch (error) {
		console.error(error);
	}
}
