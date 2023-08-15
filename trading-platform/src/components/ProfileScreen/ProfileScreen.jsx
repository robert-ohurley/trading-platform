import React from 'react'
import TopPicks from './TopPicks'
import InvestmentStats from './InvestmentStats'
import AssetsOwned from './AssetsOwned'
import MyPortfolio from './MyPortfolio'

export const ProfileScreen = () => {
  return (
      //entire main screen 
    <div>

      {/* left  */}
      <div className="w-3/4 border h-screen flex">

        <div className="flex flex-col w-full">

        {/*  top half*/}
          <div className="flex border h-1/2 ">
            <TopPicks />
            <InvestmentStats />
          </div>


          {/* bottom half  */}
          <div className="flex border h-1/2">
            <AssetsOwned />
            <MyPortfolio />
          </div>

        </div>
      </div>






      {/* my cards OR maybe transactions  */}
      <div>

      </div>
    </div>
  )
}
