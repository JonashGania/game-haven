import { Link } from "react-router-dom"

export default function SearchFilterResults({ results }) {
  return (
    <ul className='flex flex-col gap-2'>
        {results.map((game) => (
            <Link 
              to={game.genres && game.genres.length > 0 ? `/browse/${game.genres[0].slug}/${game.id}` : '#'}
              key={game.id} 
              className=' flex items-center gap-6 cursor-pointer hover:bg-neutral-700 py-2 px-2 rounded-md'
            >
                <img src={game.background_image} alt='image' className='w-[60px] h-[40px] rounded-md'/>
                <h3 className='text-neutral-200'>{game.name}</h3>
            </Link>
        ))}
    </ul>
  )
}
