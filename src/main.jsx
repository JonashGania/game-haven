import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Browse from './pages/Browse/Browse.jsx'
import GameDetailsPage from './pages/GameDetails/GameDetails.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/browse/:genreName/:gameSlug',
    element: <GameDetailsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <WishlistProvider>
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <RouterProvider router={router}/>
        </SkeletonTheme>
      </WishlistProvider>
  </React.StrictMode>,
)
