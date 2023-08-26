import React from 'react'

function TopPicksAssetCard( { name, price, image }) {
  return (
    <div className="border h-20 w-72 flex items-center justify-between my-2 rounded-lg bg-slate-100 shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
        
        {/*left side  */}
        <div className="ml-3">
            <div className="flex">
                <img src={image} height={30} width={40} className="mr-2"/>
                <div className="flex flex-col items-start ">
                    <p className="font-bold">{name}</p>
                    <p className="font-semibold text-sm text-slate-400">{price}</p>
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