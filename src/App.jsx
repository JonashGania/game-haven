import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import GenreGames from './pages/Browse/Games/GenreGames'
import GameLists from './pages/Browse/Games/GameLists'
import GameDetails from './components/GameDetails'
import ErrorPage from './components/ErrorPage'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />}>
            <Route index element={<GameLists />} />
            <Route path=':genreName' element={<GenreGames />} />
          </Route>
          <Route path='/browse/:genreName/:gameId' element={<GameDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </SkeletonTheme>
    </>
  )
}

export default App
