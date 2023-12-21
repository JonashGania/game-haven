import { useState, useContext, useEffect, createContext } from "react";

const WishlistContext = createContext();

export function useWishlist(){
    const context = useContext(WishlistContext);
    
    return context;
}

export function WishlistProvider({ children }){
    const [wishlist, setWishlist] = useState({});

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
            return updateWishlist;
        })
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}