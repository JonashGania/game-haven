import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import GameLists from './Games/GameLists'
import FilterGenre from '../../components/FilterGenre'
import WishList from '../../components/WishList'
import { getStoreTopGames, getGamesList } from '../../api/api'

export default function Browse() {
  const [gamesLists, setGamesLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const loadCountries = async (genre) => {
    try {
      const games = genre
        ? await getGamesList(genre)
        : await getStoreTopGames(1, 20)

        setGamesLists(games);
        setSelectedGenre(genre);
    } catch (error) {
      console.error('Failed to fetch games', error)
    } finally {
      setIsLoading(false);
    }
  } 

  useEffect(() => {
    loadCountries(null);
  }, [])

  const handleClickGenre = (genre) => {
    loadCountries(genre);
  }

  return (
    <div className='bg-[rgb(18,18,18)] w-full min-h-screen'>
      <Header />
      <div className='max-w-6xl mx-auto pt-8 flex gap-4 px-4'>
        <Sidebar onClickGenre={handleClickGenre}/>
        <div className='w-full'>
          <FilterGenre onClickGenre={handleClickGenre}/>
          <GameLists gameLists={gamesLists} selectedGenre={selectedGenre} isLoading={isLoading}/>
        </div>
      </div>
      <WishList />
    </div>
  )
}
