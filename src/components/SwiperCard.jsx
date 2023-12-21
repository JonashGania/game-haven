import React, { useEffect, useState } from 'react'
import { IoIosAddCircle  } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function SwiperCard({game}) {
    const primaryGenre = game.genres[0].slug;

    return (
        <Link 
            to={`/Browse/${primaryGenre}/${game.id}`}
            className='w-[900px] relative rounded-lg' 
            key={game.id}>
            <img 
                src={game.background_image} 
                alt={`${game.name} background`} 
                className='rounded-2xl opacity-80 h-[500px]'
            />
            <div className='absolute bottom-10 left-10'>
                <p className='text-white text-4xl font-semibold w-[300px] pb-11'>{game.name}</p>
                <button className='bg-white py-5 px-3 rounded-md flex items-center gap-1'>
                    <IoIosAddCircle  size='1.3rem'/>
                    <p className='text-xs font-medium'>ADD TO WISHLIST</p>
                </button>
            </div>
        </Link>
    )
}
