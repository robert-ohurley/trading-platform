import React from 'react'
import TopPicksAssetCard from './TopPicksAssetCard'
import AssetsOwndedAssetCard from './AssetsOwnedAssetCard'

function TransactionHistory() {
  return (
    <div className="w-4/12 ">
        <div className="flex items-center justify-between ml-6 mt-3">
            <h1 className="font-semibold text-lg">Transaction History</h1> 
            <img src="/ellipses.svg" height={30} width={30} className="mr-16"/>
        </div>
    
            <div className="flex flex-col h-full">
              <TopPicksAssetCard />
              <TopPicksAssetCard />
              <TopPicksAssetCard />
            </div>

    </div>
  )
}

export default TransactionHistory