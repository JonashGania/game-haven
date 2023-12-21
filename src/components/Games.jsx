import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { IoIosAddCircle  } from "react-icons/io";

export default function Games({ game }) {
    const [isHovered, setIsHovered] = useState(false);
    const primaryGenre = game.genres[0].slug;

    return (
        <li key={game.id} className='w-full'>
            <div           
                className='w-full h-[170px] block relative group cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link  to={`/browse/${primaryGenre}/${game.id}`}>
                    <img 
                        src={game.background_image} 
                        alt={`${game.name} background`} 
                        className='w-full h-full rounded-md group'
                    />
                     <div className='absolute inset-0 w-full h-full rounded-md bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-100 ease-in'></div>
                </Link>
                {isHovered && (
                    <button  className='absolute top-3 right-3 bg-white rounded-[50%]'>
                        <IoIosAddCircle size='1.3rem'/>
                    </button>
                )}
            </div>
            <div className='flex justify-between items-center gap-2'>
                <ul className='flex items-center gap-2 pt-3 pb-2'>
                    {game.genres.slice(0,5).map((genre) => (
                        <li key={genre.id} className='text-neutral-400 font-medium text-xs'>{genre.name}</li>
                    ))}
                </ul>
                <span className='text-green-400 border border-neutral-500 px-1 py-1 rounded-sm text-xs'>{game.metacritic}</span>
            </div>
            <h1 className='text-white'>{game.name}</h1>
        </li>
    )
}
