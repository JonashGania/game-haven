import { useWishlist } from '../context/WishlistContext'
import PropTypes from 'prop-types';

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
                className={`scrollbar-hide mobile:w-[350px] w-[200px] overflow-y-auto  h-full bg-neutral-800 right-0 fixed mobile:px-8 px-2 py-4 transition-all duration-200 ease-in  ${isOpen ? 'translate-x-0' : 'translate-x-40'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center'>
                    <h1 className='text-white font-semibold mobile:text-2xl text-lg'>{`${numberOfGames} Games`}</h1>
                    <button 
                        className=' text-red-500 py-1 px-3 border border-red-500 rounded-md text-xs mobile:text-base'
                        onClick={handleClearWishlist}
                    >
                        Clear
                    </button>
                </div>

                <ul className='pt-4 flex flex-col gap-4'>
                    {Object.values(wishlist).map((game) => (
                        <li 
                            key={game.id} 
                            className='flex items-center mobile:gap-4 gap-2 py-2 px-2 bg-[rgb(54,54,54)] rounded-md'
                        >
                            <img 
                                src={game.background_image} 
                                alt={`${game.name} image`} 
                                className='w-[80px] mobile:w-[100px] rounded-md'
                            />
                            <div className='text-ellipsis whitespace-nowrap overflow-hidden text-white'>
                                <span className='text-white text-xs mobile:text-base'>{game.name}</span>
                                <h3 

                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromWishlist(game.id)
                                    }}
                                    className='text-neutral-400 mobile:pt-3 pt-1 mobile:text-sm text-xs cursor-pointer underline hover:no-underline w-16'
                                >
                                    Remove
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


WishList.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}