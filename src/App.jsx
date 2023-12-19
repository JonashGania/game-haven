import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import GenreGames from './components/GenreGames'
import GameLists from './components/GameLists'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Browse' element={<Browse />} >
            <Route index element={<GameLists />}/>
            <Route path=':genreName' element={<GenreGames />}/>
          </Route>
        </Routes>
      </SkeletonTheme>
    </>
  )
}

export default App
