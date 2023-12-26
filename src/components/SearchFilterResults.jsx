import React from 'react'

export default function SearchFilterResults({ results }) {
  return (
    <div className='scrollbar-hide absolute bg-[rgb(32,32,32)] w-full h-[200px] overflow-y-auto py-4 px-4 top-14 rounded-md'>
        <ul className='flex flex-col gap-2'>
            {results.map((game) => (
                <li key={game.id} className='text-white flex items-center gap-6 hover:bg-neutral-700 py-2 px-2 rounded-md'>
                    <img src={game.background_image} alt='image' className='w-[60px] h-[40px] rounded-md'/>
                    <h3 className='text-neutral-200'>{game.name}</h3>
                </li>
            ))}
        </ul>
    </div>
  )
}
