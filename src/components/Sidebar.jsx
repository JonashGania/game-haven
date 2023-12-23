import { useState, useEffect } from 'react'
import { getGenreList } from '../api/api'
import SkeletonSidebar from '../pages/Browse/Skeleton/SkeletonSidebar';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGenres(){
      try {
        const { genreList } = await getGenreList();
        setGenres(genreList)
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    fetchGenres();
  }, [])

  const handleGenreNavigate = (genreName) => {
    navigate(`/browse/${genreName}`);
  }

  return (
    <div className='scrollbar-hide w-[18%] overflow-y-auto overflow-x-hidden max-h-[82vh] sticky top-[8rem] hidden sidebar:block'>
      <h1 className='text-white font-extrabold text-2xl pb-2 pl-4'>Genres</h1>
      <ul className='flex flex-col'>
        {isLoading ? (
          Array.from({ length: 19 }).map((_, index) => (
            <SkeletonSidebar key={index}/>
          ))
        ) : (
          genres.map((genre) => (
            <li 
              key={genre.id} 
              className={`flex items-center gap-3 hover:bg-neutral-600 rounded-lg py-3 px-3 cursor-pointer ${location.pathname.includes(genre.slug) ? 'bg-neutral-600' : 'bg-transparent'}`}
              onClick={() => handleGenreNavigate(genre.slug)}
            >
              <img src={genre.image_background} alt='genre image' className='w-[40px] h-[40px] rounded-lg'/>
              <span className='text-neutral-300'>{genre.name}</span>
            </li>
          ))
        )}
  
      </ul>
    </div>
  )
}
