import React, { useState, useEffect } from 'react'
import RecentTransactionCard from './FavoriteAssetCard'
import { useTransactionsContext } from '../../contexts/transactionsContextProvider';

function TransactionHistory() {
  const [search, setSearch] = useState("")

  let { getTransactions } = useTransactionsContext();
  useEffect(() => {
  }, [search])

  return (
    <div className="flex flex-col bg-slate-100 items-center mt-1 ">
      <div className="flex flex-col mt-3 justify-center w-full items-center mb-4 ">
        <h1 className="font-semibold text-lg mb-3">Recent Transactions</h1>
        <input type="text" placeholder='Search Transaction Info...' className="w-64 rounded-lg p-2 border" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="flex flex-col h-full">
        {getTransactions().map((transaction, idx) => <RecentTransactionCard key={idx} name={transaction.nftName} price={transaction.ethValue} image={transaction.image} />)}
      </div>
    </div>
  )
}

export default TransactionHistory
