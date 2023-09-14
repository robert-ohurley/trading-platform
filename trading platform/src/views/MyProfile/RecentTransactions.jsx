import React from 'react'
import TopPicksAssetCard from './FavoriteAssetCard'
import recentTransactionData from '../../data/recentTransactions'

function RecentTransactions() {
  return (
    <div className="">
      <div className="flex justify-between ml-6 mt-3">
        <h1 className="font-semibold text-lg">Recent Transactions</h1>
        <img src="/ellipses.svg" height={30} width={30} className="mr-16" />
      </div>

      <div className="flex flex-col h-full">
        {recentTransactionData.slice(0, 4).map((transaction, idx) => <TopPicksAssetCard key={idx} name={transaction.name} price={transaction.dollarValue} image={transaction.image} />)}
      </div>

    </div>
  )
}

export default RecentTransactions