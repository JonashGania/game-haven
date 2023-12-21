import React from 'react'
import { IoIosAddCircle  } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

export default function SwiperCard({game}) {
    const primaryGenre = game.genres[0].slug;
    const { addToWishlist } = useWishlist()

    const handleAddToWishlist = (game) => {
        addToWishlist(game)
    }
    return (
        <li 
            className='w-[900px] relative rounded-lg' 
            key={game.id}
        >
            <Link to={`/browse/${primaryGenre}/${game.id}`}>
                <img 
                    src={game.background_image} 
                    alt={`${game.name} background`} 
                    className='rounded-2xl opacity-80 h-[500px]'
                />
            </Link>
            <div className='absolute bottom-10 left-10'>
                <p className='text-white text-4xl font-semibold w-[300px] pb-11'>{game.name}</p>
                <button 
                    className='bg-white py-5 px-3 rounded-md flex items-center gap-1'
                    onClick={() => handleAddToWishlist(game)}
                >
                    <IoIosAddCircle  size='1.3rem'/>
                    <p className='text-xs font-medium'>ADD TO WISHLIST</p>
                </button>
            </div>
        </li>
    )
}
