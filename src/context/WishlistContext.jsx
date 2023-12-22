import { useState, useContext, useEffect, createContext } from "react";

const WishlistContext = createContext();

export function useWishlist(){
    const context = useContext(WishlistContext);
    
    return context;
}

export function WishlistProvider({ children }){
    const [wishlist, setWishlist] = useState({});
    const numberOfGames = Object.keys(wishlist).length;

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
        setWishlist(storedWishlist);
    }, [])

    const addToWishlist = (game) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = {...prevWishlist, [game.id]: game};
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        })
    }

    const removeFromWishlist = (gameId) => {
        setWishlist((prevWishlist) => {
            const updateWishlist = {...prevWishlist};
            delete updateWishlist[gameId];
            localStorage.setItem('wishlist', JSON.stringify(updateWishlist));
            return updateWishlist;
        })
    }

    const clearWishlist = () => {
        setWishlist({})
        localStorage.removeItem('wishlist');
    }

    return (
        <WishlistContext.Provider value={{ wishlist, numberOfGames, addToWishlist, removeFromWishlist, clearWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}