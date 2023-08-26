import React from 'react'
import TopPicks from './TopPicks'
import ForSale from './ForSale'
import InvestmentStats from './InvestmentStats'
import TransactionHistory from './TransactionHistory'
import MyPortfolio from './MyPortfolio'

export const ProfileScreen = ({ showForSale }) => {
  return (
      //entire main screen 
    <div className="flex ml-24 h-screen">

      {/* for sale - the left side of the screen  */}
      { showForSale && 
      <div className="border bg-slate-100 h-screen overflow-y-scroll overflow-x-hidden min-w-fit ">
        <ForSale/>
      </div> }
 

      {/* put into a 2x2 grid on huge screens and a 1 x 4 grid on anything smaller  */}

      {/* the right side of the screen  */}
      <div className="h-screen flex bg-slate-200 overflow-y-scroll w-full">

        <div className="flex flex-col h-full ">

        {/*  top half*/}
          <div className="flex md:flex-col md:gap-10 md:mb-10 md:items-left lg:flex-row px-10 pt-5">
            <TopPicks />
            <InvestmentStats />
          </div>

          {/* bottom half  */}
          <div className="flex md:flex-col md:gap-10 md:items-left lg:flex-row px-10">
            <TransactionHistory />
            <MyPortfolio />
          </div>

        </div>
      </div>

    </div>
  )
}
