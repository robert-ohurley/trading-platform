const senderContract = artifacts.require('Sender.sol')
const receiverContract = artifacts.require('Receiver.sol')

contract(`Test`, accounts => {

  let amount
  const acc1 = accounts[0]
  const acc2 = accounts[1]

  it('Should get the amount required for sending', async () => {
    const { contract: { methods }}= await senderContract.deployed()
    amount = await methods.amount().call()
  })

  it(`Should send the amount to a the receiver contract`, async () => {
    const { contract: { methods }} = await senderContract.deployed()
    const { address } = await receiverContract.deployed()
    const recBalanceBefore = await web3.eth.getBalance(address)
    await methods.send(address).send({from: acc1, value: amount})
    const recBalanceAfter = await web3.eth.getBalance(address)
    assert.isTrue(parseInt(recBalanceAfter) - parseInt(recBalanceBefore) == amount)
  })

  it(`Should send the amount to another address`, async () => {
    const { contract: { methods }} = await senderContract.deployed()
    const acc2BalanceBefore = await web3.eth.getBalance(acc2)
    await methods.send(acc2).send({from: acc1, value: amount})
    const acc2BalanceAfter = await web3.eth.getBalance(acc2)
    assert.isTrue(parseInt(acc2BalanceAfter) - parseInt(acc2BalanceBefore) == amount)
  })

  it(`Should fail to send the amount if < required amount`, async () => {
    const { contract: { methods }} = await senderContract.deployed()
    const { address } = await receiverContract.deployed()
    try {
      await methods.send(address).send({from: acc1, value: amount - 1})
      assert.fail('Should have failed!')
    } catch (_) {}
  })
})