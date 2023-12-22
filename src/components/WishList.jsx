import { useWishlist } from '../context/WishlistContext'
import { Link } from 'react-router-dom';

export default function WishList({ isOpen, onClose }) {
    const { wishlist, removeFromWishlist, clearWishlist, numberOfGames } = useWishlist();

    const handleClearWishlist = () => {
        clearWishlist();
    }

    return (
        <div 
            className={`fixed top-0 left-0 w-full h-screen z-30 ${isOpen ? 'visible bg-[rgba(0,0,0,0.6)]' : 'invisible'}`}
            onClick={onClose}
        >
            <div 
                className={`scrollbar-hide w-[350px] overflow-y-auto  h-full bg-neutral-800 right-0 fixed px-8 py-4 transition-all duration-200 ease-in  ${isOpen ? 'translate-x-0' : 'translate-x-40'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center'>
                    <h1 className='text-white font-semibold text-2xl'>{`${numberOfGames} Games`}</h1>
                    <button 
                        className=' text-red-500 py-1 px-3 border border-red-500 rounded-md'
                        onClick={handleClearWishlist}
                    >
                        Clear
                    </button>
                </div>

                <ul className='pt-4 flex flex-col gap-4'>
                    {Object.values(wishlist).map((game) => (
                        <Link to={`/browse/${game.genres[0].slug}/${game.id}`} key={game.id} className='flex items-center gap-4 py-2 px-2 bg-[rgb(54,54,54)] rounded-md'>
                            <img src={game.background_image} alt={`${game.name} image`} className='w-[100px] h-[60px] rounded-md'/>
                            <div className='text-ellipsis whitespace-nowrap overflow-hidden text-white'>
                                <span className='text-white'>{game.name}</span>
                                <h3 
                                    onClick={() => removeFromWishlist(game.id)}
                                    className='text-neutral-400 pt-3 text-sm cursor-pointer underline hover:no-underline w-16'
                                >
                                    Remove
                                </h3>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
