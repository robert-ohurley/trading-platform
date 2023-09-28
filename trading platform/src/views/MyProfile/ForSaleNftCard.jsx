import React from 'react'

//colors are generated randomly. TODO: replace dynamically to indicate a change in price
function getRandomColor() {
    let num = Math.floor(Math.random() * 3);
    console.log(num)
    if (num === 0) return "/forsale1.svg"
    if (num === 1) return "/forsale2.svg"
    if (num === 2) return "/forsale3.svg"
}

function ForSaleNftCard({ url, idx, nft }) {
    return (
        <div className="flex flex-row justify-between border mb-5 ml-6 mr-6 w-25rem p-2 rounded-lg bg-slate-100 shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
            <div className="flex flex-row items-center">
                <img src={getRandomColor()} height={10} width={10} className="mr-3"></img>
                <img src={nft.image} height={50} width={50}></img>
                <div className="flex flex-col ml-5" >
                    <p className="font-semibold w-4/5">{nft.name}</p>
                    <p className="font-semibold text-sm text-slate-400 ">{nft.dollarValue}</p>
                </div>
            </div>
            <div className="flex flex-row">
                <p className="font-semibold text-sm text-slate-400 mt-7 mr-5">{nft.ethValue}</p>
                <img src="/rightchevron.svg" width={15} height={15} />
            </div>
        </div>
    )
}

export default ForSaleNftCard