import { TextField } from "@mui/material"
import ForSaleSortFilters from "./ForSaleSortFilters"

function ForSaleHeader({ search, setSearch, sortFilter, setSortFilter }) {
  return (
    <div className="flex flex-col items-center mt-7 ">
      <h1 className="text-5xl font-extrabold">For Sale</h1>
      <h2 className="text-lg font-semibold text-gray-600">Find NFT's for sale on our online marketplace</h2>
      <TextField id="outlined-basic" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search our online marketplace..." variant="outlined" className="w-1/2" sx={{ marginTop: "1.5rem" }} />
      <ForSaleSortFilters sortFilter={sortFilter} setSortFilter={setSortFilter} />

    </div>
  )
}

export default ForSaleHeader