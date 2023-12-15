import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import { useEffect, useState } from 'react'
import { getGenreList, getGamesList, getMostPlayed, getNewestGames } from './api/api'

function App() {
  const [genreList, setGenreList] = useState(null);
  
  useEffect(() => {
    const fetchGenreList = async () => {
      try{
        const {upcomingList} = await getMostPlayed();
        console.log(upcomingList)
        // const {genreList} = await getGenreList();
        // console.log(genreList)
        // setGenreList(genreList);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }

    fetchGenreList();
  }, [])
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Browse' element={<Browse />} />
      </Routes>
    </div>
  )
}

export default App
