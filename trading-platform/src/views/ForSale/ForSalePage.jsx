import React from 'react'
import ForSaleHeader from './ForSaleHeader'
import forSale from '../../data/forSaleNfts'
import ForSaleNFT from './ForSaleNFT'
function ForSalePage() {
  return (
    <>
      <ForSaleHeader />
    <div className="w-screen h-screen flex justify-center mt-10">
      <div className="flex flex-wrap w-5/6 h-1/2 gap-10">

        {forSale.map(nft => <ForSaleNFT nft={nft}/>)} 
      </div>
    </ div>
    </>
  )
}

export default ForSalePage