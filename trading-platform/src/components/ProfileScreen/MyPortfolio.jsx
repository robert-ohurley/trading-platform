import React from 'react'
import TopPicksAssetCard from './TopPicksAssetCard'
import MyPortfolioChart from './MyPortfolioChart'


function MyPortfolio() {
  return (
    <div className="flex flex-col w-4/6">
        <div className="flex items-center justify-between ml-6 mt-3">
            <h1 className="font-semibold text-lg">My Portfolio</h1> 
            <img src="/ellipses.svg" height={30} width={30} className="mr-6"/>
        </div>
        <div className="rounded-lg z-10 p-4 mt-2 bg-slate-100 flex shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
          <MyPortfolioChart />
        </div>
    </div>
  )
}

export default MyPortfolio