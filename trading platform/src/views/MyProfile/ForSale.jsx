import React, { useState, useEffect } from 'react'
import ForSaleGrid from './ForSaleGrid'

function ForSale() {
  const [search, setSearch] = useState("")

  useEffect(() => {
  }, [search])

  return (
    <div className="flex flex-col bg-slate-100 items-center mt-1 ">
      <div className="flex flex-row mt-3 justify-between w-full items-center mb-4 ">
        <h1 className="font-semibold text-lg ml-8">Trending</h1>
        <input type="text" placeholder='Search...' className="w-64 mr-10 rounded-lg p-2 border" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <ForSaleGrid search={search} />
      <ForSaleGrid search={search} />
    </div>
  )
}

export default ForSale