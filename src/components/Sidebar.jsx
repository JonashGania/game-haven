import React, { useState, useEffect } from 'react'
import { getGenreList } from '../api/api'


export default function Sidebar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres(){
      try {
        const { genreList } = await getGenreList();
        setGenres(genreList)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    fetchGenres();
  }, [])

  return (
    <div className='scrollbar-hide w-[18%] overflow-y-auto max-h-[82vh] sticky'>
      <h1 className='text-white font-extrabold text-2xl pb-2 pl-4'>Genres</h1>
      <ul className='flex flex-col'>
        {genres.map((genre) => (
          <li key={genre.id} className='flex items-center gap-3 hover:bg-neutral-600 rounded-lg py-3 px-3'>
            <img src={genre.image_background} alt='genre image' className='w-[40px] h-[40px] rounded-lg'/>
            <span className='text-neutral-300'>{genre.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
