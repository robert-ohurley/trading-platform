  const providersAccounts = await web3.eth.getAccounts();
  const defaultAccount = providersAccounts[0];
  let { transactionHash, blockNumber, blockHash, from, to, status } = receipt;