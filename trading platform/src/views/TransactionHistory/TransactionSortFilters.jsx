import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const filters = [
    { label: "None" },
    { label: "Price: Low to High" },
    { label: "Price: High to Low" },
    { label: "NFT Name: A-Z" },
    { label: "NFT Name: Z-A" },
    { label: "Date: New to Old" },
    { label: "Date: Old to New" },
]

export default function TransactionSortFilters({ sortFilter, setSortFilter }) {
    return (
        <div className="flex items-center mt-7">
            <p className="mr-3 font-bold">Sort by: </p>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                defaultValue={"None"}
                options={filters}
                sx={{ width: 240 }}
                renderInput={(params) => <TextField {...params} label="Search Filter" />}
                value={sortFilter}
                onChange={(event, value) => setSortFilter(value.label)}
                disableClearable={true}
            />
        </ div>
    );
}
