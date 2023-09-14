import React from 'react'
import TopPicksAssetCard from './FavoriteAssetCard'
import topPicksData from '../../data/userFavorites'

function Favorites() {
    return (
        <div className="">
            <div className="flex items-center justify-between ml-6 mt-3">
                <h1 className="font-semibold text-lg ">Your Favorites</h1>
                <img src="/ellipses.svg" height={30} width={30} className="mr-6 hover:cursor-pointer" />
            </div>

            <div className="flex">
                <div className="flex flex-col h-full mr-6">
                    {topPicksData.slice(0, 3).map((pick, idx) => <TopPicksAssetCard key={idx} name={pick.name} price={pick.dollarValue} image={pick.image} />)}
                </div>
                <div className="flex flex-col ">
                    {topPicksData.slice(3, 6).map((pick, idx) => <TopPicksAssetCard name={pick.name} key={idx} price={pick.dollarValue} image={pick.image} />)}
                </div>
            </div>
        </div >
    )
}

export default Favorites