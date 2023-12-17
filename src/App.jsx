import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Browse' element={<Browse />} />
        </Routes>
      </SkeletonTheme>
    </>
  )
}

export default App
