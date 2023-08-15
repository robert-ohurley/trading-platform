import React from 'react'
import AssetsOwndedAssetCard from './AssetsOwnedAssetCard'

function AssetsOwned() {
  return (
    <div className="w-1/4 border">
        <div className="flex items-center justify-between ml-6 mt-3">
            <h1 className="font-semibold text-lg">Assets Owned</h1> 
            <img src="/ellipses.svg" height={30} width={30} className="mr-6"/>
        </div>
    
        <div className="flex">
            <div className="flex flex-col w-5/6 h-full">
              <AssetsOwndedAssetCard />
              <AssetsOwndedAssetCard />
              <AssetsOwndedAssetCard />
            </div>
        </div>

    </div>
  )
}

export default AssetsOwned