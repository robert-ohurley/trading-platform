import React, { useState, useEffect, useMemo } from 'react'
import ForSaleHeader from './ForSaleHeader'
import forSaleData from '../../data/forSaleNfts'
import ForSaleNFT from './ForSaleNFT'

function ForSalePage() {
  const [search, setSearch] = useState("")
  const [nfts, setNfts] = useState("")
  const [sortFilter, setSortFilter] = useState("")
  const [error, setError] = useState(null)
  
  {/* orders data by the search criteria, filtering by search term is applied in the JSX  */ }
  function sortBasedOnFilter(data) {
    let sortedNfts = [...data]
    if (sortFilter === "Price: Low to High") {
      sortedNfts= sortedNfts.sort((a, b) => { return a.Price - b.Price })
    } else if (sortFilter === "Price: High to Low") {
      sortedNfts = sortedNfts.sort((a, b) => { return b.Price - a.Price })
    } else if (sortFilter === "NFT Name: A-Z") {
      sortedNfts = sortedNfts.sort((a, b) => { return a.Name.toLowerCase().localeCompare(b.Name.toLowerCase()) })
    } else if (sortFilter === "NFT Name: Z-A") {
      sortedNfts = sortedNfts.sort((a, b) => { return b.Name.toLowerCase().localeCompare(a.Name.toLowerCase()) })
    }
    return sortedNfts; 
  }

  //if fetch throws an error, the error state will be set and an error message will be displayed to the user. 
  useEffect(() => {
    fetch('http://localhost:3001/asset', {
      method:"GET",
    })
    .then(res => res.json())
    .then(data => setNfts(data))
    .catch(err => setError(err))    
  }, [])
  
  return (
    <>
      <ForSaleHeader search={search} setSearch={setSearch} sortFilter={sortFilter} setSortFilter={setSortFilter} />
      <div className="w-screen h-screen flex justify-center mt-10">
        <div className="flex flex-wrap w-5/6 h-1/2 gap-10">
          { error != null ? <h1 className="text-center">Error while fetching data from database, please try again.</h1> : null }
          
          {/* Filters out all for sale items not matched by the search query  */}
          {nfts.length != 0 && error === null ? sortBasedOnFilter(nfts).filter(nft => nft.Name.toLowerCase().includes(search.toLowerCase())).map((nft,idx) => <ForSaleNFT nft={nft} key={idx}/>) : null}
        </div>
      </ div>
    </>
  )
}

export default ForSalePage
