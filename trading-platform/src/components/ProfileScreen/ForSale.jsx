import React, {useState, useEffect} from 'react'
import ForSaleNft from './ForSaleNft';
import forSaleData from '../../data/forSaleNfts';
import { TextField } from '@mui/material';
function ForSale() {
  const [nfts, setNfts] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=10&random=10")
    .then(data => data.json())
    .then(json => setNfts(json))
  }, [])

  useEffect(() => {
    
  }, [search])

  return (
    <div className="flex flex-col bg-slate-100 items-center mt-1">
        <div className="flex flex-row mt-3 justify-between w-full items-center mb-4 ">
            <h1 className="font-semibold text-lg ml-8">For Sale</h1> 
            <input type="text" placeholder='Search...' className="w-64 mr-10 rounded-lg p-2 border" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>  
        { forSaleData.filter(nft => nft.name.toLowerCase().includes(search.toLowerCase())).map((nft, idx) => <ForSaleNft key={idx} idx={idx} nft={nft}/>)} 
    </div>
  )
}

export default ForSale