import React, {useEffect, useState} from 'react'
import { getSteamTopGames } from '../api/api'

export default function GameLists() {
    const [gameLists, setGameLists] = useState([]);

    useEffect(() => {
        async function fetchGameLists(){
            try {
                const { topGames } = await getSteamTopGames();
                setGameLists(topGames);
            } catch (error) {
                console.error('Error fetching games', error)
            }  
        }

        fetchGameLists();
    }, [])

    return (
        <div className='flex-1'>
            <h1 className='text-white text-4xl font-extrabold pb-4'>Popular Games</h1>
            <ul className='game-grid grid gap-y-8 gap-4'>
                {gameLists.map((game) => (
                    <li key={game.id} className='w-full'>
                        <div className='w-full h-[170px]'>
                            <img 
                                src={game.background_image} 
                                alt={`${game.name} background`} 
                                className='w-full h-full rounded-md'
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <ul className='flex items-center gap-2 pt-3 pb-2'>
                                {game.genres.map((genre) => (
                                    <li key={genre.id} className='text-neutral-400 font-medium text-xs'>{genre.name}</li>
                                ))}
                            </ul>
                            <span className='text-green-400 border border-white px-1 py-1 rounded-sm text-xs'>{game.metacritic}</span>
                        </div>
                        <h1 className='text-white'>{game.name}</h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}
