import React, { useState } from 'react'
import { IoIosAddCircle  } from "react-icons/io";

export default function GameSlides({game}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li className='w-[290px]' key={game.id}>
            <div 
                className='h-[157px] w-full relative group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                    src={game.background_image}
                     alt={`${game.name} image`} 
                    className='w-full h-full rounded-md group' 
                />
                <div className='absolute inset-0 w-full h-full rounded-md bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-100 ease-in'></div>
                {isHovered && (
                    <button className='absolute top-3 right-3 bg-white rounded-[50%]'>
                        <IoIosAddCircle size='1.3rem'/>
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
