const PRIVATE_KEY = '0x0ce62120e6588ceb45d4b3ee9b551a991d7bde69718b726746bb6b35b0c6db83'; 
import Web3 from 'web3';

export default async function tradeEth(toAddress, ethValue, nftName, image,) {
	const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	web3.eth.Contract.handleRevert = true;

	try {
		let value = web3.utils.toWei(ethValue.toString(), 'ether')

		let signedTransaction = await web3.eth.accounts.signTransaction({
			to: toAddress,
			value: value,
			gas: 2000000
		}, PRIVATE_KEY)

		let receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
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
