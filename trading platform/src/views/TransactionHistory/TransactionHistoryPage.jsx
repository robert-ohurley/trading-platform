import React, { useEffect } from 'react'
import TransactionHistoryHeader from './TransactionHistoryHeader'
import recentTransactionData from '../../data/recentTransactions'
import { useState } from 'react'
import TransactionCard from './TransactionCard'
import { useTransactionsContext } from '../../contexts/transactionsContextProvider'

function TransactionHistoryPage() {
  const [search, setSearch] = useState("")
  const [sortFilter, setSortFilter] = useState(null)
  let sortedData = [...recentTransactionData]
  let { getTransactions } = useTransactionsContext();






  {/* orders a copy of the hardcoded array data by the search criteria, foltering by search term is applied in the JSX  */ }
  if (sortFilter === "Price: Low to High") {
    sortedData = sortedData.sort((a, b) => { return a.dollarValue - b.dollarValue })
  } else if (sortFilter === "Price: High to Low") {
    sortedData = sortedData.sort((a, b) => { return b.dollarValue - a.dollarValue })
  } else if (sortFilter === "NFT Name: A-Z") {
    sortedData = sortedData.sort((a, b) => { return a.nftName.toLowerCase().localeCompare(b.nftName.toLowerCase()) })
  } else if (sortFilter === "NFT Name: Z-A") {
    sortedData = sortedData.sort((a, b) => { return b.nftName.toLowerCase().localeCompare(a.nftName.toLowerCase()) })
  } else if (sortFilter === "Date: New to Old") {
    sortedData = sortedData.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
  } else if (sortFilter === "Date: Old to New") {
    sortedData = sortedData.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
  }
 console.log(getTransactions())
  return (
    <>
      <TransactionHistoryHeader search={search} setSearch={setSearch} sortFilter={sortFilter} setSortFilter={setSortFilter} />
      <div className="w-screen h-screen flex justify-center mt-10">
        <div className="flex flex-col w-screen">
          {/* {[...sortedData, ... getTransactions()].filter(transaction => transaction.nftName.toLowerCase().includes(search.toLowerCase())).map((transaction, idx) => <TransactionCard transaction={transaction} idx={idx} />)} */}
          { getTransactions().length == 0 ? <h1 className="text-center">You have no available transactions</h1> : 
             getTransactions().filter(transaction => transaction.nftName.toLowerCase().includes(search.toLowerCase())).map((transaction, idx) => <TransactionCard transaction={transaction} idx={idx} />)
          }
        </div>
      </ div>
    </>
  )
}

export default TransactionHistoryPage