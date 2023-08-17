import React from 'react'

function TopPicksAssetCard() {
  return (
    <div className="border h-20 w-64 flex items-center justify-between my-2 rounded-lg bg-slate-100 shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
        
        {/*left side  */}
        <div className="w-2/4 ml-3">
            <div className="flex flex-col">
                <p>Bitcoin</p>
                <div className="flex items-center">
                    <img src="/bitcoin.jpg" height={30} width={30} className="mr-2"/>
                    <p className="font-extrabold text-lg">$45,842.03</p>
                </div>
            </div>
        </div>

        {/* right side*/}
        <div>
            <div className="flex flex-col mr-3 items-center">
                <img src="/greenline.svg" height={40} width={40}/>
                <p className="text-green-600">+10%</p>
            </div>
        </div>
    </div>
  )
}

export default TopPicksAssetCard