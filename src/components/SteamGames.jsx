import React, {useEffect, useState} from 'react'

export default function SteamGames({game}) {
    return (
        <li className='w-[290px]' key={game.id}>
            <img src={game.background_image} alt={`${game.name} image`} className='w-full h-[157px] rounded-md' />
            <div className='flex items-center gap-2'>
                {game.genres.map((genre) => (
                    <p key={genre.id} className='pt-3 pb-2 text-neutral-400 font-medium text-xs'>{genre.name}</p>
                ))}
            </div>
            <span className='text-white text-base'>{game.name}</span>
        </li>
    )
}
