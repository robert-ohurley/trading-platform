// see comments to determine location of div elements.

import React from 'react'

function InvestmentStats() {
  return (
    <div className="w-96 ">
      <div className="flex items-center justify-between ml-6 mt-3">
        <h1 className="font-semibold text-lg ">Investment Stats</h1>
        <img src="/ellipses.svg" height={30} width={30} className="mr-6 hover:cursor-pointer" />
      </div>
      <div className="w-96  h-64 bg-slate-100 mt-3 rounded-md flex p-3 shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
        {/*left side  */}
        <div className="flex flex-col">

          {/* card  */}
          <div className="flex flex-row w-52 items-center ">
            <img src="/investmenticon1.svg" height={80} width={80} />
            <div className="flex flex-col">
              <p className="font-semibold text-sm ">Total Investment</p>
              <p className="text-special-orange font-extrabold text-lg">0.024 Ether</p>
            </div>
          </div>

          <div className="flex flex-row w-52 items-center ">
            <img src="/investmenticon2.svg" height={80} width={80} />
            <div className="flex flex-col">
              <p className="font-semibold text-sm ">Weekly Returns</p>
              <p className="text-special-green font-extrabold text-lg">0.221 Ether</p>
            </div>
          </div>

          <div className="flex flex-row w-52 items-center ">
            <img src="/investmenticon3.svg" height={80} width={80} />
            <div className="flex flex-col">
              <p className="font-semibold text-sm ">Expenses</p>
              <p className="text-special-red font-extrabold text-lg">0.203 Ether</p>
            </div>
          </div>
        </div>

        {/*right side  */}
        <div className="flex items-center justify-center w-full">
          <img src="/investmentchart.svg" height={70} width={120} />
          <div className="flex flex-col justify-between h-full items-start relative right-7 py-3">
            <p className="text-sm text-gray-500 font-semibold">Max</p>
            <p className="text-sm text-gray-500 font-semibold mb-3">Min</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentStats 