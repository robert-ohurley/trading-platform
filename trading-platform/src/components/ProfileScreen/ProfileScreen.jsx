import React from 'react'
import TopPicks from './TopPicks'
import ForSale from './ForSale'
import InvestmentStats from './InvestmentStats'
import RecentTransactions from './RecentTransactions'
import TransactionHistory from './TransactionHistory'
import MyPortfolio from './MyPortfolio'

export const ProfileScreen = ({ showForSale, showTransactions }) => {
  return (
      //entire main screen 
    <div className="flex ml-24 h-screen">

      {/* for sale - the left side of the screen  */}
      { showForSale && 
      <div className="border bg-slate-100 h-screen overflow-y-scroll overflow-x-hidden min-w-fit">
        <ForSale/>
      </div> }
 
      {/* full transaction history - the left side of the screen  */}
      { showTransactions && 
      <div className="border bg-slate-100 h-screen overflow-y-scroll overflow-x-hidden min-w-fit px-5">
        <TransactionHistory />
      </div> }

      {/* the right half of the screen  */}
      <div className="h-screen flex bg-slate-200 overflow-y-scroll w-full">
        <div className="flex flex-col h-full ">

        {/*  top half*/}
          <div className="flex flex-col gap-10 mb-8 lg:mb-0 md:items-left lg:flex-row px-10 pt-5">
            <TopPicks />
            <InvestmentStats />
          </div>

          {/* bottom half  */}
          <div className="flex flex-col gap-10 md:items-left lg:flex-row px-10">
            <RecentTransactions />
            <MyPortfolio />
          </div>
        </div>
      </div>
    </div>
  )
}
