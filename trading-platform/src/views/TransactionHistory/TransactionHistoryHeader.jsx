import React from 'react'
import { TextField } from "@mui/material"

function TransactionHistoryHeader({ search, setSearch}) {
  return (
    <div className="flex flex-col items-center mt-7 ">
      <h1 className="text-5xl font-extrabold">Transaction History</h1>
      <h2 className="text-lg font-semibold text-gray-600">View all your previous transactions on the blockchain.</h2>
      <TextField id="outlined-basic" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search your previous transactions..." variant="outlined" className="w-1/2" sx={{marginTop: "1.5rem"}}/>

    </div>
  )
}

export default TransactionHistoryHeader