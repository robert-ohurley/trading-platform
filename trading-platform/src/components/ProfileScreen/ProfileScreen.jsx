import React from 'react'
import TopPicks from './TopPicks'
import ForSale from './ForSale'
import InvestmentStats from './InvestmentStats'
import TransactionHistory from './TransactionHistory'
import MyPortfolio from './MyPortfolio'

export const ProfileScreen = () => {
  return (
      //entire main screen 
    <div className="flex ml-24 h-screen">

      {/* left  */}
      <div className="h-screen flex ">

        <div className="flex flex-col w-full h-full bg-special-purple">

        {/*  top half*/}
          <div className="flex px-10 pt-5">
            <TopPicks />
            <InvestmentStats />
          </div>

          {/* bottom half  */}
          <div className="flex h-1/2 px-10">
            <TransactionHistory />
            <MyPortfolio />
          </div>

        </div>
      </div>

      {/* my cards OR maybe transactions  */}
      <div className="border w-full bg-slate-100">
        <ForSale/>
      </div>
    </div>
  )
}
