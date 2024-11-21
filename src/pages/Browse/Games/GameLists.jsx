import Games from './Games';
import SkeletonGames from '../Skeleton/SkeletonGames';

export default function GameLists({ gameLists, selectedGenre, isLoading }) {
    return (
        <div className='w-full pb-10 transition-all duration-200 ease-in'>
            <h1 className='text-white text-xl mobile:text-4xl font-extrabold pb-4'>
                {selectedGenre 
                    ? selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)
                    : 'Popular Games'
                }
            </h1>
            <ul className='game-grid grid gap-y-8 gap-4'>
                {isLoading ? (
                     Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonGames key={index}/>
                    )) 
                ) : (
                    gameLists.map((game, index) => (
                        <Games game={game} key={index}/>
                    ))
                )}
            </ul>
        </div>
    )
}
