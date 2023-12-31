import {useEffect, useState} from 'react'
import { getGamesList } from '../../../api/api'
import { useParams } from 'react-router-dom';
import Games from './Games';
import SkeletonGames from '../Skeleton/SkeletonGames';
import FilterGenre from '../../../components/FilterGenre';


export default function GenreGames() {
    const { genreName } = useParams()
    const [gameLists, setGameLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchGameLists(){
            try {
                setIsLoading(true);
                const { genreGames } = await getGamesList(genreName);
                setGameLists(genreGames);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchGameLists();
    }, [genreName])
    return (
        <div className='flex-1 pb-10'>
            <div className='block sidebar:hidden pb-4'>
                <FilterGenre />
            </div>
            <h1 className='text-white mobile:text-4xl text-xl font-medium mobile:font-extrabold pb-4 uppercase'>{`${genreName}`}</h1>
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
