import { useContext, createContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (nft) => {
        if (!isFavorite(nft)) {
            console.log('adding fav')
            setFavorites((prevState) => {
                return [
                    nft,
                    ...prevState
                ]
            })
        } else {
            console.log('not adding fav')

        }
    }

    const removeFavorite = (nft) => {
        setFavorites((prevState) => prevState.filter(favorite => favorite.Name != nft.Name))
    }
    const getFavorites = () => {
        return favorites;
    }

    function isFavorite(nft){
        for (let i =0; i < favorites.length; i++) {
            if (favorites[i].Name == nft.Name) {
                return true;
            }
        }
        return false; 
    }

    return (
        <FavoritesContext.Provider value={{
            addFavorite,
            getFavorites,
            favorites,
            removeFavorite,
            isFavorite
            }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
}


