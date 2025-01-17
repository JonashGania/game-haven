import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useWishlist } from '../../../context/WishlistContext';
import add from '/add.svg';
import check from '/check.svg';
import PropTypes from 'prop-types';

export default function Games({ game }) {
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
        <li key={game.id} className='w-full'>
            <div           
                className='w-full block relative group cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link  to={`/browse/${primaryGenre}/${game.id}`}>
                    <img 
                        src={game.background_image} 
                        alt={`${game.name} background`} 
                        className='w-full object-cover rounded-md group max-h-[300px] mobile:h-[285px] tablet:max-h-[158.98px]'
                    />
                     <div className='absolute inset-0 w-full h-full rounded-md bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-100 ease-in'></div>
                </Link>
                {isHovered && (
                    <button 
                        className='absolute top-3 right-3 bg-white py-[2px] px-[2px] rounded-[50%]'
                        onClick={() => handleToggleWishlist(game)}
                    >   
                        {gameInWishlist ? (
                            <img src={check} alt="check" />
                        ) : (
                            <img src={add} alt="add" />
                        )}
                    </button>
                )}
            </div>
            <div className='flex justify-between items-center gap-2'>
                <ul className='flex flex-wrap items-center gap-2 pt-3 pb-2'>
                    {game.genres.slice(0,5).map((genre) => (
                        <li key={genre.id} className='text-neutral-400 font-medium text-xs'>{genre.name}</li>
                    ))}
                </ul>
                <span className='text-green-400 border border-neutral-500 px-1 py-1 rounded-sm text-xs'>{game.metacritic ? game.metacritic : 'N/A'}</span>
            </div>
            <h1 className='text-white'>{game.name}</h1>
        </li>
    )
}


Games.propTypes = {
    game: PropTypes.object.isRequired,
}