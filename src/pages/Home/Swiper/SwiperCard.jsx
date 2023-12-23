import { Link } from 'react-router-dom';
import { useWishlist } from '../../../context/WishlistContext';

export default function SwiperCard({game}) {
    const primaryGenre = game.genres[0].slug;
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist()

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
            className='w-[900px] relative rounded-lg' 
            key={game.id}
        >
            <Link to={`/browse/${primaryGenre}/${game.id}`}>
                <img 
                    src={game.background_image} 
                    alt={`${game.name} background`} 
                    className='rounded-2xl opacity-80'
                />
            </Link>
            <div className='absolute bottom-10 left-10'>
                <p className='text-white text-xl tablet:text-4xl font-semibold w-[300px] pb-3 tablet:pb-11 transition-all duration-300 ease-in'>{game.name}</p>
                <button 
                    className='bg-white transition-all duration-200 ease-in py-3 tablet:py-5 px-3 tablet:px-3 rounded-md flex items-center gap-2'
                    onClick={() => handleToggleWishlist(game)}
                >   
                    {gameInWishlist ? (
                        <>
                            <img src="/check.svg" alt="check" />
                            <p className='text-xs font-medium'>IN WISHLIST</p>
                        </>
                    ) : (
                        <>
                             <img src="/add.svg" alt="add" />
                            <p className='text-xs font-medium'>ADD TO WISHLIST</p>
                        </>
                    )}
                </button>
            </div>
        </li>
    )
}
