import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { useState } from 'react';
import { BsHeart } from 'react-icons/bs'
import ForSaleModal from './ForSaleModal';

function ForSaleNFT({ nft }) {
    const [favorite, setFavorite] = useState(false)
    const [ buy, setBuy] = useState(false)

  return (
    <>
    <div onClick={() => setBuy(true)} className="w-48 h-72 overflow-hidden border flex flex-col items-center hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer bg-slate-50">
        <div className="w-48 h-44 overflow-hidden">
            <img src={nft.image} />
        </div>
        <p className="text-lg font-bold mt-6  ">{nft.name}</p>
        <div className="flex flex-row items-center">
            { favorite && <BsHeartFill className="mr-3 mt-1" size="1.2rem" color="red" onClick={() => setFavorite(prevState => !prevState)}  /> }
            { !favorite && <BsHeart className="mr-3 mt-1" size="1.2rem" color="black"  onClick={() => setFavorite(prevState => !prevState)} /> }
            <p className="font-medium text-sm text-gray-700">{nft.ethValue} / {nft.dollarValue}</p>
        </div>

    </div>
    { buy && <ForSaleModal buy={buy} setBuy={setBuy} nft={nft}/>}
    </>
  )
}

export default ForSaleNFT