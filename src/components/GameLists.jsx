import React, {useEffect, useState} from 'react'
import { getSteamTopGames } from '../api/api'
import Games from './Games';
import SkeletonGames from './SkeletonGames';

export default function GameLists() {
    const [gameLists, setGameLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchGameLists(){
            try {
                setIsLoading(true);

                const { topGames } = await getSteamTopGames();
                setGameLists(topGames);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching games', error)
            }  
        }

        fetchGameLists();
    }, [])

    return (
        <div className='flex-1 pb-10'>
            <h1 className='text-white text-4xl font-extrabold pb-4'>Popular Games</h1>
            <ul className='game-grid grid gap-y-8 gap-4'>
                {isLoading ? (
                    Array.from({ length: 20 }).map((_, index) => (
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
