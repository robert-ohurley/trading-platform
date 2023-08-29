import React, { useState } from 'react'
import ForSaleHeader from './ForSaleHeader'
import forSale from '../../data/forSaleNfts'
import ForSaleNFT from './ForSaleNFT'
import { TextField } from '@mui/material'

function ForSalePage() {
  const [search, setSearch] = useState("")

  return (
    <>
      <ForSaleHeader search={search} setSearch={setSearch}/>

      <div className="w-screen h-screen flex justify-center mt-10">
        <div className="flex flex-wrap w-5/6 h-1/2 gap-10">
          {/* Filters out all for sale items not matched by the search query  */}
          {forSale.filter(nft => nft.name.toLowerCase().includes(search.toLowerCase())).map(nft => <ForSaleNFT nft={nft}/>)} 
          {forSale.filter(nft => nft.name.toLowerCase().includes(search.toLowerCase())).map(nft => <ForSaleNFT nft={nft}/>)} 
        </div>
      </ div>
    </>
  )
}

export default ForSalePage