import React from 'react'
import TopPicksAssetCard from './TopPicksAssetCard'

function TopPicks() {
    return (
        <div className="w-1/2 border overflow-scroll">
            <div className="flex items-center justify-between ml-6 mt-3">
                <h1 className="font-semibold text-lg ">BROTHA's Top Picks</h1>
                <img src="/ellipses.svg" height={30} width={30} className="mr-6" />
            </div>

            <div className="flex">
                <div className="flex flex-col w-1/2 h-full">
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
            </div>
            <div className="flex flex-col w-1/2">
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
                <TopPicksAssetCard />
            </div>
        </div>

    </div >
  )
}

export default TopPicks