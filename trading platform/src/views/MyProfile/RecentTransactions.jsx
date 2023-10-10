import React from 'react'
import RecentTransactionCard from './RecentTransactionCard'
import { useTransactionsContext } from '../../contexts/transactionsContextProvider';

function RecentTransactions() {
  let { getTransactions } = useTransactionsContext();

  return (
    <div className="">
      <div className="flex justify-between ml-6 mt-3">
        <h1 className="font-semibold text-lg">Recent Transactions</h1>
        <img src="/ellipses.svg" height={30} width={30} className="mr-16" />
      </div>

      <div className="flex flex-col h-full">
        {getTransactions().length > 0 ? getTransactions().map((transaction, idx) => <RecentTransactionCard key={idx} name={transaction.nftName} price={transaction.ethValue} image={transaction.image} />) : <h1 className="mt-3 ml-6 ">You have no transactions</h1> }
      </div>

    </div>
  )
}

export default RecentTransactions
