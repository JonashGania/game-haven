import { useState } from 'react'
import { fetchGames } from '../../api/api'
import { useQuery } from '@tanstack/react-query'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import GameLists from './Games/GameLists'
import FilterGenre from '../../components/FilterGenre'
import WishList from '../../components/WishList'

export default function Browse() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const {data, isLoading, error} = useQuery({
    queryKey: ['browseGames', selectedGenre],
    queryFn: () => fetchGames(selectedGenre),
  })

  const handleClickGenre = (genre) => {
    setSelectedGenre(genre);
  }

  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto pt-8 flex gap-4 px-4'>
        <Sidebar onClickGenre={handleClickGenre}/>
        <div className='w-full'>
          <FilterGenre onClickGenre={handleClickGenre}/>
          <GameLists gameLists={data} selectedGenre={selectedGenre} isLoading={isLoading}/>
        </div>
      </div>
      <WishList />
    </div>
  )
}
