import React from 'react'
import TransactionHistoryHeader from './TransactionHistoryHeader'
import recentTransactionData from '../../data/recentTransactions'
import { useState } from 'react'
import TransactionCard from './TransactionCard'

function TransactionHistoryPage() {
  const [search, setSearch] = useState("")

  return (
    <>
    <TransactionHistoryHeader search={search} setSearch={setSearch}/>
    <div className="w-screen h-screen flex justify-center mt-10">
      <div className="flex flex-col w-screen">

          {/* Filters out all transactions not matched by the search query  */}
        {recentTransactionData.filter(transaction => transaction.name.toLowerCase().includes(search.toLowerCase())).map((transaction,idx) => <TransactionCard transaction={transaction} idx={idx} />)}
        {recentTransactionData.filter(transaction => transaction.name.toLowerCase().includes(search.toLowerCase())).map((transaction,idx) => <TransactionCard transaction={transaction} idx={idx} />)}
      </div>
    </ div>
    </>
  )
}

export default TransactionHistoryPage