import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useWishlist } from '../../../context/WishlistContext';
import PropTypes from 'prop-types';

export default function GameSlides({game}) {
    const [isHovered, setIsHovered] = useState(false);
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
    const primaryGenre = game.genres[0].slug;

    const gameInWishlist = Boolean(wishlist[game.id]);

    const handleToggleWishlist = (game) => {
        if (gameInWishlist){
            removeFromWishlist(game.id)
        } else {
            addToWishlist(game)
        }
    }

    return (
        <li 
            className='w-full' 
            key={game.id}>
            <div 
                className='w-full relative group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to={`/browse/${primaryGenre}/${game.id}`}>
                    <img 
                        src={game.background_image}
                        alt={`${game.name} image`} 
                        className='w-full max-h-[300px] mobile:max-h-[241.03px] tablet:max-h-[158.98px] rounded-md group' 
                    />
                    <div className='absolute inset-0 w-full max-h-[341.44] mobile:max-h-[241.03px] tablet:max-h-[158.98px] rounded-md bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-100 ease-in'></div>
                </Link>
                
                {isHovered && (
                    <button 
                        className='absolute top-3 right-3 bg-white py-[2px] px-[2px] rounded-[50%]'
                        onClick={() => handleToggleWishlist(game)}
                    >
                        {gameInWishlist ? (
                            <img src="/check.svg" alt="check" />
                        ) : (
                            <img src="/add.svg" alt="add" />
                        )}
                    </button>
                )}
            </div>
            <div className='flex items-center gap-2'>
                {game.genres.map((genre) => (
                    <p key={genre.id} className='pt-3 pb-2 text-neutral-400 font-medium text-xs'>{genre.name}</p>
                ))}
            </div>
            <span className='text-white text-base'>{game.name}</span>
        </li>
    )
}


GameSlides.propTypes = {
    game: PropTypes.object.isRequired,
}