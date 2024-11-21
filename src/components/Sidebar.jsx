import { data } from '../constants/constant';

export default function Sidebar({ onClickGenre }) {
  const genres = data.genres;
  
  return (
    <div className='scrollbar-hide w-[18%] overflow-y-auto overflow-x-hidden max-h-[82vh] sticky top-[8rem] hidden sidebar:block'>
      <h1 className='text-white font-extrabold text-2xl pb-2 pl-4'>Genres</h1>
      <ul className='flex flex-col gap-2'>
        {genres.map((genre, index) => (
          <li 
            onClick={() => onClickGenre(genre.slug)}
            key={index} 
            className='hover:bg-[rgba(82,82,82,0.6)] rounded-md py-2 px-3 cursor-pointer'
          >
             <span className='text-neutral-300 text-xs mobile:text-sm'>{genre.genre}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
