import React from 'react'
import FavoriteAssetCard from './FavoriteAssetCard'
import topPicksData from '../../data/userFavorites'
import { useFavoritesContext } from '../../contexts/FavoritesContextProvider'

function Favorites() {
    const { getFavorites } = useFavoritesContext();
    const favorites = getFavorites();
    console.log(favorites)
    return (
        <div className="">
            <div className="flex items-center justify-between ml-6 mt-3">
                <h1 className="font-semibold text-lg ">Your Recent Favorites</h1>
                <img src="/ellipses.svg" height={30} width={30} className="mr-6 hover:cursor-pointer" />
            </div>

            <div className="flex">
                <div className="flex flex-col h-full mr-6">
                    {favorites.length > 0 ? favorites.slice(0,3).map((fav, idx) => <FavoriteAssetCard key={idx} name={fav.Name} price={fav.Price} image={fav.Img} />) : <h1 className="text-center mt-3 ml-4">You have no favorites</h1> }
                </div>
            </div>
        </div >
    )
}

export default Favorites